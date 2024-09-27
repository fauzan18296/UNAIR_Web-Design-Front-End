import { Container, Row, Col } from 'react-bootstrap'
import food1 from "../assets/IMG/images-menu/food1.webp";
import food2 from "../assets/IMG/images-menu/food2.webp";
import food3 from "../assets/IMG/images-menu/food3.webp";
import food4 from "../assets/IMG/images-menu/food4.webp";
import food5 from "../assets/IMG/images-menu/food5.webp";
import food6 from "../assets/IMG/images-menu/food6.webp";
import drink1 from "../assets/IMG/images-menu/drink1.webp";
import drink2 from "../assets/IMG/images-menu/drink2.webp";
import drink3 from "../assets/IMG/images-menu/drink3.webp";
import drink4 from "../assets/IMG/images-menu/drink4.webp";
import drink5 from "../assets/IMG/images-menu/drink5.webp";
import drink6 from "../assets/IMG/images-menu/drink6.webp";

const CategoriesComp = () => {
  // data dummy image makanan
  const imagesFood = [
    {
      id: 1,
      src: food1,
      name: "Matcha Pancake",
      description: "Matcha pancake adalah pancake yang terbuat dari bubuk teh hijau matcha, memberikan warna hijau yang khas dan rasa yang unik. Cocok untuk sarapan atau camilan yang menyehatkan!",
    },
    {
      id: 2,
      src: food2,
      name: "Muffin Cake",
      description: "Muffin cake adalah kue yang mirip dengan muffin, tetapi biasanya memiliki tekstur yang lebih lembut dan ringan. Cocok untuk camilan atau dessert, muffin cake adalah pilihan yang lezat dan menggugah selera!",
    },
    {
      id: 3,
      src: food3,
      name: "Potato Balls",
      description: "Potato balls adalah camilan gurih yang terbuat dari kentang yang direbus dan dihaluskan, dicampur dengan bumbu dan bahan tambahan seperti keju, daging, atau sayuran. Biasanya disajikan dengan saus sambal atau saus tomat sebagai pelengkap.",
    },
    {
      id: 4,
      src: food4,
      name: "Pink Macaroons",
      description: "Pink macaroons adalah kue kecil yang terbuat dari adonan meringue berbasis putih telur dan gula, dicampur dengan bubuk almond, dan diberi pewarna makanan merah muda. Mereka tidak hanya lezat tetapi juga menambah keindahan pada meja saji!",
    },
    {
      id: 5,
      src: food5,
      name: "Roast Beef",
      description: "Roast beef adalah hidangan daging sapi yang dimasak dengan cara dipanggang utuh dalam oven hingga matang sempurna. Hidangan ini sangat populer sebagai hidangan utama pada acara spesial atau makan malam keluarga.",
    },
    {
      id: 6,
      src: food6,
      name: "Sourdough Bread",
      description: "Sourdough bread adalah roti yang dibuat dengan metode fermentasi alami menggunakan starter sourdough, yang merupakan campuran tepung dan air yang telah difermentasi dengan ragi dan bakteri alami. Cocok untuk dinikmati sendiri atau sebagai pendamping hidangan lainnya!",
    },
  ];

  // data dummy image minuman
  const imagesDrink = [
    {
      id: 1,
      src: drink1,
      name: "Kiwi Mojito",
      description: "Kiwi mojito adalah minuman segar yang merupakan variasi dari mojito klasik, menggabungkan rasa asam dari kiwi dengan mint segar dan lime. Disajikan dengan es dan hiasan irisan kiwi, minuman ini cocok untuk acara santai atau sebagai hidangan pembuka yang menyegarkan.",
    },
    {
      id: 2,
      src: drink2,
      name: "Apple Cocktail",
      description: "Apple cocktail adalah minuman segar yang terbuat dari perpaduan sari apel, alkohol (seperti vodka atau gin), dan bahan tambahan seperti jus lemon atau soda untuk memberikan rasa yang lebih kompleks.",
    },
    {
      id: 3,
      src: drink3,
      name: "Orange Juice",
      description: "Orange juice adalah minuman segar yang dibuat dari perasan buah jeruk segar. Dengan warna oranye cerah dan aroma yang menggugah selera, orange juice merupakan minuman yang menyegarkan dan menyenangkan!",
    },
    {
      id: 4,
      src: drink4,
      name: "Red Cocktail",
      description: "Red cocktail adalah minuman beralkohol yang memiliki warna merah cerah, biasanya terbuat dari kombinasi berbagai bahan seperti jus buah (seperti cranberry atau grenadine), minuman beralkohol (seperti vodka, rum, atau gin), dan kadang-kadang ditambahkan soda untuk memberikan kesegaran.",
    },
    {
      id: 5,
      src: drink5,
      name: "Lemon Tea",
      description: "Lemon tea adalah minuman yang terbuat dari campuran teh yang diseduh dengan perasan air lemon segar. Minuman ini sangat cocok dinikmati kapan saja, baik sebagai camilan sore atau sebagai minuman penyejuk di hari panas.",
    },
    {
      id: 6,
      src: drink6,
      name: "Spear Mint",
      description: "Spearmint adalah jenis mint yang dikenal dengan aroma dan rasa yang manis serta segar. Daunnya berwarna hijau cerah dan berbentuk oval, sering digunakan dalam masakan, minuman, dan sebagai bahan dalam berbagai produk seperti permen, pasta gigi, dan minyak esensial.",
    },
  ];
  return (
    <>
         {/* Deskripsi Makanan */}
    <div className='category-section'>
      <Container className='category d-flex justify-content-center align-items-center'>
         <h1 className='text-center'>Deskripsi <span>Makanan</span></h1>
        <Row className='row-cols-lg-4'>
          {imagesFood.map((food) => {
            return (
              <Col md={1} className='category-content my-3' key={food.id}>
                <div className='category-content'>
             <img src={food.src} alt="images" />
             <h3 className='my-2 fs-5'>{ food.name }</h3>
                  <p>{food.description}</p>
                  </div>
           </Col>
           )
          }) 
          }
    </Row>
      </Container>
      </div>
      {/* Deskripsi Minuman */}
    <div className='category-section'>
      <Container className='category d-flex justify-content-center align-items-center'>
         <h1 className='text-center'>Deskripsi <span>Minuman</span></h1>
        <Row className='row-cols-lg-4'>
          {imagesDrink.map((drink) => {
            return (
              <Col md={1} className='category-content my-3' key={drink.id}>
                <div className='category-content'>
             <img src={drink.src} alt="images" />
             <h3 className='my-2 fs-5'>{ drink.name }</h3>
                  <p>{drink.description}</p>
                  </div>
           </Col>
           )
          }) 
          }
    </Row>
      </Container>
      </div>
      </>
  )
}
export default CategoriesComp