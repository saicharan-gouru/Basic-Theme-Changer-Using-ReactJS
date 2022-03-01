import { useContext } from "react";
import { DarkThemeContext } from "./dark-theme-context";
import "./styles.css";

export default function App() {
  const { Theme, setThemeHandler, ThemeStyling } = useContext(DarkThemeContext);

  return (
    <div className="App" style={ThemeStyling}>
      <button onClick={setThemeHandler}> {Theme ? "light" : "dark"}</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}