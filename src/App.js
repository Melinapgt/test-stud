import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // Paramétrage des states
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  // Chargement des fleurs (Par défaut, toutes fleurs sont chargées) 50 par pages
  useEffect(() => {
    const getFLowers = async () => {
      // par défaut un filtre flowers est utilisé pour la requête
      if (!search) {
        const response = await axios.get(
          "https://pixabay.com/api/?key=11760152-6c0c19594216a631a946499b6&q=flowers&image_type=photo&pretty=true&per_page=50&lang=fr"
        );
        console.log("response data getFlowers =>", response.data);
        setData(response.data);
        setIsLoading(false);

        // Si recherche par mots clés, on y ajoute les termes de la recherches
      } else {
        const response = await axios.get(
          `https://pixabay.com/api/?key=11760152-6c0c19594216a631a946499b6&q=flowers+${search}&image_type=photo&pretty=true&per_page=50&lang=fr`
        );
        console.log("response data getFlowers =>", response.data);
        setData(response.data);
        setIsLoading(false);
      }
    };
    getFLowers();
  }, [search]);

  //Saisie de la recherche
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <header className="h-24 bg-orange-200 w-screen flex items-center p-2 ">
        <div className="mr-14">Test technique</div>
        <div className="w-1/3">
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Recherche par mots clés"
            onChange={handleChange}
          />
        </div>
      </header>
      <div className="p-5 w-screen ">
        {isLoading ? (
          <div>En cours de chargement...</div>
        ) : (
          <div className=" flex flex-wrap place-content-center ">
            {data.hits.map((flower, index) => {
              const picture = flower.largeImageURL;
              return (
                <div className=" w-80 mr-2.5 mb-2.5" key={index}>
                  <img
                    className="h-full object-cover object-center"
                    src={picture}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <footer className="h-24 bg-orange-200 w-screen flex flex-col justify-center items-center p-2 ">
        {" "}
        <div> Test réalisé par Mélina</div>
        <div>
          {" "}
          👉🏽 Par ici pour voir le projet sur{" "}
          <a
            className="font-bold"
            href="https://github.com/Melinapgt/test-stud"
          >
            git
          </a>{" "}
        </div>
        <div>A très bientôt 👩🏽‍💻👋🏽 </div>
      </footer>
    </div>
  );
}

export default App;
