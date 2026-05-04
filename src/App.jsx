import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import Journal from "./pages/Journal/Journal"
import JournalArticle from "./pages/Journal/JournalArticle"
import About from "./pages/About/About"
import { Theme } from "./components/Theme"

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<JournalArticle />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App