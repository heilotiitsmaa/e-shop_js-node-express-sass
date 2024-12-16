//moodulite import
import { Product } from "./product.js";
import { Cart } from "./Cart.js";
import { Customer } from "./Customer.js";

// Loo tooted
const camera = new Product(1, "Kaamera", 499.99, "Tehnika");
const tablet = new Product(2, "E-luger", 199.99, "Tehnika");

// Loo ostukorv + tooted
const cart = new Cart();
cart.addProduct(camera, 1);
cart.addProduct(tablet, 2);

// Kogu summa & toodete kogus
console.log("Summa:", cart.calculateTotal());
console.log("Kogus:", cart.totalItems, "tk");

// Loo klient & esita tellimus
const customer = new Customer("Bethany");
customer.placeOrder(cart);

// Tellimuste ajalugu
customer.printOrderHistory();