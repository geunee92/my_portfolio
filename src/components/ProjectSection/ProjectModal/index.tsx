import { FaGithub, FaLink } from "react-icons/fa";
import { Project } from "..";
import * as Styled from "./index.styles";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContainer onClick={(e) => e.stopPropagation()}>
        <Styled.CloseButton onClick={onClose}>✕</Styled.CloseButton>

        <Styled.ModalImage src={project.image} alt={project.title} />

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
