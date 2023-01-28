const express = require("express");
const { createRequire } = require("module");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/banner", (req, res) => {
  const banner = [
    {
      header: "melhores ofertas personalizadas",
      titulo: "queima de stoque",
      subtitulo:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      cta: "ver ofertas",
      link: "/ofertas",
      img: "",
    },
    {
      header: "melhores ofertas personalizadas2",
      titulo: "queima de stoque2",
      subtitulo:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.2",
      cta: "ver ofertas2",
      link: "/ofertas2",
      img: "",
    },
  ];
  res.send(banner);
});
app.get("/busca", (req, res) => {
  const termo = req.query.q
  console.log(req.query.q)
  const busca = [
    {
      categoria:"tenis",
      titulo:"calcados",
      descricao:"calcados",
      preço:"100,00", 
      desconto: "50",
      img: "1",

    },
    {
      categoria:"tenis",
      titulo:"calcados",
      descricao:"calcados",
      preço:"100,00", 
      desconto: "50",
      img: "1",
    },
  ];
  res.send(busca);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
