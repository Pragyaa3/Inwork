document.addEventListener('DOMContentLoaded', function () {
    fetchEmployeeData();
});

function fetchEmployeeData() {
    const apiUrl1 = 'https://s65nfrqfv6.execute-api.ap-south-1.amazonaws.com/test/resources?employee_id=kenworth2emp1';
    const apiUrl2 = 'https://sago4win36.execute-api.ap-south-1.amazonaws.com/test/resources?employee_id=kenworth2emp1';

    Promise.all([
        fetch(apiUrl1).then(response => response.json()),
        fetch(apiUrl2).then(response => response.json())
    ])
    .then(data => {
        const mergedData = Object.assign({}, ...data);
        displayEmployeeData(mergedData);
    })
    .catch(error => console.error('Error fetching employee data:', error));
}

function displayEmployeeData(data) {
    const employeeInfo = document.getElementById('employee-info');
    employeeInfo.innerHTML = '';

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const employee = data[key];
            const employeeInfoHTML = `
                <div class="employee">
                    <h2>${employee.name}</h2>
                    <p><strong>Employee ID:</strong> ${employee.employee_id}</p>
                    <p><strong>Work Start Time:</strong> ${employee.work_start_time}</p>
                    <p><strong>Work End Time:</strong> ${employee.work_end_time}</p>
                    <p><strong>Check-in Time:</strong> ${employee.checkin_time || employee.checkout_time}</p>
                    <p><strong>Remarks:</strong> ${employee.remarks}</p>
                </div>
                
            `;
            employeeInfo.innerHTML += employeeInfoHTML;
        }
    }
    
}
