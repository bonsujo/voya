import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    description:
      "A city rich in history, famous for its ancient temples, traditional tea houses, and stunning cherry blossoms. Walk through bamboo forests, visit golden shrines, and experience the beauty of old Japan.",
    image: "/kyoto.jpg",
  },
  {
    id: 2,
    name: "Reggio Calabria, Italy",
    description:
      "A hidden gem in southern Italy with stunning coastal views, rich history, and authentic cuisine. It’s known for its picturesque beaches, ancient ruins, and delicious Calabrian food.",
    image: "/calabria.jpg",
  },
  {
    id: 3,
    name: "Koh Samui, Thailand",
    description:
      "A tropical paradise with white sand beaches, lush jungles, and vibrant nightlife. With luxury resorts and stunning temples, it’s gaining even more attention from White Lotus season 3.",
    image: "/samui.jpg",
  },
  {
    id: 4,
    name: "Tromsø, Norway",
    description:
      "One of the best places to see the Northern Lights, enjoy winter sports, and experience Arctic culture. This charming city offers breathtaking fjords, dog sledding, and cozy Scandinavian cafés.",
    image: "/tromso.jpeg",
  },
];

const attractions = [
  {
    id: 1,
    name: "Eiffel Tower",
    location: "Paris, France",
    description: "Iconic symbol of France, offering breathtaking city views.",
    image: "/eiffel.png",
  },
  {
    id: 2,
    name: "Machu Picca",
    location: "Peru",
    description: "Inca citadel perched high in the Andes with breathtaking views and archaeological wonders.",
    image: "/machu_picca.png",
  },
  {
    id: 3,
    name: "Great Wall of China",
    location: "China",
    description: "One of the greatest architectural feats in history.",
    image: "/great_wall.png",
  },
  {
    id: 4,
    name: "Pyramids of Giza",
    location: "Egypt",
    description:
      "Ancient wonders that showcase incredible engineering and the mysteries of ancient Egypt.",
    image: "/giza_pyramids.png",
  },
  {
    id: 5,
    name: "Leaning Tower of Piza",
    location: "Italy",
    description:
      "A freestanding bell tower known for its unintended tilt, a marvel of medieval engineering and architecture.",
    image: "/piza_tower.png",
  },
];
export const Destinations = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === attractions.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? attractions.length - 1 : prev - 1));
  };

  return (
    <div className="h-screen bg-[#241a1a] relative z-50">
      {/* Popular Destinations */}
      <h1 className="text-2xl md:text-4xl text-left p-8">
        Popular Destinations
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 pt-6"
      >
        {destinations.map((destination) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            key={destination.id}
            className="flex items-center justify-center flex-col p-2"
          >
            <div className="">
              <Image
                src={destination.image}
                alt="destination images"
                width={250}
                height={250}
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl"
            >
              {destination.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=""
            >
              {destination.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      {/* Top Attractions */}
      <div className="mt-16 p-8">
        <h2 className="text-2xl md:text-4xl text-left mb-4">Top Attractions</h2>
        <div className="flex justify-center items-center relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 p-2 bg-[#241a1a] text-white rounded-full"
          >
            ◀
          </button>
          <motion.div
            key={attractions[current].id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={attractions[current].image}
              alt={attractions[current].name}
              width={300}
              height={300}
              style={{
                objectFit: 'cover',
                width: attractions[current].name === "Paris" ? "100%" : "auto", // Adjust for Paris image
                height: attractions[current].name === "Paris" ? "100%" : "auto", // Adjust for Paris image
              }}
            />
            <h3 className="text-3xl mt-4">{attractions[current].name}</h3>
            <p className="text-lg text-gray-400">
              {attractions[current].location}
            </p>
            <p className="mt-2">{attractions[current].description}</p>
          </motion.div>
          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 bg-[#241a1a] text-white rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};
