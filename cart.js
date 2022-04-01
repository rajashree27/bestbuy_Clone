var cartData=JSON.parse(localStorage.getItem("cartItems"));

var total=document.createElement("div");
total.innerText=cartData.reduce(function(sum,ele,ind,arr)
{
    // object price name key is "price"
    return sum+Number(ele.itemPrice)
},0);

document.querySelector("#price").innerHTML="";
document.querySelector("#price").append("$"+total.innerText)

cartData.map(function(el,ind)
{
    var box=document.createElement("div");

    var nameItm=document.createElement("p")
    nameItm.innerText=el.itemCat;

    var priceItm=document.createElement("p")
    priceItm.innerText=el.itemPrice;

    box.append(nameItm,priceItm);
    
    document.querySelector("#heading").innerHTML="";
    document.querySelector("#heading").append(box);

})