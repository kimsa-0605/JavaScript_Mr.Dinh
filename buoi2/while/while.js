function nhapSo(){
    var sonhap = parseInt(document.getElementById("sonhap").value);
    var sum = 0;

    var i = 0;
    do {
        sum = sum + i;
        i++;
    }while(i <= sonhap);
    document.getElementById("kq").innerHTML = sum;
}