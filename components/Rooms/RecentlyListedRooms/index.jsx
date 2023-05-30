import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";

export default function RecentlyListedRooms() {
  const [rooms, setRooms] = useState([]);
  async function fetchRooms() {
    const recentRoomsResponse = await fetch(
      `${process.env.API_BASE}/room/recent`
    );
    const recentRooms = await recentRoomsResponse.json();
    setRooms(recentRooms);
  }
  useEffect(() => {
    fetchRooms();
  }, []);

  return <Rooms header="Recently Listed" rooms={rooms} />;
}
