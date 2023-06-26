import styles from './index.module.css';
import { useQuery } from "react-query";
import WithoutSearchLayout from "@/layouts/Default";
import { getSingleRoom } from '@/services/apiClients/rooms';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Image from 'next/image';
import Slider from "react-slick";
import rentIcon from '/assets/icons/png/rent.png';
import floorIcon from '/assets/icons/png/apartment.png';
import liftIcon from '/assets/icons/png/elevator.png';
import blaconyIcon from '/assets/icons/png/balcony.png';
import agentIcon from '/assets/icons/png/agent.png';
import securityAmountIcon from '/assets/icons/png/lease.png';
import { WishListButton } from '@/components/Rooms/RoomCard/RoomCard';
import token from '@/services/auth';
import { makeAuthFormVisible } from '@/redux/features/layout/layoutSlice.js'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SimilarListedRooms from '@/components/Rooms/SimilarRooms';


export default function RoomPage({ id }) {
  const { data: room } = useQuery(`room-${id}`, () => getSingleRoom(id));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const dispatch = useDispatch();
  const showAuthFormFunc = () => dispatch(makeAuthFormVisible());

  function handleAskForBooking() {
    if (!token) return showAuthFormFunc();
    toast.success("Request send for booking")
  }


  return (
    <WithoutSearchLayout>
      <div className="container m-auto">
        <Breadcrumb />
        <div className="grid grid-cols-2 gap-14 mb-20">
          <Slider {...settings}>
            {
              room?.data?.pictures?.map(item => {
                return (
                  <Image src={room?.data?.pictures?.[0]} width={800} height={800} className='rounded-xl w-[800px] h-full' />
                )
              })
            }
          </Slider>
          <div className="rounded-xl">
            <h1 className="text-2xl font-semibold mb-4">{room?.data?.title}</h1>
            <p className="text-md leading-loose mb-12 text-light-black">{room?.data?.description}</p>
            <div className="mb-12 flex gap-3">
              <button className='flex-1 p-3 border-2 font-semibold rounded-md border-blue text-blue hover:bg-blue hover:text-white' onClick={handleAskForBooking}>Ask For Booking</button>
              <div className="w-12 border border-light-gray rounded-md flex items-center justify-center">
                <WishListButton liked={false} id={id} />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 mb-10">
              <div className="border border-light-gray py-4 px-6 flex gap-6 items-center rounded-lg shadow-sm">
                <Image src={rentIcon} alt="" className='w-12' />
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">Rent</div>
                  <div className="text-xl font-semibold">₹ {room?.data?.rent_amount}</div>
                </div>
              </div>
              <div className="border border-light-gray py-4 px-6 flex gap-6 items-center rounded-lg shadow-sm">
                <Image src={securityAmountIcon} alt="" className='w-12' />
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">Security Amount</div>
                  <div className="text-xl font-semibold">₹ {room?.data?.security_amount}</div>
                </div>
              </div>
              <div className="border border-light-gray py-4 px-6 flex gap-6 items-center rounded-lg shadow-sm">
                <Image src={agentIcon} alt="" className='w-12' />
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">Brokrage</div>
                  <div className="text-xl font-semibold">₹ {room?.data?.brokerage}</div>
                </div>
              </div>
              <div className="border border-light-gray py-4 px-6 flex gap-6 items-center rounded-lg shadow-sm">
                <Image src={floorIcon} alt="" className='w-12' />
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">Floor</div>
                  <div className="text-xl font-semibold">{room?.data?.floor}</div>
                </div>
              </div>
              <div className="border border-light-gray py-4 px-6 flex gap-6 items-center rounded-lg shadow-sm">
                <Image src={liftIcon} alt="" className='w-12' />
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">Lift</div>
                  <div className="text-xl font-semibold">{room?.data?.lift ? "Aviaiable" : "Not Available"}</div>
                </div>
              </div>
              <div className="border border-light-gray py-4 px-6 flex gap-6 items-center rounded-lg shadow-sm">
                <Image src={blaconyIcon} alt="" className='w-12' />
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">Balcony</div>
                  <div className="text-xl font-semibold">{room?.data?.lift ? "Aviaiable" : "Not Available"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarListedRooms />
      </div>

    </WithoutSearchLayout>
  );
}

RoomPage.getInitialProps = async ({ query }) => {
  return { id: query.id };
};