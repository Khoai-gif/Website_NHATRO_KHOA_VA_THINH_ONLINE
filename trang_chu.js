document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".NT1-left img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Tự động chuyển ảnh mỗi 3 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex); // Hiển thị ảnh đầu tiên
});

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".NT2-left img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Tự động chuyển ảnh mỗi 3 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex); // Hiển thị ảnh đầu tiên
});

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".NT5-left img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Tự động chuyển ảnh mỗi 3 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex); // Hiển thị ảnh đầu tiên
});

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".NT6-left img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Tự động chuyển ảnh mỗi 3 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex); // Hiển thị ảnh đầu tiên
});

document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const houseList = document.querySelectorAll(".DSNT > div"); // Chọn tất cả các mục nhà trọ

    searchBox.addEventListener("input", function () {
        const query = searchBox.value.toLowerCase().trim();

        houseList.forEach(house => {
            // Kiểm tra nếu nhà trọ có tiêu đề và mô tả hợp lệ
            const titleElement = house.querySelector("a");
            const descriptionElement = house.querySelector("h4");

            if (titleElement && descriptionElement) {
                const title = titleElement.innerText.toLowerCase();
                const description = descriptionElement.innerText.toLowerCase();

                if (title.includes(query) || description.includes(query)) {
                    house.style.display = "flex"; // Hiển thị lại nếu tìm thấy
                } else {
                    house.style.display = "none"; // Ẩn nếu không tìm thấy
                }
            }
        });
    });
});
