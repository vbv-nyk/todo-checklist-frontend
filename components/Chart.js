import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

const TodoCalendar = ({ todos }) => {

    const today = new Date();
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
            // Increment the count for this date if it has already been added to the map
            todoCounts.set(dateKey, todoCounts.get(dateKey) + 1);
        } else {
            // Add a new entry to the map with a count of 1 if this date hasn't been added yet
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
            }} // CSS class name to apply based on the count values
            showWeekdayLabels={true} // Whether to show weekday labels at the top of the calendar
            titleForValue={value => {
                return value ? `${value.date}: ${value.count} todos created` : null;
            }}
        />
    );
};

export default TodoCalendar;
