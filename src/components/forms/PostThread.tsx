"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreadValidation } from "@/lib/validations/thread";
import { Button } from "../ui/button";
import { createThread } from "@/lib/actions/thread.actions";
import { z } from "zod";
import { useOrganization } from "@clerk/nextjs";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

function PostThread({userId}: {userId: string}) {
    const router = useRouter();
    const pathname = usePathname();
    const { organization } = useOrganization();
  
    const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
        thread: '',
        accountId: userId,
      },
    });

    const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {  
      await createThread({
          text: values.thread,
          author: userId,
          communityId: organization ? organization.id : null,
          path: pathname
        });
        router.push('/');
    }
    return (
         <Form {...form}>
         <form
           onSubmit={form.handleSubmit(onSubmit)}
           className="mt-10 flex flex-col justify-start gap-10"
         >
             <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex gap-3 w-full flex-col">
              <FormLabel className="text-base-semiblod text-light-2">
                Contenido
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Textarea
                rows={15}
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500 text-light-2">
            Publicar
        </Button>
            </form>
            </Form>
    )
}
export default PostThread;