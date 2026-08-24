import Hero from "./componenets/heroPage/Hero";

const App = () => {
  const userData = [
    {
      img: "https://i.pinimg.com/736x/34/2e/81/342e81d60b16446ae3137d8953e6cc34.jpg",
      info: "Prime cusotmers,that have access to bank credit and are satisied with the current product.",
      btn: "Satisied",
      col: "#a8daf9"

    },
    {
      img: "https://i.pinimg.com/webp85/736x/21/a2/f2/21a2f2c21078dc3920a18a635444f9ac.webp",
      info: "Prime cusotmers,that have access to bank credit and are not satisied with the current sevices.",
      btn: "Underserved",
      col: "#92d2f9"
    },
    {
      img: "https://i.pinimg.com/736x/c3/98/34/c39834a2a687a557c7ae2dfd230f359e.jpg",
      info: "Cusotmers from near-prime and sub-prime segments with no access to bank credit",
      btn: "Underbanked",
      col: "#92d2d8"
    },
    {
      img: "https://i.pinimg.com/736x/34/2e/81/342e81d60b16446ae3137d8953e6cc34.jpg",
      info: "Prime cusotmers,that have access to bank credit and are satisied with the current product.",
      btn: "Satisied",
      col: "#a8daf9"
    },
    {
      img: "https://i.pinimg.com/webp85/736x/21/a2/f2/21a2f2c21078dc3920a18a635444f9ac.webp",
      info: "Prime cusotmers,that have access to bank credit and are not satisied with the current sevices.",
      btn: "Underserved",
      col: "#92d2f9"
    },
    {
      img: "https://i.pinimg.com/736x/c3/98/34/c39834a2a687a557c7ae2dfd230f359e.jpg",
      info: "Cusotmers from near-prime and sub-prime segments with no access to bank credit",
      btn: "Underbanked",
      col: "#92d2d8"
    },
  ];
  return <>
    <Hero user={userData} />
  </>
}

export default App;