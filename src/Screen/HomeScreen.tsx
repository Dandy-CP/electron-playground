import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 p-10">
      <h1 className="text-2xl font-bold">Hello From Electron React</h1>

      <div className="flex flex-row items-center gap-5">
        <button
          className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-400"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>

        <p className="text-lg">{count}</p>

        <button
          className="p-3 text-white bg-blue-500 rounded-md disabled:bg-gray-500 hover:bg-blue-400"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
          disabled={count === 0}
        >
          -
        </button>
      </div>

      <button
        className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-400"
        onClick={() => {
          navigate('/second-screen');
        }}
      >
        Navigate
      </button>
    </div>
  );
};

export default HomeScreen;
