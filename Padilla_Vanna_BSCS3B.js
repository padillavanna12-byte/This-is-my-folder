let shopName = "Vanna's Girl Fashion";
let shopLocation = "Calbayog City";
let discountRate = 0.10;



let clothes = [
    "Floral Dress",
    "Crop Top",
    "Denim Skirt",
    "Cardigan"
];

let colors = [
    "Pink",
    "White",
    "Violet",
    "Black"
];

let prices = [
    850,
    450,
    700,
    600
];




const shopInfo = {
    name: shopName,
    location: shopLocation,
    category: "Women's Fashion"
};

const paymentInfo = {
    cash: 'cash',
    gcash: 'gcash',
    creditCard: 'creditcard'
};




class Clothing {

    
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showProduct() {
        return `${this.name} - ₱${this.price}`;
    }

    getPrice() {
        return this.price;
    }

    buy() {
        return `You bought ${this.name}.`;
    }
}




class Dress extends Clothing {

    constructor(name, price, size) {
        super(name, price);
        this.size = size;

        
        this._dressCode =
            "DR-" + Math.floor(Math.random() * 1000);
    }

    showProduct() {
        return `${this.name} | Size: ${this.size} | ₱${this.price}`;
    }

    getDressCode() {
        return this._dressCode;
    }

    wear() {
        return `You are wearing the beautiful ${this.name}.`;
    }
}




class Top extends Clothing {

    constructor(name, price, color) {
        super(name, price);
        this.color = color;

                                                                
        this._topCode =
            "TP-" + Math.floor(Math.random() * 1000);
    }

    showProduct() {
        return `${this.name} | Color: ${this.color} | ₱${this.price}`;
    }

    getTopCode() {
        return this._topCode;
    }

    wear() {
        return `You are wearing the stylish ${this.name}.`;
    }
}



class ClothingShop {

    constructor(name) {
        this.name = name;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    showProducts() {
        for (let product of this.products) {
            console.log(product.showProduct());
        }
    }

    countProducts() {
        return this.products.length;
    }
}




function calculateDiscount(price, discount) {
    return price - (price * discount);
}



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




const myShop = new ClothingShop(shopName);

myShop.addProduct(dress1);
myShop.addProduct(dress2);
myShop.addProduct(top1);
myShop.addProduct(top2);




console.log("CLOTHES:");

for (let i = 0; i < clothes.length; i++) {
    console.log(clothes[i]);
}




console.log("\nCOLORS:");

for (let color of colors) {
    console.log(color);
}



console.log("\nPRICES:");

let i = 0;

while (i < prices.length) {
    console.log(`₱${prices[i]}`);
    i++;
}




if (dress1.getPrice() >= 800) {
    console.log("\nThe Floral Dress is a premium item.");
} else {
    console.log("\nThe Floral Dress is affordable.");
}




if (top1.color === "Pink") {
    console.log("The Crop Top is available in pink.");
} else {
    console.log("The Crop Top has another color.");
}




if (myShop.countProducts() >= 4) {
    console.log("The shop has many products.");
} else {
    console.log("The shop needs more products.");
}




if (paymentInfo.gcash === true) {
    console.log("GCash payment is accepted.");
} else {
    console.log("GCash payment is not accepted.");
}




console.log("\nPRODUCT METHODS:");

console.log(dress1.showProduct());

console.log(dress1.getPrice());

console.log(dress1.buy());

console.log(dress1.wear());

console.log(dress1.getDressCode());

console.log(top1.showProduct());

console.log(top1.wear());

console.log(top1.getTopCode());




console.log("\nDISCOUNT:");

let discountedPrice =
    calculateDiscount(850, discountRate);

console.log(
    `Original Price: ₱850`
);

console.log(
    `Discounted Price: ₱${discountedPrice}`
);



console.log("\nENCAPSULATION:");

console.log(
    `Dress Code: ${dress1.getDressCode()}`
);

console.log(
    `Top Code: ${top1.getTopCode()}`
);



console.log("\nPOLYMORPHISM:");

const products = [
    dress1,
    dress2,
    top1,
    top2
];

for (let product of products) {
    console.log(product.showProduct());
    console.log(product.wear());
}



console.log("\nALL SHOP PRODUCTS:");

myShop.showProducts();

console.log(
    `Total Products: ${myShop.countProducts()}`
);



console.log("\nSHOP INFORMATION:");

console.log(shopInfo.category);
console.log(shopInfo.name);
console.log(shopInfo.location);

console.log("\nPAYMENT INFORMATION:");

console.log(paymentInfo.creditCard);
console.log(paymentInfo.cash);
=======
let shopName = "Vanna's Girl Fashion";
let shopLocation = "Calbayog City";
let discountRate = 0.10;



let clothes = [
    "Floral Dress",
    "Crop Top",
    "Denim Skirt",
    "Cardigan"
];

let colors = [
    "Pink",
    "White",
    "Violet",
    "Black"
];

let prices = [
    850,
    450,
    700,
    600
];




const shopInfo = {
    name: shopName,
    location: shopLocation,
    category: "Women's Fashion"
};

const paymentInfo = {
    cash: 'cash',
    gcash: 'gcash',
    creditCard: 'creditcard'
};




class Clothing {

    
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showProduct() {
        return `${this.name} - ₱${this.price}`;
    }

    getPrice() {
        return this.price;
    }

    buy() {
        return `You bought ${this.name}.`;
    }
}




class Dress extends Clothing {

    constructor(name, price, size) {
        super(name, price);
        this.size = size;

        
        this._dressCode =
            "DR-" + Math.floor(Math.random() * 1000);
    }

    showProduct() {
        return `${this.name} | Size: ${this.size} | ₱${this.price}`;
    }

    getDressCode() {
        return this._dressCode;
    }

    wear() {
        return `You are wearing the beautiful ${this.name}.`;
    }
}




class Top extends Clothing {

    constructor(name, price, color) {
        super(name, price);
        this.color = color;

                                                                
        this._topCode =
            "TP-" + Math.floor(Math.random() * 1000);
    }

    showProduct() {
        return `${this.name} | Color: ${this.color} | ₱${this.price}`;
    }

    getTopCode() {
        return this._topCode;
    }

    wear() {
        return `You are wearing the stylish ${this.name}.`;
    }
}



class ClothingShop {

    constructor(name) {
        this.name = name;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    showProducts() {
        for (let product of this.products) {
            console.log(product.showProduct());
        }
    }

    countProducts() {
        return this.products.length;
    }
}




function calculateDiscount(price, discount) {
    return price - (price * discount);
}



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




const myShop = new ClothingShop(shopName);

myShop.addProduct(dress1);
myShop.addProduct(dress2);
myShop.addProduct(top1);
myShop.addProduct(top2);




console.log("CLOTHES:");

for (let i = 0; i < clothes.length; i++) {
    console.log(clothes[i]);
}




console.log("\nCOLORS:");

for (let color of colors) {
    console.log(color);
}



console.log("\nPRICES:");

let i = 0;

while (i < prices.length) {
    console.log(`₱${prices[i]}`);
    i++;
}




if (dress1.getPrice() >= 800) {
    console.log("\nThe Floral Dress is a premium item.");
} else {
    console.log("\nThe Floral Dress is affordable.");
}




if (top1.color === "Pink") {
    console.log("The Crop Top is available in pink.");
} else {
    console.log("The Crop Top has another color.");
}




if (myShop.countProducts() >= 4) {
    console.log("The shop has many products.");
} else {
    console.log("The shop needs more products.");
}




if (paymentInfo.gcash === true) {
    console.log("GCash payment is accepted.");
} else {
    console.log("GCash payment is not accepted.");
}




console.log("\nPRODUCT METHODS:");

console.log(dress1.showProduct());

console.log(dress1.getPrice());

console.log(dress1.buy());

console.log(dress1.wear());

console.log(dress1.getDressCode());

console.log(top1.showProduct());

console.log(top1.wear());

console.log(top1.getTopCode());




console.log("\nDISCOUNT:");

let discountedPrice =
    calculateDiscount(850, discountRate);

console.log(
    `Original Price: ₱850`
);

console.log(
    `Discounted Price: ₱${discountedPrice}`
);



console.log("\nENCAPSULATION:");

console.log(
    `Dress Code: ${dress1.getDressCode()}`
);

console.log(
    `Top Code: ${top1.getTopCode()}`
);



console.log("\nPOLYMORPHISM:");

const products = [
    dress1,
    dress2,
    top1,
    top2
];

for (let product of products) {
    console.log(product.showProduct());
    console.log(product.wear());
}



console.log("\nALL SHOP PRODUCTS:");

myShop.showProducts();

console.log(
    `Total Products: ${myShop.countProducts()}`
);



console.log("\nSHOP INFORMATION:");

console.log(shopInfo.category);
console.log(shopInfo.name);
console.log(shopInfo.location);

console.log("\nPAYMENT INFORMATION:");

console.log(paymentInfo.creditCard);
console.log(paymentInfo.cash);
>>>>>>> 76b51d4 (Fourth commit)
console.log(paymentInfo.gcash);
=======
// Variables
let studentName = "Vannana";
let age = 20;
let course = "BSCS";

// Arrays
let subjects = ["Programming", "Database", "Networking"];
let grades = [90, 85, 88];
let activities = ["Quiz", "Project", "Exam"];

// Conditional 1
if (age >= 20) {
  console.log(studentName + " is an adult.");
}

// Conditional 2
if (course === "BSCS") {
  console.log(studentName + " is taking Computer Science.");
}

// Conditional 3
if (grades[0] >= 75) {
  console.log("Programming: Passed");
}

// Loop 1 - Display subjects
console.log("Subjects:");
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

// Loop 2 - Display grades
console.log("Grades:");
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}

// Loop 3 - Display activities
console.log("Activities:");
for (let i = 0; i < activities.length; i++) {
  console.log(activities[i]);
}
