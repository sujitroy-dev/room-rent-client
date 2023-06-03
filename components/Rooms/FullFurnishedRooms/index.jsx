import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";

export default function FullFurnishedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/full-furnished`);
    return response.json();
  }

  const { data: rooms } = useQuery("full-furnished-rooms", fetchRooms);
  return (
    <Rooms header="Full Furnished Rooms" rooms={rooms} />
  );
}
