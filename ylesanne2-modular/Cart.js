export class Cart {
    constructor() {
        this.cartItems = []; //[{ {p}, quantity=1 }, { {product}, quantity=2 }]
        //this.quantity = 0;
        //this.total = 0;
    }
addProduct(product, quantity=1){ //lisab toote ja koguse. Leia id põhjal toode
    //const existingItem = this.cartItems.find((toode)=> toode.product.id === product.id);
    //console.log(existingItem);
    //if(existingItem){
    //    existingItem.quantity += quantity;
    //}
    //else{
    this.cartItems.push({product, quantity});
    }
    //console.log(existingItem);
    
    
removeProduct(productId){
    this.cartItems = this.cartItems.filter((cartItems)=>cartItems.product.id !== productId);
    }
calculateTotal(){
    return this.cartItems.reduce((total, cartItems=quantity * price) => total + cartItems.quantity * cartItems.product.price, 0);
    }
get totalItems() {
    return this.cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
    } //kasutan outside on constructor getterit=makes property readable
}
