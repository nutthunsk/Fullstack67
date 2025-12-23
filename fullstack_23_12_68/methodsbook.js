const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    checkout: function(){
        this.isAvailable = false;
    },

    checkin: function(){
        this.isAvailable =true;
    }
};

console.log(book.isAvailable);
book.checkout();
console.log(book.isAvailable);
book.checkin();
console.log(book.isAvailable);