const express = require("express");

const app = express();

app.get("/types", function (req, res) {
  // Как будто взяли из Базы данных
  const types = insertShopTypes();

  // Возвращаем результат
  res.send(types);
});

app.get("/items", function (req, res) {
  // Вычленяем параметр из реквеста
  const type = req.query.type;

  // Как будто взяли из Базы данных
  const items = insertListOfItems(type);

  // Возвращаем результат
  res.send(items);
});

// app.get("/items/:id", function (req, res) {
//   console.log(req.params.id);
//   res.send("HELLO");
// });

function insertShopTypes() {
  return ["My Shop Types", "Type 1", "Type 2", "Type 3", "Type 4"];
}

function insertListOfItems(myShopType) {
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

app.listen(2000, function () {
  console.log("Server started on port 2000");
});
