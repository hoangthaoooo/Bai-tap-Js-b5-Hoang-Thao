

//Bài 1: Tính điểm thi.
document.getElementById('ketQua').onclick = function () {
    let diemChuan = document.getElementById('diemChuan').value * 1;
    let mon1 = document.getElementById('mon1').value * 1;
    let mon2 = document.getElementById('mon2').value * 1;
    let mon3 = document.getElementById('mon3').value * 1;
    let tongBaMon = mon1 + mon2 + mon3;
    let khuVuc = document.getElementById('khuVuc').value;
    let doiTuong = document.getElementById('doiTuong').value;
    let thongBaoKq = document.getElementById('thongBaoKq');
    if (khuVuc == "A", doiTuong == "1") {
        let tongDiem = tongBaMon + 2 + 2.5;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "A", doiTuong == "2") {
        let tongDiem = tongBaMon + 2 + 1.5;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "A", doiTuong == "3") {
        let tongDiem = tongBaMon + 2 + 1;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "B", doiTuong == "1") {
        let tongDiem = tongBaMon + 1 + 2.5;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "B", doiTuong == "2") {
        let tongDiem = tongBaMon + 1 + 1.5;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "B", doiTuong == "3") {
        let tongDiem = tongBaMon + 1 + 1;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "C", doiTuong == "1") {
        let tongDiem = tongBaMon + 0.5 + 2.5;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "C", doiTuong == "2") {
        let tongDiem = tongBaMon + 0.5 + 1.5;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    } else if (khuVuc == "C", doiTuong == "3") {
        let tongDiem = tongBaMon + 0.5 + 1;
        thongBaoKq.innerHTML = `Tổng điểm đạt được là: <b>${tongDiem} điểm.</b><br>${tongDiem >= diemChuan ? "<b>Thí sinh đậu</b>, xin chúc mừng !" : "<b>Thí sinh rớt</b>, xin chia buồn !"}`;
    }
}

//Bài 2: Tính tiền điện.
//Các trường hợp:
//  + 50kw đầu: 500đ/kw
//  + 50kw kế: 650đ/kw
//  + 100kw kế: 850đ/kw
//  + 150kw kế: 1100đ/kw
//  + Những số về sau: 1300đ/kw
document.getElementById('ketQuaDien').onclick = function () {
    let soDien = document.getElementById('soDien').value * 1;
    let thongBaoTienDien = document.getElementById('thongBaoTienDien');
    let tongTienDien = "";
    if (soDien <= 50) {
        tongTienDien = soDien * 500;
        thongBaoTienDien.innerHTML = `Tổng số tiền điện phải đóng là: <b>${tongTienDien.toLocaleString('Vi', {
            style: 'currency',
            currency: 'VND',
        })}</b>`;
    } else if (soDien > 50 && soDien <= 100) {
        tongTienDien = (50 * 500) + ((soDien - 50) * 650);
        thongBaoTienDien.innerHTML = `Tổng số tiền điện phải đóng là: <b>${tongTienDien.toLocaleString('Vi', {
            style: 'currency',
            currency: 'VND',
        })}</b>`;
    } else if (soDien > 100 && soDien <= 200) {
        tongTienDien = (50 * 500) + (50 * 650) + ((soDien - 100) * 850);
        thongBaoTienDien.innerHTML = `Tổng số tiền điện phải đóng là: <b>${tongTienDien.toLocaleString('Vi', {
            style: 'currency',
            currency: 'VND',
        })}</b>`;
    } else if (soDien > 200 && soDien <= 350) {
        tongTienDien = (50 * 500) + (50 * 650) + (100 * 850) + ((soDien - 200) * 1100);
        thongBaoTienDien.innerHTML = `Tổng số tiền điện phải đóng là: <b>${tongTienDien.toLocaleString('Vi', {
            style: 'currency',
            currency: 'VND',
        })}</b`;
    } else {
        tongTienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soDien - 350) * 1300);
        thongBaoTienDien.innerHTML = `Tổng số tiền điện phải đóng là: <b>${tongTienDien.toLocaleString('Vi', {
            style: 'currency',
            currency: 'VND',
        })}</b>`;
    }
}
//Bài 3: Tính thuế thu nhập cá nhân:
document.getElementById('tinhThue').onclick = function () {
    let hoTen = document.getElementById('hoTen').value;
    let tongThuNhapNam = document.getElementById('tongThuNhapNam').value * 1;
    let soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;
    let thuNhapChiuThue = tongThuNhapNam - 4e+6 - (soNguoiPhuThuoc * 16e+5);
    let thongBaoTienThue = document.getElementById('thongBaoTienThue');
    let thuePhaiDong = "";
    if (thuNhapChiuThue < 60e+6) {
        thongBaoTienThue.innerHTML = `Bạn không phải đóng thuế thu nhập cá nhân`
    } else if (thuNhapChiuThue == 60e+6) {
        thuePhaiDong = thuNhapChiuThue * 0.05;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        thuePhaiDong = thuNhapChiuThue * 0.1;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        thuePhaiDong = thuNhapChiuThue * 0.15;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        thuePhaiDong = thuNhapChiuThue * 0.2;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        thuePhaiDong = thuNhapChiuThue * 0.25;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        thuePhaiDong = thuNhapChiuThue * 0.3;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    } else {
        thuePhaiDong = thuNhapChiuThue * 0.35;
        thongBaoTienThue.innerHTML = `Xin chào <b>${hoTen}</b><br>Thu nhập chịu thuế của bạn là: <b>${thuNhapChiuThue.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b><br>Tiền thuế bạn phải đóng là: <b>${thuePhaiDong.toLocaleString("Vi", {
            style: "currency",
            currency: "VND",
        })}</b>`
    }
}

//Tính tiền cáp:

function phanLoaiKh() {
    let tenLoaiKh = document.getElementById('loaiKh').value;
    let soKetNoi = document.getElementById('soKetNoi');
    if (tenLoaiKh == "doanh nghiệp"){
        soKetNoi.style.display = "block";
    } else{
        soKetNoi.style.display = "none";
    }
}

document.getElementById('tinhTienCap').onclick = function(){
    let soKenhCaoCap = document.getElementById('soKenhCc').value*1;
    let soKetNoi = document.getElementById('soKetNoi').value*1;
    let tenLoaiKh = document.getElementById('loaiKh').value;
    let thongBaoTienCap = document.getElementById('thongBaoTienCap');
    let tongTienCap = 0;
    if(tenLoaiKh == "nhà dân"){
        tongTienCap = 4.5 + 20.5 + (soKenhCaoCap*7.5);
        thongBaoTienCap.innerHTML = `Tổng tiền cáp của bạn là: <b>${tongTienCap.toLocaleString("US",{
            style: "currency",
            currency: "USD",
        })}</b>`
    } else if(tenLoaiKh == "doanh nghiệp" && soKetNoi <= 10){
        tongTienCap = 15 + (soKetNoi*75) + (soKenhCaoCap*50);
        thongBaoTienCap.innerHTML = `Tổng tiền cáp của bạn là: <b>${tongTienCap.toLocaleString("US",{
            style: "currency",
            currency: "USD",
        })}</b>`
    } else if(tenLoaiKh == "doanh nghiệp" && soKetNoi > 10){
        tongTienCap = 15 + 10*75 + ((soKetNoi - 10)*80) + (soKenhCaoCap*50);
        thongBaoTienCap.innerHTML = `Tổng tiền cáp của bạn là: <b>${tongTienCap.toLocaleString("US",{
            style: "currency",
            currency: "USD",
        })}</b>`
    }
}