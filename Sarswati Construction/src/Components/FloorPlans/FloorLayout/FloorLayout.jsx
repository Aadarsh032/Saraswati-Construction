import React, { Component } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

export const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <>
      <div className="tools flex  items-center justify-center absolute bottom-0  w-full p-2 gap-2">
        <button onClick={() => zoomIn()} className=" buttons h-10 w-10 bg-green-500 text-white text-4xl font-bold flex items-center justify-center rounded-full max-md:h-7 max-md:w-7 max-md:text-2xl ">+</button>
        <button onClick={() => zoomOut()} className=" buttons h-10 w-10 bg-red-500 text-white text-4xl font-bold flex items-center justify-center rounded-full max-md:h-7 max-md:w-7 max-md:text-2xl">-</button>
        <button onClick={() => resetTransform()} className=" buttons h-10 w-10 bg-black text-white text-3xl font-bold flex items-center justify-center rounded-full max-md:h-7 max-md:w-7 max-md:text-xl">X</button>
      </div>
      
    </>
  );
};

function defaultstop(e) {

  e.preventDefault();
}

const FloorLayout = (props) => {
  return (
    <>
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}

        onWheelStart={(e) => {
          defaultstop(e);
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="relative">
              <TransformComponent>
                <img src={props.image} alt="test" />
              </TransformComponent>
              <Controls />
            </div>
          </>
        )}
      </TransformWrapper>
    </>
  );
};

export default FloorLayout;
