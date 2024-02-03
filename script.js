// const products = [
//     {id: 1, name:'T-shirt', price: 50}, 
//     {id: 2, name:'jeans', price: 65}, 
//     {id: 3, name:'sneakers', price: 30}
// ]


// const cart = []

// function displayProduct(){
//     console.log('available product')
//     products.forEach(product=>{
//         console.log(`${product.id}.${product.name} - $${product.price}`)
//     })
// }

// function addToCart(productId) {
//     const product = products.find(item => item.id === productId);
//     if (product) {
//       cart.push(product);
//       console.log(`${product.name} added to cart.`);
//     } else {
//       console.log('Product not found.');
//     }
//   }

// function totalPrice(){
//     let total = 0;
//     cart.forEach(item =>{
//         total += price

//     })
//     console.log(`total Price  $${total}`)
// }

// displayProduct()

// totalPrice()




// define the empty class



// instantaite an boject


class student {
   constructor(name,grade){
    this.name = name;
    this.grade = grade;
   }
   makeGrade(){
    console.log(`${this.name} score ${this.grade}`)
}
}

const newStudent = new student('john', 20)
newStudent.makeGrade()





