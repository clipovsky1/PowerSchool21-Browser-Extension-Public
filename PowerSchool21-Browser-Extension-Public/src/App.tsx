import { useEffect, useState } from "react";
import Home from "./pages/Home/index.tsx";
import localforage from "localforage";
import districtData from "./districtData.ts";
import LoadingPage from "./components/LoadingPage/index.tsx";

function App() {
  const [isLocalForageReady, setLocalForageReady] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // The Init item tells the App to populate localForage with the preloaded Districts defined in districtData.ts.
        // If it init is missing, it is assumed this is the first time the extension has been installed.
        // This is a work-around to using a service_worker in manifest.json because I could not figure out
        // how to get it to work in this project.
        const initValue = await localforage.getItem("init");
        if (initValue === null) {
          await localforage.setItem("init", true);
          for (const district of districtData) {
            await localforage.setItem(district.id, district);
          }
        }
        setLocalForageReady(true);
      } catch (error) {
        console.error("Error populating localforage:", error);
      }
    }

    fetchData();
  }, []);

  if (!isLocalForageReady) {
    return <LoadingPage size="w-128 h-96" hasNavBar={true} />; // Render nothing until localforage is populated
  }

  return <Home />;
}

export default App;
