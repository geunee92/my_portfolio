import { useRef } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { fetchComments, postComment } from "@/remote/comment";
import { useObserver } from "./useObserver";

export function useComments() {
  const queryClient = useQueryClient();
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["comments"],
      ({ pageParam = null }) => fetchComments(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.lastVisible ?? undefined,
      },
    );

  const comments = data?.pages.flatMap((page) => page.comments) ?? [];

  useObserver({
    target: observerRef,
    onIntersect: () => hasNextPage && fetchNextPage(),
    enabled: hasNextPage,
  });

  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return {
    observerRef,
    comments,
    postComment: mutation.mutate,
    isLoading: mutation.isLoading,
    isFetchingNextPage,
  };
}
