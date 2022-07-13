import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { Form } from "../components/form/Form";
import { Nodata } from "../components/UI/Nodata";
import "../styles/Home.css";

export const Home = () => {
  const [DataResults, setSearchResults] = useContext(AppContext); // USING GLOBAL STATE WHICH WAS CREATED IN App.js(1)

  // const [SearchValid, setSearchValid] = useState(true); // SEARCH-VALIDATIONS

  const searchvalue = useRef(null); // USING (Useref) TO FETCH THE DATA FROM THE INPUT FIELD INITIALLY T IS SET TO NULL..

  const handleFormSubmit = async (event) => { // FORM HANDLER..

    event.preventDefault(); // THIS AVOIDS FORM SUBMISSION..

    if (searchvalue.current.value === "") { // IF NO DATA ENTERED IN INPUT FIELD IT RETURNS THE VALUE (null) AND FORM IS NOT BEEN SUBMITTED..
      // setSearchValid(false);
      setSearchResults(null);
      return;
    }

    let searchRes = await fetch(
      // FETCHING THE DATA BASED ON VALUE ENTERED IN SEARCH BOX
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchvalue.current.value}`
    );
    searchRes = await searchRes.json();
    searchRes = searchRes.query.search;
    setSearchResults(searchRes);
  };

  return ( // IT RETURNS A JSX CODE..
  
    <>
      {/* {!SearchValid && <p>Please add the value</p>} */}

      <Form
        // SearchValid={SearchValid}
        response={handleFormSubmit}
        ref={searchvalue}
      />
      <table className="table table-hover tableheader">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Posted on</th>
          </tr>
        </thead>
        <tbody className="tableheight">
          {DataResults === null ? ( // IF THERE IS NOTHING SEARCHED RETURN (<Nodata/>) COMPONENT..
            <Nodata />
          ) : (
            DataResults.map((item, k) => {
              // MAPPING IS DONE HERE, FOR TITLE, DESCRIPTION, TIMESTAMP..
              return (
                <tr key={k} className="content">
                  <td>{item.title}</td>
                  <td>
                    <Link
                      to={`/detail/${item.pageid}/${item.title}/`}
                      dangerouslySetInnerHTML={{ __html: item.snippet }}
                    ></Link>
                  </td>
                  <td>
                    {item.timestamp
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("/")}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};
