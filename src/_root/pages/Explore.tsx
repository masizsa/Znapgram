import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import SearchResult from "@/components/shared/SearchResult";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import {
  useGetPost,
  useSearchPost,
} from "@/lib/react-query/queriesAndMutations";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Explore = () => {
  const { ref, inView } = useInView();
  const { data: posts, fetchNextPage, hasNextPage, isLoading } = useGetPost();
  const [searchValue, setSearchValue] = useState("");

  const debounceValue = useDebounce(searchValue, 500);
  const { data: searchedPost, isFetching: isSearchFetching } =
    useSearchPost(debounceValue);

  useEffect(() => {
    if (!searchValue && inView) fetchNextPage();
  }, [inView, searchValue]);

  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  const shouldShowSearchResults = searchValue !== "";
  const shouldShowPosts =
    !shouldShowSearchResults &&
    !posts.pages.every((item) => item?.documents.length === 0);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h3-bold w-full">Search Post</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
          />
          <Input
            type="text"
            placeholder="Search"
            className="explore-search"
            value={searchValue}
            onChange={({ target }) => {
              setSearchValue(target.value);
            }}
          />
        </div>
      </div>
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Popular Today</h3>
        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            alt="filter"
            height={24}
            width={24}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {shouldShowSearchResults ? (
          <SearchResult
            isSearchFetching={isSearchFetching}
            searchedPost={searchedPost}
          />
        ) : shouldShowPosts ? (
          posts.pages.map((item, index) => (
            <GridPostList
              key={index}
              posts={item?.documents!}
              showStats={true}
              showUser={true}
            />
          ))
        ) : (
          <p className="text-light-4 mt-10 text-center w-full">End of posts</p>
        )}
      </div>
      {hasNextPage && !searchValue && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Explore;
