import React from "react";
import ReactDOM from "react-dom/client";

// Reset css
import "@csstools/normalize.css";

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import css
import "index.css";

// Import components
import App from "App";

// Import reportWebVitals to measure the real life performance the app
import reportWebVitals from "reportWebVitals";
import {AuthContextProvider} from "Contexts/auth-context";
import HomePage from "Pages/HomePage/HomePage"
import {BrowserRouter, Route,Routes} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<HomePage/>}/>
                </Routes>
                {/*<HomePage/>*/}
            </BrowserRouter>
        </AuthContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
