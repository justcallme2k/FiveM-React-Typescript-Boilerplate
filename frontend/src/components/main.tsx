import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "@mui/material/styles"
import { theme } from "../theme";

import { Provider } from "./Provider/Provider";

import "./main.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider />
        </ThemeProvider>
    </React.StrictMode>,
)