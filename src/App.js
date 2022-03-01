import { useTheme } from "./dark-theme-context";
import "./styles.css";

export default function App() {
  const { Theme, setThemeHandler, ThemeStyling } = useTheme();

  return (
    <div className="App" style={ThemeStyling}>
      <button className="btn" onClick={setThemeHandler}>
        {" "}
        {Theme ? "🌝 Light Theme" : "🌚 Dark Theme"}
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
