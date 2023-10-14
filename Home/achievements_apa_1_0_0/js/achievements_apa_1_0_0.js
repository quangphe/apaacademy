// Số ban đầu
let counts = [0, 5, 100, 100, 0];

// Số mục tiêu
let targetNumbers = [100, 150, 2500, 1000, 10];

// Văn bản sau số
let textAfterNumbers = ["%", "+", "+", "+", "triệu"];

// Hàm chạy đếm
function startCounting() {
  let counterElements = document.getElementsByClassName("achievements_apa_1_0_0__number");

  for (let i = 0; i < counterElements.length; i++) {
    let counterElement = counterElements[i];
    let count = counts[i];
    let targetNumber = targetNumbers[i];
    let textAfterNumber = textAfterNumbers[i];

    let intervalId = setInterval(() => {
      count += 5; // Tăng số lên 5
      counterElement.textContent = count + textAfterNumber;

      if (count >= targetNumber) {
        clearInterval(intervalId); // Dừng việc gọi hàm setInterval
      }
    }, 10); // Cập nhật số mỗi 100ms
  }
}

// Gọi hàm để bắt đầu chạy đếm
startCounting();