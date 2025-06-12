"use client";

import { AboutSkills } from "./AboutSkills";
import { Section, Title, Text, List, ListItem } from "./index.styles";

export default function AboutSection() {
  return (
    <Section>
      <Title>ABOUT ME</Title>
      <Text>
        안녕하세요. 저는 프론트엔드 개발자 조형근입니다.
        <br />
        다양한 문제들을 개발을 통해 해결하고 싶습니다.
      </Text>

      <Title>CAREER</Title>

      <List>
        <ListItem>코드스테이츠 이머시브 17기(2019.11 ~ 2020.04)</ListItem>
        <ListItem>(주)셀러노트 (2020.04 ~ 2024.11)</ListItem>
      </List>

      <AboutSkills />
    </Section>
  );
}
