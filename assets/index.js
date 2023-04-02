let jacketPrice = document.getElementById('jacket_price');
jacketPrice = +jacketPrice.textContent;

let blousePrice = document.getElementById('blouse_price');
blousePrice = +blousePrice.textContent;

let dressPrice = document.getElementById('dress_price');
dressPrice = +dressPrice.textContent;

let trousersPrice = document.getElementById('trousers_price');
trousersPrice = +trousersPrice.textContent;

const summ = (one, two, three, four) => {
    return one + two + three + four;
};
const fullPrice = summ(jacketPrice, blousePrice, dressPrice, trousersPrice);
console.log(fullPrice);

let totalPrice = document.getElementById('total_price');
totalPrice.textContent = fullPrice;

let discountPrice = () => {
    let discount = fullPrice * 0.8;
    return discount.toFixed(2);
};

const button = document.querySelector('.basket__button');
button.addEventListener("click", () => {
    totalPrice.textContent = discountPrice();
});


