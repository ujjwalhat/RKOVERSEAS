import React, { useEffect, useState } from "react";
import NNavbar from "../components/NNavbar";
import Footer from "../components/Footer";
import {
  antiqueData,
  cakeStandData,
  candleFactoryData,
  candleStandData,
  christmashangingdata,
  christmastreeData,
  candleHolderData,
  jarData,
  pumpkinData,
  vasedata,
  votivesData,
} from "../../storedata/mydata";
import { Select, SelectItem,Button } from "@nextui-org/react";
import ProdCard from "../components/ProdCard";

const Products = () => {
  const cats = [
    { key: "0", label: "All Items" },
    { key: "1", label: "Antique" },
    { key: "2", label: "Cake Stand" },
    { key: "3", label: "Candle Factory" },
    { key: "4", label: "Candle Stand" },
    { key: "5", label: "Christmas Hanging" },
    { key: "6", label: "Christmas Tree" },
    { key: "7", label: "Candle Holder" },
    { key: "8", label: "Jars" },
    { key: "9", label: "Pumpkins" },
    { key: "10", label: "Vase" },
    { key: "11", label: "Votive" },
  ];

  const allItems = [
    ...antiqueData,
    ...cakeStandData,
    ...candleFactoryData,
    ...candleStandData,
    ...christmashangingdata,
    ...christmastreeData,
    ...candleHolderData,
    ...jarData,
    ...pumpkinData,
    ...vasedata,
    ...votivesData,
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(allItems);

  const [category, setCategory] = useState("0");
  const [items, setItems] = useState(allItems);
  const [visibleItems, setVisibleItems] = useState(12);

  useEffect(() => {
    if (category === "1") {
      setItems(antiqueData);
    } else if (category === "2") {
      setItems(cakeStandData);
    } else if (category === "3") {
      setItems(candleFactoryData);
    } else if (category === "4") {
      setItems(candleStandData);
    } else if (category === "5") {
      setItems(christmashangingdata);
    } else if (category === "6") {
      setItems(christmastreeData);
    } else if (category === "7") {
      setItems(candleHolderData);
    } else if (category === "8") {
      setItems(jarData);
    } else if (category === "9") {
      setItems(pumpkinData);
    } else if (category === "10") {
      setItems(vasedata);
    } else if (category === "11") {
      setItems(votivesData);
    } else {
      setItems(allItems);
    }
    setVisibleItems(12); // Reset visible items when category changes
  }, [category]);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  return (
    <>
      <NNavbar />
      <div className="mt-4 flex justify-center items-center">
        <div className="lg:w-[30vw] sm:w-[30vw] w-[32vw] ">
          <Select
            items={cats}
            label="Category"
            placeholder="Select a Category"
            className="md:w-full"
            onChange={(e) => setCategory(e.currentKey)}
          >
            {(cat) => (
              <SelectItem key={cat.key} value={cat.key}>
                {cat.label}
              </SelectItem>
            )}
          </Select>
        </div>
      </div>
      <div className="gap-3 grid grid-cols-1 mx-16 sm:grid-cols-4 md:mx-32 mt-8">
        {items.slice(0, visibleItems).map((item) => (
          <ProdCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            imageURL={item.imageUrl}
          />
        ))}
      </div>
      {visibleItems < items.length && (
        <div className="flex justify-center mt-8">
          <Button onPress={loadMore} color="warning" variant="light">
            Load More
          </Button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
