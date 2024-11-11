"use client";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {RequestProps} from "@/lib/interfaces/interface";
import {endChamba, fetchRequestById, startChamba} from "@/lib/actions/requests";
import Badge from "@/components/ui/Badge";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import {Button} from "@/components/ui/button";
import {useToasts} from "@/lib/hooks/useToast";

export default function Page() {
    const params = useParams();
    const [request, setRequest] = useState<RequestProps>()
    const [date, setDate] = useState<Date | undefined>(undefined);
    const {addToast} = useToasts();

    useEffect(() => {
        const fetch = async () => {
            const request = await fetchRequestById(String(params.id));
            setRequest(request);
        };
        fetch();
    }, [params.id]);
    console.log(request);

    const handleStartChamba = async () => {
        if (request) {
            const toastState = await startChamba(String(request.id), {title: "", msg: "", type: "default"});
            addToast(toastState.title, toastState.msg, toastState.type);
            if (toastState.type === "success") {
                const updatedRequest = await fetchRequestById(String(params.id));
                setRequest(updatedRequest);
            }
        }
    }

    const handleEndChamba = async () => {
        if (request) {
            const toastState = await endChamba(String(request.id), {title: "", msg: "", type: "default"});
            addToast(toastState.title, toastState.msg, toastState.type);
            if (toastState.type === "success") {
                const updatedRequest = await fetchRequestById(String(params.id));
                setRequest(updatedRequest);
            }
        }
    }

    return (
        <div className="p-4 bg-white rounded shadow-lg">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold text-2xl text-gray-800">Solicitud</h1>
                <a href={`/chat/${request?.chat_uuid}`}
                   className="bg-gray-200 hover:bg-gray-300 shadow-lg inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 px-4"
                   onClick={() => console.log("chat")}>Chat</a>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <p><span className="text-gray-500">Cliente: </span>{request?.client_name}</p>
                </div>
                <div>
                    <p><span className="text-gray-500">Mensaje: </span>{request?.message}</p>
                </div>
                <div>
                    <p><span className="text-gray-500">Estado: </span><Badge status={request?.status}/></p>
                </div>
                <h1 className="text-gray-800 text-center font-semibold text-xl">Fechas de tu chamba</h1>
                <div className="grid grid-cols-2 grid-rows-1 gap-4 m-1">
                    {request?.start_date ? (
                        <div className="flex flex-col gap-2">
                            <label>Fecha inicial</label>
                            <input id="start_date" type="date"
                                   name="start_date"
                                   disabled={true}
                                   value={request?.start_date.split(' ')[0]}
                                   className="w-full rounded bg-gray-100 shadow-lg border-gray-400"
                                   min={request?.created_at.split(' ')[0]}/>
                            <Button disabled={true} onClick={handleStartChamba}>Iniciar chamba</Button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <label>Fecha inicial</label>
                            <input id="start_date" type="date"
                                   name="start_date"
                                   disabled={true}
                                   className="w-full rounded bg-gray-100 shadow-lg border-gray-400"
                                   min={request?.created_at.split(' ')[0]}/>
                            <Button onClick={handleStartChamba}>Iniciar chamba</Button>
                        </div>
                    )}
                    {request?.start_date ? (
                        <div className="flex flex-col gap-2">
                            <label>Fecha de terminacion</label>
                            <input id="end_date" type="date"
                                   className="w-full rounded bg-gray-100 shadow-lg border-gray-400"
                                   disabled={true}
                                   value={request.end_date ? request.end_date.split(' ')[0] : ""}
                            />
                            <ButtonSubmit disabled={request.end_date} onClick={handleEndChamba}>Terminar
                                chamba</ButtonSubmit>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2 opacity-25">
                            <label>Fecha de terminacion</label>
                            <input id="end_date" type="date"
                                   disabled={true}
                                   className="w-full rounded bg-gray-100 shadow-lg border-gray-400"
                            />
                            <ButtonSubmit disabled={true}>Terminar chamba</ButtonSubmit>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}