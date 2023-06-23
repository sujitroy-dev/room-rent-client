import styles from './index.module.css';
import { useQuery } from "react-query";
import WithoutSearchLayout from "@/layouts/WithoutSearchLayout/WithoutSearchLayout";
import { getSingleRoom } from '@/services/apiClients/rooms';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Image from 'next/image';

export default function RoomPage({ id }) {
  const { data: room } = useQuery(`room-${id}`, () => getSingleRoom(id));

  console.log(room);
  
  return (
    <WithoutSearchLayout>
      <div className="container m-auto">
        <Breadcrumb />
        <div className="flex">
          <div className="">
            <Image src={room?.data?.pictures?.[0]} width={600} height={600}/>
          </div>
          <div className="flex-1">
            <h1 className="">{room?.data?.title}</h1>
            <p className="">{room?.data?.description}</p>
          </div>
        </div>
      </div>

    </WithoutSearchLayout>
  );
}

RoomPage.getInitialProps = async ({ query }) => {
  return { id: query.id };
};