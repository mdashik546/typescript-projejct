"use client"

import { InputField } from "@/(components)/input/input"
import type { UseFormReturn } from "react-hook-form"
import { SelectInput } from "./select/select"


type Option = {
  value: string
  name: string
}

type FormElement = {
  type: "input" | "select"
  name: string
  placeholder?: string
  options?: Option[]
}

type GlobalFilterProps = {
  form: UseFormReturn<any>
  filterData?: FormElement[]
}

export const GlobalFilter = ({ form, filterData = [] }: GlobalFilterProps) => (
  <div className="space-y-4">
    {filterData?.map((item) => {
      if (item.type === "input") {
        return <InputField key={item.name} form={form} name={item.name} placeholder={item.placeholder} />
      }
      if (item.type === "select") {
        return (
          <SelectInput
            key={item.name}
            form={form}
            name={item.name}
            options={item.options || []}
            placeholder={item.placeholder}
          />
        )
      }
      return null
    })}
  </div>
)
