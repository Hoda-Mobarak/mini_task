var productName = document.getElementById("pn");
var productPrice = document.getElementById("pp");
var productCategory = document.getElementById("pc");
var productDesc = document.getElementById("pd");


var allProducts =[];

// function to add new product
function addNewProduct(){
     var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDesc.value, 
     }

     allProducts.push(product);
     console.log(allProducts);
     clearInputs();
}


// function to clear inputs
function clearInputs(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
}