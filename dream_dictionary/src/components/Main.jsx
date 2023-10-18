import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {

  return (
    <div className="container w-[80%] h-screen mx-auto flex justify-center items-center ">
      <div className=" h-[20%] w-full leading-10 text-center">
        <h1 className="text-3xl font-extrabold mb-5">
          သင် အိပ်မက်တွေ မြင်မက်နေပါသလား...
        </h1>
        <h2 className="text-xl font-bold my-5">
          အိပ်မက်တွေရဲ့ အဓိပါယ်ကို ခန့်မှန်းချင်ပါသလား...
        </h2>
        <p>ယခု Application အကူအညီပေးပါလိမ့်မယ်...</p>
        <div className="flex justify-center">
          <NavLink to="/dreamlists">
            <p className="bg-black text-white w-20 text-center rounded-md cursor-pointer hover:drop-shadow-md hover:scale-105 duration-75">
              ရှေ့သို့
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Main;
