// Lấy thẻ HTML chứa các giá trị thời gian
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Thời gian kết thúc (định dạng: 'YYYY-MM-DD HH:MM:SS')
const endTime = '2023-12-31 23:59:59';

function countdown() {
    const endTimeObj = new Date(endTime);
    const currentTime = new Date();

    // Tính toán khoảng thời gian còn lại
    const timeDiff = endTimeObj - currentTime;

    // Chuyển đổi thời gian còn lại thành ngày, giờ, phút, giây
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Hiển thị giá trị thời gian trên giao diện
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Gọi hàm countdown mỗi giây
setInterval(countdown, 1000);