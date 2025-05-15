"use client";

import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AboutAddEdit from "../_form/form";

interface ReusableDialogProps {
  children?: React.ReactElement;
  title?: string;
}

export function NavberDailog({
  children,
  title = "Dialog Title",
}: ReusableDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <AboutAddEdit />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
