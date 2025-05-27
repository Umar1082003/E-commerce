import React, { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollTop() {
  const pathName = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathName]);

  return null;
}

export default ScrollTop;
