export default class Order{
    constructor(clientID = "", type = "", products = "") {
        this.clientID = clientID;
        this.type = type;
        this.products = products;
    }
}
