'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

import { Plus, List, Check, Angry, Trash, ListCheck, Sigma } from "lucide-react";

import EditTask from "@/components/edit-tasks";
import ClearTask from "@/components/clear-tasks";

import { getTasks } from "@/actions/get-tasks";
import { useEffect, useState } from "react";
import { Tasks } from "@/generated/prisma";
import { addTask } from "@/actions/add-tasks";
import { delTask } from "@/actions/delete-tasks";
import { updTasks } from "@/actions/update-tasks";

const Home = () => {
    const [taskList, setTaskList] = useState<Tasks[]>([]);
    const [task, setTask] = useState<string>('');

    const handleGetTasks =  async () => {
        try {
            const tasks = await getTasks();
    
            if (!tasks) return;
    
            setTaskList(tasks)
        } catch (err) {
            throw err;
        }
    }

    const handleAddTask = async () => {
        try {
            if (task.length == 0 || !task) return;
    
            const newValues = await addTask(task);
    
            if (!newValues) return;
            
            await handleGetTasks();
            toast.success("Tarefa adicionada com sucesso!");
            setTask('');
        } catch (err) {
            throw err;
        }
    }

    const handleUpdateTask = async (id: string, content: string) => {
        try {
            // const tasks = await updTasks();
            toast.success("Tarefa atualizada com sucesso!");
        } catch (err) {
            throw err;
        }
    }
    
    const handleDelTask = async (e: string) => {
        try {
            if (!e) return;
            
            const deletedTask = await delTask(e);

            if (!deletedTask) return;

            await handleGetTasks();

            toast.warning("Tarefa deletada com sucesso!");
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        handleGetTasks();
    }, [])

    return (
        <div className="flex justify-center items-center w-screen h-screen p-5">
            <Card className="w-lg p-4">
                <CardHeader className="flex flex-row gap-2">
                    <Input placeholder="Inserir tarefa..." onChange={(e) => { setTask(e.target.value) }} value={task} /> 
                    <Button variant="outline" className="cursor-pointer" onClick={handleAddTask}>
                        <Plus />
                        Adicionar
                    </Button>
                </CardHeader>

                <CardContent>
                    <Separator className="mb-4" />
                    <div className="flex flex-row gap-2">
                        <Badge variant="default">
                            <List />
                            Todas
                        </Badge>

                        <Badge variant="outline">
                            <Angry />
                            Não finalizadas
                        </Badge>

                        <Badge variant="outline">
                            <Check />
                            Concluídas
                        </Badge>
                    </div>

                    <div className="mt-4 border-b">

                        {taskList.map(task => (
                            <div className="flex flex-row justify-between items-center h-14 border-t" key={ task.id }>
                                <div className={`w-1 h-full ${task.done ? 'bg-green-300' : 'bg-red-300'}`}></div>
                                
                                <p className="flex-1 px-2">
                                    {task.task}
                                </p>

                                <div className="flex gap-1 items-center justify-center">
                                    <EditTask />
                                    <Trash size={16} className="cursor-pointer" onClick={() => handleDelTask(task.id)} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex mt-4 justify-between">
                        <div className="flex items-center gap-2">
                            <ListCheck size={18}/>
                            <p className="text-xs">
                                Tarefas concluídas (?/?)
                            </p>

                        </div>

                        <ClearTask />
                    </div>

                    <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
                        <div className="h-full bg-green-300 rounded-md" style={{width:'50%'}}></div>
                    </div>

                    <div className="mt-4 flex justify-end items-center gap-2">
                        <Sigma size={18}/>
                        <p className="text-xs">
                            ? tarefas no total
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home;