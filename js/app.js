let price = document.querySelector('#price')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let quantity = document.querySelector('.price-btn')

let clickerCount = 1;

plus.addEventListener('click', (e) => [
    clickerCount++,
    price.textContent= (28490*clickerCount),
    quantity.innerHTML = clickerCount
])

minus.addEventListener('click', (e) => [
    clickerCount--,
    price.textContent= (28490*clickerCount),

    quantity.innerHTML = clickerCount
])



