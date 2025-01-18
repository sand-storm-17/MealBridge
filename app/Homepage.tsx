import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full h-full bg-gray-100 text-black">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex font-bold text-6xl">MealBridge</div>
        <div className="flex font-thin text-3xl">Connecting Food</div>
      </div>
      <div className="flex items-center gap-4">
        <button className="border rounded-md px-4 py-2 bg-gray-200 text-black">
          Login
        </button>
        <button className="border rounded-md px-4 py-2 bg-black text-white">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Homepage;
