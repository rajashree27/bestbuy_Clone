   // document.querySelector("#fi_item_add").addEventListener("click",addtocart)
    var topDealItemArr=[
    {
        prod_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451519_sd.jpg;maxHeight=160;maxWidth=160",
        prod_logo:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_4C_eps_renditionpicker_319x319-91889.png;maxHeight=70;maxWidth=120",
        prod_model:"samsung-82-class-q60t-series-led-4k-uhd-smart",
        prod_price:"1599.99",
                   
    },
    {
        prod_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6480/6480926_sd.jpg;maxHeight=640;maxWidth=550",
        prod_logo:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Insignia_4C_eps_renditionpicker_319x319-91902.png;maxHeight=70;maxWidth=120",
        prod_model: "Insignia-75-class-f30-series-led-4k-uhd-smart",
        prod_price:"689.99",
    },
    {
        prod_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401726_sd.jpg;maxHeight=160;maxWidth=160",
        prod_logo:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_4C_eps_renditionpicker_319x319-91889.png;maxHeight=70;maxWidth=120",
        prod_model: "Samsung-58-class-q60t-series-led-4k-uhd-smart",
        prod_price:"479.99",
    },
    {
        prod_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470258_sd.jpg;maxHeight=640;maxWidth=550",
        prod_logo:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/TCL_Red_4_Rev_eps_renditionpicker_319x319-92350.png;maxHeight=70;maxWidth=120",
        prod_model: "TCL-50-class-5-series-qled-4k-uhd-smart",
        prod_price:"479.99"
    }
];

    var cartItemArr = JSON.parse(localStorage.getItem("cartItems")) || []
  
    topDealItemArr.map(function (ele)
    {

    var box=document.createElement("div");
    box.style.height = 'auto';
    box.style.alignItems = 'center';
     
    box.setAttribute("class","photo_A")

     var img=document.createElement("img")
     img.src=ele.prod_url;
      
     img.style.width="90%";
     img.style.height = '200px';
     img.style.paddingLeft = '40px';
      
     img.setAttribute("class","photo_B");

     var logo = document.createElement('img');
     logo.src = ele.prod_logo;
     logo.style.width = '30%';
     logo.style.height = '24px';
     logo.style.marginBottom = '0.6rem'
    //  logo.style.paddingLeft = '40px';


     var model = document.createElement('a');
     model.innerText = ele.prod_model;
     model.style.lineHeight = '20px';
     model.style.color = '#0091f7';
     model.style.marginBottom = '0.6rem'
     model.style.cursor = 'pointer';

     var price = document.createElement("p")
     price.innerText = ele.prod_price;

     var btn=document.createElement("button")
     btn.innerText="Add to Cart";
     btn.style.backgroundColor = 'rgb(252, 252, 14)';
     btn.style.color = 'black';
     btn.style.border = 'none';
     btn.style.padding = '10px 30px 10px 20px';
     btn.style.borderRadius = '6px';
     btn.style.marginTop = '1rem';
     btn.style.cursor = 'pointer';
     btn.style.width = '50%';
     btn.style.display = 'flex'
     btn.style.flexDirection = 'row-reverse'
     btn.addEventListener("click",function()
     {
         addtocart(ele)
     })

     var cartImg = document.createElement('img');
     cartImg.src = './images/shopping-cart.png';
     cartImg.style.width = '12px';
     cartImg.style.height = '12px';
     cartImg.style.marginTop = '0.25rem'
     cartImg.style.marginRight = '0.25rem'

     btn.append(cartImg);

     var lowerDiv = document.createElement('div');
     lowerDiv.style.display = 'flex';
     lowerDiv.style.flexDirection = 'column';
     lowerDiv.style.padding = '10px'
     lowerDiv.style.lineHeight = '20px';
     lowerDiv.style.paddingLeft = '40px';


     lowerDiv.append(logo, model, price, btn)

    box.append(img, lowerDiv)

    document.querySelector("#itemSection").append(box)
    });


    function addtocart(ele)
    {
        cartItemArr.push(ele)
        localStorage.setItem("cartItems",JSON.stringify(cartItemArr));
        alert("Item/s added to cart");
        console.log(ele)
    }


// document.querySelector('#fi_item_btn').addEventListener('click', addCartFun);

// // var cartItemArr = JSON.parse(localStorage.getItem('cartItems')) || [];

// function addCartFun()
// {
//     event.preventDefault();

//         var cartItemObj = {
//             itemCat : document.querySelector('.itemName').innerText,
//             itemPrice : document.querySelector('.fi_item_price').innerText,
//             itemPhoto: document.querySelector('#fi_item_img').src
//         }
//         console.log(cartItemObj);
//         cartItemArr.push(cartItemObj);
//         // console.log(cartItemArr)
//         localStorage.setItem('cartItems', JSON.stringify(cartItemArr));
//         alert("Item added to cart");

    
// }
