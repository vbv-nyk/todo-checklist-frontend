import React, { use, useMemo, useState } from 'react';
import * as d3 from "d3";
import { data } from 'autoprefixer';

const TodoCalendar = ({ todos }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showData, setShowData] = useState("");
    const [calendar, setCalendar] = useState(true);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const createCalendar = useMemo(() => {

        d3.selectAll("g").remove();

        const width = 300;
        const height = 200;

        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const monthNames = ["January", "Feb"]

        const dateStart = new Date('2023-03-01');
        const dateEnd = new Date('2023-03-31');
        const days = d3.timeDays(dateStart, dateEnd);


        const svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

        const x = d3.scaleBand()
            .domain(dayNames)
            .range([0, width])
            .paddingInner(0.2)
            .paddingOuter(0.2)

        console.log(d3.timeMonday(dateStart));
        const y = d3.scaleBand()
            .domain(d3.timeWeeks(d3.timeSunday(dateStart), dateEnd))
            .range([0, height])
            .paddingInner(0.2)
            .paddingOuter(0.2)


        const g = svg.append("g");

        const rects = g.selectAll("rect")
            .data(days)
            .attr("fill", "white")
            .attr("y", (d, i, n) => {
                return d3.timeWeek(d);
            });;

        function dislpayDetails(e, d, currentSquare) {
            const matchingTodo = todos.filter(todo => {
                return new Date(d).getDate() === new Date(todo.date).getDate() && new Date(d).getMonth() === new Date(todo.date).getMonth() && new Date(d).getFullYear() === new Date(todo.date).getFullYear();
            });
            const count = matchingTodo.length;
            console.log(matchingTodo, d);
            currentSquare.style.stroke = "black";
            currentSquare.style.strokeWidth = "3";

            setShowData(`${count} todos on ${d.getDate()}th of ${months[d.getMonth()]} ${d.getFullYear()}`);
        }

        function removeTitles(e, d, currentSquare) {
            currentSquare.style.stroke = "none";
            currentSquare.style.strokeWidth = "3";

            setShowData(`Select any day to view more details`);

        }
        rects.enter()
            .append("rect")
            .attr("width", x.bandwidth)
            .attr("height", y.bandwidth)
            .attr("fill", "lightgrey")
            .attr("x", (d, i, n) => {
                return x(dayNames[d3.timeDay(d) % 7]);
            })
            .attr("y", (d, i, n) => {
                return y(d3.timeSunday(d));
            })
            .on("mouseover", function (e, d) {
                dislpayDetails(e, d, this);
            })
            .on("mouseout", function (e, d) {
                removeTitles(e, d, this);
            }).on("click", function (e, d) { dislpayDetails(e, d, this) })

        const xScale = d3.axisBottom(x);


        const xAxis = g.append("g").
            attr("transform", `translate(0,${height})`);

        xAxis.call(xScale);


        xAxis.selectAll("text")
            .attr("transform", "rotate(-40)")
            .attr("text-anchor", "end")
            .attr("font-size", "large");

    }, [todos]);


    return (
        <div className='flex flex-row flex-wrap items-center justify-center p-2 mx-auto calendar-container bg-slate-900 rounded-2xl'>
            <svg viewBox='0 0 350 280' className='ml-auto' >
                <div>{createCalendar}</div>
            </svg>
            <div className='p-3 mx-auto text-lg font-bold border w-80 bg-slate-800 rounded-2xl'>{showData}</div>
        </div>)
};

export default TodoCalendar;
