function Add() {
    var productImg = document.getElementById('product-img-input').value;
    var productName = document.getElementById('product-name-input').value;
    var newPrice = document.getElementById('newPrice-input').value;
    var oldPrice = document.getElementById('oldPrice-input').value;
    var gender = document.getElementById('gender');
    var gtGender = gender.options[gender.selectedIndex].text;
    var code = document.getElementById('code-input').value;


    var cardMoi = document.createElement('div');
    cardMoi.classList.add('card');
    cardMoi.style.width = "18rem";
    cardMoi.innerHTML = `
        <img class="card-img-top" src="${productImg}" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">
            ${productName} - ${code}
          </h5>
          <div class="card-price">
             <p>${newPrice} vnđ</p>
             <p><del>${oldPrice} vnđ</del></p>
          </div>
          <a href="#" class="btn btn-danger">Đặt mua</a>
        </div>
    `;
    
    var cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(cardMoi);
}
