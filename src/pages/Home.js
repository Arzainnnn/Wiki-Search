import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form } from "../components/Form";
import { Nodata } from "../components/Nodata";
import "../styles/Home.css";
import "../styles/NavBar.css";

export const Home = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(null);
  const searchvalue = useRef(null);
  useEffect(() => {
    if (location?.state?.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (searchvalue.current.value === "") {
      setSearchResults(null);
      return;
    }

    let searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchvalue.current.value}`
    );
    searchRes = await searchRes.json();
    searchRes = searchRes.query.search;
    setSearchResults(searchRes);
  };

  return (
    <>
      <Form response={handleFormSubmit} ref={searchvalue} />

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
                  {console.log(typeof item.title)}
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
