import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListView from "./pages/ListView";
import GalleryView from "./pages/GalleryView";
import DetailView from "./pages/DetailView";

function App() {
  return (
    <BrowserRouter basename="/mp2">
      <nav>
        <Link to="/list">List</Link> | <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/list" element={<ListView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
