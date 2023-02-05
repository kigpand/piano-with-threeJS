import PainoBody from "./components/PainoBody/PainoBody";
import space from "./components/Map/Space/space";
import "./styles/style.css";

function test() {
  const paino = new PainoBody();
  paino.init();

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "a") {
      paino.getKeyBoard("Do").play();
    } else if (e.key === "w") {
      paino.getKeyBoard("Do_").play();
    } else if (e.key === "s") {
      paino.getKeyBoard("Re").play();
    } else if (e.key === "e") {
      paino.getKeyBoard("Re_").play();
    } else if (e.key === "d") {
      paino.getKeyBoard("Me").play();
    } else if (e.key === "f") {
      paino.getKeyBoard("Pa").play();
    } else if (e.key === "t") {
      paino.getKeyBoard("Pa_").play();
    } else if (e.key === "g") {
      paino.getKeyBoard("Sol").play();
    } else if (e.key === "y") {
      paino.getKeyBoard("Sol_").play();
    } else if (e.key === "h") {
      paino.getKeyBoard("Ra").play();
    } else if (e.key === "u") {
      paino.getKeyBoard("Ra_").play();
    } else if (e.key === "j") {
      paino.getKeyBoard("Si").play();
    } else if (e.key === "k") {
      paino.getKeyBoard("HighDo").play();
    }
  });
}

test();
space();
