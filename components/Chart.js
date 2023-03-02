import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

export default function Chart() {
    const svgRef = useRef(null);

    useEffect(() => {


    }, [svgRef])

    return (
        <div className="row-start-1 row-end-2">
            <svg ref={svgRef} id="heatmap" >

            </svg >
        </div>);
}