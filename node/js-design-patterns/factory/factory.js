// It´s so dumb in javascript to create factory functions, not even really a pattern
// We might even code it without knowing it´s a pattern
const createMovie = (title, genre, year, description) => ({
  title,
  genre,
  year,
  description,
})

const movieInterstellar = createMovie('Interstellar', 'Science Fiction', 2014, 'Interstellar is a science fiction film directed by Christopher Nolan in 2014.');
console.log(movieInterstellar);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const createBook = (title, author) => new Book(title, author);
const cleanCode = createBook('Clean Code', 'Robert C. Martin');
console.log(cleanCode);