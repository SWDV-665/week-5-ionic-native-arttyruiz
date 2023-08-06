// create a  grocery class
class grocery {
    name: string;
    quantity: number;
    price: number;

    // This is my constructor
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// This is my grocery list
let list_of_items = [
    new grocery("Eggs", 12, 2),
    new grocery("Ham", 1, 5),
    new grocery("Bread", 2, 8)
    new grocery("Cheese", 1, 5)
]

const ele = document.getElementById("app");

// This is where I am going to append it to my html page. 
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});