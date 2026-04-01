import React from "react";
import "./App13.css";
export default function App13() {
  return (
    <div>
      {/* <div className="bg-teal-700 m-3 text-white p-3">Box 1</div>
      <div className="bg-teal-700 m-3 text-white px-3">Box 1</div>
      <div className="bg-teal-700 ms-5 mb-3 text-white">Box 1</div>
       <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">Box 1</div>
       <div className="bg-teal-700 m-5 w-1/2 text-white p-5 text-sm font-bold">Box 1</div> */}

<h2>Using Flex Class</h2>
      <div className="flex justify-center item-center">
        <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">
          Box 1
        </div>
        <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">
          Box 2
        </div>
        <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">
          Box 3
        </div>
      </div>
      <hr />
      <h2>Using Grid Class</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">
          Box 1
        </div>
        <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">
          Box 2
        </div>
        <div className="bg-teal-700 m-5 text-white p-5 text-sm font-bold">
          Box 3
        </div>
      </div>
      <hr />
        <div className="border border-gray-500 m-5 rounded-lg  p-5 text-sm font-bold">
          Hello World
        </div>
        <hr />
        <div className="border bg-blue-300  lg:bg-blue-900 md:bg-blue-700 sm:bg-blue-500 border-gray-500 m-5 rounded-lg sm:text-xl lg:text-3xl md:text-2xl p-5 font-bold">
          Hello World
        </div>
    </div>
  );
}
