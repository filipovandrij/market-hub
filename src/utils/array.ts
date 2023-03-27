export type Books = {
    id: number,
      title: string,
      author: string,
      description: string,
      price: number,
      image: string,
      rating: number,
      stock: number,
      category:string
}


const booksArray:Books[] = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
      price: 10.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/81WbHs7s3tL.jpg",
      rating: 4.5,
      stock: 15,
      category: "Fiction"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "The story of a young girl growing up in the South and the racial injustice that she witnesses.",
      price: 12.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg",
      rating: 4.7,
      stock: 8,
      category: "Fiction"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about a totalitarian government that controls every aspect of citizens' lives.",
      price: 8.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg",
      rating: 4.6,
      stock: 3,
      category: "Science Fiction"
    },
        {
          id: 4,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          description: "A classic novel set in the 1930s in the Deep South of the United States, focusing on themes of racism and injustice.",
          price: 9.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/5107buywqYL._SX331_BO1,204,203,200_.jpg",
          rating: 4.5,
          stock: 14,
          category: "Fiction"
        },
        {
          id: 5,
          title: "1984",
          author: "George Orwell",
          description: "A dystopian novel set in a totalitarian society where the government has complete control over the lives of its citizens.",
          price: 12.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/81zl8qEv9eL.jpg",
          rating: 4.7,
          stock: 12,
          category: "Fiction"
        },
        {
          id: 6,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          description: "A classic novel set in the early 19th century in England, focusing on themes of love, marriage, and social status.",
          price: 8.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/51oqPZW7DqL._SX331_BO1,204,203,200_.jpg",
          rating: 4.2,
          stock: 132,
          category: "Fiction"
        },
        {
          id: 7,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          description: "A novel set in the 1920s in the United States, focusing on themes of love, wealth, and the American Dream.",
          price: 10.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/51iG1Z8bk6L._SX329_BO1,204,203,200_.jpg",
          rating: 4.1,
          stock: 14,
          category: "Fiction"
        },
        {
          id: 8,
          title: "Animal Farm",
          author: "George Orwell",
          description: "A novella set on a farm in England, where the animals overthrow their human owner and run the farm themselves, but struggle to prevent the pigs from taking over and becoming just like humans.",
          price: 7.99,
          image: "https://images-na.ssl-images-amazon.com/images/I/81QX9L-+kiL.jpg",
          rating: 4.5,
          stock: 6,
          category: "Fiction"
        },
      
    {
      id: 0,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      description: "The story of a man who sells his soul for eternal youth and beauty, but ultimately pays a terrible price for his vanity.",
      price: 9.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/71jxPZuslWL.jpg",
      rating: 4.4,
      stock: 10,
      category: "Fiction"
    }
  ]
  

  export default booksArray