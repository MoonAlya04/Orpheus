import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import { useTheme } from './context/ThemeContext';


function App() {

  const { theme, toggleTheme } = useTheme();


useEffect(() => {
  if (theme === 'light') {
    document.body.classList.add('lightBg');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('lightBg');
    localStorage.setItem('theme', 'dark');
  }
}, [theme]);


  return (
    <div className="App ">
      <Header />
      <MainSection img={theme === 'dark' ? '/main.png' : '/lightStatue.png'} />
    </div>
  );
}

export default App;



