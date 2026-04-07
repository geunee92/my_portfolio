import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Project } from "..";
import * as Styled from "./index.styles";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContainer onClick={(e) => e.stopPropagation()}>
        <Styled.CloseButton onClick={onClose} aria-label="닫기">
          &times;
        </Styled.CloseButton>
        <Styled.ModalImageWrapper>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Styled.ModalImageWrapper>

        <Styled.ModalContent>
          <Styled.Title>{project.title}</Styled.Title>
          <Styled.Description>{project.description}</Styled.Description>

          <Styled.Skills>
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </Styled.Skills>

          <Styled.Links>
            <Styled.LinkItem>
              <FaLink />
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site: {project.siteUrl}
              </a>
            </Styled.LinkItem>

            <Styled.LinkItem>
              <FaGithub />
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub: {project.githubUrl}
              </a>
            </Styled.LinkItem>
          </Styled.Links>
        </Styled.ModalContent>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  );
}
