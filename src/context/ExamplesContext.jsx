import React, { createContext, useState, useEffect } from "react";
import { fetchExamples } from "../utils/Utils";

export const ExamplesContext = createContext();

export const ExamplesProvider = ({ children }) => {
  const [examples, setExamples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExamples = async () => {
      try {
        const data = await fetchExamples();
        setExamples(data);
      } catch (error) {
        console.error("Failed to fetch examples:", error);
      } finally {
        setLoading(false);
      }
    };
    loadExamples();
  }, []);

  return (
    <ExamplesContext.Provider value={{ examples, setExamples, loading }}>
      {children}
    </ExamplesContext.Provider>
  );
};