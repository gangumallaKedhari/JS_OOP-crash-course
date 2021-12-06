class Book {
    constructor(title, author,year){
this.title = title;
this.author = author;
this.year = year;
    }

    getSummary(){
        return `${this.title} was witten by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book{
    constructor(title, author, year, month){
super(title,author,year);
this.month = month;
    }
}

const mag1 = new Magazine('Man One', 'John doe', '2018','Jan');
console.log(mag1.getSummary());