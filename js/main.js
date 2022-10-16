window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.getElementById("switchButton").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
  document.getElementById("myBody").classList.toggle("dark");
};


document.getElementById("switchButton").onclick = function () {

  document.getElementById("myBody").classList.toggle("dark");
};
