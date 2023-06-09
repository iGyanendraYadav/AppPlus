import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }, []);
  
    const moveToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="relative">
        {showTopBtn && (
          <span onClick={moveToTop} className="text-3xl lg:text-3xl text-gray-300 hover:text-gray-200 cursor-pointer fixed bottom-5 right-3  z-50">
            <BsFillArrowUpSquareFill />
          </span>
        )}
      </div>
    );
  };
  
  export default ScrollToTop;