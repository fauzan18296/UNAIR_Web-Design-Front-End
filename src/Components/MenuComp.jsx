import { Container, Row, Col } from "react-bootstrap";
import food1 from "../assets/IMG/images-menu/food1.jpeg";
import food2 from "../assets/IMG/images-menu/food2.jpeg";
import food3 from "../assets/IMG/images-menu/food3.jpeg";
import food4 from "../assets/IMG/images-menu/food4.jpeg";
import food5 from "../assets/IMG/images-menu/food5.jpeg";
import food6 from "../assets/IMG/images-menu/food6.jpeg";
import drink1 from "../assets/IMG/images-menu/drink1.jpeg";
import drink2 from "../assets/IMG/images-menu/drink2.jpeg";
import drink3 from "../assets/IMG/images-menu/drink3.jpeg";
import drink4 from "../assets/IMG/images-menu/drink4.jpeg";
import drink5 from "../assets/IMG/images-menu/drink5.jpeg";
import drink6 from "../assets/IMG/images-menu/drink6.jpeg";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import React from "react";

const MenuComp = React.forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 40
    })
  })
  // data dummy image makanan
  const imagesFood = [
   {
      id: 1,
      src: food1,
      name: "Matcha Pancake",
      price: "Rp 35.000",
    },
    {
      id: 2,
      src: food2,
      name: "Muffin Cake",
      price: "Rp 16.000",
    },
    {
      id: 3,
      src: food3,
      name: "Potato Balls",
      price: "Rp 15.000",
    },
    {
      id: 4,
      src: food4,
      name: " Pink Macaroons ",
      price: "Rp 18.000",
    },
    {
      id: 5,
      src: food5,
      name: "Roast Beef",
      price: "Rp 55.000",
    },
    {
      id: 6,
      src: food6,
      name: "Sourdough Bread",
      price: "Rp 25.000",
    },
  ];

  // data dummy image minuman
  const imagesDrink = [
    {
      id: 1,
      src: drink1,
      name: "Kiwi Mojito",
      price: "Rp 15.000",
    },
    {
      id: 2,
      src: drink2,
      name: "Apple Coctail",
      price: "Rp 25.000",
    },
    {
      id: 3,
      src: drink3,
      name: "Orange Juice",
      price: "Rp 15.000",
    },
    {
      id: 4,
      src: drink4,
      name: "Red Cocktail",
      price: "Rp 18.000",
    },
    {
      id: 5,
      src: drink5,
      name: "Lemon Tea",
      price: "Rp 15.000",
    },
    {
      id: 6,
      src: drink6,
      name: "Spear Mint",
      price: "Rp 20.000",
    },
  ];

  return (
    <>
    {/* Section Menu Makanan */}
    <div ref={ref} className="menu-kuliner" >
      <h2 className="text-center fs-1">
        Menu <span>Food</span>
        </h2>
        <div data-aos='fade-right'
          data-aos-easing="ease-in-out-back"
          transition-duration='2000ms'
        >
      <Container className="menu-container d-flex justify-content-center align-items-center">
        <Row className="d-flex align-items-center justify-content-center row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-2 my-2 mx-auto">
          {/* Memunculkan dummy data gambar Food*/}
          {imagesFood.map((imgFood) => (
            <Col className="item-menu my-3 mx-auto" key={imgFood.id}>
              <img src={imgFood.src} alt={`image${imgFood.id}`} />
              <p className="menu-name  fw-semibold">{imgFood.name}</p>
              <button className="btn-menu p-1 fw-semibold">
                {imgFood.price}
              </button>
            </Col>
          ))}
        </Row>
          </Container>
          </div>
      </div>

      {/* Section Menu Minuman */}
      <div className="menu-kuliner">
      <h2 className="text-center fs-1">
        Menu <span>Drink</span>
        </h2>
        <div  data-aos='fade-left'
          data-aos-easing="ease-in-out-back"
          transition-duration='2000ms'>
      <Container className="menu-container d-flex justify-content-center align-items-center">
        <Row className="d-flex align-items-center justify-content-center row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-2 my-2 mx-auto">
          {/* Memunculkan dummy data gambar Drink*/}
          {imagesDrink.map((imgDrink) => (
            <Col className="item-menu my-3 mx-auto" key={imgDrink.id}>
              <img src={imgDrink.src} alt={`image${imgDrink.id}`} />
              <p className="menu-name fw-semibold">{imgDrink.name}</p>
              <button className="btn-menu p-1 fw-semibold">
                {imgDrink.price}
              </button>
            </Col>
          ))}
        </Row>
          </Container>
          </div>
      </div>
      </>
  );
});

export default MenuComp;
