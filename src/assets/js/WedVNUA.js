function displaya1() {
    $("#anh").attr("src", "/image/1.jpg")
}
function displaya2() {
    $("#anh").attr("src", "/image/2.png")
}
function displaya3() {
    $("#anh").attr("src", "/image/3.gif")
}
function displaya4() {
    $("#anh").attr("src", "/image/4.jpg")
}
function displaya5() {
    $("#anh").attr("src", "/image/5.jpg")
}
function displaya6() {
    $("#anh").attr("src", "/image/6.jpg")
}
function checkuser(tk) {
    var tk = ['590620', '593282', '596464', '590000', '601234', '591234', '60000'];
    var mk = ['111111', '222222', '333333', '444444', '555555', '666666', '777777'];
    var x = 0, check = 0, n = $("#user").val(),
        m = $("#pass").val();
    for (var i = 0; i <= tk.length; i++) {
        if (n == tk[i]) {
            check++;
            x = i;
        }
    }
    if (check > 0) {
        if (m == mk[x]) {
            window.open("http://127.0.0.1:5500/wedVNUA.html");
        } else {
            alert("Sai mật khẩu");
        }
    }
};
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#myBtn").addClass("block")
    } else {
        $("#myBtn").removeClass("block")
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* JS order*/
let od = 0;
$(document).ready(function () {
    
    $("#mua1").click(
        function () {
            od++;
            $("#sp").html(od);
            console.log("them thanh cong sp")
        }
    );
    
    $("#reset").click(
        function () {
            od = 0;
            $("#sp").html(od);
        }
    )
});
//  JS login
// function checklogin() {
//     var cl = $("#exampleInputEmail1").val(),
//         y = $("#exampleInputPassword").val();

//     if (cl == "") {
//         $("#err").text("Bạn chưa nhập mã SV");
//     } else {
//         $("#err").text("");
//     };

//     if (y == "") {
//         $("#err2").text("Bạn chưa nhập mật khẩu");
//     } else {
//         $("#err2").text("");
//     }
// }





//  JS trang tính tiền

$("#usedc").click(function () {
    // dùng mã giảm giá => show input mã giảm giá; Ẩn sử dụng mã giảm giá
    $("#discount").show();
    $("#usedc1").hide();
  });
  var od1 = $("#sl").val();
  var tong;
  var chietkhau = 0;
  var checkdc = false;
  $("#apdung").click(
    // click nút áp dụng mã giảm giá
    function apdungma() {
      var codedc = $("#ipdc").val(); // lấy mã giảm giá gán cho codedc
      if (codedc == "") {
        $("#ercode3").show();
        $("#ercode2").hide();
      } else {
        if (codedc == "gg") {
          // nếu nhập đúng mã giảm giá
          checkdc = true;
          var tamtinh = $("#price").html() * $("#sl").val(); // số tiền tạm tính
          var tong = tamtinh * (1 - 10 / 100); // tính tiền sau khi áp dụng mã giảm giá
          chietkhau = 100 - (tong / tamtinh) * 100; // tính % được chiết khấu
          $("#tongtien").html(tong); // in tổng tiền sau khi dùng mã giảm gia
          $("#codedc2").html(codedc); // in mã giảm giá ra
          $("#codedc3").show();
          $("#chietkhau").html(chietkhau);  // hiển thị số % giảm giá
          $("#ercode2").show();
          $("#ercode4").hide();
        } else {
          // mã không chính xác
          $("#ercode").show(); // báo mã không chính xác
          $("#ercode2").hide();
          var tamtinh = $("#price").html() * $("#sl").val();  // tính lại số tiền tạm tính
          $("#tongtien").html(tamtinh);                       // không có mã => tổng tiền == tiền tạm tính
          $("#codedc3").hide();
          checkdc = false;                                    // nếu đổi mã giảm giá nhưng lại sai thì hủy bỏ mã trước.
        }
      }
    }
  );
  $("#ipdc").keydown(function () {    // DOM khi nhập mã giảm giá
    $("#ercode3").hide();
    $("#ercode").hide();
    $("#ercode2").hide();
  });
  function tinhtien() {               // Hàm tính tiền
    var tamtinh = $("#price").html() * $("#sl").val();
    var od1 = $("#sl").val();  
    if (od > 100) {                      // khi nhập hơn 100 sp
      $("#ercode4").show();             // chỉ cho phép đặt hàng onl 100 sp, lớn hơn phải đặt offline
      $("#sl").val(100);                // hiển thị số lượng tối đa 100 sp
       tamtinh = $("#price").html() * 100;  // hiển thị tiền của tối đa 100 sp
       $("#tongtien").html(tamtinh);          
    } else {
      if (checkdc == false) {             // nếu không nhập hoặc sai mã giảm giá 
        $("#tongtien").html(tamtinh);
      } else {                             // nếu đúng mã giảm giá 10%
        tong = tamtinh * (1 - 10 / 100);
        $("#tongtien").html(tong);
      }
      $("#ercode4").hide();
    }
    $("#tamtinh").html(tamtinh);
  }
  
  $("#sl").val(1); // mặc định số lượng tối thiểu
  $("#sl").keyup(tinhtien); // tính tiền ngay sau khi nhập số lượng
  
  $("#plus").click(
    // tăng 1 sản phẩm
    function plus() {
      od1 = $("#sl").val();
      if (od1 < 100) {
        od1++;
        $("#sl").val(od1);
        tinhtien();
      } else {
        $("#ercode4").show(); // chỉ cho phép đặt hàng onl 100 sp, lớn hơn phải đặt offline
      }
    }
  );
  $("#minus").click(
    // giảm 1 sản phẩm
    function minus() {
      od = $("#sl").val();
      if (od1 > 1) {
        // nếu số lượng > 1 mới cho phép giảm 1 sp
        od1--;
        $("#sl").val(od);
        tinhtien();
      }
    }
  );
  
  // Tạm tính tiền chưa có mã giảm giá
  var tamtinh = $("#price").html() * $("#sl").val();
  $("#tamtinh").html(tamtinh);
  $("#tongtien").html(tamtinh);
  $("#codedc3").hide();
  $("#ercode").hide();
  $("#ercode2").hide();
  $("#ercode3").hide();
  $("#ercode4").hide();
  $("#discount").hide();

