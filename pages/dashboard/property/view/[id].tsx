import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/layouts/Dashboard";
import { ReactNode } from "react";

export default function PropertyViewPage() {
  const breadcrumbNavigation = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "View",
      path: "",
    },
    {
      title: "Room",
    },
  ];
  return (
    <DashboardLayout>
      <div className="py-4 px-6">
        <h1 className="text-3xl font-semibold mt-1">View Room</h1>
        <Breadcrumb navigations={breadcrumbNavigation} spacing="small" />
        <div>
          <DetailsContainer header="Property Details">
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Property type: </span>
              <span className="font-medium text-slate-600">House</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Area sqft: </span>
              <span className="font-medium text-slate-600">{500}</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Furnishing: </span>
              <span className="font-medium text-slate-600">Furnished</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Rent Amount: </span>
              <span className="font-medium text-slate-600">{5000}</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Security Amount: </span>
              <span className="font-medium text-slate-600">{2500}</span>
            </div>
            <div className="flex flex-col col-span-4 text-slate-600">
              <span className="text-xl font-semibold underline">
                Description:
              </span>
              <div className="description">
                <h1>Spacious and Luxurious Apartment</h1>

                <h2>Overview</h2>
                <p>
                  Welcome to our luxurious apartment located in the heart of the
                  city. This stunning property offers both comfort and style,
                  making it the perfect place to call home. With its spacious
                  layout and modern amenities, this apartment is ideal for
                  individuals, couples, or small families looking for a
                  convenient and upscale living experience.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li>
                    <strong>Modern Design:</strong> The apartment boasts a
                    contemporary design with high-end finishes and fixtures.
                  </li>
                  <li>
                    <strong>Open Floor Plan:</strong> The open-concept layout
                    provides a seamless flow between the living, dining, and
                    kitchen areas.
                  </li>
                  <li>
                    <strong>Stunning Views:</strong> Enjoy breathtaking views of
                    the city skyline from the large windows and private balcony.
                  </li>
                  <li>
                    <strong>Top-notch Amenities:</strong> Residents have access
                    to a state-of-the-art fitness center, rooftop pool, and
                    private parking.
                  </li>
                  <li>
                    <strong>Prime Location:</strong> Situated in a vibrant
                    neighborhood, the apartment is close to restaurants, shops,
                    and public transportation.
                  </li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you are interested in renting this fantastic apartment,
                  please{" "}
                  <a href="mailto:info@apartmentrentals.com">contact us</a> for
                  more information or to schedule a viewing.
                </p>
              </div>
            </div>
          </DetailsContainer>
          <div className="relative overflow-x-auto sm:rounded-lg col-span-3 mb-5">
            <table className="w-full text-left">
              <thead className="text-slate-600 bg-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Room no.
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Size (sqft)
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-100">
                <tr className="border-b text-sm text-gray-500">
                  <th scope="row" className="px-6 py-4">
                    39
                  </th>
                  <td className="px-6 py-4">125</td>
                  <td className="px-6 py-4">Bedroom</td>
                </tr>
                <tr className="border-b text-sm text-gray-500">
                  <th scope="row" className="px-6 py-4">
                    37
                  </th>
                  <td className="px-6 py-4">125</td>
                  <td className="px-6 py-4">Bedroom</td>
                </tr>
                <tr className="border-b text-sm text-gray-500">
                  <th scope="row" className="px-6 py-4">
                    37
                  </th>
                  <td className="px-6 py-4">75</td>
                  <td className="px-6 py-4">Bathroom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DetailsContainer header="Location Details">
            <div className="flex flex-col">
              <span>House no.: </span>
              <span className="font-medium text-slate-600">{110}</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Street: </span>
              <span className="font-medium text-slate-600">
                Missa, ramraipatti
              </span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Neighborhood/Area: </span>
              <span className="font-medium text-slate-600">Missa</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Landmarks: </span>
              <span className="font-medium text-slate-600">
                Near. Kali temple
              </span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">City/Town/Village: </span>
              <span className="font-medium text-slate-600">
                Missa, Ramraipatti
              </span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">State: </span>
              <span className="font-medium text-slate-600">Assam</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">District: </span>
              <span className="font-medium text-slate-600">Nagaon</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Pincode: </span>
              <span className="font-medium text-slate-600">782138</span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Latitude: </span>
              <span className="font-medium text-slate-600">
                26.48125466331016
              </span>
            </div>
            <div className="flex flex-col gap-y-1 gap-x-3">
              <span className="text-slate-600">Longitude: </span>
              <span className="font-medium text-slate-600">
                92.93635160477491
              </span>
            </div>
          </DetailsContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}

type DetailsContainerProps = {
  children: ReactNode;
  header: string;
};

function DetailsContainer({ children, header }: DetailsContainerProps) {
  return (
    <div className="mb-5">
      <div className="w-full rounded-xl bg-slate-100">
        <h2 className="p-3 bg-slate-300 rounded-t-xl font-medium text-slate-600">
          {header}
        </h2>
        <div className="pt-3 pb-5 px-5 grid grid-cols-4 gap-3">{children}</div>
      </div>
    </div>
  );
}
