const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Mock data
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    postCount: 15
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    postCount: 12
  },
  {
    id: '3',
    name: 'Alice smith',
    email: 'mike@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    postCount: 8
  },
  {
    id: '4',
    name: 'Bob johnson',
    email: 'alice@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
    postCount: 20
  },
  {
    id: '5',
    name: 'Charlie brown',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    postCount: 10
  },
  {
    id: '6',
    name: 'Dayana white',
    email: 'charlie@example.com',
    avatar: 'https://i.pravatar.cc/150?img=6',
    postCount: 25
  },
  {
    id: '7',
    name: 'Edward davis',
    email: 'david@example.com',
    avatar: 'https://i.pravatar.cc/150?img=7',
    postCount: 18
  },
  {
    id: '8',
    name: 'fiyona miller',
    email: 'evelyn@example.com',
    avatar: 'https://i.pravatar.cc/150?img=8',
    postCount: 22
  },
  {
    id: '9',
    name: 'George wilson',
    email: 'frank@example.com',
    avatar: 'https://i.pravatar.cc/150?img=9',
    postCount: 5
  },
  {
    id: '10',
    name: 'Helen moore',
    email: 'grace@example.com',
    avatar: 'https://i.pravatar.cc/150?img=10',
    postCount: 14
  },
  {
    id: '11',
    name: 'Ivy taylor',
    email: 'hannah@example.com',
    avatar: 'https://i.pravatar.cc/150?img=11',
    postCount: 17
  },
  {
    id: '12',
    name: 'Jack anderson',
    email: 'isaac@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    postCount: 30
  },
  {
    id: '13',
    name: 'kathy thomas',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  {
    id: '14',
    name: 'Liyam jackson',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  
  {
    id: '15',
    name: 'mona harris',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  
  {
    id: '16',
    name: 'nathan clark',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  {
    id: '17',
    name: 'oliviya levis',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  
  {
    id: '18',
    name: 'paul walker',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  {
    id: '19',
    name: 'quin scott',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  
  {
    id: '20',
    name: 'rachel young',
    email: 'jack@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    postCount: 28
  }
  
  
];


const posts = [
  {
    id: '1',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Just launched my new website! Check it out!',
    image: 'https://picsum.photos/800/400?random=1',
    timestamp: new Date().toISOString(),
    commentCount: 3,
    comments: [
      {
        id: '1',
        userId: '2',
        content: 'Looks great! Congratulations!',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        userId: '3',
        content: 'Amazing work!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '2',
    userId: '2',
    userName: 'Jane doe',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Working on a new project. Stay tuned!',
    image: 'https://picsum.photos/800/400?random=2',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '3',
        userId: '1',
        content: "Can't wait to see it!",
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '3',
    userId: '3',
    userName: 'alice smith',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Exploring new photography spots this weekend!',
    image: 'https://picsum.photos/800/400?random=3',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '4',
        userId: '2',
        content: 'That sounds awesome! Enjoy!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '4',
    userId: '4',
    userName: 'Bob jhonson',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    content: 'Just finished my painting. So proud of this one!',
    image: 'https://picsum.photos/800/400?random=4',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '5',
        userId: '5',
        content: 'Wow! Looks amazing!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '5',
    userId: '5',
    userName: 'charlie brown',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Learning React! Loving it so far! 🚀',
    image: 'https://picsum.photos/800/400?random=5',
    timestamp: new Date().toISOString(),
    commentCount: 3,
    comments: [
      {
        id: '6',
        userId: '1',
        content: 'React is awesome! Good luck!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '6',
    userId: '6',
    userName: 'dayana white',
    userAvatar: 'https://i.pravatar.cc/150?img=6',
    content: 'Had a blast hiking this weekend! 🌄',
    image: 'https://picsum.photos/800/400?random=6',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '7',
        userId: '2',
        content: 'Where did you go? Looks amazing!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '7',
    userId: '7',
    userName: 'edward davis',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '8',
    userId: '8',
    userName: 'fiyona miller',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    content: 'Baking some delicious cookies today! 🍪',
    image: 'https://picsum.photos/800/400?random=8',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '9',
        userId: '4',
        content: 'Save me some! 😋',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '9',
    userId: '9',
    userName: 'george wilson',
    userAvatar: 'https://i.pravatar.cc/150?img=9',
    content: 'Watching my favorite movie tonight! 🎬',
    image: 'https://picsum.photos/800/400?random=9',
    timestamp: new Date().toISOString(),
    commentCount: 2,
    comments: [
      {
        id: '10',
        userId: '5',
        content: 'Enjoy! What’s the movie?',
        timestamp: new Date().toISOString()
      }
    ]
  },
  {
    id: '10',
    userId: '10',
    userName: 'helen moore',
    userAvatar: 'https://i.pravatar.cc/150?img=10',
    content: 'Starting my new job today! Wish me luck! 🙌',
    image: 'https://picsum.photos/800/400?random=10',
    timestamp: new Date().toISOString(),
    commentCount: 3,
    comments: [
      {
        id: '11',
        userId: '1',
        content: 'Congrats! You’ll do great!',
        timestamp: new Date().toISOString()
      },
      {
        id: '12',
        userId: '2',
        content: 'Best of luck! 🍀',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '11',
    userId: '11',
    userName: 'ivy taylor',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '12',
    userId: '12',
    userName: 'Jack anderson',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '13',
    userId: '13',
    userName: 'kathy thomas',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '14',
    userId: '14',
    userName: 'Liyam jockson',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '15',
    userId: '15',
    userName: 'mona harris',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '16',
    userId: '16',
    userName: 'nathan clark',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '17',
    userId: '17',
    userName: 'oliviya levis',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '18',
    userId: '18',
    userName: 'paul walker',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '19',
    userId: '19',
    userName: 'quin scot',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
  {
    id: '20',
    userId: '20',
    userName: 'rachel young',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    content: 'Started a new workout routine today! 💪',
    image: 'https://picsum.photos/800/400?random=7',
    timestamp: new Date().toISOString(),
    commentCount: 1,
    comments: [
      {
        id: '8',
        userId: '3',
        content: 'Good luck! Stay consistent!',
        timestamp: new Date().toISOString()
      }
    ]
  }
];


// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 