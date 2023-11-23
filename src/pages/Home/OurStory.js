import React from "react";
import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          In the heart of the vibrant city of Chicago, there exists a culinary
          haven known as Little Lemon. Our story is a delightful journey
          inspired by a zest for life and a passion for exquisite flavors.
        </p>
        <p>
          It all started with two visionary chefs, Mario and Adrian, whose
          culinary expertise transformed ordinary ingredients into extraordinary
          culinary creations. Their dedication to freshness and creativity
          became the hallmark of Little Lemon.
        </p>
        <p>
          Little Lemon is not just a restaurant; it's an experience. Our chefs
          meticulously craft each dish, blending flavors and textures to create
          a symphony for your taste buds. From the first bite to the last, every
          moment at Little Lemon is a celebration of culinary artistry.
        </p>
        <p>
          Join us on this gastronomic adventure. Explore the menu that reflects
          our commitment to quality and innovation. Immerse yourself in the cozy
          ambiance and let the flavors transport you to a world of culinary
          delight.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
