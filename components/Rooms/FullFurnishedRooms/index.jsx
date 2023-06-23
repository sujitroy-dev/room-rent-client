import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import token from '@/data/token';

export default function FullFurnishedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/full-furnished`, {
      headers: {
        credentials: 'include',
        Authorization: token
      },
    });
    return response.json();
  }

  const { data: rooms, isError } = useQuery("full-furnished-rooms", fetchRooms);

  if(isError) return <h1>Error Occured</h1>

  return <Rooms header="Full Furnished Rooms" rooms={rooms?.data} />
}
