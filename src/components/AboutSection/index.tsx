"use client";

import { AboutSkills } from "./AboutSkills";
import { Section, Title, Text, List, ListItem } from "./index.styles";
import { ToggleDetail } from "./ToggleDetail";

export default function AboutSection() {
  return (
    <Section>
      <Title>ABOUT ME</Title>
      <Text>
        안녕하세요. 프론트엔드 개발자 조형근입니다.
        <br />
        개발을 통해 다양한 문제들을 해결하고 싶습니다.
      </Text>

      <Title>CAREER</Title>

      <List>
        <ListItem>
          부트캠프 코드스테이츠 이머시브 17기(2019.11 ~ 2020.04)
        </ListItem>

        <ListItem>
          <ToggleDetail summary={"(주)셀러노트 (2020.04 ~ 2024.11)"}>
            <ul>
              <li>프론트엔드 전담 개발자로 입사</li>
              <li>
                백오피스 개발
                <ol>
                  <li>
                    초기 기획부터 지속적인 기능 추가와 고도화 작업 및 유지보수를
                    전적으로 담당
                  </li>
                  <li>Redux로 관리하는 상태관리를 React-query, Jotai로 변경</li>
                  <li>
                    antd의 안정성과 확장성 문제로 디자인 시스템을 MUI로 변경
                  </li>
                  <li>
                    화물의 무게를 계산해주는 복잡한 수식함수에 Unit test 추가
                  </li>
                  <li>
                    해외운송에 필요한 다양한 서류확장자(pdf, tiff, hwp, ppt)를
                    업로드하고 미리볼 수 있는 시스템 개발
                  </li>
                </ol>
              </li>

              <li>
                회사서비스 Shipda 개발
                <ol>
                  <li>
                    (주)영실업의 요구에 맞춰 TanStack Table을 커스터마이징
                  </li>
                  <li>
                    해외운송 트랙킹을 위해 구글 맵 커스터마이즈로 출도착지와
                    현재위치 그리고 항로를 추가
                  </li>
                  <li>
                    React-hook-form을 통해 복잡한 validation이 필요한 외환송금
                    시스템 개발
                  </li>
                </ol>
              </li>
            </ul>
          </ToggleDetail>
        </ListItem>
      </List>

      <AboutSkills />
    </Section>
  );
}
