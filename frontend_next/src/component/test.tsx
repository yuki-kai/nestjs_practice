"use client";
import { createGetApi } from "@/lib/apiClient";
import { FC, useEffect,  } from "react";

const ClientSideComponent: FC = () => {
  useEffect(() => {
    async function fetchPosts() {
      const res =  await createGetApi("/practice/10");
      // const data = res.data()
      console.log("===== client =====");
      
      console.log(res);
    }
    fetchPosts()
  }, [])

  return (
    <div>clientSide</div>
  );
};
  
export default ClientSideComponent;
