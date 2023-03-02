export function insertShopTypes(insertedShopTypes) {
  return ["My Shop Types", "Type 1", "Type 2", "Type 3", "Type 4"];
}

export function insertListOfItems(myShopType) {
  let listOfProducts = [];
  switch (myShopType) {
    case "Type 1": {
      listOfProducts = ["shop Title", "A", "B", "C"];
      break;
    }
    case "Type 2": {
      listOfProducts = ["shop Title", "D", "E", "F"];
      break;
    }
    case "Type 3": {
      listOfProducts = ["shop Title", "G", "H", "I"];
      break;
    }
    default: {
      listOfProducts = ["Unsupported type"];
    }
  }
  return listOfProducts;
}
