import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import List from "../../components/DistrictList";
import { District } from "../../district";
import localforage from "localforage";
import CreateNewDistrict from "../../components/CreateNewDistrict";
import DistrictPage from "../../components/DistrictPage";
import logo from "../../assets/ps21-logo.jpg";
import { v4 as uuidv4 } from "uuid";
import EditDistrict from "../../components/EditDistrict";

function Home() {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>();
  const [districts, setDistricts] = useState<District[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [creatingNew, setCreatingNew] = useState(false);
  const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);

  useEffect(() => {
    updateDistrictsState();
  }, []);

  useEffect(() => {
    const sortedDistricts = sortDistrictsByName(districts);
    setFilteredDistricts(sortedDistricts);
  }, [districts]);

  // Resolves getDistricts() promise into a usable array and sets the Districts State.
  const updateDistrictsState = async () => {
    try {
      const districtsData = await getDistricts();
      setDistricts(districtsData);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  // Returns a Promise containing all Districts from LocalForage.
  async function getDistricts() {
    const listOfDistricts: District[] = [];
    await localforage.iterate((value: District, key, _iterationNumber) => {
      // Ignore init. See its use case in App Component.
      if (key === "init") {
        return;
      }
      listOfDistricts.push(value);
    });
    return listOfDistricts;
  }

  // Returns a shallow copy of an array of District objects sorted Alphabetically by name.
  const sortDistrictsByName = (districts: District[]) => {
    const sortedDistricts = [...districts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedDistricts;
  };

  const handleDistrictClick = (district: District) => {
    setSelectedDistrict(district);
    setEditMode(false);
    setCreatingNew(false);
  };

  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim().toLowerCase();

    if (districts && districts.length > 0) {
      const filtered = districts.filter((district) =>
        district.name.toLowerCase().startsWith(trimmedQuery)
      );
      const sortedDistricts = sortDistrictsByName(filtered);
      setFilteredDistricts(sortedDistricts);

      if (sortedDistricts.length > 0) {
        setSelectedDistrict(sortedDistricts[0]);
      } else {
        setSelectedDistrict(null); // Reset selected district if no matches
      }
    } else {
      setFilteredDistricts([]);
      setSelectedDistrict(null);
    }
  };

  const handleEnter = () => {
    if (selectedDistrict) {
      window.open(selectedDistrict.powerSchoolUrl, "_blank");
    }
  }

  const handleDistrictDelete = () => {
    if (selectedDistrict !== null && selectedDistrict !== undefined) {
      localforage.removeItem(selectedDistrict.id);
    }
    setSelectedDistrict(null);
    updateDistrictsState();
  };

  const onCreateNew = () => {
    setSelectedDistrict(null);
    setCreatingNew(true);
  };

  const closeWindow = () => {
    setCreatingNew(false);
    setEditMode(false);
  };

  const onEdit = () => {
    setEditMode(true);
  };

  const handleDistrictCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newDistrict: District = {
      id: uuidv4(),
      name: formData.get("create-district-name") as string,
      powerSchoolUrl: formData.get("create-powerschool-url") as string,
      companyID: formData.get("create-company-id") as string,
      isBillable: formData.get("create-billable") === "on",
      isHosted: formData.get("create-hosted") === "on",
    };

    if (!newDistrict.powerSchoolUrl.startsWith("https://")) {
      newDistrict.powerSchoolUrl = "https://" + newDistrict.powerSchoolUrl;
    }

    try {
      await localforage.setItem(newDistrict.id, newDistrict);
      setSelectedDistrict(newDistrict);
      closeWindow();
      updateDistrictsState();
    } catch (error) {
      console.log("Failed to add District to LocalForage. " + error);
    }
  };

  const handleDistrictUpdate = async (e: React.FormEvent<HTMLFormElement>, selectedDistrict: District) => {
    e.preventDefault();

    if (selectedDistrict) {
      const formData = new FormData(e.currentTarget);
      const updatedDistrict: District = {
        id: selectedDistrict.id,
        name: formData.get("create-district-name") as string,
        powerSchoolUrl: formData.get("create-powerschool-url") as string,
        companyID:formData.get("create-company-id") as string,
        isBillable: formData.get("create-billable") === "on",
        isHosted: formData.get("create-hosted") === "on",
      };

      if (!updatedDistrict.powerSchoolUrl.startsWith("https://")) {
        updatedDistrict.powerSchoolUrl = "https://" + updatedDistrict.powerSchoolUrl;
      }
  

      try {
        await localforage.setItem(selectedDistrict.id, updatedDistrict);
        setSelectedDistrict(updatedDistrict);
        closeWindow();
        updateDistrictsState();
      } catch (error) {
        console.log("Failed to add District to LocalForage. " + error);
      }
    }

    console.log("The selected district is null.");
  };

  return (
    <div className="w-128 h-96">
      <Navbar onSearch={handleSearch} onEnter={handleEnter} onCreateNew={onCreateNew} />
      <div className="grid grid-cols-2 h-full">
        <div id="leftPane" className="col-span-1 overflow-y-auto">
          <div className="">
            {districts && (
              <List
                selectedDistrict={selectedDistrict}
                districts={filteredDistricts}
                onItemClick={handleDistrictClick}
              />
            )}
          </div>
        </div>
        <div id="rightPane" className="col-span-1">
          <div className="">
            {selectedDistrict && !creatingNew && !editMode ? (
              <DistrictPage
                district={selectedDistrict}
                onDelete={handleDistrictDelete}
                onEdit={onEdit}
              />
            ) : creatingNew ? (
              <CreateNewDistrict
                closeWindow={closeWindow}
                handleSubmit={handleDistrictCreate}
              />
            ) : editMode && selectedDistrict ? (
              <EditDistrict
                closeWindow={closeWindow}
                handleSubmit={handleDistrictUpdate}
                selectedDistrict={selectedDistrict}
              />
            ) : (
              <div id="ps21-logo">
                <img src={logo} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
