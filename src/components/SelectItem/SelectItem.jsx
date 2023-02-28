import React, { useState, useEffect } from "react";
import "./SelectItem.css";

const SelectItem = () => {
  const shopTypeTitle = "Shop Type";
  const shopItemTitle = "Shop Item";

  const fruitsTitle = "Fruits";
  const vegetablesTitle = "Vegetables";
  const milkProductsTitle = "Milk Products";

  const [shopTypes, setShopTypes] = useState([shopTypeTitle]); //List of shop types
  const [selectedShopType, setSelectedShopType] = useState(""); //chosen type
  const [shopItems, setShopItems] = useState([shopItemTitle]); //list of products
  const [selectedShopItem, setSelectedShopItem] = useState(""); //chosen product

  useEffect(() => {
    setShopTypes([
      shopTypeTitle,
      fruitsTitle,
      vegetablesTitle,
      milkProductsTitle,
      "Drinks",
    ]);
  }, []);

  const onChangeTypeHandler = (event) => {
    setSelectedShopType("");
    setSelectedShopItem("");
    setSelectedShopType(event.target.value);
    fillItems(event.target.value);
  };

  const fillItems = (selectedShopType) => {
    switch (selectedShopType) {
      case fruitsTitle: {
        setShopItems([shopItemTitle, "Apple", "Pear", "Peach"]);
        break;
      }
      case vegetablesTitle: {
        setShopItems([shopItemTitle, "Tomato", "Potato", "Onion"]);
        break;
      }
      case milkProductsTitle: {
        setShopItems([shopItemTitle, "Yogurt", "Cheese", "Milk"]);
        break;
      }
      default: {
        setShopItems(["Unsuported type"]);
      }
    }
  };

  const onChangeItemHandler = (event) => {
    setSelectedShopItem(event.target.value);
  };

  return (
    <div className="item">
      My Shop
      <div>
        <select className="border-control" onChange={onChangeTypeHandler}>
          {shopTypes.map((type) => {
            return <option key={type}>{type}</option>;
          })}
        </select>
      </div>
      <div>
        <select className="border-control" onChange={onChangeItemHandler}>
          {shopItems.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <div className="border-control">{`You have chosen ${selectedShopType}, ${selectedShopItem}`}</div>
    </div>
  );
};

export default SelectItem;
