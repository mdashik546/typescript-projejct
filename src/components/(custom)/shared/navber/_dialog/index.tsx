import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ReusableDialogProps {
  buttonText: string;
  title?: string;
  children: ReactNode;
}

export function NavberDailog({
  buttonText,
  title,
  children,
}: ReusableDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[425px]}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
