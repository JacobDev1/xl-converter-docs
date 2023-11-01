import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import GettingStarted from "./pages/GettingStarted";
import AddingFiles from "./pages/AddingFiles";
import NoPage from "./pages/NoPage";
import Shortcuts from "./pages/Shortcuts";
import SupportedFormats from "./pages/SupportedFormats";
import FAQ from "./pages/FAQ";
import Formats from "./pages/Formats";
import Downscaling from "./pages/Downscaling";
import Troubleshooting from "./pages/Troubleshooting";
import Settings from "./pages/Settings";
import Metadata from "./pages/Metadata";
import JPGReconstruction from "./pages/JPGReconstruction";
import ChoosingOutput from "./pages/ChoosingOutput";

import "./css/main.scss";

const entries = [
    ["Getting Started", "/"],
    ["Adding Files", "/adding-files"],
    ["Choosing Output", "/choosing-output"],
    ["Formats", "/formats"],
    ["Downscaling", "/downscaling"],
    ["Shortcuts", "/shortcuts"],
    ["Metadata", "/metadata"],
    ["JPG Reconstruction", "/jpg-reconstruction"],
    ["Settings", "/settings"],
    ["Troubleshooting", "/troubleshooting"],
    ["FAQ", "/faq"],
    ["Supported Formats", "/supported-formats"]
]

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation menuEntries={entries}/>}>
            <Route index element={<GettingStarted />} />
            <Route path="adding-files" element={<AddingFiles />} />
            <Route path="shortcuts" element={<Shortcuts />} />
            <Route path="supported-formats" element={<SupportedFormats />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="formats" element={<Formats />} />
            <Route path="converting" element={<Formats />} />   /* Legacy, can be removed */
            <Route path="downscaling" element={<Downscaling />} />
            <Route path="troubleshooting" element={<Troubleshooting />} />
            <Route path="settings" element={<Settings />} />
            <Route path="metadata" element={<Metadata />} />
            <Route path="jpg-reconstruction" element={<JPGReconstruction />} />
            <Route path="choosing-output" element={<ChoosingOutput />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
