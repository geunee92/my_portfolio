import { IconType } from "react-icons";
import * as Styled from "./index.styles";

interface SkillIconProps {
  label: string;
  subLabel?: string;
  Icon: IconType;
}

export default function SkillIcon({ label, Icon, subLabel }: SkillIconProps) {
  return (
    <Styled.IconWrapper>
      <Icon size={32} />

      <Styled.Label>{label}</Styled.Label>

      {subLabel ? <Styled.Label>{subLabel}</Styled.Label> : null}
    </Styled.IconWrapper>
  );
}
