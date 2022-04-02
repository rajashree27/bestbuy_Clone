// document.querySelector("#cartItemsList").innerHTML="";
var cartData = JSON.parse(localStorage.getItem("cartItems"));

var flag=1;

var total=document.createElement("div");

total.innerText=cartData.reduce(function(sum,ele,ind,arr)
{
    // object price name key is "price"
    return Math.floor(sum+Number(ele.prod_price))
},0);


document.querySelector("#price").innerHTML="";
document.querySelector("#price").append("$"+total.innerText)

cartData.map(function(el,ind)
{
    var box=document.createElement("div");

    var imgItm=document.createElement("img")
    imgItm.src=el.prod_url;
    imgItm.style="height:100px;width:150px"
   
    var nameItm=document.createElement("p")
    nameItm.innerText=el.prod_model;
    nameItm.style="color:blue;text-decoration:underline;cursor:pointer"

    var removeItm=document.createElement("button");
    removeItm.innerText="Remove from cart";
    removeItm.style="cursor:pointer;color:white;background-color:#0b4ec0;border:none;padding:5px 10px;border-radius:5px";
    removeItm.addEventListener("click",function(){removeFromCart(el,ind)})

    var priceItm=document.createElement("p")
    priceItm.innerText="$"+el.prod_price;

    if(flag==1)
    {
        document.querySelector("#cartItemsList").innerHTML="";
        var nameofCartItems=document.createElement("div");

        var divHead=document.createElement("p");
        divHead.innerText="Cart Items:";
        divHead.style="font-size:25px;"

        var line=document.createElement("hr");

        nameofCartItems.append(divHead,line)

        box.append(nameofCartItems,imgItm,nameItm,priceItm,removeItm);
        flag++;
    }
    else{
        var nameofCartItems=document.createElement("div");

        var divHead=document.createElement("p");
        divHead.innerText="Cart Items";
        divHead.style="font-size:25px; color:white"

        var line=document.createElement("hr");

        nameofCartItems.append(divHead,line)


        box.append(nameofCartItems,imgItm,nameItm,priceItm,removeItm);
    }
    
    document.querySelector("#cartItemsList").append(box);

})

function removeFromCart(el,ind)
{
    cartData.splice(ind,1);
    localStorage.setItem("cartItems",JSON.stringify(cartData));
    alert("Item removed from cart")
    window.location.reload();
}