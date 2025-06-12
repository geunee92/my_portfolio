import styled from "@emotion/styled";
import Image from "next/image";

export const Section = styled.section`
  padding: 4rem 1rem;
  background-color: var(--bg);
  color: var(--text);
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 12px;
  height: 40vh;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled(Image)`
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ProjectTitle = styled.div`
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--bg);
  color: var(--text);

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
`;
