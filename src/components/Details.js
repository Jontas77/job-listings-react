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
  filterFn,
  id
}) => {

  const handleFilter = (skill) => {
    filterFn(skill);
  };

  const JobSkills = ({ skill }) => {
    return (
      <div className="skills">
        <button onClick={() => handleFilter(skill)}>{skill}</button>
      </div>
    );
  };

  return (
    <>
      <div className="details-container">
        <div className="details1">
          <p className="company">{company}</p>
          {recent ? <p className="recent">NEW!</p> : null}
          {featured ? <p className="featured">FEATURED</p> : null}
        </div>

        <h4 className="position">{position}</h4>

        <div className="details2">
          <small> {postedAt} </small>
          <small> {contract} </small>
          <small> {location} </small>
        </div>
      </div>
      <div className="details3">
        <button onClick={() => handleFilter()}>{role}</button>
        <button onClick={() => handleFilter()}>{level}</button>
        {[...languages, ...tools].map((skill) => (
          <JobSkills skill={skill} />
        ))}
      </div>
    </>
  );
};

export default Details;
