import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import GettingStarted from "./pages/GettingStarted";
import AddingFiles from "./pages/AddingFiles";
import NoPage from "./pages/NoPage";
import Shortcuts from "./pages/Shortcuts";
import SupportedFormats from "./pages/SupportedFormats";
import FAQ from "./pages/FAQ";
import Converting from "./pages/Converting";
import Downscaling from "./pages/Downscaling";
import Troubleshooting from "./pages/Troubleshooting";
import Settings from "./pages/Settings";
import Metadata from "./pages/Metadata";

import "./css/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<GettingStarted />} />
            <Route path="adding-files" element={<AddingFiles />} />
            <Route path="shortcuts" element={<Shortcuts />} />
            <Route path="supported-formats" element={<SupportedFormats />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="converting" element={<Converting />} />
            <Route path="downscaling" element={<Downscaling />} />
            <Route path="troubleshooting" element={<Troubleshooting />} />
            <Route path="settings" element={<Settings />} />
            <Route path="metadata" element={<Metadata />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
