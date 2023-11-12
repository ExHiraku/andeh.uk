import { create } from "zustand";

export type ModalType = "contact" | null;

interface ModalStore {
  type: ModalType;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set(() => ({ type, isOpen: true })),
  onClose: () => set(() => ({ type: null, isOpen: false })),
}));
