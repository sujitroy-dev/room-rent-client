import Rooms from '../Rooms';
import {useQuery} from 'react-query';

export default function NoneFrunishedRooms() {
  const fetchRooms = async () => {
    const api = `${process.env.API_BASE}/room/none-furnished`
		const res = await fetch(api);
    return res.json();
	};
  const {data, error, isLoading} = useQuery('none-furnished-rooms', fetchRooms);

  return (
    <>
    <Rooms header="None Furnished Rooms" rooms={data}/>
    </>
  )
}
