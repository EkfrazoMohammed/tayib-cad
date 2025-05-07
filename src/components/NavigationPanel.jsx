import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ExamplesContext } from "../context/ExamplesContext";

function NavigationPanel({ title }) {
  const { examples, loading } = useContext(ExamplesContext);
  const location = useLocation();
  const activeExampleId = location.pathname.replace("/", "");

  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/upload_dxf">Upload your DXF</NavLink>
        </li>
      </ul>
      {/* {loading ? (
        <ul>
          <li>Loading examples...</li>
        </ul>
      ) : (
        <ul>
          {examples.map((example) => (
            <li key={example.id}>
              <NavLink
                to={`/${example.id}`}
                className={example.id === activeExampleId ? "active" : ""}
              >
                Example {example.id}
              </NavLink>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default NavigationPanel;