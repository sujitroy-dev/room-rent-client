import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import InputField from "@/components/InputFields";
import DashboardLayout from "@/layouts/Dashboard";
import React, {
  useState,
  useMemo,
  ReactNode,
  useReducer,
  ReducerWithoutAction,
} from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { BiCurrentLocation } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "@/components/Button";
import SelectField from "@/components/SelectField";
import {
  propertyOptions,
  furnishingOptions,
  roomOptions,
} from "@/data/options";

type TAction = {
  type: string;
  payload?: any;
};
type TInitialState = {
  propertyType: string;
};
const initialState: TInitialState = {
  propertyType: "",
};

const breadcrumbNavigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Edit",
    path: "",
  },
  {
    title: "Room",
  },
];
const reducer = (state: TInitialState, action: TAction) => {
  if (action.type === "fire") {
    console.log("hey fired me!");
    return {
      propertyType: "hello",
    };
  }
  throw Error("Unknown action.");
};
export default function PropertyEditPage() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [name, setName] = useState<string | number>("Sujit");
  const [description, setDescription] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  function getGeoLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // Update state with latitude and longitude
          console.log(latitude);
          console.log(longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }
  const addNewRoomForm = () => {
    console.log("add new form");
  };

  return (
    <DashboardLayout>
      <button onClick={() => dispatch({ type: "fire" })}>Fire🔥</button>
      <div className="py-4 px-6">
        <h1 className="text-3xl font-semibold mt-1">View Room</h1>
        <Breadcrumb navigations={breadcrumbNavigation} spacing="small" />
        <form className="">
          <DetailsSection header="Property Details">
            <SelectField
              label="Property type"
              required={true}
              variant="outlined"
              placeholder="Ex. Apartment, House, etc."
              updateValue={(value: string): void => console.log(value)}
              options={propertyOptions}
            />
            <InputField
              type="number"
              label="Area (sqft)"
              value={name}
              required={true}
              variant="outlined"
              placeholder="Ex. 500"
              updateValue={({ name, value }) => setName(value)}
            />
            <SelectField
              label="Furnishing"
              required={true}
              variant="outlined"
              placeholder="Ex. Apartment, House, etc."
              updateValue={(value: string): void => console.log(value)}
              options={furnishingOptions}
            />
            <InputField
              type="text"
              label="Rent Amount"
              value={name}
              required={true}
              variant="outlined"
              placeholder="Ex. 5000"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Security Amount"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Agreement Charge"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <div className="col-span-2">
              <label>
                <span className="block text-sm mb-1">Description</span>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                />
              </label>
            </div>
          </DetailsSection>

          <DetailsSection header="Rooms Detail">
            <div className="col-span-2">
              <RoomDetailsComponent />
            </div>
            <div className="col-span-2 flex justify-center">
              <Button variant="ghost" onClick={addNewRoomForm} type="button">
                <span className="font-medium">New room</span>
              </Button>
            </div>
          </DetailsSection>

          <DetailsSection header="Location Details">
            <InputField
              type="text"
              label="House No."
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Street"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Neighborhood/Area"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Landmarks"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="City/Town/Villagel"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <SelectField
              label="State"
              required={true}
              variant="outlined"
              updateValue={(value: string): void => console.log(value)}
              options={[{ title: "Assam", value: "assam" }]}
            />
            <SelectField
              label="District"
              required={true}
              variant="outlined"
              updateValue={(value: string): void => console.log(value)}
              options={[{ title: "Nagaon", value: "nagaon" }]}
            />
            <InputField
              type="text"
              label="Pincode"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <div className="flex gap-2 items-center justify-between">
              <InputField
                type="text"
                label="Latitude"
                value={name}
                required={true}
                variant="outlined"
                updateValue={({ name, value }) => setName(value)}
                className="flex flex-col flex-1"
              />
              <BiCurrentLocation
                className="mt-7 w-11 h-11 p-2 rounded-lg cursor-pointer border-2 border-slate-300 active:border-slate-700 outline-slate-700"
                fontSize="1rem"
                title="my current latitude and longitude"
                tabIndex={0}
                onClick={getGeoLocation}
              />
            </div>
            <InputField
              type="text"
              label="Longitude"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
          </DetailsSection>
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

type DetailsSectionProps = {
  children: ReactNode;
  header: string;
};

function DetailsSection({ children, header }: DetailsSectionProps) {
  return (
    <div className="mb-5">
      <div className="w-full rounded-xl bg-slate-100">
        <h2 className="p-3 bg-slate-300 rounded-t-xl font-medium text-slate-600">
          {header}
        </h2>
        <div className="pt-3 pb-5 px-5 grid grid-cols-2 gap-3">{children}</div>
      </div>
    </div>
  );
}

type RoomDetailsComponentProps = {};
function RoomDetailsComponent(Props: RoomDetailsComponentProps) {
  return (
    <div className="rounded-xl border-2 border-slate-300">
      <div className="bg-slate-200 py-3 px-5 rounded-t-xl flex items-center justify-end">
        <RiDeleteBin5Line
          className="text-red cursor-pointer"
          fontSize="1.2rem"
        />
      </div>
      <div className="pt-3 pb-5 px-5 grid grid-cols-2 gap-3">
        <SelectField
          label="Room type"
          required={true}
          variant="outlined"
          updateValue={(value: string): void => console.log(value)}
          options={roomOptions}
        />
        <InputField
          type="number"
          label="Room Size (sqft)"
          value={"name"}
          variant="outlined"
          placeholder="Ex. 500"
          updateValue={({ name, value }) => console.log(value)}
        />
      </div>
    </div>
  );
}
