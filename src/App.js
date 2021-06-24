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
      list.filter((item) =>
        [item.role, item.level, ...item.languages, ...item.tools].includes(
          filter
        )
      )
    );
  };

  const removeFilter = (currentFilter) => {
    setFiltering(filtering.filter((element) => element !== currentFilter));
  };

  const clearFilters = () => {
    setFiltering([]);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      {filtering.length > 0 && (
        <div className="filtering">
          {filtering.map((filter, idx) => (
            <span className="tools-filter" key={idx}>
              <Filter item={filter} key={filter} />
              <button
                className="close-btn"
                onClick={() => removeFilter(filter)}
              >
                X
              </button>
            </span>
          ))}
          <button className="clear-btn" onClick={clearFilters}>
            Clear
          </button>
        </div>
      )}
      <main>
        <div className="container">
          {list.map((item) => {
            return (
              <JobList list={item} key={item.company} filter={filterList} />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default App;
