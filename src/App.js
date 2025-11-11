import './App.css';
import Header from './Header';
import Pizza from './Pizza';
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <div className='menu-header'>
        our menu.
      </div>

      <div className='menu-tagline'>
        italian craft, no fuss
      </div>

      <div className="pizza-list">
        <Pizza
          name="margherita"
          description="a classic italian pizza with fresh tomato sauce, creamy mozzarella, and fragrant basil leaves. simple, fresh, and delicious."
          image="/img/margherita.jpg"
          price="12"
        />
        <Pizza
          name="prosciutto"
          description="thinly sliced prosciutto on a bed of tomato sauce and mozzarella, finished with a touch of fresh basil for an elegant flavor."
          image="/img/prosciutto.jpg"
          price="15"
        />
        <Pizza
          name="funghi"
          description="a rich blend of sautéed mushrooms over tomato sauce and melted mozzarella, topped with fresh herbs for an earthy taste."
          image="/img/funghi.jpg"
          price="14"
        />
        <Pizza
          name="focaccia"
          description="golden, airy italian bread with olive oil, sea salt, and rosemary. perfect as a starter or on its own."
          image="/img/focaccia.jpg"
          price="8"
        />
        <Pizza
          name="spinachi"
          description="a healthy vegetarian choice with fresh spinach, mozzarella, and tomato sauce. sometimes enhanced with ricotta or feta for extra creaminess."
          image="/img/spinaci.jpg"
          price="13"
        />
        <Pizza
          name="salamino"
          description="spicy italian salami over tomato sauce and mozzarella, delivering a smoky, bold, and slightly spicy flavor."
          image="/img/salamino.jpg"
          price="16"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

