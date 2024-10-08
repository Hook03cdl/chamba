import React from "react";
import { create } from "zustand";
interface ModalProps {
  isOpen: boolean;
  modal: {
    content?: {
      header: string | React.ReactNode;
      body: React.ReactNode;
      addButton?: React.ReactElement;
    };
    image?: string;
    actionButton?: React.ReactNode;
  };
}
export const useModal = create<ModalProps>(() => ({
  isOpen: false,
  modal: { content: { header: "", body: null }, image: "", actionButton: null },
}));

export const openModal = ({
  content,
  image,
  actionButton,
}: {
  content?: {
    header: string | React.ReactNode;
    body: React.ReactNode;
    addButton?: React.ReactElement;
  };
  image?: string;
  actionButton?: React.ReactNode;
}) => {
  document.body.classList.add("overflow-hidden");
  useModal.setState(() => ({
    isOpen: true,
    modal: { content, image, actionButton },
  }));
};

export const closeModal = () => {
  document.body.classList.remove("overflow-hidden");
  useModal.setState(() => ({ isOpen: false }));
};
