import Rooms from '../Rooms';
import {useQuery} from 'react-query';

export default function RecentRooms() {
  const fetchRooms = async () => {
    const api = `${process.env.API_BASE}/room/recent`
		const res = await fetch(api);
    return res.json();
	};
  const {data, error, isLoading} = useQuery('recent-rooms', fetchRooms);

  return (
    <>
    <Rooms header="Recently Listed" rooms={data}/>
    </>
  )
}
