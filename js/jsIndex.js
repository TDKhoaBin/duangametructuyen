window.onload = function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;

    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            if (i === index) {
                slides[i].style.display = "flex";
            } else {
                slides[i].style.display = "none";
            }
        }
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; 
        }
        showSlide(currentSlide); 
    }

    document.querySelector(".prev").onclick = function() {
        currentSlide--; 
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    };

    document.querySelector(".next").onclick = nextSlide;

    setInterval(nextSlide, 3000);

    showSlide(currentSlide);

    // Hàm đếm ngược và hiển thị thời gian
    function startCountdown(duration, elementId) {
        var countdownElement = document.getElementById(elementId);
        var targetTime = new Date().getTime() + duration * 60 * 60 * 1000; // chuyển đổi giờ sang milliseconds

        function updateCountdown() {
            var now = new Date().getTime();
            var timeRemaining = targetTime - now;

            var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24) % 7));
            var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Thêm số 0 trước giờ, phút, giây nếu nhỏ hơn 10
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            countdownElement.innerText = `${days} ngày ${hours}:${minutes}:${seconds}`;

            // Kiểm tra nếu thời gian đã hết
            if (timeRemaining < 0) {
                clearInterval(timer); // Dừng đếm ngược
                countdownElement.innerText = "Đã cập nhật!";
            }
        }   

        var timer = setInterval(updateCountdown, 1000);
        updateCountdown(); // Cập nhật ngay lập tức khi trang tải
    }

    // Bắt đầu đếm ngược cho từng game
    startCountdown(24 * 7, "countdown1"); // 1 tuần = 7 ngày * 24 giờ
    startCountdown(2 * 3, "countdown2"); // 3 ngày * 24 giờ
    startCountdown(14 * 5, "countdown3"); // 5 ngày * 24 giờ

};



