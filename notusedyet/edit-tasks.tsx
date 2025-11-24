import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";
import { Tasks } from "@/generated/prisma";
import { useState } from "react";

type TaskProp = {
    task: Tasks
}

const EditTask = ({task} : TaskProp) => {
    const [tsk, setTsk] = useState<string>(task.task);
    return(
        <Dialog>
            <DialogTrigger asChild>
                <SquarePen size={16} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Editar tarefa
                    </DialogTitle>
                </DialogHeader>

                <div className="flex gap-2">
                    <Input placeholder="Editar tarefa..." onChange={(e) => {setTsk(e.target.value)}} value={tsk} />
                    <Button className="cursor-pointer">
                        <SquarePen size={16} className="cursor-pointer" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default EditTask;