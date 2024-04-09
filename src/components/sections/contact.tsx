"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Wrapper from "../wrapper/wrapper";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  name: z.string().min(2, {
    message: "Name is required",
  }),
  sport: z.string().min(2, {
    message: "Sport is required",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(300, {
      message: "Message must not be longer than 300 characters.",
    }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      sport: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  return (
    <div id="contact" className="mt-60">
      <Wrapper>
        <div className="w-full px-48">
          <div className="flex items-center justify-between w-full gap-10 h-[53rem]">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="h-fit border border-[#131E42] rounded-xl px-8 w-full py-14">
                <div className=" w-fit px-4 py-2 rounded-full border border-[#131E42] flex items-center justify-center">
                  <p className=" text-lg font-normal text-[#131E42]">
                    Fill The Form
                  </p>
                </div>
                <h2 className=" font-semibold text-4xl mt-6 text-[#131E42]">
                  Contact Us
                </h2>
                <p className=" font-normal text-xl mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br /> sed do eiusmod tempor
                </p>
              </div>
              <div className="h-fit border border-[#131E42] rounded-xl px-8  w-full py-12 bg-white">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start justify-center space-y-4 col-span-2">
                          <FormControl>
                            <Input
                              className="px-5 w-full"
                              disabled={isLoading}
                              placeholder="Enter Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start justify-center space-y-4 col-span-2 mt-2">
                          <FormControl>
                            <Input
                              className="px-5 w-full"
                              disabled={isLoading}
                              placeholder="Enter Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="sport"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start justify-center space-y-4 col-span-2 mt-2">
                          <FormControl>
                            <Input
                              className="px-5 w-full"
                              disabled={isLoading}
                              placeholder="Enter Your Sports"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="mt-2">
                          <FormControl>
                            <Textarea
                              disabled={isLoading}
                              placeholder="Enter Message"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full font-medium text-base mt-8"
                      disabled={isLoading}
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="w-full relative h-full rounded-2xl">
              <Image
                fill
                alt="Contact us"
                className="rounded-2xl"
                src="/contact-img.png"
                quality={100}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactSection;
