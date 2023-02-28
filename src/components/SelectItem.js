import React, {useState, useEffect} from "react";
import "./SelectItem.css"

const SelectItem =()=>{
    const [shopType, setshopType]=useState(["Type"]);//List of shop types
    const [selectedShop, setSelectedShop]=useState("");//chosen type
    const[itemsList, setItemsList]=useState(["List"]);//list of products
    const [selectedList, setSelectedList]=useState("");//chosen product

    useEffect(()=>{
        setshopType(["Type", "Fruits", "Vegetables"]);
    }, []);

    const typeChangeHandler =(event)=>{
        setSelectedShop(event.target.value);
        changeMyList(event.target.value);
    }

     const changeMyList = (selectedShop) => {
       if (selectedShop === "Fruits") {
         setItemsList(["List", "Apple", "Pear", "Peach"]);
       } else if (selectedShop === "Vegetables") {
         setItemsList(["List", "Tomato", "Potato", "Onion"]);
       }
     };
 
    const shopChangeHandler = (event) => {
     setSelectedList(event.target.value)
    };

      return (
        <div className="item">
          My Shop
          <div>
            <select className="border-control" onChange={typeChangeHandler}>
              {shopType.map((type) => {
                return <option key={type}>{type}</option>;
              })}
            </select>
          </div>
          <div>
            <select className="border-control" onChange={shopChangeHandler}>
              {itemsList.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className="border-control">{`You have chosen ${selectedShop}, ${selectedList}`}</div>
        </div>
      );
}

export default SelectItem;