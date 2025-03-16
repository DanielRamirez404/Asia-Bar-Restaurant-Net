class Table {
    constructor(name, idName, isFood = false, isAdminOnly = false) {
        this.name = name;
        this.idName = idName;
        this.isFood = isFood;
        this.isAdminOnly = isAdminOnly;
    }

    getUrlName() {
        const capitalLetters = this.name.match(/[A-Z]/g);
        const numberOfCapitalLetters = capitalLetters ? capitalLetters.length : 0;

        if (numberOfCapitalLetters < 2)
            return this.name.toLowerCase();

        let urlName = this.name.toLowerCase().charAt(0);

        for (let i = 1; i < this.name.length; i++) {
            const character = this.name.charAt(i); 
            urlName += (character == character.toLowerCase()) ? character : "-" + character.toLowerCase();
        }

        return urlName;
    }
}

export default Table;
