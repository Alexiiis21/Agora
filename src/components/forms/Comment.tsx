"use client";

import { UserValidation } from "@/lib/validations/user";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { useUploadThing } from '@/lib/uploadthing'
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentValidation } from "@/lib/validations/thread";
import { Button } from "../ui/button";
import { addCommentToThread, createThread } from "@/lib/actions/thread.actions";
import { z } from "zod";

interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({threadId, currentUserImg, currentUserId}: Props) => {
    const router = useRouter();
    const pathname = usePathname();
  
    const form = useForm({
      resolver: zodResolver(CommentValidation),
      defaultValues: {
        thread: ''
      }
    });

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname); 
         form.reset();
    }
    return (
        <Form {...form}>
         <form
           onSubmit={form.handleSubmit(onSubmit)}
           className="comment-form"
         >
             <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex gap-3 w-full items-center">
              <FormLabel>
                <Image 
                src={currentUserImg} 
                alt="Profile Image" 
                width={48}
                height={48}
                className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                type='text'
                  placeholder="Responder..."
                  className="no-focus text-light-1 outline-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="comment-form_btn">
            Publicar
        </Button>
            </form>
            </Form>
    )
}
export default Comment;