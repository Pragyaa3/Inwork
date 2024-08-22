document.addEventListener('DOMContentLoaded', function () {
    fetchEmployeeData();
});

function fetchEmployeeData() {
    fetch('https://motljdj6kj.execute-api.ap-south-1.amazonaws.com/test/resources?company_id=INVYU1')
        .then(response => response.json())
        .then(data => {
            displayEmployeeData(data);
        })
        .catch(error => console.error('Error fetching employee data:', error));
}

function displayEmployeeData(data) {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const employee = data[key];
            const employeeInfo = `
                <div class="employee">
                    <h2><strong>Employee ID : </strong>${employee.employee_id}</h2>
                    <p><strong>Company ID:</strong> ${employee.company_id}</p>
                    <p><strong>Location Latitude:</strong> ${employee.location_lat}</p>
                    <p><strong>Location Longitude:</strong> ${employee.location_long}</p>
                    <p><strong>Last Updated:</strong> ${employee.updated_time_stamp}</p>
                </div>
            `;
            employeeList.innerHTML += employeeInfo;
        }
    }

    // Add More Button (if needed)
}
