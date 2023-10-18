import React from "react";
import { NavLink } from "react-router-dom";

const MainList = ({ blogdata }) => {

  if (JSON.stringify(blogdata) !== "[]") {
    return (
      <div className=" container lg:w-[80%] md:w-[90%] w-[95%] mx-auto h-screen flex justify-center items-center">
        <div className="w-[100%] md:w-[80%] lg:w-[80%]">
          <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto font-bold text-center text-sm md:text-base lg:text-xl my-4">
            အိပ်မက်ဆိုင်ရာ အတိတ်များအား အက္ခရာစဥ်အလိုက်ရှာရန်
          </div>
          <div className="w-[100%] md:w-[90%] lg:w-[90%] grid grid-cols-5 gap-x-2 gap-y-3 mx-auto">
            {blogdata.map((bda) => {
              return [
                <NavLink key={bda.BlogId} to={`/dreamlists/${bda.BlogId}/${bda.BlogTitle[2]}`}>
                  <button className="bg-blue-300 text-xs lg:px-2 hover:scale-105 hover:duration-75 h-[110%] lg:h-20 md:text-sm lg:text-base rounded-md drop-shadow-lg">
                    <span className="text-xl font-bold">
                      {bda.BlogTitle[2]}
                    </span>
                    <br />
                    <span className="text-xs">
                      {bda.BlogTitle.slice(6, bda.BlogTitle.length)}
                    </span>
                  </button>
                </NavLink>,
              ];
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default MainList;
