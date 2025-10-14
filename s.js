function popup(image,productName,price){
  let oldpopup=document.getElementsByClassName('center-div')[0]
  if(oldpopup){
    oldpopup.remove()
  }
    var main=document.createElement('div');
    main.setAttribute('class','center-div');
    document.getElementsByTagName('body')[0].appendChild(main)

    var popup=document.createElement('div');
    popup.setAttribute('class','center');
    main.appendChild(popup);

      var close=document.createElement('a');
      close.setAttribute('class','close');
      close.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg " class="circle"  width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`;

close.onclick=function(){
  main.remove();
};
popup.appendChild(close);

var contentWrapper=document.createElement('div');
contentWrapper.setAttribute('class','popup-wrapper')
popup.appendChild(contentWrapper);

var leftSide = document.createElement('div');
leftSide.setAttribute('class','left-side');
contentWrapper.appendChild(leftSide);

var productImg = document.createElement('img');
productImg.setAttribute('src', image);
productImg.setAttribute('alt', productName);
productImg.setAttribute('class', 'product-img');
leftSide.appendChild(productImg);


var productTitle = document.createElement('h2');
productTitle.innerText = productName;
productTitle.setAttribute('class','product-title');
leftSide.appendChild(productTitle);


var quantityWrapper=document.createElement('div');
quantityWrapper.setAttribute('class','quantity-wrapper');


let qty=1;
let priceValue=price;

var minusBtn=document.createElement('button');
minusBtn.innerText='-';
minusBtn.onclick=function(){
  if(qty>1){
    qty--;
    qtySpan.innerText=qty;
    totalPrice.innerText='₹'+(qty*priceValue);
  }
};
var totalPrice=document.createElement('p');
totalPrice.innerText='₹'+(qty*priceValue);
totalPrice.setAttribute('class','total-price');


var qtySpan=document.createElement('span');
qtySpan.innerText=qty;
qtySpan.setAttribute('class','qty-span');

var plusBtn=document.createElement('button');
plusBtn.innerText='+';
plusBtn.onclick=function(){
  qty++;
  qtySpan.innerText=qty;
  totalPrice.innerText='₹'+(qty*priceValue);
};


quantityWrapper.appendChild(minusBtn);
quantityWrapper.appendChild(qtySpan);
quantityWrapper.appendChild(plusBtn);



leftSide.appendChild(quantityWrapper);
leftSide.appendChild(totalPrice);


var rightSide = document.createElement('div');
rightSide.setAttribute('class','right-side');
contentWrapper.appendChild(rightSide);


var nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Your Name');
nameInput.setAttribute('class', 'popup-input');
rightSide.appendChild(nameInput);


var addressInput = document.createElement('input');
addressInput.setAttribute('type', 'text');
addressInput.setAttribute('placeholder', 'Your Address');
addressInput.setAttribute('class', 'popup-input');
rightSide.appendChild(addressInput);


var sendBtn = document.createElement('button');
sendBtn.innerText = 'Send';
sendBtn.setAttribute('class', 'send-btn');


sendBtn.onclick=function(){
  alert('order placed')};
rightSide.appendChild(sendBtn);

}
send.onclick=function(){
  main.remove();
};
// rightSide.appendChild(send);
