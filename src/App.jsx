import { useEffect, useState } from "react";
import "./App.css";
import DrinkCard from "./Components/DrinkCard";
import Loading from "./Components/Loading";

function App() {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [product, setProduct] = useState([]);

  const fetchProduct = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.drinks))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="App">
      <div className="h-fit w-[100%] gap-[2rem] rounded-[.8rem]">
        <h1 className="font-[400] text-[2.5rem] lg:text-[5rem] text-center">
          Prime Drinks
        </h1>
        {product.length === 0 ? (
          <Loading />
        ) : (
          <section className="flex flex-wrap justify-center py-16 gap-16 p-4 bg-[#cafafe8f]">
            {product.map((prod) => (
              <DrinkCard
                key={prod.idDrink}
                image={prod.strDrinkThumb}
                name={prod.strDrink}
                category={prod.strCategory}
                occassion={prod.strIBA}
                type={prod.strAlcoholic}
                glass={prod.strGlass}
                instruction={prod.strInstructions}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
