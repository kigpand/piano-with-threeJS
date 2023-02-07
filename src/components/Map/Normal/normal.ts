import { PlayList } from "./../../utils/playList";

export default function normal() {
  const container = document.createElement("div");
  container.style.width = "100vw";
  container.style.height = "100vh";
  const playList = PlayList.getInstance();
}
