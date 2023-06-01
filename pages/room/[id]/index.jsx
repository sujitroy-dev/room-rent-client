import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout/MainLayout";

export default function RoomPage({id}) {
  const [room , setRoom] = useState()

  async function fetchRooms() {
    const recentRoomsResponse = await fetch(
      `${process.env.API_BASE}/room/single/${id}`
    );
    const recentRooms = await recentRoomsResponse.json();
    setRoom(recentRooms.data);
  }
  useEffect(() => {
    fetchRooms();
  }, [id])
  

  return (
    <MainLayout>
      <h1 style={{textAlign: "center", margin: "20px auto"}}>{room?.title}</h1>
      <p style={{textAlign: "center"}}>{room?.description}</p>
    </MainLayout>
  );
}

RoomPage.getInitialProps = async ({ query }) => {
  return { id: query.id };
};