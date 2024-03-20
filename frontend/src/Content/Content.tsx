import { useState } from "react"
import { useNuiEvent } from "../FiveM"

export const Content = () => {
    const [visible, setVisible] = useState(true);
    useNuiEvent("setVisible", (visible) => setVisible(visible));

    return (
        <>
            {visible && (
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            )}
        </>
    );
};