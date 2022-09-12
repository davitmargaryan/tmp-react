export default function AppHeader(props) {
  return (
    <div>
      <button onClick={() => props.onThemeChange("blue")}>Blue</button>
      <button onClick={() => props.onThemeChange("green")}>Green</button>
    </div>
  );
}
