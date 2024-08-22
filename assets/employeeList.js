document.addEventListener('DOMContentLoaded', function () {
    fetchEmployeeData();
});

function fetchEmployeeData() {
    fetch('https://h1d3fv28mf.execute-api.ap-south-1.amazonaws.com/test/resources?company_id=INVYU1')
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
                    <h2>${employee.first_name} ${employee.last_name}</h2>
                    <p><strong>Employee ID:</strong> ${employee.employee_id}</p>
                    <p><strong>Email:</strong> ${employee.email}</p>
                    <p><strong>Designation:</strong> ${employee.designation}</p>
                    <p><strong>Office:</strong> ${employee.office}</p>
                    <div class="additional-info" style="display: none;">
                        <p><strong>Aadhaar Number:</strong> ${employee.adhaar_number}</p>
                        <p><strong>Mobile:</strong> ${employee.mobile}</p>
                        <p><strong>Location Latitude:</strong> ${employee.location_lat}</p>
                        <p><strong>Location Longitude:</strong> ${employee.location_long}</p>
                        <p><strong>Work Start Time:</strong> ${employee.work_start_time}</p>
                        <p><strong>Work End Time:</strong> ${employee.work_end_time}</p>
                        <p><strong>Work Effect From Date:</strong> ${employee.work_effect_from_date}</p>
                        <p><strong>Work End From Date:</strong> ${employee.work_end_from_date}</p>
                    </div>
                    <button class="more-button" onclick="toggleAdditionalInfo(this)">More</button>
                </div>
            `;
            employeeList.innerHTML += employeeInfo;
        }
    }
}

function toggleAdditionalInfo(button) {
    const employeeDiv = button.parentElement;
    const additionalInfoDiv = employeeDiv.querySelector('.additional-info');
    if (additionalInfoDiv.style.display === 'none') {
        additionalInfoDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        additionalInfoDiv.style.display = 'none';
        button.textContent = 'More';
    }
}
