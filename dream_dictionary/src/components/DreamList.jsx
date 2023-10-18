import React, { useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const DreamList = ({ blogdetail }) => {
  const blogid = useParams();
  // console.log(blogid.blogId);

  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState("[]");
  console.log(filteredItems);

  console.log("component loading...");
  if (JSON.stringify(blogdetail) !== "[]") {
    console.log(blogdetail);
    // const blogItems = blogdetail.filter((bde) => parseInt(bde.BlogId) === parseInt(blogid.blogId));
    // console.log(blogItems);
    const blogItems = Array.isArray(blogdetail) === true ? blogdetail.filter(bde => parseInt(bde.BlogId) === parseInt(blogid.blogId)) : "[]";
    console.log(blogItems);
    // console.log(Array.isArray(blogdetail));

    function handleSearchInput(event) {
      const query = event.target.value;
      console.log(query.toLowerCase());
      setSearchInput(query);
      // console.log(filteredItems);

      const filtered = blogItems.filter((item) =>
        item.BlogContent.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filtered);

      setFilteredItems(filtered);
      setSearchInput("");
    }

    return (
        <div className=" container lg:w-[80%] md:w-[90%] w-[95%] mx-auto h-screen flex justify-center">
          <div className="w-[100%] md:w-[80%] lg:w-[80%] mt-5">
            <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto font-bold text-center text-sm md:text-base lg:text-xl my-4">
              အိပ်မက်ဆိုင်ရာ အတိတ်များအား အောက်ပါအကွက်လေးထဲ
              မြန်မာစာလုံးပေါင်းဖြင့် ထည့်၍ရှာပါ။
            </div>
            <div className="w-[100%] md:w-[90%] lg:w-[90%]  mx-auto">
              <div className="mx-auto w-[100%] md:w-[90%] lg:w-[90%]  flex justify-center">
                <input
                  className="w-[85%]  border pl-5 border-gray-500 rounded-md h-[45px]"
                  type="text"
                  name=""
                  id=""
                  onChange={handleSearchInput}
                  placeholder="သင့်အိပ်မက်အားရှာရန်"
                />
              </div>
              <div className="mx-auto w-[100%] md:w-[90%] lg:w-[90%]  flex justify-center mt-4">
                  <ul className="bl">
                      {
                        Array.isArray(filteredItems) === true ?  filteredItems.map(item =>  {return [<li className="border-black border-b-2 my-2 py-2 cursor-pointer" key={item.BlogId}>{item.BlogContent}</li>]}) : ""
                      }
                  </ul>
              </div>
              <div className="mx-auto w-[100%] md:w-[90%] lg:w-[90%]  flex justify-center mt-4">
                <NavLink to="/dreamlists">
                  <span>ထပ်မံရှာဖွေလိုလျှင်</span>
                    <p className="bg-black text-white w-[100px] mt-2 p-2 text-center rounded-md cursor-pointer hover:drop-shadow-md hover:scale-105 duration-75">
                      မူလနေရာသို့
                    </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default DreamList;
