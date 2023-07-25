import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import InputField from "@/components/InputFields";
import DashboardLayout from "@/layouts/Dashboard";
import React, { useState, useMemo, ReactNode } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { BiCurrentLocation } from "react-icons/bi";
import Button from "@/components/Button";

export default function PropertyEditPage() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [name, setName] = useState<string | number>("Sujit");
  const [description, setDescription] = useState("");

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
      <div className="py-4 px-6">
        <h1 className="text-3xl font-semibold mt-1">View Room</h1>
        <Breadcrumb navigations={breadcrumbNavigation} spacing="small" />
        <form className="">
          <DetailsSection header="Property Details">
            <InputField
              type="text"
              label="Property type"
              value={name}
              required={true}
              variant="outlined"
              placeholder="Ex. Apartment, House, etc."
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Area (sqft)"
              value={name}
              required={true}
              variant="outlined"
              placeholder="Ex. 500"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Furnishing"
              value={name}
              required={true}
              variant="outlined"
              placeholder="Ex. Furnished, Semi-Furnished, Unfurnished"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Rent"
              value={name}
              required={true}
              variant="outlined"
              placeholder="Ex. 5000"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Security"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="Agreement"
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
            <div className="col-span-2"></div>
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
            <InputField
              type="text"
              label="State"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
            />
            <InputField
              type="text"
              label="State"
              value={name}
              required={true}
              variant="outlined"
              updateValue={({ name, value }) => setName(value)}
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
