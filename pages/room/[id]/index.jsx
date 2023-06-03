import { useQuery } from "react-query";
import WithoutSearchLayout from "@/layouts/WithoutSearchLayout/WithoutSearchLayout";

export default function RoomPage({id}) {
  async function fetchRoom() {
    const response = fetch(`${process.env.API_BASE}/room/single/${id}`)
    return (await response).json()
  }
  const { data: room } = useQuery(`room-${id}`, fetchRoom)
  

  return (
    <WithoutSearchLayout>
      <h1 style={{textAlign: "center", margin: "20px auto"}}>{room?.data?.title}</h1>
      <p style={{textAlign: "center"}}>{room?.data?.description}</p>
    </WithoutSearchLayout>
  );
}

RoomPage.getInitialProps = async ({ query }) => {
  return { id: query.id };
};