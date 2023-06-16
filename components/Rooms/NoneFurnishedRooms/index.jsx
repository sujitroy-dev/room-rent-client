import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";

export default function NoneFurnishedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/none-furnished`);
    return response.json();
  }

  const { data: rooms } = useQuery("none-furnished-rooms", fetchRooms);

  return (
    <Rooms header="None Furnished Rooms" rooms={rooms?.data} />
  );
}
