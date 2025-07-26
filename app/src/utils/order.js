export default class Order{
    constructor(clientID = "", type = "", products = "", note = "") {
        this.clientID = clientID;
        this.type = type;
        this.products = products;
        this.note = note;
    }
}
