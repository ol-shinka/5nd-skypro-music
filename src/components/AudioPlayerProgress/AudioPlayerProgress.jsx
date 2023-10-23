import * as S from "./style";
import { getDurationAudio } from "../../utils/durationAudio";

export function BarPlayerProgress({ duration, timeProgress, audioRef }) {
  return (
    <>
      <S.BarPlayerProgressTime>
        {getDurationAudio(timeProgress)} /{getDurationAudio(duration)}
      </S.BarPlayerProgressTime>
      <S.BarPlayerProgress
        type="range"
        onChange={(e) => {
          audioRef.current.currentTime = e.target.value;
        }}
        min={0}
        max={duration}
        value={timeProgress}
        step={0.1}
      />
    </>
  );
}
