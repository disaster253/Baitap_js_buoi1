//BÀI 1 Tính lương nhân viên
function bai1() {
	var day = prompt("nhập số ngày làm việc: ");
	var salaryPerDay = 100000;
	var Sum = day * salaryPerDay;
	console.log("Tổng số tiền lương: ", Sum);
}
// bai1();
//BÀI 2 Tính giá trị trung bình
function bai2() {
	var num1 = prompt("nhập vào số thứ 1: ");
	var num2 = prompt("nhập vào số thứ 2: ");
	var num3 = prompt("nhập vào số thứ 3: ");
	var num4 = prompt("nhập vào số thứ 4: ");
	var num5 = prompt("nhập vào số thứ 5: ");
	var average = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5;
	console.log("Trung bình cộng 5 số là: ", average);
}
// bai2();
// BÀI 3 Quy đổi tiền tệ
function bai3() {
	var usd = prompt("Nhập số tiền USD muốn đổi sang VND: ");
	var vnd = (parseInt(usd) * 23500);
	console.log("Số tiền VND của bạn sau khi quy đổi là: ", vnd);
}
// bai3();
// BÀI 4 Tính diện tích, chu vi hình chữ nhật
function bai4() {
	var length = prompt("Nhập chiều dài hình chữ nhật: ");
	var width = prompt("Nhập chiều rộng hình chữ nhật: ");
	var perimeter = (parseInt(length) + parseInt(width)) * 2;
	var arena = (parseInt(length) * parseInt(width));
	console.log("Chu vi hình chữ nhật: ", perimeter);
	console.log("Diện tích hình chữ nhật: ", arena);
}
// bai4();
// BÀI 5 Tính tổng 2 ký số
function bai5() {
	var num = prompt("Nhập vào số: ");
	var sum = Math.floor((parseInt(num) % 10) + (parseInt(num) / 10));
	console.log("Tổng 2 ký số là: ", sum)
}
bai5();