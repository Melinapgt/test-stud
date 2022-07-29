import { useEffect } from "react";
import axios from "axios";

const Content = (props) => {
  //Passage de Props en destructuring
  const { search, data, setData, isLoading, setIsLoading } = props;

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
  }, [search, setData, setIsLoading]);

  return (
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
  );
};

export default Content;
