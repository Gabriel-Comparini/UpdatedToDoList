import { AlertDialogTrigger, AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogHeader, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const ClearTask = ({ total }: { total: number }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="text-xs h-7 cursor-pointer">
                    <Trash />
                    Limpar tarefas concluídas
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Tem certeza que deseja excluir {total} itens?
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogAction>
                        Sim
                    </AlertDialogAction>
                    
                    <AlertDialogCancel>
                        Cancelar
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ClearTask;