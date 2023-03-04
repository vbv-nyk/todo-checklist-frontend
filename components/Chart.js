import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

const TodoCalendar = ({ todos }) => {
    // Create a new Map to store the todo counts for each day
    const todoCounts = new Map();

    // Loop through each todo and increment the count for the day it was created
    todos.forEach(todo => {
        const createdAt = new Date(todo.date);
        const year = createdAt.getFullYear();
        const month = createdAt.getMonth();
        const day = createdAt.getDate();
        const dateKey = `${year}-${month}-${day}`;

        if (todoCounts.has(dateKey)) {
            todoCounts.set(dateKey, todoCounts.get(dateKey) + 1);
        } else {
            todoCounts.set(dateKey, 1);
        }
    });

    // Convert the todo counts Map to an array of objects that can be passed to the CalendarHeatmap
    const data = Array.from(todoCounts, ([date, count]) => ({ date, count }));

    return (
        <CalendarHeatmap
            startDate={new Date('2023-01-01')} // Start date of the calendar
            endDate={new Date('2023-06-01')} // End date of the calendar (defaults to current date)
            values={data} // Array of objects with `date` and `count` properties
            classForValue={value => {
                if (!value) {
                    return 'color-empty';
                }
                return `color-scale-${value.count}`;
            }} // CSS class name to apply based on the count value
            tooltipDataAttrs={value => {
                return {
                    'data-tip': `${value.date}: ${value.count} todos created`
                };
            }} // Tooltip data attributes
            showWeekdayLabels={true} // Whether to show weekday labels at the top of the calendar
        />
    );
};

export default TodoCalendar;
