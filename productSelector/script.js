let categoryFilter=document.getElementById("category-filter");

let productList=document.getElementById("product-list");
// console.log(categoryFilter);
// console.log(productList);
categoryFilter.addEventListener("change",function(){
    let selectedCategory=categoryFilter.value;
    // console.log(selectedCategory)
    let productCategory=document.querySelectorAll(".product");
//     // console.log(productCategory)
    productCategory.forEach((product)=>{
        let phoneName=product.getAttribute('data-category')
        if(selectedCategory==='all'||selectedCategory===phoneName){
            product.style.display="block";
        }else{
            product.style.display="none";
        }
    })
})
