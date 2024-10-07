"use client";
import { Button } from "@/components/ui/button";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import { deleteChambaWorker } from "@/lib/actions/dashboard/chambas";
import { closeModal, openModal } from "@/lib/hooks/useModal";
import { useToasts } from "@/lib/hooks/useToast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function DeleteChambaButton({ id }: { id: string }) {
  const [state, formAction] = useFormState(deleteChambaWorker, {
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
        router.push("/dashboard/chambas");
        router.refresh();
      }
      state.title = "";
      state.msg = "";
    }
  }, [addToast, router, state, state.msg, state.title]);

  return (
    <div>
      <Button
        onClick={() => {
          openModal({
            content: {
              header: "Eliminar Chamba",
              body: <p>Estas seguro de que quieres borrar la chamba?</p>,
            },
            actionButton: (
              <form action={formAction}>
                <input type="text" value={id} hidden id="id" name="id" />
                <ButtonSubmit variant={"default"}>Aceptar</ButtonSubmit>
              </form>
            ),
          });
        }}
        variant={"destructive"}
      >
        Eliminar
      </Button>
    </div>
  );
}
