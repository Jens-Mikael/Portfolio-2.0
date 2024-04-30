"use client";
import { FormSchema, FormValues } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmailAction } from "@/actions/sendEmail";
import { toast } from "./ui/use-toast";
import { ImSpinner8 } from "react-icons/im";

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });
  async function onSubmit(data: FormValues) {
    const res = await sendEmailAction(data);
    if (res.data) {
      toast({
        title: "Message sent!",
        description: "I will get to you as soon as possible :)",
      });
      form.reset({
        name: "",
        email: "",
        text: "",
      });
    } else if (res.error)
      toast({
        title: "Something went wrong!",
        description: `Error: ${res.error.name}`,
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="What's your name?" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="What's your Email address?" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What do you want to say?"
                  rows={5}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-28 cursor-pointer items-center justify-center rounded-full bg-[#151030]  px-6 py-2 text-lg font-bold text-white backdrop-blur-3xl">
            {form.formState.isSubmitting ? (
              <ImSpinner8 className="h-6 w-6 animate-spin fill-white transition-all" />
            ) : (
              "Send"
            )}
          </span>
        </button>
      </form>
    </Form>
  );
}
