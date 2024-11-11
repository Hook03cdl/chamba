/* eslint-disable @next/next/no-img-element */
import Each from '@/components/Each';
import RequestChamba from '@/components/RequestChamba';
import Review from '@/components/Review';
import Rating from '@/components/ui/Rating';
import {fetchDataChamba} from '@/lib/data/chambas';
import fetchReviewsData from '@/lib/data/reviews';
import {fetchDataUser} from '@/lib/data/user';
import {ReviewsProps} from '@/lib/interfaces/interface';
import getRole from '@/lib/utils/getRole';
import {User, Wrench} from 'lucide-react';

export default async function Page({params}: { params: { sid: string } }) {
    const role = await getRole();

    const chamba = await fetchDataChamba(params.sid);
    const reviews = (await fetchReviewsData(chamba?.id)) || [];

    return (
        <section className="min-h-svh p-10 space-y-5">
            <div className="grid grid-cols-3 gap-5">
                <img
                    src="/images/notFound.png"
                    alt=""
                    className="h-full w-full object-cover rounded-md"
                />
                <div className="flex flex-col gap-5">
                    <img
                        src="/images/notFound.png"
                        alt=""
                        className="h-48 w-full object-cover grow rounded-md"
                    />
                    <img
                        src="/images/notFound.png"
                        alt=""
                        className="h-48 w-full object-cover grow rounded-md"
                    />
                </div>
                <img
                    src="/images/notFound.png"
                    alt=""
                    className="h-full w-full object-cover rounded-md"
                />
            </div>
            <div className="grid grid-cols-3 gap-5">
                {/* informacion del chambeador */}
                <div className="col-span-2 p-5 space-y-5 bg-white ">
                    <h1 className="text-3xl font-bold text-niagara-500">
                        {chamba?.title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            <User color="#1f7c67"/>
                            <p>{chamba?.worker_name}</p>
                        </div>
                        <div className="flex gap-2">
                            <Wrench color="#1f7c67"/>
                            <span>{chamba?.job_name}</span>
                        </div>
                    </div>
                    <p className="text-md">{chamba?.description}</p>
                </div>
                {/* detalles de sus chambas */}
                <div className="col-span-1 p-5 bg-white space-y-5 ">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-400">{reviews.length} reviews</p>
                        {chamba?.rating ? <Rating rating={chamba?.rating}/> : null}
                    </div>
                    <RequestChamba
                        chamba={chamba}
                        disabled={role === '1'}
                        worker={chamba?.worker_name}
                        chambaTitle={chamba?.title}
                    />
                    {/* Mensaje si el usuario no es cliente */}
                    {role === '1' && (
                        <div className="col-span-3 text-red-700 font-medium bg-white p-5 rounded-md shadow-md">
                            <p className="text-center">Solo los <strong>clientes</strong> pueden solicitar chambas.</p>
                        </div>
                    )}
                </div>
            </div>
            {/* Reviews */}
            <div className="bg-white rounded-md shadow-md flex flex-col gap-4 p-2">
                <span className="font-bold">Reviews</span>
                <Review
                    key={1}
                    id={"1"}
                    request_chamba_id={"1"}
                    chamba_id={"1"}
                    client_id={"1"}
                    worker_id={"1"}
                    rating={"4.5"}
                    comment={"Excelente trabajo, per no el mejor."}
                    client_name={"Juan Perez"}
                />
                <Review
                    key={2}
                    id={"2"}
                    request_chamba_id={"2"}
                    chamba_id={"2"}
                    client_id={"2"}
                    worker_id={"2"}
                    rating={"4.9"}
                    comment={"Sin duda el mejor trabajo que he visto, siempre puntual con los tiempos establecidos."}
                    client_name={"Garnacho"}
                />
            </div>
        </section>
    );
}
{
    /*
  <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-2 bg-white h-screen rounded-md shadow-md">
                <div className="m-4">
                    <h1 className="text-3xl font-bold text-center text-niagara-500">
                        {chamba?.title}
                    </h1>
                </div>
                <div className="p-7">
                    <p className="text-md">{chamba.description}</p>
                    <div className="flex gap-x-3 mt-5">
                        <div className="flex gap-x-1">
                            <User color="#1f7c67" />
                            <p>{chamba.worker_name}</p>
                        </div>
                        <div className="flex gap-x-1">
                            <Wrench color="#1f7c67" />
                            <span>{chamba.job_name}</span>
                        </div>
                    </div>
                    {chamba.path?.length > 0 && (
                        <Image
                            src={chamba.path}
                            alt={chamba.title}
                            width={500}
                            height={500}
                        />
                    )}
                </div>
            </div>
            <div className="col-start-3 bg-white h-screen rounded-md shadow-md">
            </div>

        </div>
  */
}
