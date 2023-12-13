import ReviewList from "./ReviewList";
import items from "../mock.json";
function App() {
  const handleDelete = (id) => {
    alert(id);
  };

  return (
    <div>
      <ReviewList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default App;
