import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import AboutPage from "./Pages/AboutPage";
import Layout from "./Pages/Layout";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MovieList />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
