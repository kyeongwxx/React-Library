import StarRating from "./components/starRating";

function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={(e) => alert("double click")}
    />
  );
}

export default App;
