document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const calendar = document.getElementById('calendar');
    const daysList = document.querySelector('.days');

    function generateCalendar(month, year) {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Clear existing days
        daysList.innerHTML = '';

        // Create blank spaces for previous month's days
        for (let i = 0; i < firstDayOfMonth; i++) {
            const blankDay = document.createElement('li');
            blankDay.classList.add('blank');
            daysList.appendChild(blankDay);
        }

        // Create days for the current month
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('li');
            day.textContent = i;
            daysList.appendChild(day);
        }
    }

    generateCalendar(month, year);

    // Event listener for next month
    document.querySelector('.next').addEventListener('click', function() {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        generateCalendar(month, year);
    });

    // Event listener for previous month
    document.querySelector('.prev').addEventListener('click', function() {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        generateCalendar(month, year);
    });
});
