import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import { getRecentRooms } from "@/services/apiClients/rooms";

export default function RecentlyListedRooms() {
  const { data: rooms } = useQuery("recent-furnished-rooms", getRecentRooms);

  return <Rooms header="Recently Listed" rooms={rooms?.data} />;
}
