import React from 'react';
import { useNavigate } from 'react-router';

const SecondScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 p-10">
      <h1 className="text-2xl font-bold">Hi from Second Screen</h1>

      <button
        className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-400"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default SecondScreen;
