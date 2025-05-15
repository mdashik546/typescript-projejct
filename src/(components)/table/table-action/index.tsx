"use client";

import { Edit, Trash, Plus, RotateCcw, Printer, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { TTooltip } from "../t-tooltip";

type TableActionProps = {
  variant: "edit" | "delete" | "add" | "return" | "print" | "pdf";
  onClick?: () => void;
  className?: string;
};

export function TableAction({ variant, onClick, className }: TableActionProps) {
  const getIconAndTooltip = () => {
    switch (variant) {
      case "edit":
        return {
          icon: <Edit className="h-4 w-4" />,
          tooltip: "Edit",
          bgColor: "bg-emerald-100 hover:bg-emerald-200",
        };
      case "delete":
        return {
          icon: <Trash className="h-4 w-4" />,
          tooltip: "Delete",
          bgColor: "bg-rose-100 hover:bg-rose-200",
        };
      case "add":
        return {
          icon: <Plus className="h-4 w-4" />,
          tooltip: "Add",
          bgColor: "bg-blue-100 hover:bg-blue-200",
        };
      case "return":
        return {
          icon: <RotateCcw className="h-4 w-4" />,
          tooltip: "Return",
          bgColor: "bg-amber-100 hover:bg-amber-200",
        };
      case "print":
        return {
          icon: <Printer className="h-4 w-4" />,
          tooltip: "Print",
          bgColor: "bg-purple-100 hover:bg-purple-200",
        };
      case "pdf":
        return {
          icon: <FileText className="h-4 w-4" />,
          tooltip: "PDF",
          bgColor: "bg-indigo-100 hover:bg-indigo-200",
        };
      default:
        return {
          icon: <Edit className="h-4 w-4" />,
          tooltip: "Action",
          bgColor: "bg-gray-100 hover:bg-gray-200",
        };
    }
  };

  const { icon, tooltip, bgColor } = getIconAndTooltip();

  return (
    <TTooltip content={tooltip}>
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md",
          "cursor-pointer transition-colors",
          bgColor,
          className
        )}
        onClick={onClick}      >
        {icon}
      </div>
    </TTooltip>
  );
}
