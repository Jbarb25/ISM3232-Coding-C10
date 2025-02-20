//Task 1: Creating a Product Class
class Product {    //Create a class 'product" with the properties below
    constructor(name, id, price, stock){
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;}
    
    getDetails(){ //Add a method that returns a formatted string of product details when called with the parameters to plug in
        return(`Product Name: ${this.name}, ID: ${this.id}, Price:$${this.price}, Stock: ${this.stock}`);}

    updateStock(quantity){   //Add a method that modifies the stock level when an order is placed to remove the stock ordered 
        this.stock -= quantity;
        return(this.stock);} //Return the updated stock level to where it is called

}
const prod1 = new Product("Laptop", 101, 1200, 10); //establish a new product with the parameters to plug into the functions
console.log(prod1.getDetails()); 

prod1.updateStock(3); //plug in the 3 stock ordered into the updatestock method to remove the order from the stock level and return the updated level
console.log(prod1.getDetails()); //return the updated product details to the console

//Task 2: Creating an Order Class
class Order {   //Create an Order class that has the properties below
    constructor(orderID, product, quantity){
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;

        this.product.updateStock(this.quantity);} //Update the stock level by calling the method from the Product class and inserting this.quantity for quantity

    getOrderDetails(){ //return the Order details with their labels when called. this.product is an instance of Product so now it is pulled from Product class
        return (`Order ID: ${this.orderID}, Product: ${this.product instanceof Product}, Quantity: ${this.quantity}`);} 
}

const order1 = new Order(501, prod1, 2); //Initiate a new order with the parameter for details
console.log(order1.getOrderDetails()); //call the Order Details method in the class to print out the details of the order
console.log(prod1.getDetails()); //call the get Details method from the Product class to print out the updated details of the Product