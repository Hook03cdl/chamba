/* eslint-disable @next/next/no-img-element */
import Each from "@/components/Each";
import UserRequest from "@/components/profile/UserRequest";
import {fetchRequests} from "@/lib/actions/requests";
import {RequestProps} from "@/lib/interfaces/interface";
import React from "react";

export default async function page() {
    const requests = await fetchRequests();
    return (
        <div className="divide-y-[1px] divide-gray-300 pb-10">
            {requests?.length > 0 ? (
                <Each of={requests} render={(c: RequestProps) => <UserRequest request={c}/>}/>
            ) : (
                <div className="bg-gray-200 rounded-lg">
                    <p className="text-center py-10 text-lg">No hay solicitudes...</p>
                </div>
            )}
        </div>
    );
}
