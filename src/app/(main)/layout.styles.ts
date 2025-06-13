import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 2rem 4rem;
  display: flex;
  height: calc(100vh - 120px);

  @media (max-width: 768px) {
    display: block;
    padding: 2rem 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1.3;
  position: relative;
  padding-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  flex: 1.7;
  min-width: 0;
  overflow: hidden;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: calc(100vh - 180px);

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`;
