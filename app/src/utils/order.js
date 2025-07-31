export default class Order{
    constructor(clientID = "", clientName = "", type = "", address = null, products = [], note = "") {
        this.clientID = clientID;
        this.clientName = clientName;
        this.type = type;
        this.address = address;
        this.products = products;
        this.note = note;
    }
}
