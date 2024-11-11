import {UserProps} from "@/lib/interfaces/interface";
/* eslint-disable @next/next/no-img-element */

export default function WorkerCard({user}: { user: UserProps }) {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10">
                <img src={`https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
                    user?.name
                )}`} alt={user.name} className="size-24 mt-4"/>
                <h5 className="mb-1 text-xl font-medium text-gray-500">{user.name}</h5>
                <p>{user.about_me}</p>
                <span className="bg-niagara-200 rounded text-niagara-800 p-1 text-xs">{user.rating}</span>
                <div className="flex mt-4">
                    <a href={`/user/${user.slug}`}
                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-niagara-700 rounded-lg">
                        Ver Perfil
                    </a>
                </div>
            </div>
        </div>
    );
}