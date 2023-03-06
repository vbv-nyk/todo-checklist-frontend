import React, { use, useMemo, useState } from 'react';
import * as d3 from "d3";
import { data } from 'autoprefixer';

const TodoCalendar = ({ todos }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showData, setShowData] = useState("");
    const [calendar, setCalendar] = useState(true);
    const createCalendar = useMemo(() => {

        d3.selectAll("g").remove();

        const width = 300;
        const height = 200;

        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
            .attr("fill", "green")
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

            setShowDetails(true);
            setShowData(`${count} todos done ${d}`);
        }

        function removeTitles(e, d, currentSquare) {
            currentSquare.style.stroke = "none";
            currentSquare.style.strokeWidth = "3";

            setShowDetails(false);
        }
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
        <div className='calendar-container'>
            <svg viewBox='0 0 350 280'>
                <div className='ml-auto'>{createCalendar}</div>
            </svg>
            <div className='mx-auto text-lg'>{showData}</div>
        </div>)
};

export default TodoCalendar;
