import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { MY_RANDOM_KEY } from './config';

function App() {
  const isRandomKeyValid = MY_RANDOM_KEY !== 'default_value';

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {isRandomKeyValid && <p>MY_RANDOM_KEY is valid!</p>}

    </div>
  );
}

export default App;
