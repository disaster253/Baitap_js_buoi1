// Viết chương trình tính tiền lương nhân viên.
// Lương 1 ngày: 100.000
// Cho người dùng nhập vào số ngày làm.
// Công thức tính lương: Lương 1 ngày * số ngày làm.
Function Salary(){
	var day = prompt("Enter day you work: ");
	var salaryPerDay = 100000;
	var Sum = day * salaryPerDay;
	console.log("Sum of your salary: ", Sum);
}
Salary();