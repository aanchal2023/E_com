import image1 from "../Img/Rice.jpg";
import image2 from "../Img/flour.jpg";
import image3 from "../Img/oil.jpg";
import image4 from "../Img/ghee.jpg";
import CircleCard from "./CircleCard";

const jsonDataArray = [
  {
    title: "Rise",
    image:image1
  },
  {
    title: "Oil",
    image:image2
  },
  {
    title: "Ghee",
    image:image3
  },
  {
    title: "Flour",
    image:image4
  }
];
function Mydata() {
  return (
    <>
      <CircleCard jsonDataArray={jsonDataArray} />
      
    </>
  );
}

export default Mydata;
