import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

import { ContextWrapper } from './session/session';
import { PageList } from './pagination/page';

function Content() {
    return (
        <Router>
            <Routes>
                <Route exact path = "/*" element = { <Navigate to="/" /> } />
                { PageList.map((page) => ( <Route path={page.path} element={page.component} /> ))}
            </Routes>
        </Router>
    );
}

function App() {
    return (
        <ContextWrapper content = { <Content /> } />
    );
}

export default App;
