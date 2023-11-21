
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

// Function to get the number of days in a month
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Function to create an array of consecutive numbers starting from 1
const createArray = (length) => {
    return Array.from({ length }, (_, index) => index + 1);
};

// Function to create calendar data for the current month
const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDate();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(7);
    const result = [];

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: [],
        });

        for (const dayIndex of days) {
            const day = dayIndex - startDay + weekIndex * 7 + 1;
            const isValid = day > 0 && day <= daysInMonth;

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            });
        }
    }

    return result;
};

// Function to add a table cell to the HTML string
const addCell = (existing, classString, value) => {
    const result = `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;
    return result;
};

// Function to create the HTML table based on the calendar data
const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) {
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);

        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell';

            if (isToday) classString += ' table__cell_today';
            if (isWeekend) classString += ' table__cell_weekend';
            if (isAlternate) classString += ' table__cell_alternate';

            inner = addCell(inner, classString, value);
        }

        result += `
            <tr>${inner}</tr>
        `;
    }

    return result;
};

// Set the title to the current month and year
const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

// Generate calendar data and populate the HTML content
const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);
