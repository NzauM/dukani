// fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")

// function readData(datafromServer){
//     // read the response data from our fetch
//     console.log(datafromServer)
// }
// console.log("File called")

// function sayhello(){
//     console.log("hello there")
// }

// sayhello()

// setTimeout(sayhello,5000)

    
fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
// .then(readServerResponse)
// .then(readResponseBody)
.then((responseData)=>responseData.json())
.then((jsonData)=>{
console.log(jsonData)
jsonData.forEach(showProduct)
})

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

// function readServerResponse(responseData){
//     console.log(responseData)
//     return responseData.json()
// }


// function readResponseBody(jsonData){
//     console.log(jsonData)
// }

function mercy(changingData){
    // function body: whatever i want to do
}


