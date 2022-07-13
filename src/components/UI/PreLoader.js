import { usePreLoader } from "../../hooks/use-PreLoader";
import RingLoader from "react-spinners/RingLoader";
import "../../styles/PreLoader.css";

export const PreLoader = () => {
  // PRELOADER IN STARTING OF APPLICATION..
  const PreLoading = usePreLoader();
  return (
    <div className="PreLoading">
      <RingLoader color={"#27659a"} loading={PreLoading} size={70} />
      <p>Loading....</p>
    </div>
  );
};
