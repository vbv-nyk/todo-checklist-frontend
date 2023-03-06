import React from 'react';
import * as d3 from "d3";


const TodoCalendar = ({ todos }) => {
    let freqOfDays = {};
    todos.forEach(todo => {
        const newDate = new Date(todo.date);
        const longString = `${newDate.getFullYear()} ${newDate.getMonth()} ${newDate.getDay()}`;
        if (freqOfDays[longString]) {
            freqOfDays[longString]++;
        } else {
            freqOfDays[longString] = 1;
        }
    })
    console.log(freqOfDays);
    return (
        <>

        </>
    );
};

export default TodoCalendar;
