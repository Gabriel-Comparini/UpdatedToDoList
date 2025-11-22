'use server';
import { prisma } from "@/utils/db"
export const delTask = async (e: string) => {
    try {
        if (!e) return;

        const delTask = await prisma.tasks.delete({
            where: {
                id: e
            }
        });

        if (!delTask) return;

        return delTask;
    } catch (err) {
        throw err;
    }
}