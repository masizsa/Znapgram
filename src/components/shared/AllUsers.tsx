import { useGetAllUsers } from "@/lib/react-query/queriesAndMutations";
import React from "react";
import TopCreatorCard from "./TopCreatorCard";
import Loader from "./Loader";

const AllUsers = () => {
  const { data: creators, isLoading, isError } = useGetAllUsers();
  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-2xl hidden md:flex flex-col items-start w-full gap-6 md:gap-9 px-10 py-12">
      <h2 className="h3-bold">Top Creators</h2>
      <div className="w-full grid grid-cols-2 gap-7 max-w-5xl">
        {creators?.map((creator)=>(
            <TopCreatorCard creator={creator} key={creator.$id}/>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
