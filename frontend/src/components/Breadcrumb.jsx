import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav  className="breadcrumb-container ">
      <div className="container">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/");
          return (
            <li key={to}>
              {index === paths.length - 1 ? (
                <span className="active">{path}</span>
              ) : (
                <Link to={to}>{path}</Link>
              )}
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  );
}

export default Breadcrumb;
