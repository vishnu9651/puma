var data=JSON.parse(localStorage.getItem("products")) || []
data.map(function(el,index){
    let div =document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image;
    let type=document.createElement("p")
    type.innerText=el.type;
    let desc=document.createElement("p")
    desc.innerText=el.desc
    let price=document.createElement("p")
    price.innerText=el.price
    let remove=document.createElement("button")
    remove.id="remove_product"
    remove.textContent="Remove Product"
    remove.style.color="blue"
    remove.style.cursor="pointer"
    remove.addEventListener("click", function(){
removeDetails(el,index)
    })

    div.append(img,type,desc,price,remove)
    document.querySelector("#all_products").append(div)
})

function removeDetails(el,index){
    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
}