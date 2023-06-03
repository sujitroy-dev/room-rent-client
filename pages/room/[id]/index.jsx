import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { useQuery } from "react-query";

export default function RoomPage({id}) {
  async function fetchRoom() {
    const response = fetch(`${process.env.API_BASE}/room/single/${id}`)
    return (await response).json()
  }
  const { data: room } = useQuery(`room-${id}`, fetchRoom)
  

  return (
    <MainLayout>
      <h1 style={{textAlign: "center", margin: "20px auto"}}>{room?.data?.title}</h1>
      <p style={{textAlign: "center"}}>{room?.data?.description}</p>
    </MainLayout>
  );
}

RoomPage.getInitialProps = async ({ query }) => {
  return { id: query.id };
};