import RoomCard from "@/components/Rooms/RoomCard/RoomCard";
import styles from "./index.module.scss";
import WithoutSearchLayout from "@/layouts/WithoutSearchLayout/WithoutSearchLayout";
import { useQuery } from "react-query";

export default function Wishlist() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: "64704a32df4fa1338b5314a5",
      }),
    });
    return await response.json();
  }

  const { data: rooms } = useQuery("wishlist-rooms", fetchRooms);
  console.log(rooms);
  return (
    <WithoutSearchLayout>
      <div className={styles.wishlist}>
        {rooms?.data?.map((room) => (
          <RoomCard
            key={room._id}
            title={room.title}
            rent={room.rent_amount}
            currency={room.currency}
            deposit={room.deposit}
            security={room.security_amount}
            postedTime={room.postedTime}
            images={room.pictures?.[0]}
            location={room.location}
            apartment_type={room.apartment_type}
            path={`/room/${room._id}`}
          />
        ))}
      </div>
    </WithoutSearchLayout>
  );
}
