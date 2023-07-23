import DashboardLayout from "@/layouts/Dashboard";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const properties = [
    {
      id: 1,
      picture:
        "https://res.cloudinary.com/doy9gcs3y/image/upload/v1684685795/Room-rent-assets/properties/property1_nkb87h.webp",
      title: "1BHK Beautiful property in Beltola guwahati",
      status: "booked",
      type: "1BHK",
      rent: 1500,
      security: 2000,
    },
    {
      id: 2,
      picture:
        "https://res.cloudinary.com/doy9gcs3y/image/upload/v1684685761/Room-rent-assets/properties/property2_gec8qz.webp",
      title: "1BHK Beautiful property in Beltola guwahati",
      status: "booked",
      type: "1BHK",
      rent: 1500,
      security: 2000,
    },
    {
      id: 3,
      picture:
        "https://res.cloudinary.com/doy9gcs3y/image/upload/v1684685795/Room-rent-assets/properties/property1_nkb87h.webp",
      title: "1BHK Beautiful property in Beltola guwahati",
      status: "booked",
      type: "1BHK",
      rent: 1500,
      security: 2000,
    },
  ];
  return (
    <DashboardLayout>
      <div className="py-4 px-6">
        <h1 className="text-3xl font-semibold mt-1 mb-6">Listed Rooms</h1>
        <div className="grid grid-cols-2 gap-6">
          {properties.map((propertie) => (
            <Card
              key={propertie.id}
              id={propertie.id}
              picture={propertie.picture}
              title={propertie.title}
              status={propertie.status}
              type={propertie.type}
              rent={propertie.rent}
              security={propertie.security}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

type CardProps = {
  id: number;
  picture: string;
  title: string;
  status: string;
  type: string;
  rent: number;
  security: number;
};

function Card({ id, picture, title, status, type, rent, security }: CardProps) {
  return (
    <div className="flex gap-5 bg-slate-200 p-5 rounded-lg hover:shadow-lg">
      <Image
        src={picture}
        alt="apartment picture"
        className="w-48 h-48 rounded-lg"
        width={200}
        height={200}
      />
      <div className="flex-1 overflow-hidden">
        <Link
          href={`/dashboard/property/view/${id}`}
          className="block text-lg font-medium text-dark truncate mt-1 mb-4"
        >
          {title}
        </Link>
        <div className="grid grid-cols-2 gap-4">
          <div>
            Status: <span className="font-medium">{status}</span>
          </div>
          <div>
            Type: <span className="font-medium">{type}</span>
          </div>
          <div>
            Rent: <span className="font-medium">₹{rent}</span>
          </div>
          <div>
            Security: <span className="font-medium">₹{security}</span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-3 mt-5">
          <Link
            href={`/dashboard/property/edit/${id}`}
            className="px-6 py-2 border-2 border-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg"
          >
            Edit
          </Link>
          <Link
            href={`/dashboard/property/view/${id}`}
            className="px-6 py-2 border-2 border-slate-800 bg-slate-800 hover:bg-slate-700 hover:border-slate-700 text-slate-100 rounded-lg"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
