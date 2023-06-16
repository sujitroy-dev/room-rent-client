import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import token from "@/data/token";

export default function NoneFurnishedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/none-furnished`,{
      headers: {
        credentials: 'include',
        Authorization: token
      },
    });
    return response.json();
  }

  const { data: rooms } = useQuery("none-furnished-rooms", fetchRooms);

  return (
    <Rooms header="None Furnished Rooms" rooms={rooms?.data} />
  );
}
