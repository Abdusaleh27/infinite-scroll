import ImagesRenderer from "./Components/ImagesRenderer";
import Title from "./Components/Title";

function App() {
  return (
    <div>
      <Title />

      <div className="App container text-center">
        <ImagesRenderer />
      </div>
    </div>
  );
}

export default App;
