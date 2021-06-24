import React from "react";

const Details = ({
  recent,
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
  filterFn
}) => {

  const handleFilter = (skill) => {
    filterFn(skill);
  };

 
  const langAndToolsArr = [role, level];

  if (tools) {
    langAndToolsArr.push(...tools);
  }

  if (languages) {
    langAndToolsArr.push(...languages);
  }

  return (
    <>
      <div className="details-container">
        <div className="details1">
          <p className="company">{company}</p>
          {recent ? <p className="recent">NEW!</p> : null}
          {featured ? <p className="featured">FEATURED</p> : null}
        </div>

        <h4 className="position">{position}</h4>
        <p className="details2">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="details3">
        {langAndToolsArr
          ? langAndToolsArr.map((arr, idx) => (
              <span className="tools" key={idx} onClick={() => handleFilter(arr)}>
                {arr}
              </span>
            ))
          : ""}
      </div>
    </>
  );
};

export default Details;

// {[...languages, ...tools].map((skill, idx) => (
// <JobSkills skill={skill} key={idx} />
// ))}

 // const JobSkills = ({ skill }) => {
  //   return (
  //     <div className="skills">
  //       <button onClick={() => handleFilter(skill)}>{skill}</button>
  //     </div>
  //   );
  // };
  