import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  max-width: 640px;
  width: 90%;
  margin: 5vh auto;
  background-color: var(--bg);
  color: var(--text);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: fill;
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  list-style: none;
  padding: 0;

  li {
    background-color: #eee;
    padding: 0.4rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    color: #333;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    flex-shrink: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 1.25rem;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
`;
