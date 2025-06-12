import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 2rem 4rem;
  display: flex;
  min-height: 100vh; // 👈 바뀐 부분
  height: auto;

  @media (max-width: 768px) {
    display: block;
    padding: 2rem 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1.4;
  position: relative;
  padding-left: 1rem;

  @media (max-width: 768px) {
    display: none; // 모바일에선 이미지 숨기기
  }
`;

export const TextWrapper = styled.div`
  flex: 1.6;
  min-width: 0; // ✅ flex 요소 너비 제한 해제
  overflow: hidden; // ✅ Swiper가 넘칠 경우 잘라냄
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`;
