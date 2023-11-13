var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Đổi 2000 thành số miligiây bạn muốn giữa các ảnh
}

document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 0;
  var products = document.getElementsByClassName('dmsp3');

  function showProducts(index) {
    for (var i = 0; i < products.length; i++) {
      products[i].style.display = 'none';
    }
    
    // Hiển thị 6 sản phẩm tương ứng
    var endIndex = index + 6;
    for (var i = index; i < endIndex; i++) {
      products[i % products.length].style.display = 'block';
    }
  }

  function nextProducts() {
    currentIndex = (currentIndex + 1) % products.length;
    showProducts(currentIndex);
  }

  // Hiển thị 6 sản phẩm đầu tiên
  showProducts(currentIndex);

  // Chuyển đổi sản phẩm mỗi 5 giây (điều chỉnh thời gian nếu cần)
  setInterval(nextProducts, 2000);
});