"use client";
/*
 * note(modal)-4
 * create the following modal-provider file
 * to avoid hydration error in next.js
 * */

import { useEffect, useState } from "react";
import PreviewModal from "@/components/ui/preview-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};
