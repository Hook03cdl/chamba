import Each from "@/components/Each";
import { Button } from "@/components/ui/button";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import { ToolTip } from "@/components/ui/Tooltip";
import { destroyImage } from "@/lib/actions/dashboard/gallery";
import { closeModal, openModal } from "@/lib/hooks/useModal";
import { useToasts } from "@/lib/hooks/useToast";
import { ImageProps } from "@/lib/interfaces/interface";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function Gallery({
  images,
}: {
  images: ImageProps[] | undefined;
}) {
  const [state, formAction] = useFormState(destroyImage, {
    title: "",
    msg: "",
    type: "default",
  });

  const router = useRouter();
  const { addToast } = useToasts();

  useEffect(() => {
    if (state.msg && state.title) {
      addToast(state.title, state.msg, state.type);
      if (state.type === "success") {
        closeModal();
        router.refresh();
      }
      // Resetea el estado después de mostrar el toast
      state.title = "";
      state.msg = "";
      state.type = "default";
    }
  }, [addToast, router, state, state.msg, state.title]);

  return (
    <div className="mt-4 bg-white p-4 border rounded-lg shadow-lg">
      <h1>Tus imagenes</h1>
      {images?.length === 0 && <p className="mt-2">No hay imagenes</p>}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <Each
          of={images}
          render={(i: ImageProps) => (
            <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
              <Button
                onClick={() => {
                  openModal({
                    content: {
                      header: "Eliminar Imagen",
                      body: (
                        <p>Estas seguro de que quieres eliminar esta imagen?</p>
                      ),
                    },
                    actionButton: (
                      <form action={formAction}>
                        <input
                          type="text"
                          value={i.id}
                          hidden
                          id="id"
                          name="id"
                        />
                        <ButtonSubmit variant={"default"}>Aceptar</ButtonSubmit>
                      </form>
                    ),
                  });
                }}
                size={"icon"}
              >
                <X size={24} />
              </Button>
              <ToolTip content={i.alt} position={"bottom"} delay={1}>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  key={i.id}
                  src={i.path}
                  alt={i.alt}
                  width={200}
                  height={200}
                />
              </ToolTip>
            </div>
          )}
        />
      </div>
    </div>
  );
}
