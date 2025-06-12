import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiGhostery,
  SiJavascript,
  SiNextdotjs,
  SiReacthookform,
  SiReactquery,
  SiStyledcomponents,
} from "react-icons/si";
import {
  Container,
  SectionTitle,
  SkillGroup,
  GroupTitle,
} from "./index.styles";
import SkillIcon from "./SkillIcon";

export function AboutSkills() {
  return (
    <Container>
      <SectionTitle>프론트엔드 스킬</SectionTitle>

      <GroupTitle>Basic</GroupTitle>
      <SkillGroup>
        <SkillIcon label="HTML" Icon={AiFillHtml5} />

        <SkillIcon label="CSS" Icon={DiCss3} />

        <SkillIcon label="JavaScript" Icon={SiJavascript} />
      </SkillGroup>

      <GroupTitle>Library</GroupTitle>
      <SkillGroup>
        <SkillIcon label="React" Icon={FaReact} />

        <SkillIcon label="Next.js" Icon={SiNextdotjs} />

        <SkillIcon label="React Query" Icon={SiReactquery} />

        <SkillIcon label="React Hook Form" Icon={SiReacthookform} />

        <SkillIcon label="Jotai" Icon={SiGhostery} />

        <SkillIcon
          label="emotion"
          subLabel="Styled Component"
          Icon={SiStyledcomponents}
        />
      </SkillGroup>

      <GroupTitle>Etc</GroupTitle>
      <SkillGroup>
        <SkillIcon label="GitHub" Icon={FaGithub} />

        <SkillIcon label="Firebase" Icon={SiFirebase} />
      </SkillGroup>
    </Container>
  );
}
