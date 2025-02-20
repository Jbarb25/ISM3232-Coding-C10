//Task 1: Creating a Product Class
class Product {    //Create a class 'product" with the properties below
    constructor(name, id, price, stock){
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;}
    
    getDetails(){ //Add a method that returns a formatted string of product details when called with the parameters to plug in
        return(`Product Name: ${this.name}, ID: ${this.id}, Price:$${this.price}, Stock: ${this.stock}`);}

    updateStock(quanity){   //Add a method that modifies the stock level when an order is placed to remove the stock ordered 
        this.stock -= quanity;
        return(`Updated Stock Level: ${this.stock}`);} //Return the updated stock level to where it is called

}
const prod1 = new Product("Laptop", 101, 1200, 10); //establish a new product with the parameters to plug into the functions
console.log(prod1.getDetails()); 

prod1.updateStock(3); //plug in the 3 stock ordered into the updatestock method to remove the order from the stock level and return the updated level
console.log(prod1.getDetails()); //return the updated product details to the console