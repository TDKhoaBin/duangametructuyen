document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "flex" : "none";
            slide.classList.toggle("active", i === index);
        });
    }

    document.querySelector(".prev").addEventListener("click", function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    document.querySelector(".next").addEventListener("click", function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    // Hiển thị slide đầu tiên khi tải trang
    showSlide(currentSlide);
});
