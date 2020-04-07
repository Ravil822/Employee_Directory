import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          </ul>
        </div>
      </div>
      ))}
    </ul>
  );
}

export default ResultList;
