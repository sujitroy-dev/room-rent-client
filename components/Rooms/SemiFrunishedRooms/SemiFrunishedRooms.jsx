import Rooms from '../Rooms';
import {useQuery} from 'react-query';

export default function SemiFrunishedRooms() {
  const fetchRooms = async () => {
    const api = `${process.env.API_BASE}/room/semi-furnished`
		const res = await fetch(api);
    return res.json();
	};
  const {data, error, isLoading} = useQuery('semi-furnished-rooms', fetchRooms);

  return (
    <>
    <Rooms header="Semi Furnished Rooms" rooms={data}/>
    </>
  )
}
