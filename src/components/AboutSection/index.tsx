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
          <ToggleDetail summary={"(주)아몬즈랩 (2025.07 ~ 현재)"}>
            <ul>
              <li>
                이커머스 웹 플랫폼 및 어드민 운영
                <ol>
                  <li>
                    이커머스 웹 플랫폼과 어드민(브랜드, 회사) 프로젝트의 기능
                    추가 및 유지보수
                  </li>
                  <li>
                    웹뷰 작업을 통해 네이티브 앱에 페이지를 제공하여 앱 개발
                    공수 절감
                  </li>
                </ol>
              </li>

              <li>
                개발 워크플로우 개선 및 AI 개발 환경 구축
                <ol>
                  <li>
                    기존 Git Flow의 브랜치 복잡도 해결을 위해 TBD + Feature Flag
                    체계 도입
                  </li>
                  <li>
                    Jira + GitHub Actions + Vercel Edge Config를 연동한
                    feature-flag 파이프라인 및 자동 배포 시스템 구축
                  </li>
                  <li>
                    Claude Code skills로 PR/commit을 커맨드화하고 코드 컨벤션
                    문서화로 AI 협업 환경 표준화
                  </li>
                </ol>
              </li>

              <li>
                마케팅 플랫폼 마이그레이션
                <ol>
                  <li>
                    Braze → FlareLane 전환, GTM 태그/액션 활용으로 코드 변경
                    최소화하며 마케팅 이벤트 추적 체계 구축
                  </li>
                </ol>
              </li>

              <li>
                AI 고객문의 자동 답변 시스템 구축
                <ol>
                  <li>
                    AI API + 파인튜닝 + Vercel Serverless Functions로 프론트엔드
                    단독으로 CS 응답 자동화 시스템 구축
                  </li>
                  <li>
                    Google Spreadsheet + Slack 연동으로 운영팀 모니터링 체계
                    구성
                  </li>
                </ol>
              </li>

              <li>
                Admin 모노레포 마이그레이션
                <ol>
                  <li>
                    AI로 기능/스펙 문서화 후 Cypress E2E 테스트로 안전망 확보
                  </li>
                  <li>React CRA → Vite 마이그레이션으로 빌드 환경 통일</li>
                  <li>
                    E2E 테스트 기준으로 AI 기반 마이그레이션 수행하여 모노레포
                    통합 완료
                  </li>
                </ol>
              </li>

              <li>
                AI 활용 사내 툴 개발
                <ol>
                  <li>
                    Claude 활용 AI 크롤링으로 경쟁사 가격 분석 리포트 자동 생성
                  </li>
                  <li>
                    일본 Shopify 관리 툴 개발로 JP 운영팀 상품 관리 효율화
                  </li>
                  <li>
                    AI 기반 제품 상세 이미지 번역 및 자동 크롭으로 해외 상품
                    등록 자동화
                  </li>
                </ol>
              </li>
            </ul>
          </ToggleDetail>
        </ListItem>

        <ListItem>
          <ToggleDetail summary={"(주)셀러노트 (2020.04 ~ 2024.11)"}>
            <ul>
              <li>
                해외운송 어드민 시스템 구축 및 고도화
                <ol>
                  <li>
                    영업→관리→정산 전체 사이클을 커버하는 어드민 주도 개발
                  </li>
                  <li>antd → MUI 마이그레이션으로 컴포넌트 확장성 확보</li>
                  <li>
                    Redux-Saga → React-Query + Jotai 전환으로 비동기 흐름 단순화
                  </li>
                  <li>
                    다양한 확장자(pdf, tiff, hwp, png) 파일 업로드/미리보기
                    구현으로 고객 CS 문의 감소
                  </li>
                  <li>
                    번들 사이즈 분석, 코드 스플리팅, 이미지/영상 포맷 최적화로
                    성능 개선
                  </li>
                  <li>
                    숫자/계산 함수 단위 테스트 도입으로 정산 데이터 정합성 확보
                  </li>
                </ol>
              </li>

              <li>
                서비스(쉽다) 기능 개발
                <ol>
                  <li>
                    (주)영실업 요구사항에 맞춰 tanstack-table 커스터마이징
                  </li>
                  <li>react-hook-form 기반 외환 송금 시스템 개발</li>
                  <li>
                    Google Maps API polyline/marker/테마 커스텀으로 운송 경로
                    시각화
                  </li>
                </ol>
              </li>

              <li>
                이메일 템플릿 제작
                <ol>
                  <li>
                    해외운송 안내/알림 메일 템플릿 제작 및 크로스 플랫폼
                    스타일링 대응
                  </li>
                </ol>
              </li>
            </ul>
          </ToggleDetail>
        </ListItem>

        <ListItem>
          부트캠프 코드스테이츠 이머시브 17기 (2019.11 ~ 2020.04)
        </ListItem>
      </List>

      <AboutSkills />
    </Section>
  );
}
