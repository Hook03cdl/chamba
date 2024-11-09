import Navbar from "@/components/profile/Navbar";
import Separator from "@/components/ui/Separator";
import Tags from "@/components/ui/Tags";
import {getJobsBySlug, getUserInfoSlug} from "@/lib/data/user";
import {Briefcase, ChartCandlestick, Eye, Mailbox, Users, Wrench} from "lucide-react";
import ButtonFollow from "@/components/ButtonFollow";
import {followers, followersUser} from "@/lib/actions/profile";

/* eslint-disable @next/next/no-img-element */
export default async function Layout({
                                         children,
                                         params,
                                     }: {
    children: React.ReactNode;
    params: { slug: string };
}) {
    const user = await getUserInfoSlug(params.slug);
    const trabajos = await getJobsBySlug(params.slug);
    const jobs = trabajos?.map((job: any) => job.name);
    const followers = await followersUser(String(user?.id));

    return (
        <section className="min-h-svh p-5">
            <div className="flex items-center gap-10">
                <img
                    src={`https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
                        user?.name
                    )}`}
                    alt="foto de perfil"
                    className="rounded-full size-52 aspect-auto object-cover cursor-pointer"
                />
                <div className="space-y-5">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">{user?.name}</h2>
                        {user?.role === "1" && <Tags texts={jobs ? jobs : []}/>}
                    </div>
                    <div className="flex items-center gap-5">
                        <ButtonFollow followed={String(followers.followed)} followedId={String(user?.id)}/>
                    </div>
                </div>
                <div className="ml-20 flex gap-10">
                    <div className="grid place-items-center">
                        <Users/>
                        <h4 className="font-semibold">Seguidores</h4>
                        <p className="text-center text-sm font-semibold">{followers.count}</p>
                    </div>
                    {user?.role === "1" && (
                        <div className="grid place-items-center">
                            <Wrench/>
                            <h4 className="font-semibold">Trabajos</h4>
                            <p className="text-center text-sm font-semibold">3</p>
                        </div>
                    )}
                    <div className="grid place-items-center">
                        <ChartCandlestick/>
                        <h4 className="font-semibold">Rating</h4>
                        <p className="text-center text-sm font-semibold">{user?.rating}</p>
                    </div>
                </div>
            </div>
            <Separator/>
            <div className="space-y-5">
                <Navbar
                    navOptions={[
                        {
                            href: "/solicitudes",
                            text: "Solicitudes",
                            icon: <Mailbox/>,
                            display: user?.role === "0",
                        },
                        {
                            href: `/user/${params.slug}/info`,
                            text: "Información",
                            icon: <Mailbox/>,
                            display: user?.role === "1",
                        },
                        {
                            href: `/user/${params.slug}/chambas`,
                            text: 'Chambas',
                            icon: <Briefcase/>,
                            display: user?.role === "1",
                        },
                        {
                            href: `/user/${params.slug}/reviews`,
                            text: 'Reseñas',
                            icon: <Eye/>,
                            display: user?.role === "1",
                        }
                    ]}
                />
                {children}
            </div>
        </section>
    );
}
