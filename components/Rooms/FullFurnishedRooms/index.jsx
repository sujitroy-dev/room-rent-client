import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import { getFullFurnishedRooms } from '@/services/apiClients/rooms';

export default function FullFurnishedRooms() {
  const { data: rooms, isError } = useQuery("full-furnished-rooms", getFullFurnishedRooms);

  if(isError) return <h1>Error Occured</h1>

  return <Rooms header="Full Furnished Rooms" rooms={rooms?.data} />
}
