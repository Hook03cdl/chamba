"use client";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {RequestProps} from "@/lib/interfaces/interface";
import {fetchRequestById} from "@/lib/actions/requests";

export default function Page() {
    const params = useParams();
    const [request, setRequest] = useState<RequestProps>()

    useEffect(() => {
        const fetch = async () => {
            const request = await fetchRequestById(String(params.id));
            setRequest(request);
        };
        fetch();
    }, [params.id]);

    return (
        <div className="p-4">
            <div>
                <span>{request?.client_name}</span>
                <p>{request?.message}</p>
            </div>
        </div>
    );
}