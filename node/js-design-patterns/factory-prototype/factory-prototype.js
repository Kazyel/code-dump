/* 
  It´s so dumb in javascript to create factory functions, not even really a pattern
  We might even code it without knowing it´s a pattern 
 */

const createMovie = (title, genre, year, description) => ({
  title,
  genre,
  year,
  description,
});

const movieInterstellar = createMovie(
  "Interstellar",
  "Science Fiction",
  2014,
  "Interstellar is a science fiction film directed by Christopher Nolan in 2014."
);
console.log(movieInterstellar);

/* 
  The difference between factory and prototype is that prototype is better for creating objects with same methods and properties which is better for memory management, but factory is better for creating objects with different methods and properties 
*/

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.price = 10;
  }

  print() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
  }
}

const createBook = (title, author) => new Book(title, author);
const cleanCode = createBook("Clean Code", "Robert C. Martin");

console.log(cleanCode.print());
