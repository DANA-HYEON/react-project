import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { configure } from "@testing-library/react";
import Movie from "./components/Movie";
import { Link } from "react-router-dom";

//route를 바라보는 component(Home, Detail.js)를 렌더링하는 역할
function App() {
    return (
        <div>
            <h1>Link Test</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
        </div>
    );
}

export default App;
