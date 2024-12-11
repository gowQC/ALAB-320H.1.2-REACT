import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          dateTime="2020-11-12"
          date="11/12/20"
          title="On the Street in Brooklyn"
          source="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
          alt="Lady in orange dress looking downward while leaning on wall of blue bricks."
        />
        <Article
          dateTime="2020-11-11"
          date="11/11/20"
          title="Vintage in Vogue"
          source="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
          alt="Three individuals dressed with vintage clothing looking in all different directions, yet posing for the camera."
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
