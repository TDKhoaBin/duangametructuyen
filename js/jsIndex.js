// Chờ cho trang web tải xong
window.onload = function() {
    var slides = document.querySelectorAll(".slide"); // Lấy tất cả các slide
    var currentSlide = 0; // Bắt đầu với slide đầu tiên

    // Hàm để hiển thị slide
    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) { 
            if (i === index) {
                slides[i].style.display = "flex"; // Hiển thị slide hiện tại
            } else {
                slides[i].style.display = "none"; // Ẩn các slide khác
            }
        }
    }

    // Sự kiện cho nút "prev"
    document.querySelector(".prev").onclick = function() {
        currentSlide--; // Giảm chỉ số slide hiện tại
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Nếu vượt quá slide đầu, quay về slide cuối
        }
        showSlide(currentSlide); // Hiển thị slide mới
    };

    // Sự kiện cho nút "next"
    document.querySelector(".next").onclick = function() {
        currentSlide++; // Tăng chỉ số slide hiện tại
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Nếu vượt quá slide cuối, quay về slide đầu
        }
        showSlide(currentSlide); // Hiển thị slide mới
    };

    // Hiển thị slide đầu tiên khi trang được tải xong
    showSlide(currentSlide);
};
