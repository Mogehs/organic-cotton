// components/PageWithDelay.jsx
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const PageWithDelay = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return showLoader ? <Loader /> : children;
};

export default PageWithDelay;
