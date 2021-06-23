import React, { useState, useEffect } from "react";
import ListData from "./data/data.json";

//import Components
import Header from "./components/Header";
import Filter from "./components/Filter";
import JobList from "./components/JobList";

const App = () => {
  const [list, setList] = useState([]);
  const [filtering, setFiltering] = useState([]);

  useEffect(() => {
    filtering.length === 0 && setList(ListData);
  }, [filtering]);

  const filterList = (filter = "") => {
    if (!filtering.includes(filter) && filter !== "")
      setFiltering([...filtering, filter]);

    setList(
      list.filter((item) => [...item.languages, ...item.tools].includes(filter))
    );
  };

  return (
    <>
      <Header />
      <div className="filtering">
        {filtering.map((filter) => (
          <Filter item={filter} />
        ))}
      </div>
      <div className="container">
        {list.map((item) => {
          return <JobList list={item} key={item.id} filter={filterList} />;
        })}
      </div>
    </>
  );
};

export default App;
