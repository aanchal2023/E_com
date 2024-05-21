import image1 from "../Img/Rice.jpg";
import image2 from "../Img/flour.jpg";
import image3 from "../Img/oil.jpg";
// import image4 from "../Img/ghee.jpg";
import Card from "./Card";

const jsonDataArray = [
  {
    title: "Rise",
    image:image1,
    image2: image2,
    image3:image3
  },
  {
    title: "Oil",
    image:image1,
    image2: image2,
    image3:image3
  },
  {
    title: "Ghee",
    image:image1,
    image2: image2,
    image3:image3
  },
  {
    title: "Flour",
    image:image1,
    image2: image2,
    image3:image3
  }
];
function MyjsonData() {
  return (
    <>
      <Card jsonDataArray={jsonDataArray} />
      
    </>
  );
}

export default MyjsonData;
