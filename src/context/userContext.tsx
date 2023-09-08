"use client"
import { Post } from "@/types/Post";
import { createContext, ReactNode, useState } from "react";

type ContextType = {
    posts: Post[];
};
export const userContext = createContext<ContextType | null>(null);

export const LoginUser = ({ children }: { children: ReactNode }) =>{
    const [posts, setPosts] = useState<Post[]>([]);
    return(
      <userContext.Provider value={{ posts }}>{children}</userContext.Provider>
    );
}