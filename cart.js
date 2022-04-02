var cartData=JSON.parse(localStorage.getItem("cartItems"));

var total=document.createElement("div");
total.innerText=total.innerText.substring(1);

console.log(typeof(total.innerText))
total.innerText=cartData.reduce(function(sum,ele,ind,arr)
{
    // object price name key is "price"
    return sum+Number(ele.itemPrice)
},0);

console.log(total.innerText)

document.querySelector("#price").innerHTML="";
document.querySelector("#price").append("$"+total.innerText)

cartData.map(function(el,ind)
{
    var box=document.createElement("div");

    var divHead=document.createElement("p");
    divHead.innerText="Cart Items:";
    divHead.style="font-size:25px;"

    var line=document.createElement("hr");

    var imgItm=document.createElement("img")
    imgItm.src=el.itemPhoto;
    // imgItm.src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=640;maxWidth=250"

    var nameItm=document.createElement("p")
    nameItm.innerText=el.itemCat;
    nameItm.style="color:blue;"

    var priceItm=document.createElement("p")
    priceItm.innerText="$"+el.itemPrice;


    box.append(divHead,line,imgItm,nameItm,priceItm);
    
    document.querySelector("#cartItemsList").innerHTML="";
    document.querySelector("#cartItemsList").append(box);

})