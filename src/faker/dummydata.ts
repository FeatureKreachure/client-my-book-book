// Dummy users list
const users: User[] = [
    {
      username: "johnDoe",
      email: "john.doe@example.com",
      password: "hashed_password_john",
      interests: ["Science Fiction", "Fantasy"],
    },
    {
      username: "janeSmith",
      email: "jane.smith@example.com",
      password: "hashed_password_jane",
      interests: ["Mystery", "Historical Fiction"],
    },
    {
      username: "alexBrown",
      email: "alex.brown@example.com",
      password: "hashed_password_alex",
      interests: ["Biographies", "Self-help"],
    },
  ];
  
  // Dummy books list
  const books: Book[] = [
    // Books for John Doe
    {
      title: "The Galactic Odyssey",
      author: "Arthur Clarke",
      publishedYear: 1985,
      genres: ["Science Fiction"],
      public: true,
      user: users[0].username,
      coverImage: "path/to/galactic_odyssey.jpg",
      characters: [{ name: "Zaphod", description: "A two-headed alien" }],
      additionalFields: [],
      dateOfPublication: new Date(1985, 4, 12),
    },
    {
      title: "Fantasy Realm",
      author: "Tolkien Jr.",
      publishedYear: 1990,
      genres: ["Fantasy"],
      public: false,
      user: users[0].username,
      characters: [],
      additionalFields: [{ field: "Awards", note: "Fantasy Book of the Year" }],
    },
    {
      title: "Future's Past",
      author: "Isaac Asimov",
      publishedYear: 1978,
      genres: ["Science Fiction"],
      public: true,
      user: users[0].username,
      characters: [{ name: "R. Daneel Olivaw", description: "A humanoid robot" }],
      additionalFields: [],
    },
    // Books for Jane Smith
    {
      title: "The Mystery of the Ancient Manor",
      author: "Agatha Christie",
      genres: ["Mystery"],
      public: true,
      user: users[1].username,
      characters: [{ name: "Detective Hercule", description: "The main detective" }],
      additionalFields: [],
    },
    {
      title: "Historic Battles",
      author: "John Keegan",
      genres: ["Historical Fiction", "War"],
      public: false,
      user: users[1].username,
      additionalFields: [{ field: "Accuracy", note: "Highly accurate historical descriptions" }],
      characters: []
    },
    {
      title: "The Lost Crown",
      author: "Elizabeth Kostova",
      genres: ["Historical Fiction"],
      public: true,
      user: users[1].username,
      characters: [],
      additionalFields: [],
    },
    // Books for Alex Brown
    {
      title: "The Innovators",
      author: "Walter Isaacson",
      genres: ["Biographies", "Technology"],
      public: true,
      user: users[2].username,
      characters: [],
      additionalFields: [{ field: "Subject", note: "Tech pioneers" }],
    },
    {
      title: "Mindset",
      author: "Carol S. Dweck",
      genres: ["Self-help"],
      public: true,
      user: users[2].username,
      characters: [],
      additionalFields: [],
    },
    {
      title: "Biography of a Yogi",
      author: "Paramahansa Yogananda",
      genres: ["Biographies", "Spirituality"],
      public: false,
      user: users[2].username,
      characters: [],
      additionalFields: [],
    },
  ];
  