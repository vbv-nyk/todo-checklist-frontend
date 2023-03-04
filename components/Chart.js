import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function TodoHeatmap({ data }) {
    const date = new Date();
    const month = date.getMonth() + 1;

    function getNoOfDays() {
        //December or January
        if (month === 12 || month === 1) {
            return 31;
        }

        //Febuary
        if (month === 2) { return 28; }

        //Other months, 31 days if even else 30 days
        if (month % 2) {
            return 31;
        } else {
            return 30;
        }
    }

    console.log(getNoOfDays());
    return (
        <svg height={200} className="w-full px-6">
        </svg >
    )
}

export default TodoHeatmap;