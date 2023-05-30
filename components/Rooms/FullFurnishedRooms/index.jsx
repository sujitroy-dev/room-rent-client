import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";

export default function FullFurnishedRooms() {
  const [rooms, setRooms] = useState([]);
  async function fetchRooms() {
    const recentRoomsResponse = await fetch(
      `${process.env.API_BASE}/room/full-furnished`
    );
    const recentRooms = await recentRoomsResponse.json();
    setRooms(recentRooms);
  }
  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <Rooms header="Full Furnished Rooms" rooms={rooms} />
  );
}
