import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

import blog from "./blog";

import "./App.css";

function App() {
  return (
    <div className="blog-container">

      <Header name={blog.name} />

      <About
        image={blog.image}
        about={blog.about}
      />

      <ArticleList posts={blog.posts} />

    </div>
  );
}

export default App;
