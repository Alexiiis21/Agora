import ThreadCard from "@/components/cards/ThreadCard";

import { fetchPosts } from "@/lib/actions/thread.actions";
import User from "@/lib/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { userInfo } from "os";

export default async function Home () {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();

  return (
<>
<h1 className="head-text text-left">Inicio</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? ( 
          <p className="no-result">
            No se encontraron publicaciones
          </p>
        ): (
          <>
          {result.posts.map((post) =>(
            <ThreadCard 
            key={post._id}
            id={post._id}
            currentUserId={user?.id || ""}
            parentId={post.parentId}
            content={post.text}
            author={post.author}
            community={post.cosmunity}
            createdAt={post.createdAt}
            comments={post.children}
            />
          ))}
          </>
        )}
      </section>
</>
     
              
  );
}
