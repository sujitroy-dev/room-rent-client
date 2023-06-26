import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import { getSemiFurnishedRooms } from "@/services/apiClients/rooms";

export default function SemiFurnishedRooms() {
  const { data: rooms } = useQuery("semi-furnished-rooms", getSemiFurnishedRooms);

  return (
    <Rooms header="Semi Furnished Rooms" rooms={rooms?.data} />
  );
}
