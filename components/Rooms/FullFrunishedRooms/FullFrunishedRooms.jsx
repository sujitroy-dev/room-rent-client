import Rooms from '../Rooms';
import {useQuery} from 'react-query';

export default function FullFrunishedRooms() {
  const fetchRooms = async () => {
    const api = `${process.env.API_BASE}/room/full-furnished`
		const res = await fetch(api);
    return res.json();
	};
  const {data, error, isLoading} = useQuery('full-furnished-rooms', fetchRooms);

  return (
    <>
    <Rooms header="Full Furnished Rooms" rooms={data}/>
    </>
  )
}
