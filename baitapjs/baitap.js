// MÔ HÌNH HÓA
//BÀI LUYỆN TẬP 1
function mohinhkhoi1() {
	var AB = 3;
	var AC = 4;
	var BC = Math.sqrt(AB ** 2 + AC ** 2);
	console.log("Bài luyện tập 1", "\n", "Cạnh huyền BC = ", BC);
}
mohinhkhoi1();
//BÀI LUYỆN TẬP 2
function mohinhkhoi2() {
	var number = 123;
	var sum = 0;
	// B1: tách số hàng đơn vị bằng phép chia lấy dư 10
	sum += number % 10;
	// B2: Chia number cho 10 và làm tròn xuống
	number = Math.floor(number / 10); // 12
	// B3: tách hàng chục bằng phép chua lấy dư 10
	sum += number % 10;
	// B4: Chia 10 lấy phần nguyên
	sum += Math.floor(number / 10);
	console.log("Bài luyện tập 2", "\n", "Cho số là: 123", "\n", "Tổng 3 ký số là: ", sum);
}
mohinhkhoi2();
//BÀI LUYỆN TẬP 3 
function mohinhkhoi3() {
	var tenPhim = "Iron Man";
	var giaVeNguoiLon = 80000;
	var soVeNguoiLon = 55;
	var giaVeTreEm = 50000;
	var soVeTreEm = 16;
	var phanTram = 10;
	var tongDoanhThu = ((soVeNguoiLon * giaVeNguoiLon) + (soVeTreEm * giaVeTreEm));
	var tienTuThien = ((tongDoanhThu * phanTram) / 100);
	var tienConLai = (tongDoanhThu - tienTuThien);
	var tongVe = (soVeNguoiLon + soVeTreEm);
	console.log("Bài luyện tập 3", "\n", "Tên phim: ", tenPhim, "\n", "Số vé đã bán: ", tongVe, "\n", "Doanh Thu: ", tongDoanhThu, "\n", "Phần trăm từ thiện: ", phanTram, "\n", "Tiền từ thiện: ", tienTuThien, "\n", "Tiền còn lại: ", tienConLai)
}
mohinhkhoi3();
//BÀI 1 Tính lương nhân viên
function bai1() {
	alert("Bài 1 tính lương nhân viên")
	var day = prompt("nhập số ngày làm việc: ");
	var salaryPerDay = 100000;
	var Sum = day * salaryPerDay;
	console.log("Bài 1", "\n", "Số ngày làm: ", day, "\n", "Số lương mỗi ngày: ", salaryPerDay, "\n", "Tổng số tiền lương: ", Sum);
}
bai1();
//BÀI 2 Tính giá trị trung bình
function bai2() {
	alert("Bài 2 tính giá trị trung bình")
	var num1 = prompt("nhập vào số thứ 1: ");
	var num2 = prompt("nhập vào số thứ 2: ");
	var num3 = prompt("nhập vào số thứ 3: ");
	var num4 = prompt("nhập vào số thứ 4: ");
	var num5 = prompt("nhập vào số thứ 5: ");
	var average = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5;
	console.log("Bài 2", "\n", "Số thứ 1: ", num1, "\n", "Số thứ 2: ", num2, "\n", "Số thứ 3: ", num3, "\n", "Số thứ 4: ", num4, "\n", "Số thứ 5: ", num5, "\n", "Trung bình cộng 5 số là: ", average);
}
bai2();
// BÀI 3 Quy đổi tiền tệ
function bai3() {
	alert("Bài 3 quy đổi tiền tệ")
	var usd = prompt("Nhập số tiền USD muốn đổi sang VND: ");
	var vnd = (parseInt(usd) * 23500);
	console.log("Bài 3", "\n", "Số tiền USD bạn nhập là: ", usd, "\n", "Số tiền VND tương ứng với 1$ là: 23500VND/1$", "\n", "Số tiền VND của bạn sau khi quy đổi là: ", vnd, "VND");
}
bai3();
// BÀI 4 Tính diện tích, chu vi hình chữ nhật
function bai4() {
	alert("Bài 4 tính diện tích, chu vi hình chữ nhật")
	var length = prompt("Nhập chiều dài hình chữ nhật: ");
	var width = prompt("Nhập chiều rộng hình chữ nhật: ");
	var perimeter = (parseInt(length) + parseInt(width)) * 2;
	var arena = (parseInt(length) * parseInt(width));
	console.log("Bài 4", "\n", "Chiều dài là: ", length, "\n", "Chiều rộng là: ", width, "\n", "Chu vi hình chữ nhật: ", perimeter, "\n", "Diện tích hình chữ nhật: ", arena);
}
bai4();
// BÀI 5 Tính tổng 2 ký số
function bai5() {
	alert("Bài 5 tính tổng 2 ký số")
	var num = prompt("Nhập vào số: ");
	var sum = Math.floor((parseInt(num) % 10) + (parseInt(num) / 10));
	console.log("Bài 5", "\n", "Số bạn vừa nhập là: ", num, "\n", "Tổng 2 ký số là: ", sum)
}
bai5();