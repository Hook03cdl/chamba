"use client";
import GallerySlider from "@/components/profile/GallerySlider";
import { getImages } from "@/lib/actions/dashboard/gallery";
import { fetchDataUser } from "@/lib/data/user";
import { UserProps } from "@/lib/interfaces/interface";
import getRole from "@/lib/utils/getRole";
import { useEffect, useState } from "react";

export default function Page() {
  const [role, setRole] = useState("");
  const [user, setUser] = useState<UserProps>();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRole();
      setRole(role);
    };
    const fetchUser = async () => {
      const user = await fetchDataUser();
      setUser(user);
    };
    const fetchImages = async () => {
      const images = await getImages();
      setImages(images);
    };

    fetchUser();
    fetchImages();
    fetchRole();
  }, []);
  return (
    <>
      {role === "1" ? (
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div>
            <GallerySlider images={images} />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p>{user?.about_me}</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">Nombre: </span>
              <span className="text-gray-500">{user?.email}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">Telefono: </span>
              <span className="text-gray-500">{user?.phone_number}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">Direccion: </span>
              <span className="text-gray-500">{user?.street}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">Codigo Postal: </span>
              <span className="text-gray-500">{user?.postal_code}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>{user?.name}</h1>
          <h1>{user?.email}</h1>
          <h1>{user?.rating}</h1>
          <h1>{user?.phone_number}</h1>
          <h1>{user?.street}</h1>
          <h1>{user?.postal_code}</h1>
          <h1>{user?.city}</h1>
        </div>
      )}
    </>
  );
}
