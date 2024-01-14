import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
import Search from "./pages/Search";

import "./css/main.scss";

import menuEntries from "./pages/menuEntries.json";
import searchIndex from "./assets/search_index.json";

function App() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    updateSelectedTab(window.location.pathname);
  }, [menuEntries]);

  function updateSelectedTab(location: string){
    const foundIndex = menuEntries.findIndex(e => e[1].includes(location));

    if(foundIndex !== -1){
      setSelectedTab(foundIndex);
    }else{
      setSelectedTab(0);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation menuEntries={menuEntries} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>}>
            <Route index element={<GettingStarted />} />
            <Route path="adding-files" element={<AddingFiles />} />
            <Route path="shortcuts" element={<Shortcuts />} />
            <Route path="supported-formats" element={<SupportedFormats />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="formats" element={<Formats />} />
            <Route path="downscaling" element={<Downscaling />} />
            <Route path="troubleshooting" element={<Troubleshooting />} />
            <Route path="settings" element={<Settings />} />
            <Route path="metadata" element={<Metadata />} />
            <Route path="jpg-reconstruction" element={<JPGReconstruction />} />
            <Route path="choosing-output" element={<ChoosingOutput />} />
            <Route path="search" element={<Search updateSelectedTab={updateSelectedTab} searchIndex={searchIndex}/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
