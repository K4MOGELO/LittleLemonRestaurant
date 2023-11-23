import React from "react";
import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Maria Sanchez",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon has been a delightful discovery for me. The flavors are exceptional, 
      and the attention to detail in every dish is truly remarkable.`,
  },
  {
    fullName: "Antony Clifton",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `As a food enthusiast, I can confidently say that Little Lemon is a culinary gem. 
      The ambiance, service, and, most importantly, the food, are top-notch.`,
  },
  {
    fullName: "Tamika Jackson",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I love the creativity that Chef Mario and Chef Adrian bring to the table. Each visit 
      is a new adventure for my taste buds, and I'm always eager to try something new.`,
  },
  {
    fullName: "Brandon Ming",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Little Lemon never disappoints. The menu is diverse, the ingredients are fresh, 
      and the overall experience is nothing short of fantastic.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
