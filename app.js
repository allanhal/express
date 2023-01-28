const express = require("express");
const app = express();
const port = 3000;
const busca = [
  {
    categoria: "tenis",
    titulo: "nike",
    descricao: "calcados",
    preço: "100,00",
    desconto: "50",
    img: "1",
  },
  {
    categoria: "tenis",
    titulo: "ardidas",
    descricao: "calcados",
    preço: "100,00",
    desconto: "50",
    img: "2",
  },
  {
    categoria: "tenis",
    titulo: "missuno",
    descricao: "calcados",
    preço: "100,00",
    desconto: "50",
    img: "3",
  },
];

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
  const termo = req.query.q;
  console.log(req.query.q);

  let novabusca = [];
  busca.forEach((element) => {
    if (element.titulo.includes(req.query.q)) {
      novabusca.push(element);
    }
  });
  res.send(novabusca);
});
app.get("/carrinho", (req, res) => {
  // const usuario = req.query.usuario
  const { usuario } = req.query;
  const carrinho = {
    jose: [busca[2]],
    joao: [],
    maria: [busca[0], busca[1], busca[2]],
  };

  console.log(usuario);

  res.send(carrinho[usuario]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
