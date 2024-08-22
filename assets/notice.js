document.addEventListener('DOMContentLoaded', function () {
    fetchNotices();
});

function fetchNotices() {
    fetch('https://b3a01bla14.execute-api.ap-south-1.amazonaws.com/test/resources?company_id=INVYU1')
        .then(response => response.json())
        .then(data => {
            displayNotices(data);
        })
        .catch(error => console.error('Error fetching notices:', error));
}

function displayNotices(data) {
    const noticesList = document.getElementById('notice-list');
    noticesList.innerHTML = '';

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const notice = data[key];
            const noticeInfo = `
                <div class="notice">
                    <h2>${notice.title}</h2>
                    <p><strong>Company Name:</strong> ${notice.company_name}</p>
                    <p><strong>Company ID:</strong> ${notice.company_id}</p>
                    <p><strong>Notice:</strong> ${notice.notice}</p>
                    <p><strong>Time Stamp:</strong> ${notice.time_stamp}</p>
                </div>
            `;
            noticesList.innerHTML += noticeInfo;
        }
    }
}
