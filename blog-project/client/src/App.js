import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  return (
    <>
    <h1>Create Post</h1>
    <CreatePost />
    <hr />
      <PostList />
    </>
  );
}

export default App;
