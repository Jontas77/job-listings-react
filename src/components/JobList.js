import React from "react";
import Image from "./Image";
import Details from "./Details";

const JobList = ({ list, filter }) => {
  const {
    logo,
    company,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    id,
  } = list;
  const cssRules = `${featured ? "featured-item" : ""} job-container`;

  return (
    <div className={cssRules}>
      <Image url={logo} desc={company} />
      <Details
        company={company}
        recent={list.new}
        featured={featured}
        position={position}
        role={role}
        level={level}
        postedAt={postedAt}
        contract={contract}
        location={location}
        languages={languages}
        tools={tools}
        filterFn={filter}
        id={id}
      />
    </div>
  );
};

export default JobList;
