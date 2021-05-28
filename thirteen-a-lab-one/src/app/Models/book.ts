export class Book {
    
    bookId: number;
    title: string;
    author: string;
    category: string;
    price: number;
    coverFileName: string;
    constructor(bookId:number,title:string,author:string,category:string,price:number,coverFileName:string)
    {
        this.bookId=bookId;
        this.title=title;
        this.author=author;
        this.category=category;
        this.price=price;
        this.coverFileName=coverFileName;
    }

}