import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface TooltipType {
  children?: React.ReactNode;
  content: string;
}

export function TTooltip({ content, children }: TooltipType) {
  return (
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
  );
}
