//Код, который подсказал наставник

//Функция для получения цены товара по его id
const getPrice = (id) => +document.getElementById(id).textContent;

//Функция для получения суммы цен нескольких товаров
const summ = (...prices) => prices.reduce((a, b) => a + b);

//Получаем полную стоимость товаров, складывая цены всех товаров
const fullPrice = summ(
    getPrice("jacket_price"),
    getPrice("blouse_price"),
    getPrice("dress_price"),
    getPrice("trousers_price")
);

//Получаем элемент длы вывода общей стоимости и выводим значение
const totalPrice = document.getElementById("total_price");
totalPrice.textContent = fullPrice;

// Функция для получения суммы с учетом скидки
const discountPrice = () => (fullPrice * 0.8).toFixed(2);

//Получаем кнопку "купить" и навешиваем на нее событие клика
const button = document.querySelector(".basket__button");
button.addEventListener(
    "click", 
    () => (totalPrice.textContent = discountPrice())
);


//Это мой код

/* let jacketPrice = document.getElementById('jacket_price');
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
}); */


