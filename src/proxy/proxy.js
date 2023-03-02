// export function insertShopTypes() {
//   const typesAsString = httpGet("http://localhost:2000/types");
//   const typesAsArray = JSON.parse(typesAsString);
//   return typesAsArray;
// }

// export function insertListOfItems(myShopType) {
//   const url = `http://localhost:2000/items?type=${myShopType}`;
//   const itemsAsString = httpGet(url);
//   const itemsAsArray = JSON.parse(itemsAsString);
//   return itemsAsArray;
// }

// Делает синхронный запрос
// function httpGet(theUrl) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.open("GET", theUrl, false); // false for synchronous request
//   xmlHttp.send(null);
//   return xmlHttp.responseText;
// }

export async function insertShopTypes() {
  const typesResponse = await fetch("http://localhost:2000/types");
  const typesAsArray = await typesResponse.json();
  return typesAsArray;
}

export async function insertListOfItems(myShopType) {
  const url = `http://localhost:2000/items?type=${myShopType}`;
  const itemsResponse = await fetch(url);
  const itemsAsArray = await itemsResponse.json();
  return itemsAsArray;
}
