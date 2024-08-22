document.addEventListener('DOMContentLoaded', function () {
    fetchScreenTimeData();
});

function fetchScreenTimeData() {
    fetch('https://h2x2ykwapj.execute-api.ap-south-1.amazonaws.com/test/resources?company_id=INVYU1')
        .then(response => response.json())
        .then(data => {
            displayScreenTimeData(data);
        })
        .catch(error => console.error('Error fetching screen time data:', error));
}

function displayScreenTimeData(data) {
    const screenTimeList = document.getElementById('screen-time-list');
    screenTimeList.innerHTML = '';

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const screenTime = data[key];
            const screenTimeInfo = `
                <div class="screen-time">
                    <h2>${screenTime.employee_name}</h2>
                    <p><strong>Employee ID:</strong> ${screenTime.employee_id}</p>
                    <p><strong>Designation:</strong> ${screenTime.designation}</p>
                    <p><strong>Work Start Time:</strong> ${screenTime.work_start_time}</p>
                    <p><strong>Work End Time:</strong> ${screenTime.work_end_time}</p>
                    <div class="additional-info" style="display: none;">
                        <p><strong>WhatsApp Duration:</strong> ${screenTime.whatsapp_duration}</p>
                        <p><strong>Facebook Duration:</strong> ${screenTime.facebook_duration}</p>
                        <p><strong>Instagram Duration:</strong> ${screenTime.instagram_duration}</p>
                        <p><strong>Twitter Duration:</strong> ${screenTime.twitter_duration}</p>
                        <p><strong>News Duration:</strong> ${screenTime.News_duration}</p>
                        <p><strong>Games Duration:</strong> ${screenTime.Games_duration}</p>
                        <p><strong>Calls Duration:</strong> ${screenTime.calls_duration}</p>
                        <p><strong>Others Duration:</strong> ${screenTime.others_duration}</p>
                        <p><strong>Time Stamp:</strong> ${screenTime.time_stamp}</p>
                    </div>
                    <button class="more-button" onclick="toggleAdditionalInfo(this)">More</button>
                </div>
            `;
            screenTimeList.innerHTML += screenTimeInfo;
        }
    }
}

function toggleAdditionalInfo(button) {
    const additionalInfoDiv = button.previousElementSibling;
    if (additionalInfoDiv.style.display === 'none') {
        additionalInfoDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        additionalInfoDiv.style.display = 'none';
        button.textContent = 'More';
    }
}
