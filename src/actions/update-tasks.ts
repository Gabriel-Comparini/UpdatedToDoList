'use server';
import { prisma } from "@/utils/db";

export const updTasks = async(id: string, content: string) => {
    try {
        if (!id || !content) return;

        const tasks = await prisma.tasks.update({
            where: {
                id: id
            },
            data: {
                task: content
            }
        });
        
        if (!tasks) return;

        return tasks;
    } catch (err) {
        throw err;
    }

}