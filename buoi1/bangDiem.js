function tinhDiem() {
    var diemky1 = parseFloat(document.getElementById("semester1").value);
    var diemky2 = parseFloat(document.getElementById("semester2").value);
    var nam = document.getElementById("year");
    var value = parseInt(nam.options[nam.selectedIndex].value);
    var ketqua;

    if (value == 1) {
        ketqua = (diemky1 + (diemky2 * 2)) / 3;
    } else if (value == 2) {
        ketqua = ((diemky1 * 2) + (diemky2 * 3)) / 5;
    } else if (value == 3) {
        ketqua = ((diemky1 * 3) + (diemky2 * 4)) / 7;
    }

    ketqua = parseFloat(ketqua);
    document.getElementById("kq").value = ketqua;


    if (ketqua >= 9) {
        document.getElementById("danhHieu").innerHTML = "Học sinh giỏi";
    } else if (ketqua >= 7 && ketqua < 9) {
        document.getElementById("danhHieu").innerHTML = "Học sinh khá";
    } else if (ketqua >= 5 && ketqua < 7) {
        document.getElementById("danhHieu").innerHTML = "Học sinh TB";
    }
    document.getElementById("danhHieu").style.color = "black";
}

function huytatca() {
    document.getElementById("semester1").value = '';
    document.getElementById("semester2").value = '';
    document.getElementById("kq").value = '';
    document.getElementById("danhHieu").innerHTML = '';
}