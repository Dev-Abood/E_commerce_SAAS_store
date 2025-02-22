"use client";

import { Button } from "@nextui-org/react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import Gallery from "../gallery";
import { Product } from "@/types";
import Info from "../info";
import MobileInfo from "../mobile-info";
import { usePreviewModal } from "@/hooks/use-preview-modal";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Dialog open={true} onOpenChange={previewModal.onClose}>
      <DialogContent className="max-w-sm flex-col justify-center sm:justify-start items-center sm:max-w-2xl flex sm:flex-row gap-x-8">
        <div className="w-[250px]">
          <Gallery product={product} />
        </div>
        <div className="hidden sm:block sm:mt-32 md:mt-0">
          <Info product={product} />
        </div>
        <MobileInfo product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModal;
