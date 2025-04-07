function sendMessage() {
    const msg = document.getElementById("loiNhan").value.trim();
    const msgElement = document.getElementById("successMsg");
    if (msg) {
        msgElement.innerText = "✅ Đã gửi tin nhắn!";
        document.getElementById("loiNhan").value = "";
    } else {
        msgElement.innerText = "❌ Bạn chưa nhập nội dung!";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // chặn gửi mặc định
        alert("🟢 Lời nhắn của bạn đã được gửi thành công! Cảm ơn bạn ❤️");

        form.reset(); // Xóa nội dung đã nhập
    });
});