//1.TOODETE LISAMINE E-POODI
class Product {
    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

describe(){
    return `tootekood: ${this.id}, \ntoode: ${this.title}, \nhind: ${this.price}€, \nkategooria: ${this.category}`;
    }
    //staatiline meetod
    static discountedPrice(a, b) { //a=price b=discountPercent
        return a - (a*(b/100))
    }
}
const camera = new Product (1, 'Kaamera', 499.99, 'Tehnika');
console.log(`Kirjeldus \n${camera.describe()}`);

//use a specific discount
const discountPercent=20; //overrides the default

console.log(`Soodusprotsent: ${discountPercent}%`);
console.log(`Uus hind: ${Product.discountedPrice(camera.price, discountPercent)}€`); //20% soodukas

//2.OSTUKORV
class Cart {
    constructor() {
        this.cartItems = []; //[{ {p}, quantity=1 }, { {product}, quantity=2 }]
    }
addProduct(product, quantity=1){ //lisab toote ja koguse. Leia id põhjal toode
this.cartItems.push({product, quantity});
}
    
removeProduct(productId){
    this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
    }
calculateTotal(){
    return this.cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0
);
    }
get totalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    } //kasutan outside on constructor getterit=makes property readable
}

const cart = new Cart();
//cart.addProduct(camera, 7);
console.log(`${cart.calculateTotal()}€`); //kokku hind
console.log("Kokku tooteid ostukorvis", cart.totalItems); //kokku tooteid ostukorvis

//3.TELLIMUSED JA KLIENDI ANDMED
class Order {
    constructor(cart){
    this.orderDate = new Date();
    this.cart = cart;
}

printOrder() {
    console.log(`Tellimuse kuupäev: ${this.orderDate.toDateString()}`);
    this.cart.cartItems.forEach((item) => {
      console.log(
        `${item.product.name} - $${item.product.price} x ${item.quantity}`
      );
    });
    console.log(`Kogusumma: $${this.cart.calculateTotal()}`);
  }
}

const order = new Order(cart);
order.printOrder();
//order.printOrderHistory()

//4.KLIENDI KLASS JA TELLIMUSTE AJALUGU
class Customer {
    constructor(name){
    this.name = name;
    this.orderHistory = [];
}
 placeOrder(cart) {
    const order = new Order(cart);
    this.orderHistory.push(order);
 }

 printOrderHistory(){
    console.log(`${this.name} tellimuste ajalugu:`);
    this.orderHistory.forEach((order, index) => {
        console.log(
            `Tellimus ${
                index +1
            } \nKuupäev: ${order.orderDate.toDateString()}, Kogusumma: $${order.cart.calculateTotal()}`
        );
    });
 }
}

const customer = new Customer("Bethany");
customer.placeOrder(cart);
customer.printOrderHistory();