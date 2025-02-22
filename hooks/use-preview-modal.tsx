/*
 * note(modal)-1
 * install zustand
 * */
import { Product } from "@/types";
import { create } from "zustand";

/*
 * note(modal)-2
 * create the useProModal interface with the following props
 * */
interface usePreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

/*
 * note(modal)-3
 * create the modal hook as following
 * */
export const usePreviewModal = create<usePreviewModalStore>((set) => ({
  data: undefined,
  isOpen: true,
  onOpen: (data: Product) => set({ data: data, isOpen: true }),
  onClose: () => set({ data: undefined, isOpen: false }),
}));
