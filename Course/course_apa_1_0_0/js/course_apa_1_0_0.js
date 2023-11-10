// Lấy danh sách tất cả các mục trong phân trang
var items = Array.from(document.querySelectorAll('.course_apa_1_0_0__item'));

// Số mục hiển thị trên mỗi trang
var itemsPerPage = 4;

// Tổng số trang
var totalPages = Math.ceil(items.length / itemsPerPage);

// Trang hiện tại
var currentPage = 1;

// Hiển thị mục trên trang
function displayItems() {
    // Tính chỉ số bắt đầu và chỉ số kết thúc của các mục cần hiển thị trên trang hiện tại
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;

    // Ẩn tất cả các mục
    items.forEach(function(item) {
        item.style.display = 'none';
    });

    // Hiển thị các mục trong khoảng từ startIndex đến endIndex
    var itemsToShow = items.slice(startIndex, endIndex);
    itemsToShow.forEach(function(item) {
        item.style.display = 'block';
    });
}

// Hiển thị trang đầu tiên khi tải trang
displayItems();

// Tạo nút phân trang
var pagination = document.createElement('div');
pagination.classList.add('course_apa_1_0_0__pagination');

// Tạo các nút số trang
for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', function() {
        currentPage = parseInt(this.textContent);
        displayItems();
    });
    pagination.appendChild(pageButton);
}

// Thêm nút phân trang vào phần tử cha
document.querySelector('.course_apa_1_0_0__pagi').appendChild(pagination);