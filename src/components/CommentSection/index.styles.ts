import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 4rem 2rem;
  color: var(--text);
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const NameInput = styled.input`
  padding: 0.75rem 1rem;
  max-width: 20vh;
  font-size: 1rem;
  border: 1px solid var(--muted);
  border-radius: 6px;
  background-color: var(--bg);
  color: var(--text);

  &::placeholder {
    color: var(--muted);
  }
`;

export const Textarea = styled.input`
  padding: 1rem;
  resize: none;
  font-size: 1rem;
  border: 1px solid var(--muted);
  border-radius: 6px;
  background-color: var(--bg);
  color: var(--text);

  &::placeholder {
    color: var(--muted);
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--text);
  color: var(--bg);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.85;
  }
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-bottom: 2rem;
  max-height: 40vh; // 또는 필요에 따라 60vh, 50rem 등
  overflow-y: auto;
`;

export const CommentItem = styled.li`
  padding: 1rem;
  border: 1px solid var(--muted);
  border-radius: 8px;
  background-color: var(--bg);
`;

export const CommentName = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CommentText = styled.p`
  line-height: 1.5;
`;

export const LoadingText = styled.div`
  margin: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text);
  opacity: 0.6;
`;

export const lastCommentNotice = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
  color: #888;
  text-align: center;
`;

export const Sentinel = styled.div`
  height: 1px;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  font-size: 0.95rem;
  color: var(--muted);
`;
