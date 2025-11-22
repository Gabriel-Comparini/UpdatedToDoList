import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, Angry, SquarePen, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Home = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen p-5">
            <Card className="w-lg p-4">
                <CardHeader className="flex flex-row gap-2">
                    <Input placeholder="Inserir tarefa..." /> 
                    <Button variant="outline" className="cursor-pointer">
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
                        <div className="flex flex-row justify-between items-center h-14 border-t">
                            <div className="w-1 h-full bg-green-300"></div>

                            <p className="flex-1 px-2">
                                react
                            </p>

                            <div className="flex gap-1 items-center justify-center">
                                <SquarePen size={16} className="cursor-pointer" />
                                <Trash size={16} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home;