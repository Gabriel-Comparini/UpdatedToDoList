'use server';
import { prisma } from "@/utils/db";

export const countDoneTasks = async () => {
    try {
        const tasks = await prisma.tasks.count({
            where: {
                done: true
            }
        });

        return tasks;

    } catch (err) {
        throw err;
    }
}

export const countAllTasks = async () => {
    try {
        const tasks = await prisma.tasks.count();

        return tasks;
    } catch (err) {
        throw err;
    }
}