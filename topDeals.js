document.querySelector('#fi_item_btn').addEventListener('click', addCartFun);

var cartItemArr = JSON.parse(localStorage.getItem('cartItems')) || [];

function addCartFun()
{
    event.preventDefault();
    // console.log('Im inside function');

        var cartItemObj = {
            itemCat : document.querySelector('.itemName').innerText,
            itemPrice : document.querySelector('.fi_item_price').innerText,
            itemPhoto: document.querySelector('#fi_item_img').src
        }
        console.log(cartItemObj);
        cartItemArr.push(cartItemObj);
        // console.log(cartItemArr)
        localStorage.setItem('cartItems', JSON.stringify(cartItemArr));
        alert("Item added to cart");

    
}
