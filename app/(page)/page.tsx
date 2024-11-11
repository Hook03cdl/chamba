import Card from '@/components/Card';
import Each from '@/components/Each';
import Filter from '@/components/filter/Filter';
import {
    fetchDataChambas,
    fetchDataChambasBySlug,
    fetchMostRatedChambas,
    fetchUserFollowingChambas
} from '@/lib/data/chambas';
// import { getUserNotifications } from '@/lib/data/notifications';
import {ChambaProps} from '@/lib/interfaces/interface';
import {notFound} from 'next/navigation';

export default async function Home({
                                       searchParams,
                                   }: {
    searchParams: { chamba: string };
}) {
    let chambasBySlug = undefined;
    let chambas = undefined;
    // const notifications = await getUserNotifications();
    try {
        chambas = await fetchDataChambas();
        if (searchParams['chamba']) {
            chambasBySlug = await fetchDataChambasBySlug(searchParams['chamba']);
        }
    } catch (error) {
        notFound();
    }

    const renderData = searchParams['chamba'] ? chambasBySlug : chambas;
    const mostRatedChambas = await fetchMostRatedChambas();
    const userFollowingChambas = await fetchUserFollowingChambas();
    // console.log(renderData);

    return (
        <>
            <Filter/>
            {renderData && renderData?.length > 0 ? (
                <section className="p-5 px-20 min-h-3.5">
                    <div
                        className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-10">
                        <Each
                            of={renderData}
                            render={(c: ChambaProps) => (
                                <Card
                                    href={`/chamba/${c.slug}`}
                                    src={c.path}
                                    id={c.id.toString()}
                                    name={`${c.title}`}
                                    description={c.description}
                                    rating={c.rating}
                                    worker_slug={c.worker_slug}
                                    worker_name={c.worker_name}
                                    job_name={c.job_name}
                                />
                            )}
                        />
                    </div>
                </section>
            ) : (
                <div className="flex justify-center items-center flex-col min-h-svh text-shark">
                    <h2 className="text-7xl">Upsss</h2>
                    <h3 className="text-3xl">
                        Lo sentimos pero no encontramos trabajadores con esa profesion
                    </h3>
                </div>
            )}
            {!userFollowingChambas.error && (
                <>
                    {
                        userFollowingChambas.length > 0 ? (
                            <section className="p-5 px-20 min-h-3.5">
                                <h1 className="mb-2 uppercase text-xl font-bold text-shark">Chambas de los trabajadores
                                    que
                                    sigues.</h1>
                                <div
                                    className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-10">
                                    <Each of={userFollowingChambas} render={(c: ChambaProps) => (
                                        <Card
                                            href={`/chamba/${c.slug}`}
                                            src={c.path}
                                            id={c.id.toString()}
                                            name={`${c.title}`}
                                            description={c.description}
                                            rating={c.rating}
                                            worker_slug={c.worker_slug}
                                            worker_name={c.worker_name}
                                            job_name={c.job_name}
                                        />
                                    )}/>
                                </div>
                            </section>
                        ) : (
                            <section className="p-5 px-20 min-h-3.5">
                                <h1 className="mb-2 uppercase text-xl font-bold text-shark">
                                    Chambas de los usuario que sigues.
                                </h1>
                                <p>Sigue a <a href="/workers" className="text-blue-700 underline">trabajadores</a> para
                                    poder ver sus chambas.</p>
                            </section>
                        )
                    }
                </>
            )}
            <section className="p-5 px-20 min-h-svh">
                <h1 className="mb-2 uppercase text-xl font-bold text-shark">
                    Mejor Calificacion
                </h1>
                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-10">
                    <Each
                        of={mostRatedChambas}
                        render={(c: ChambaProps) => (
                            <Card
                                href={`/chamba/${c.slug}`}
                                src={c.path}
                                id={c.id.toString()}
                                name={`${c.title}`}
                                description={c.description}
                                rating={c.rating}
                                worker_slug={c.worker_slug}
                                worker_name={c.worker_name}
                                job_name={c.job_name}
                            />
                        )}
                    />
                </div>
            </section>
        </>
    );
}
