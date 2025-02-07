import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandades"
            content="ipsum dolor sit amet consectetur adipisicing elit. Nobis porro eum vero quo, officia commodi quasi similique at? Animi velit consectetur iusto atque! Tempora esse temporibus sunt dignissimos commodi rem."
          />
          <Post 
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
