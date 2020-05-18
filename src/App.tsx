import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import * as styles from './App-style';
import logo from './logo.png';

const App: FunctionComponent = () => {
  useEffect(() => {
    console.log('foo');
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://preactjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
    </div>
  );
};

export default App;
