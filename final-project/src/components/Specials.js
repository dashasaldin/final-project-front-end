import React from "react";

const cardData = [
    { image: 'images/greek salad.jpg', title: 'Greek salad', description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
    { image: 'images/bruchetta.jpg', title: 'Bruchetta', description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " },
    { image: 'images/lemon dessert.jpg', title: 'Lemon dessert', description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." }
  ];

  const Card = ({ image, title, description }) => {
    return (
      <div className="card">
       <div className="card-image">
       <img src={image} alt="Card" />
       </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  const Gallery = () => {
    return (
      <div className="gallery">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    );
  };

export const Specials = () => {
    return (
        <section className="specials">
            <div className="special-item">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <Gallery />
        </section>
    )
}