'use server';
import { prisma } from "@/utils/db"

export const addTask = async (task: string) => {
    try {
        if (!task) return;
    
        const newTask = await prisma.tasks.create({
            data: {
                task: task,
                done: false
            }
        })
    
        if(!newTask) return;
    
        return newTask;

    } catch (err) {
        throw err;
    }
}