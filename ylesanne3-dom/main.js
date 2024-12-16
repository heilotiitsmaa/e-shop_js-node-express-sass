document.title="minu epood"
import { Product } from '/product.js';

//const product = new Product ('Macbook', 'Air');
//console.log(product.getProductInfo()); //väljund: Macbook Air

//1.TOODETE LISAMINE E-POODI
class Product {
    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

describe(){
    return `tootekood:${this.id}, toode:${this.title}, hind:${this.price}€, kategooria:${this.category}`;
    }
    //staatiline meetod
    static discountedPrice(a, b) { //a=price b=discountPercent
        return a - (a*(b/100))
    }
}
const camera = new Product (1, 'Kaamera', 499.99, 'Tehnika');
console.log(`Kirjeldus: ${camera.describe()}`);

//use a specific discount
const discountPercent=20; //overrides the default

console.log(`Soodusprotsent: ${discountPercent}%`);
console.log(`Uus hind: ${Product.discountedPrice(camera.price, discountPercent)}€`); //20% soodukas

//2.OSTUKORV
class Cart {
    constructor() {
        this.cartItems = []; //[{ {p}, quantity=1 }, { {product}, quantity=2 }]
        this.quantity = 0;
        this.total = 0;
    }
addProduct(product, quantity=1){ //lisab toote ja koguse. Leia id põhjal toode
    const existingItem = this.cartItems.find((toode)=> toode.product.id === product.id);
    console.log(existingItem);
    if(existingItem){
        existingItem.quantity += quantity;
    }
    else{
    this.cartItems.push(product, quantity);
    }
    console.log(existingItem);
    }
    
removeProduct(productId){
    this.products = this.products.filter((product)=>product.product.id !== productId);
    }
calculateTotal(){
    return this.products.reduce((quantity, price) => quantity * this.price, 0);
    };
get totalItems() {
    return this.products.reduce((addProduct, removeProduct) => addProduct - removeProduct);
    } //kasutan outside on constructor getterit=makes property readable
}

const cart = new Cart();
//cart.addProduct(camera, 7);
//console.log(`${cart.calculateTotal()}€`); //kokku hind
//console.log(cart.totalItems); //kokku tooteid ostukorvis

//3.TELLIMUSED JA KLIENDI ANDMED
class Order {
    constructor(date){}
    orderDate = new Date();
}
const order = new Order(cart);
//order.printOrder()

//4.KLIENDI KLASS JA TELLIMUSTE AJALUGU
class Customer {
    constructor(name, order){}
    name;
    orderHistory = [order];
}

//modulaarne IMPORT
//nimeline eksport-->import
import {myFunction, myVariable} from '../Module.js';

myFunction(); //output: This is my function
console.log(myVariable); //output: 42