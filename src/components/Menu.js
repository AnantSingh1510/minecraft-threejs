import { useStore } from "../hooks/useStore";
import "./css/menu.css"

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld]);

    return (
        <div className="menu-container">
            <div className="menu">
                <button className="minecraft-button" onClick={() => saveWorld()}>
                    Save
                </button>
                <button className="minecraft-button" onClick={() => resetWorld()}>
                    Reset
                </button>
            </div>
        </div>
    );
};
