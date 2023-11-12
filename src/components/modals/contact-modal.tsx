"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import validator from "validator";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { useModal } from "@/components/hooks/use-modal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ContactTopic } from "@/types/contact-topic";
import { Logo } from "../logo";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Your name is required.",
  }),
  email: z.string().email({
    message: "Your email is required.",
  }),
  topic: z.nativeEnum(ContactTopic).refine(
    (arg) => {
      return !arg.endsWith("?");
    },
    { message: "Please select a topic." }
  ),
  message: z.string().min(1, {
    message: "Your name is required.",
  }),
});

export const ContactModal = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "contact";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: ContactTopic["What is your message about?"],
      message: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const promise = async () => {
      await axios.post("/api/contact", values);

      form.reset();
      router.refresh();
    };

    toast.promise(promise(), {
      loading: "Sending message...",
      success: "Message sent!",
      error: "Something went wrong when sending your message.",
    });
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-background text-white p-0 overflow-hidden">
        <div className="max-w-xl mx-auto px-4">
          <DialogHeader className="pt-24 pb-6 px-6">
            <DialogTitle className="text-center text-2xl font-bold">
              Get in touch!
            </DialogTitle>
            <DialogDescription className="text-center">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out to me with any questions or comments you may
              have.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center space-y-8"
            >
              <div className="space-y-4 w-72 xs:w-96">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Your Name"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Your Email Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className={cn(
                              "bg-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0 capitalize",
                              field.value.endsWith("?")
                                ? "text-muted-foreground"
                                : "text-black"
                            )}
                          >
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(ContactTopic).map((topic) => (
                            <SelectItem
                              key={topic}
                              value={topic}
                              className="capitalize"
                              disabled={topic.endsWith("?")}
                            >
                              {topic.toLowerCase()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          className="bg-white h-[80px] max-h-64 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Your Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-center pb-8">
                <Button className="text-center mx-auto" disabled={isLoading}>
                  Get in Touch
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <DialogFooter className="bg-background ml-auto p-6">
          <Logo />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
