import Rooms from "../Rooms";
import { useQuery } from "react-query";
import { getRecentRooms } from "@/services/apiClients/rooms";

export default function SimilarListedRooms() {
  const { data: rooms } = useQuery("recent-furnished-rooms", getRecentRooms);

  return <Rooms header="Similar Rooms" rooms={rooms?.data} />;
}
