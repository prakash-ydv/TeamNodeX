import React from "react";
function FeedCard() {
  return (
    <div className="flex gap-5 pl-6">
      <div className="border-1 justify-center h-70 w-120 rounded-lg relative">
        <img
          src="https://thelivenagpur.com/wp-content/uploads/2019/10/DSC_7535.jpg"
          alt=""
          className="h-52 w-120 rounded-t-lg"
        />
        <span className="absolute left-1 top-2 text-white font-bold bg-gray-500  px-3 py-1 rounded-4xl">
          Garbage
        </span>
        
        <div className=" w-120 h-18  rounded-b-lg">
          <div className="pl-3 pt-2">
            <strong>Title of Issue</strong>
          </div>
          <div className="flex justify-between items-center pl-3 px-1 py-1">
            <h1 className="text-gray-500">
              Reports :<span className="text-gray-800">14</span>
            </h1>
            <h2 className="text-white pr-2 px-2 bg-gray-500 rounded-2xl">
              status : <span className="text-white">pending</span>
            </h2>
          </div>
        </div>

      </div>
      <div className="border-1 justify-center h-70 w-120 rounded-lg relative">
        <img
          src="https://thelivenagpur.com/wp-content/uploads/2019/10/DSC_7535.jpg"
          alt=""
          className="h-52 w-120 rounded-t-lg"
        />
        <span className="absolute left-1 top-2 text-white font-bold bg-gray-500  px-3 py-1 rounded-4xl">
          Garbage
        </span>
        
        <div className=" w-120 h-18  rounded-b-lg">
          <div className="pl-3 pt-2">
            <strong>Title of Issue</strong>
          </div>
          <div className="flex justify-between items-center pl-3 px-1 py-1">
            <h1 className="text-gray-500">
              Reports :<span className="text-gray-800">14</span>
            </h1>
            <h2 className="text-white pr-2 px-2 bg-gray-500 rounded-2xl">
              status : <span className="text-white">pending</span>
            </h2>
          </div>
        </div>

      </div>
      <div className="border-1 justify-center h-70 w-120 rounded-lg relative">
        <img
          src="https://thelivenagpur.com/wp-content/uploads/2019/10/DSC_7535.jpg"
          alt=""
          className="h-52 w-120 rounded-t-lg"
        />
        <span className="absolute left-1 top-2 text-white font-bold bg-gray-500  px-3 py-1 rounded-4xl">
          Garbage
        </span>
        
        <div className=" w-120 h-18  rounded-b-lg">
          <div className="pl-3 pt-2">
            <strong>Title of Issue</strong>
          </div>
          <div className="flex justify-between items-center pl-3 px-1 py-1">
            <h1 className="text-gray-500">
              Reports :<span className="text-gray-800">14</span>
            </h1>
            <h2 className="text-white pr-2 px-2 bg-gray-500 rounded-2xl">
              status : <span className="text-white">pending</span>
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FeedCard;
