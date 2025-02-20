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


//Task 3: Creating an Inventory Class
class Inventory{   //create and Inventory class that has the product as a parameter
    constructor(products){
        this.products = []; //establish products as an array of products for the inventory
        //Task 4: Implementing Order Management
        this.orders = [];}

    addProduct(product){  
        this.products.push(product);} //add a product to the array of products using the push action
    
    listProducts(){
    this.products.forEach(product =>{  //for each product in the array of products get the details of the product and print to the console
    console.log(product.getDetails())});}

    //Task 4: 
    placeOrder(orderId, product, quantity){
        const inventoryProduct = this.products.find(p => p.id === product.id); //inventory product is assigned to the product and it's id located in the products array to ensure it exists
        if (inventoryProduct && inventoryProduct.stock >= quantity){  //This ensures that the product is a valid product and that stock has enough to cover the quantity ordered 
            const totalPrice = product.price*quantity  //This would calculate the total cost of the order 
            const order = new Order(orderId, product, quantity); //encapsulates a new order information in this method 
            this.orders.push(order); //adds the order information into the array of orders
            console.log(`Order ${orderId} Placed, Total Cost: $${totalPrice}`);} //logs that there is a new order placed 
        else{
            console.log(`Not Enough Stock`);}} //if there is not enough stock to cover the qty in the order, the message will appear
    
    listOrders(){
        this.orders.forEach(order => {   //for each order in the order array, list the details of the order 
            console.log(order.getOrderDetails());})
    }
}

const inventory = new Inventory();  //initiate a new inventory 
inventory.addProduct(prod1);  //add product1 to the inventory class and run it through the methods to add it to the array of products
inventory.listProducts();  //call the method list products to list the products' information from the array


//Task 4: Implementing Order Management
inventory.placeOrder(601, prod1, 2);  //establish a new order to place
inventory.listOrders();  //call the method to list the details of the order after it is placed
console.log(prod1.getDetails());  //call the method to list the details of the product ordered