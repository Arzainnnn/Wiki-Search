import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form } from "../components/Form";
import { Nodata } from "../components/Nodata";
import "../styles/Home.css";
import "../styles/NavBar.css";

export const Home = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(null);
  const [searchvalue, setsearchvalue] = useState("");
  useEffect(() => {
    if (location?.state?.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (searchvalue === "") {
      setSearchResults(null);
      return;
    }
    let searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchvalue}`
    );
    searchRes = await searchRes.json();
    searchRes = searchRes.query.search;
    console.log("searchRes", searchRes);
    setSearchResults(searchRes);
  };

  return (
    <>
      <Form response={handleFormSubmit} handlevalue={setsearchvalue} />

      <table className="table table-hover tableheader">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Posted on</th>
          </tr>
        </thead>
        <tbody>
          {searchResults === null ? (
            <Nodata />
          ) : (
            searchResults.map((item, k) => {
              return (
                <tr key={k}>
                  <td>{item.title}</td>
                  <td className="content">
                    <Link
                      to={`/detail/${item.pageid}/${item.title}/`}
                      state={{ searchResults }}
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
