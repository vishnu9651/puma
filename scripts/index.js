//store the products array in localstorage as "products"
let arr=JSON.parse(localStorage.getItem("products")) || [];

function products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function addproducts(e){
    event.preventDefault();
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    let p1=new products(type,desc,price,image)
arr.push(p1);
localStorage.setItem("products",JSON.stringify(arr))
window.location.reload()
}