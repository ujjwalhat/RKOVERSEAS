import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function SelectCat() {
    const cats = [
        {key: "antique", label: "Antique"},
        {key: "Cake Stand", label: "Cake Stand"},
      ];
      
  return (
    <Select
      items={cats}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      {(cat) => <SelectItem>{cat.label}</SelectItem>}
    </Select>
  );
}
