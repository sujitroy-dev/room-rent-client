import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";

export default function NoneFurnishedRooms() {
  const [rooms, setRooms] = useState([]);

  async function fetchRooms() {
    const recentRoomsResponse = await fetch(
      `${process.env.API_BASE}/room/none-furnished`
    );
    const recentRooms = await recentRoomsResponse.json();
    setRooms(recentRooms);
  }
  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <Rooms header="None Furnished Rooms" rooms={rooms} />
  );
}
