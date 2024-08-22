document.addEventListener('DOMContentLoaded', function () {
    fetchEmployeeData();
});

function fetchEmployeeData() {
    fetch('https://mgw11rbpe8.execute-api.ap-south-1.amazonaws.com/dev/resources?company_id=INVYU1')
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
                <h2>${employee.employee_name} </h2>
                    <p><strong>Company ID:</strong> ${employee.company_id}</p>
                    <p><strong>Company Name:</strong> ${employee.company_name}</p>
                    <p><strong>Employee ID:</strong> ${employee.employee_id}</p>
                   <p><strong>Designation:</strong> ${employee.designation}</p>
                   <div class="additional-info" style="display: none;">

                    <p><strong>Leave Date:</strong> ${employee.leave_date}</p>
                    <p><strong>Leave Reason:</strong> ${employee.leave_reason}</p>
                    <p><strong>Time Stamp:</strong> ${employee.time_stamp}</p>
                    <p><strong>Approved:</strong> ${employee.approved}</p>
                    <p><strong>Approval Time Stamp:</strong> ${employee.approval_time_stamp}</p>
                    <p><strong>Till Date:</strong> ${employee.till_date}</p>
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