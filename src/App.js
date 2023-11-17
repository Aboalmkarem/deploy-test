import useLocalStorage from 'use-local-storage';
import './App.css';
import Theme from './components/theme/theme';

function App() {
  
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <header className='App-header'>

      <h1>this is the new website</h1>
      <Theme isChecked={isDark} handleChange={() => {setIsDark(!isDark)}}></Theme>
      </header>
    </div>
  );
}

export default App;
