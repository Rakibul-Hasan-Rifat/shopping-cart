
function oneIncrement(num) {
    return ++num;
}

function oneDecrement(num) {
    return --num;
}

function addition(num1, num2) {
    return num1 + num2;
}

function mobilePrice(totalNum, price) {
    return totalNum * price;
}

var mobileMinusButton = document.querySelector('#mobile-part button.minus-btn');
var mobilePlusButton = document.querySelector('#mobile-part button.plus-btn');
var mobileInputField = document.querySelector('#mobile-part input.input-field');
var mobilePriceElement = document.querySelector('#mobile-part h5 span');

mobileMinusButton.addEventListener('click', function () {
    if (mobileInputField.value > 0) {
        var inputValue = parseFloat(mobileInputField.value);
        var decreasedValue = oneDecrement(inputValue);
        mobileInputField.value = decreasedValue;

        var totalMobilePrice = mobilePrice(decreasedValue, 1219);
        mobilePriceElement.innerText = totalMobilePrice;

        var subtotal = addition(parseFloat(mobilePriceElement.innerText), parseFloat(mobileCoverPriceElement.innerText))
        document.querySelector('#subtotal').innerText = subtotal;

        var total = addition(parseFloat(document.querySelector('#subtotal').innerText), parseFloat(document.querySelector('#tax').innerText));
        document.querySelector('#total').innerText = total;
    }
})

mobilePlusButton.addEventListener('click', function () {
    var inputValue = parseFloat(mobileInputField.value);
    var increasedValue = oneIncrement(inputValue);
    mobileInputField.value = increasedValue;

    var totalMobilePrice = mobilePrice(increasedValue, 1219);
    mobilePriceElement.innerText = totalMobilePrice;

    var subtotal = addition(parseFloat(mobilePriceElement.innerText), parseFloat(mobileCoverPriceElement.innerText))
    document.querySelector('#subtotal').innerText = subtotal;

    var total = addition(parseFloat(document.querySelector('#subtotal').innerText), parseFloat(document.querySelector('#tax').innerText));
    document.querySelector('#total').innerText = total;
})

var mobileCoverMinusButton = document.querySelector('#mobile-cover-part button.minus-btn');
var mobileCoverPlusButton = document.querySelector('#mobile-cover-part button.plus-btn');
var mobileCoverInputField = document.querySelector('#mobile-cover-part input');
var mobileCoverPriceElement = document.querySelector('#mobile-cover-part h5 span');

mobileCoverMinusButton.addEventListener('click', function () {
    if (mobileCoverInputField.value > 0) {
        var inputValue = parseFloat(mobileCoverInputField.value);
        var decreasedValue = oneDecrement(inputValue);
        mobileCoverInputField.value = decreasedValue;

        var totalMobileCoverPrice = mobilePrice(decreasedValue, 59);
        mobileCoverPriceElement.innerText = totalMobileCoverPrice;

        var subtotal = addition(parseFloat(mobilePriceElement.innerText), parseFloat(mobileCoverPriceElement.innerText))
        document.querySelector('#subtotal').innerText = subtotal;

        var total = addition(parseFloat(document.querySelector('#subtotal').innerText), parseFloat(document.querySelector('#tax').innerText));
        document.querySelector('#total').innerText = total;
    }
})

mobileCoverPlusButton.addEventListener('click', function () {
    var inputValue = parseFloat(mobileCoverInputField.value);
    var increasedValue = oneIncrement(inputValue);
    mobileCoverInputField.value = increasedValue;

    var totalMobileCoverPrice = mobilePrice(increasedValue, 59);
    mobileCoverPriceElement.innerText = totalMobileCoverPrice;

    var subtotal = addition(parseFloat(mobilePriceElement.innerText), parseFloat(mobileCoverPriceElement.innerText))
    document.querySelector('#subtotal').innerText = subtotal;

    var total = addition(parseFloat(document.querySelector('#subtotal').innerText), parseFloat(document.querySelector('#tax').innerText));
    document.querySelector('#total').innerText = total;
})