import * as React from "react"

import { App } from "../App/App"
import { fetchNui, useNuiEvent } from "../../hooks"

export const Provider: React.FC = () => {
    const [visible, setVisible] = React.useState(false)
    useNuiEvent("App:open", () => setVisible(true))

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setVisible(false)
            fetchNui("App:close")
        }
    };

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <React.Fragment>
            {visible && (
                <App />
            )}
        </React.Fragment>
    );
};