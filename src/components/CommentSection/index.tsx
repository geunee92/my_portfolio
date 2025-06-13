"use client";
import { useState } from "react";
import { useComments } from "@/hooks/useComment";
import * as Styled from "./index.styles";

export default function CommentSection() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const { comments, observerRef, postComment, isLoading, isFetchingNextPage } =
    useComments();

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) return;
    postComment({ name, text });
    setName("");
    setText("");
  };

  return (
    <Styled.Container>
      <Styled.Title>Comment</Styled.Title>

      <Styled.InputWrapper>
        <Styled.NameInput
          placeholder="작성자 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Styled.Textarea
          placeholder="댓글을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Styled.Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "등록 중..." : "등록"}
        </Styled.Button>
      </Styled.InputWrapper>

      <Styled.CommentList>
        {comments.map((c, index) => (
          <Styled.CommentItem key={c.id}>
            <Styled.CommentName>{c.name}</Styled.CommentName>

            <Styled.CommentText>{c.text}</Styled.CommentText>

            {index === comments.length - 1 && (
              <Styled.lastCommentNotice>
                마지막 댓글입니다
              </Styled.lastCommentNotice>
            )}
          </Styled.CommentItem>
        ))}

        {isFetchingNextPage && (
          <Styled.LoadingText>댓글 불러오는 중...</Styled.LoadingText>
        )}

        <Styled.Sentinel ref={observerRef} />
      </Styled.CommentList>
    </Styled.Container>
  );
}
