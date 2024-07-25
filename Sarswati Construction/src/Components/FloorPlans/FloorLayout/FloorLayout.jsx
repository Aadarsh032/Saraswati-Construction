import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const FloorLayout = (props) => {
    return (
        <TransformWrapper>
            <TransformComponent>
                <img src={props.image} alt="test" />
            </TransformComponent>
        </TransformWrapper>
    )
}

export default FloorLayout
