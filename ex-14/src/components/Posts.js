import React from 'react';

function Posts() {
  const posts = [
    'First post about React',
    'Learning JSX today.',
    'Building a profile page.'
  ];
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>{post}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;