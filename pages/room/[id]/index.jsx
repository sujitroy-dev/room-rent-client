import styles from './index.module.css';
import { useQuery } from "react-query";
import WithoutSearchLayout from "@/layouts/WithoutSearchLayout/WithoutSearchLayout";
import { getSingleRoom } from '@/services/apiClients/rooms';

export default function RoomPage({id}) {
  const { data: room } = useQuery(`room-${id}`, ()=>getSingleRoom(id));

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