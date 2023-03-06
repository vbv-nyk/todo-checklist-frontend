import React from 'react';
import * as d3 from "d3";
import { data } from 'autoprefixer';

const TodoCalendar = ({ todos }) => {

    function createCalendar() {
        const width = 300;
        const height = 200;

        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let freqOfDays = {};

        const dateStart = new Date('2023-01-01');
        const dateEnd = new Date('2023-01-31');
        const days = d3.timeDays(dateStart, dateEnd);


        const svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height + 50);

        const x = d3.scaleBand()
            .domain(dayNames)
            .range([0, width])
            .paddingInner(0.2)
            .paddingOuter(0.2)

        const y = d3.scaleBand()
            .domain(d3.timeWeeks(d3.timeMonday(dateStart), dateEnd))
            .range([0, height])
            .paddingInner(0.2)
            .paddingOuter(0.2)

        const result = todos.forEach(todo => {
            const newDate = new Date(todo.date);
            const longString = `${newDate.getFullYear()} ${newDate.getMonth()} ${newDate.getDay()}`;
            if (freqOfDays[longString]) {
                freqOfDays[longString]++;
            } else {
                freqOfDays[longString] = 1;
            }
        });

        const g = svg.append("g")
            .attr("class", "rect-container")
            .attr("transform", "translate(0,0)");

        const rects = g.selectAll("rect")
            .data(days)
            .attr("fill", "green")
            .attr("y", (d, i, n) => {
                return d3.timeWeek(d);
            });;

        rects.enter()
            .append("rect")
            .attr("width", x.bandwidth)
            .attr("height", y.bandwidth)
            .attr("fill", "green")
            .attr("x", (d, i, n) => {
                return x(dayNames[d3.timeDay(d) % 7]);
            })
            .attr("y", (d, i, n) => {
                return y(d3.timeSunday(d));
            });

        const xScale = d3.axisBottom(x);


        const xAxis = svg.append("g").
            attr("transform", `translate(0,${height})`);

        xAxis.call(xScale);

        xAxis.selectAll("text")
            .attr("transform", "rotate(-40)")
            .attr("text-anchor", "end");


    }

    return (
        <div className='w-full h-full'>
            <svg className='w-full group-container'>
                {
                    createCalendar()
                }
            </svg>
        </div>)
};

export default TodoCalendar;
