"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { GlobalFilter } from "@/(components)/globals/filter/global"

// Define your form schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  fruit: z.string().min(1, {
    message: "Please select a fruit.",
  }),
})

export default function Home() {
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      fruit: "",
    },
  })

  // Define your filter data
  const filterData = [
    {
      type: "input",
      name: "firstName",
      placeholder: "First Name",
    },
    {
      type: "select",
      name: "fruit",
      placeholder: "Select a fruit",
      options: [
        { value: "apple", name: "Apple" },
        { value: "banana", name: "Banana" },
        { value: "orange", name: "Orange" },
      ],
    },
  ]

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Global Filter Example</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <GlobalFilter form={form} filterData={filterData} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
