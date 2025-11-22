'use server';
import { prisma } from "@/utils/db";

export const getTasks = async () => {
    try {
        const tasks = await prisma.tasks.findMany();
    
        if (!tasks) return;

        return tasks;
    } catch (err) {
        throw err;
    }
}
