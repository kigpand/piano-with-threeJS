import Do from "../audio/do.mp3";
import Do_ from "../audio/do_.mp3";
import HighDo from "../audio/highDo.mp3";
import Re from "../audio/re.mp3";
import Re_ from "../audio/re_.mp3";
import Me from "../audio/me.mp3";
import Pa from "../audio/pa.mp3";
import Pa_ from "../audio/pa_.mp3";
import Sol from "../audio/sol.mp3";
import Sol_ from "../audio/sol_.mp3";
import Ra from "../audio/ra.mp3";
import Ra_ from "../audio/ra_.mp3";
import Si from "../audio/si.mp3";

export type MusicType =
  | "Do"
  | "Do_"
  | "Re"
  | "Re_"
  | "Me"
  | "Pa"
  | "Pa_"
  | "Sol"
  | "Sol_"
  | "Ra"
  | "Ra_"
  | "Si"
  | "HighDo";

export type KeyBoradType = {
  key: string;
  music: MusicType;
  play: string;
};

export const keyboardSet: KeyBoradType[] = [
  {
    key: "a",
    music: "Do",
    play: Do,
  },
  {
    key: "w",
    music: "Do_",
    play: Do_,
  },
  {
    key: "s",
    music: "Re",
    play: Re,
  },
  {
    key: "e",
    music: "Re_",
    play: Re_,
  },
  {
    key: "d",
    music: "Me",
    play: Me,
  },
  {
    key: "f",
    music: "Pa",
    play: Pa,
  },
  {
    key: "t",
    music: "Pa_",
    play: Pa_,
  },
  {
    key: "g",
    music: "Sol",
    play: Sol,
  },
  {
    key: "y",
    music: "Sol_",
    play: Sol_,
  },
  {
    key: "h",
    music: "Ra",
    play: Ra,
  },
  {
    key: "u",
    music: "Ra_",
    play: Ra_,
  },
  {
    key: "j",
    music: "Si",
    play: Si,
  },
  {
    key: "k",
    music: "HighDo",
    play: HighDo,
  },
];
