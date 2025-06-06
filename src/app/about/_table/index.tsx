"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavberDailog } from "../_dialog";
import { TableAction } from "@/components/(custom)/table/table-action";
import { Checkbox } from "@/components/ui/checkbox";

const data = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function AboutTable() {
  const [selected, setSelected] = useState<string[]>([]);

  const isAllSelected = selected.length === data.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      console.log(isAllSelected);
      setSelected([]);
    } else {
      setSelected(data?.map((inv) => inv.invoice));
    }
  };

  const toggleRow = (invoiceId: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(invoiceId)
        ? prevSelected.filter((id) => id !== invoiceId)
        : [...prevSelected, invoiceId]
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={toggleSelectAll}
              aria-label="Select all rows"
            />
          </TableHead>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead className="text-center w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <Checkbox
                checked={selected.includes(invoice.invoice)}
                onCheckedChange={() => toggleRow(invoice.invoice)}
                aria-label={`Select ${invoice.invoice}`}
              />
            </TableCell>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>
              <Badge className="w-[87px]">Complete</Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-3 justify-end">
                <NavberDailog>
                  <TableAction variant="edit" />
                </NavberDailog>
                <TableAction variant="delete" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
