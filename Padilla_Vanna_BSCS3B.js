// Variables for shop information
let shopName = "Vanna's Girl Fashion";
let shopLocation = "Calbayog City";
let discountRate = 0.10;

// Array of available clothes
let clothes = [
    "Dress",
    "Crop Top",
    "Denim Skirt",
    "Pink Top"
];

// Array of available colors
let colors = [
    "Pink",
    "White",
    "Violet",
    "Black"
];

// Array of product prices
let prices = [
    850,
    450,
    700,
    600
];

// Object containing shop information
const shopInfo = {
    name: shopName,
    location: shopLocation,
    category: "Women's Fashion"
};

// Object containing payment methods
const paymentInfo = {
    cash: 'cash',
    gcash: 'gcash',
    creditCard: 'creditcard'
};

// Parent class for clothing products
class Clothing {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Displays product name and price
    showProduct() {
        return `${this.name} - ₱${this.price}`;
    }

    // Returns the product price
    getPrice() {
        return this.price;
    }

    // Displays purchase message
    buy() {
        return `You bought ${this.name}.`;
    }
}

// Dress class inherits from Clothing
class Dress extends Clothing {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;

        // Generates a random dress code
        this._dressCode =
            "DR-" + Math.floor(Math.random() * 1000);
    }

    // Displays dress information
    showProduct() {
        return `${this.name} | Size: ${this.size} | ₱${this.price}`;
    }

    // Returns dress code
    getDressCode() {
        return this._dressCode;
    }

    // Displays wearing message
    wear() {
        return `You are wearing the beautiful ${this.name}.`;
    }
}

// Top class inherits from Clothing
class Top extends Clothing {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;

        // Generates a random top code
        this._topCode =
            "TP-" + Math.floor(Math.random() * 1000);
    }

    // Displays top information
    showProduct() {
        return `${this.name} | Color: ${this.color} | ₱${this.price}`;
    }

    // Returns top code
    getTopCode() {
        return this._topCode;
    }

    // Displays wearing message
    wear() {
        return `You are wearing the stylish ${this.name}.`;
    }
}

// Class for managing shop products
class ClothingShop {
    constructor(name) {
        this.name = name;
        this.products = [];
    }

    // Adds products to the shop
    addProduct(product) {
        this.products.push(product);
    }

    // Displays all products
    showProducts() {
        for (let product of this.products) {
            console.log(product.showProduct());
        }
    }

    // Counts total products
    countProducts() {
        return this.products.length;
    }
}

// Function for calculating discount
function calculateDiscount(price, discount) {
    return price - (price * discount);
}

// Creating dress objects
const dress1 = new Dress(
    "Floral Dress",
    850,
    "Medium"
);

const dress2 = new Dress(
    "Summer Dress",
    950,
    "Large"
);

// Creating top objects
const top1 = new Top(
    "Crop Top",
    450,
    "Pink"
);

const top2 = new Top(
    "Casual Blouse",
    650,
    "White"
);

// Creating shop object
const myShop = new ClothingShop(shopName);

// Adding products to the shop
myShop.addProduct(dress1);
myShop.addProduct(dress2);
myShop.addProduct(top1);
myShop.addProduct(top2);

// Displays all clothes
console.log("CLOTHES:");

for (let i = 0; i < clothes.length; i++) {
    console.log(clothes[i]);
}

// Displays all colors
console.log("\nCOLORS:");

for (let color of colors) {
    console.log(color);
}

// Displays all prices
console.log("\nPRICES:");

let i = 0;

while (i < prices.length) {
    console.log(`₱${prices[i]}`);
    i++;
}

// Checks if the dress is a premium item
if (dress1.getPrice() >= 800) {
    console.log("\nThe Floral Dress is a premium item.");
} else {
    console.log("\nThe Floral Dress is affordable.");
}

// Checks the crop top color
if (top1.color === "Pink") {
    console.log("The Crop Top is available in pink.");
} else {
    console.log("The Crop Top has another color.");
}

// Checks the number of shop products
if (myShop.countProducts() >= 4) {
    console.log("The shop has many products.");
} else {
    console.log("The shop needs more products.");
}

// Checks if GCash is accepted
if (paymentInfo.gcash === "gcash") {
    console.log("GCash payment is accepted.");
} else {
    console.log("GCash payment is not accepted.");
}

// Displays product methods
console.log("\nPRODUCT METHODS:");

console.log(dress1.showProduct());
console.log(dress1.getPrice());
console.log(dress1.buy());
console.log(dress1.wear());
console.log(dress1.getDressCode());

console.log(top1.showProduct());
console.log(top1.wear());
console.log(top1.getTopCode());

// Calculates discounted price
console.log("\nDISCOUNT:");

let discountedPrice = calculateDiscount(850, discountRate);

console.log(`Original Price: ₱850`);
console.log(`Discounted Price: ₱${discountedPrice}`);

// Displays product codes
console.log("\nENCAPSULATION:");

console.log(`Dress Code: ${dress1.getDressCode()}`);
console.log(`Top Code: ${top1.getTopCode()}`);

// Demonstrates polymorphism
console.log("\nPOLYMORPHISM:");

const products = [
    dress1,
    dress2,
    top1,
    top2
];

// Displays different product information
for (let product of products) {
    console.log(product.showProduct());
    console.log(product.wear());
}

// Displays all shop products
console.log("\nALL SHOP PRODUCTS:");

myShop.showProducts();

// Displays total products
console.log(`Total Products: ${myShop.countProducts()}`);

// Displays shop information
console.log("\nSHOP INFORMATION:");

console.log(shopInfo.category);
console.log(shopInfo.name);
console.log(shopInfo.location);

// Displays payment information
console.log("\nPAYMENT INFORMATION:");

console.log(paymentInfo.creditCard);
console.log(paymentInfo.cash);
console.log(paymentInfo.gcash);