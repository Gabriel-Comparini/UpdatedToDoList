'use server';
import { prisma } from "@/utils/db";

export const updTaskStatus = async (id: string) => {
    try {
        const task = await prisma.tasks.findUnique({
            where: {
                id: id
            }
        });
    
        if (!task) return;
    
        const updStatus = await prisma.tasks.update({
            where: {
                id: id
            },
            data: {
                done: !task.done
            }
        });
    
        if (!updStatus) return;
    
        return updStatus;
    } catch (err) {
        throw err;
    }
}