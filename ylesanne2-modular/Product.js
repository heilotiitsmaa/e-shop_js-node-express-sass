export class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    describe() {
        return `Tooteinfo: see on ${this.name}, mis kuulub ${this.category} kategooriasse ja maksab ${this.price} eurot.`;
    }
    static discountedPrice (a, b) {
        return a - (a*(b/100))
    }
}