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

document.addEventListener('DOMContentLoaded', function () {
    const boLocRadios = document.querySelectorAll('input[name="filter"]');
    const giaRadios = document.querySelectorAll('input[name="gia"]');
    const danhSach = document.querySelectorAll('.DSNT > div');

    // Gán loại và giá cho từng NT
    danhSach.forEach(item => {
        const hasImg = item.querySelector('img');
        const hasVideo = item.querySelector('video, iframe');

        // Gán loại media
        if (hasImg && hasVideo) {
            item.setAttribute('data-type', 'both');
        } else if (hasImg) {
            item.setAttribute('data-type', 'image');
        } else if (hasVideo) {
            item.setAttribute('data-type', 'video');
        }

        // Gán giá (tuỳ theo bạn biết giá từng NT thì set cứng ở đây)
        if (item.classList.contains('NT1')) {
            item.setAttribute('data-price', '1600000');
        } else if (item.classList.contains('NT2')) {
            item.setAttribute('data-price', '2500000');
        } else if (item.classList.contains('NT3')) {
            item.setAttribute('data-price', '4500000');
        } else if (item.classList.contains('NT4')) {
            item.setAttribute('data-price', '2700000');
        } else if (item.classList.contains('NT5')) {
            item.setAttribute('data-price', '2100000');
        } else if (item.classList.contains('NT6')) {
            item.setAttribute('data-price', '1900000');
        }
    });

    function applyFilters() {
        const selectedMedia = document.querySelector('input[name="filter"]:checked').value;
        const selectedGia = document.querySelector('input[name="gia"]:checked').value;

        danhSach.forEach(item => {
            const type = item.getAttribute('data-type');
            const price = parseInt(item.getAttribute('data-price'));

            // Kiểm tra điều kiện lọc loại
            let matchMedia = (selectedMedia === 'all' || type === selectedMedia || (selectedMedia === 'both' && type === 'both'));

            // Kiểm tra điều kiện lọc giá
            let matchGia = false;
            switch (selectedGia) {
                case 'all':
                    matchGia = true;
                    break;
                case 'duoi3':
                    matchGia = price <= 2000000;
                    break;
                case 'duoi4':
                    matchGia = price <= 3000000;
                    break;
                case 'tren4':
                    matchGia = price >= 3000000;
                    break;
            }

            // Hiển thị hoặc ẩn item
            if (matchMedia && matchGia) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Lắng nghe sự kiện thay đổi radio lọc loại
    boLocRadios.forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });

    // Lắng nghe sự kiện thay đổi radio lọc giá
    giaRadios.forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });
});


        
