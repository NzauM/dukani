// let windowObj = window
// console.log(windowObj)
// let cartButton = document.getElementById("cartBtn")
// console.log(cartButton)

// cartButton.addEventListener('click',changeStyles)

// import { products,myName } from './products.js'

document.addEventListener('DOMContentLoaded',()=>{

function changeStyles(event){
    console.log(event.target)
    // To get the exact HTML Element that produced this event we use event.target
    console.log("Cart Button Clicked")
    let exactBtn = event.target
    exactBtn.innerHTML = 'BUY PRODUCT'
    exactBtn.style.backgroundColor = "red"
//     // clickedbutton
// cartButton.innerHTML = "BUY PRODUCT"
// cartButton.style.backgroundColor = "red"
}

let backButton = document.getElementById("backBtn")
console.log(backButton)
backButton.addEventListener('click',navigateBack)

function navigateBack(){
    window.history.back()
}

let cartButtons = document.getElementsByClassName('cartBtn')
console.log(cartButtons)

// let cartButtonArray = [...cartButtons]
let cartButtonArray = Array.from(cartButtons)
console.log(cartButtonArray)

cartButtonArray.forEach((element)=>{
    // element.addEventListener('',changeStyles) //event handler
    element.addEventListener('click',changeStyles)

})



let priceparagraph = document.querySelectorAll('.price')
console.log(priceparagraph)
let paragraphs = Array.from(priceparagraph)
paragraphs.forEach((para)=>{
    para.addEventListener('click',noDiscount)
})

function noDiscount(e){
    let initialcontent = e.target
    let discountbtn = document.createElement('button')
    console.log(discountbtn)
    discountbtn.innerText = "Click for Discount"
    initialcontent.append(discountbtn)
}

let newProductForm = document.querySelector('#productForm')
// console.log(newProductForm)

newProductForm.addEventListener('submit',handleAddProduct)

function handleAddProduct(event){
    event.preventDefault()
    // console.log("User is adding product")

    const userData = new FormData(newProductForm)
    console.log(userData)
    const userDataObj = Object.fromEntries(userData)
    console.log(userDataObj)
    products.push(userDataObj)
    showProduct(userDataObj)
}

// loop through the products array and create a product card for each
// products.forEach(showProduct)
// let products = []

fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json").then((resp)=>resp.json()).then((data)=>data.forEach(showProduct))


function showProduct(item){
    // create a card with image, description, price, name, add to cart button
    let productCard = document.createElement('div')
    const priceContainer = document.createElement("h3")
    priceContainer.textContent = "PRICE: Kshs."+ item.priceCents;
    const descriptionContainer = document.createElement('p')
    descriptionContainer.textContent = "Description: "+item.description
    const buttonContainer = document.createElement('button')
    buttonContainer.innerText = "ADD TO CART"
    buttonContainer.id = item.id
    buttonContainer.addEventListener('click',handleAddProduct)
    const nameContainer = document.createElement('h3')
    nameContainer.textContent = "Name"+item.name
    const  imgContainer = document.createElement("img")
    imgContainer.src = item.image
    productCard.append(nameContainer,imgContainer,descriptionContainer,priceContainer,buttonContainer)

    productsContainer.appendChild(productCard)
}

homeBtn.addEventListener('click',(()=>{
    productFormDiv.style.display = 'none'
    cartDiv.style.display = 'none'
    productsContainer.style.display = 'block'
}))
addBtn.addEventListener('click',(()=>{
    productFormDiv.style.display = 'block'
    cartDiv.style.display = 'none'
    productsContainer.style.display = 'none'
}))
cartBtn.addEventListener('click',(()=>{
    productFormDiv.style.display = 'none'
    cartDiv.style.display = 'block'
    productsContainer.style.display = 'none'
}))

function handleAddProduct(e){
    // alert("ITem added to cart")
    // get the product and show it inside the cart div
    const productId = e.target.id
    // console.log(productId)
    let addedProduct = products.find((item)=>item.id == productId)
    console.log(addedProduct)
    renderCartItem(addedProduct)
}

function renderCartItem(item){
    let cartCard = document.createElement('div')
    const priceContainer = document.createElement("h3")
    priceContainer.textContent = "PRICE: Kshs."+ item.productPrice;
    const descriptionContainer = document.createElement('p')
    descriptionContainer.textContent =item.productDescription
    const nameContainer = document.createElement('h3')
    nameContainer.textContent = item.productName
    const  imgContainer = document.createElement("img")
    imgContainer.src = item.productPoster
    // cartCard.style.display = 'flex'
    cartCard.id = 'cartCardDiv'
    cartCard.append(imgContainer, nameContainer,descriptionContainer, priceContainer)
    cartDiv.appendChild(cartCard)
}

})








