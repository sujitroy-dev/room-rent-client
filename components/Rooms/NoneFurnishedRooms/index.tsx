import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import { getNoneFurnishedRooms } from "@/services/apiClients/rooms";

export default function NoneFurnishedRooms() {
  const { data: rooms } = useQuery("none-furnished-rooms", getNoneFurnishedRooms);

  return (
    <Rooms header="None Furnished Rooms" rooms={rooms?.data} />
  );
}
