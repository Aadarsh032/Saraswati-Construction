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
      <div className="tools flex flex-col items-center absolute top-0 left-[92%]   w-fit p-2  ">
        <button onClick={() => zoomIn()} className=" buttons h-10 w-14 border-[1px]  bg-[#D9D9D9] text-slate-800 text-4xl font-bold flex items-center justify-center rounded-t-lg max-md:h-7 max-md:w-9 max-md:text-2xl ">+</button>
        <button onClick={() => zoomOut()} className=" buttons h-10 w-14 border-[1px]  bg-[#D9D9D9] text-slate-800 text-4xl font-bold flex items-center justify-center max-md:h-7 max-md:w-9 max-md:text-2xl">-</button>
        <button onClick={() => resetTransform()} className=" buttons h-10 w-14 border-[1px]  bg-[#D9D9D9] text-slate-800 text-lg font-bold flex items-center justify-center rounded-b-lg max-md:h-7 max-md:w-9 max-md:text-xs">Reset</button>
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
