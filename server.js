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
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    postCount: 12
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    postCount: 8
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
    userName: 'Jane Smith',
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