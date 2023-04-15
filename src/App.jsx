// npm modules
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// page components
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import NewPost from "./pages/NewPost/NewPost";
import PostDetail from "./pages/PostDetail/PostDetail";
import BuySell from "./pages/BuySell/BuySell";

// components
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// services
import * as authService from "./services/authService";
import * as postService from "./services/postService";

// styles
import "./App.css";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const handleAddPost = async (postData) => {
    const newPost = await postService.create(postData);
    setPosts([newPost, ...posts]);
    navigate("/");
  };

  const handleUpdatePost = async (postData) => {
    const updatedPost = await postService.update(postData);
    setPosts(posts.map((b) => (postData._id === b._id ? updatedPost : b)));
    navigate("/sell");
  };

  const handleDeletePost = async (id) => {
    const deletedPost = await postService.deletePost(id);
    setPosts(posts.filter((b) => b._id !== deletedPost._id));
    navigate("/sell");
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await postService.getAllPosts();
      setPosts(postData);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} posts={posts} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new"
          element={
            <ProtectedRoute user={user}>
              <NewPost handleAddPost={handleAddPost} posts={posts} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PostDetail posts={posts} handleDeletePost={handleDeletePost} />
          }
        />
        <Route
          path="/sell"
          element={
            <BuySell
              user={user}
              posts={posts}
              handleDeletePost={handleDeletePost}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
