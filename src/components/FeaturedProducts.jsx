import React from "react";
import NCard from "./NCard";

const FeaturedProducts = () => {
  const cardData = [
    {
      title: "Golden Votives Set",
      subtitle: "Votive",
      description: "VOTI_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718984046/11_1.jpg",
    },
    {
      title: "Flower Vase",
      subtitle: "Vase",
      description: "VASE_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718983534/10_1.jpg",
    },
    {
      title: "Classic Orange Pumpkin",
      subtitle: "Pumpkin",
      description: "PUMP_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718983362/9_1.jpg",
    },
    {
      title: "Classic Glass Jar",
      subtitle: "Jar",
      description: "JAR_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718983198/8_1.jpg",
    },
    {
      title: "Tall Glass Candle Holder",
      subtitle: "Candle Holder",
      description: "CANH_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718983133/7_1.jpg",
    },
    {
      title: "White Snowflake Tree",
      subtitle: "Christmas Tree",
      description: "CHRT_7",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718983080/6_7.png",
    },
    {
      title: "Green Pinecones",
      subtitle: "Christmas Hanging",
      description: "CHRH_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718970117/5_1.jpg",
    },
    {
      title: "Green Candle Holder",
      subtitle: "Candle Stand",
      description: "CANS_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718968912/4_1.jpg",
    },
    {
      title: "Green Leaf Candle",
      subtitle: "Candle factory",
      description: "CANF_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718967610/3_1.jpg",
    },
    {
      title: "Glass Dome Cake Stand",
      subtitle: "Cake Stand",
      description: "CAKS_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718964193/2_1.jpg",
    },
    {
      title: "Geometric Flower Vase",
      subtitle: "Antique",
      description: "ANTI_1",
      imageSrc:
        "https://res.cloudinary.com/dndg4fwia/image/upload/v1718962798/1_1.png",
    },
  ];

  return (
    <div className="h-auto pt-8  sm:pt-8">
      <h1 className="font-extrabold text-4xl text-center mb-12">
        Our Top Products
      </h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {cardData.map((data, index) => (
          <NCard
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            imageSrc={data.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
