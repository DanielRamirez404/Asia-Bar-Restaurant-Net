import logo from './logo.svg';
import './App.css';

import { ContextWrapper } from './session/session';

function Content() {
    return (
        <h1>
            Hello, world!
        </h1>
    );
}

function App() {
  return (
    <ContextWrapper content = { <Content /> } />
  );
}

export default App;
