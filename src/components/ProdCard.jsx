import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function ProdCard({id,name,category,imageURL}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">
  {category} - {
    category.split(' ').length === 2 
      ? category.split(' ')[0].slice(0, 3) + category.split(' ')[1].slice(0, 1) 
      : category.slice(0, 4)
  }_{id}
</p>
        <small className="text-default-500"></small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageURL}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
