import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const RSP = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value, className }) {
  const src = RSP[value];
  return <img src={src} alt={value} className={className} />;
}

export default HandIcon;
