// Main import of React
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// Local components import

//# Local Imports
/* import useFetch from "../hooks/useFetch"; */
import {
  getScenery,
  getGeneralInformation,
} from "../services/TestReactQueryRequest";
import { queryClient } from "../services/queryClient";

// Style import

function TestReactQuery() {
  //Define States for Scenery - Whit useFetch()
  /* const [scenery, setScenery] = useState([]);
  const [errorScenery, setErrorScenery] = useState("");
  const [loadingScenery, setLoadingScenery] = useState(false);
  const [controllerScenery, setControllerScenery] = useState();

  // Get axios Fetch Object
  const axiosFetchScenery = useFetch(
    setScenery,
    setErrorScenery,
    setLoadingScenery,
    setControllerScenery,
    controllerScenery
  );

  // Define Get Scenery Function
   const getScenery = async () => {
    await axiosFetchScenery(getSceneryRequest);
  };

  // Only fetch when page is Mounted
  useEffect(() => {
    getScenery();
    
  }, []);
 */

  /* Using React Query */
  const { id } = useParams();
  const {data: scenery,isLoading: sceneryLoading, error: errorScenery } = useQuery("cenario", ({ signal }) => getScenery(id, signal) );
  const { data: generalInfo, isLoading: generalInfoLoading, error: errorLoading } = useQuery("generalInfo", ({ signal }) => getGeneralInformation(id, signal));

  console.log(scenery);
  console.log(generalInfo);

  if (errorLoading || errorScenery) {
    console.log("Alguma coisa deu errada");
    return <h1>Ops! Algum erro inesperado aconteceu</h1>;
  }

  if (scenery === null || generalInfo === null) {
    return <h1>Informações não encontradas!</h1>;
  }

  if (sceneryLoading || generalInfoLoading) {
    return <h1>Carrregando</h1>;
  }

  return (
    <div>
      <h2>Dados de Cenário</h2>
      {scenery?.map((item, index) => {
        return (
          <div key={index}>
            <ul>
              <li> Air Gap: {item.air_gap}</li>
              <li>
                Casing Shoe Measured Depth: {item.casing_shoe_measured_depth}
              </li>
            </ul>
          </div>
        );
      })}
      <h2>Dados de Informações Gerais</h2>
      {generalInfo?.map((item, index) => {
        return (
          <div key={index}>
            <ul>
              <li> Rig Name: {item.rig_name}</li>
              <li>
                 Field: {item.field}
              </li>
            </ul>
          </div>
        );
      })}
      <button onClick={queryClient.cancelQueries("generalInfo")}>Abort</button>
    </div>
  );
}

export default TestReactQuery;
