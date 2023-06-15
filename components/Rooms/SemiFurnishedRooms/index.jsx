import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import token from "@/data/token";

export default function SemiFurnishedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/semi-furnished`, {
      headers: {
        credentials: 'include',
        Authorization: token
      },
    });
    return response.json();
  }

  const { data: rooms } = useQuery("semi-furnished-rooms", fetchRooms);

  return (
    <Rooms header="Semi Furnished Rooms" rooms={rooms} />
  );
}
