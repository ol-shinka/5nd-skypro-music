import { useState } from "react";
import * as S from "./style";

export function AudioPlayerIcons(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <S.PlayerButton
      $style={props.alt}
      onClick={() => {
        setIsActive(!isActive);
        props.click();
      }}
    >
      <S.PlayerButtonSvg $style={props.alt} alt={props.alt} $active={isActive}>
        <use xlinkHref={`img/icon/sprite.svg#icon-${props.alt}`} />
      </S.PlayerButtonSvg>
    </S.PlayerButton>
  );
}
