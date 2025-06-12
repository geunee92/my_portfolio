import styled from "@emotion/styled";

export const Section = styled.section`
  max-width: 960px;
  padding: 4rem 2rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  border-bottom: 1px solid var(--text);
  padding-bottom: 0.25rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  padding-left: 1rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const SkillGroup = styled.div`
  margin-top: 1rem;
`;

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 0 1.5rem;
`;

export const SkillItem = styled.span`
  padding: 0.5rem 1rem;
  background-color: var(--text);
  color: var(--bg);
  border-radius: 6px;
  font-size: 0.875rem;
`;
