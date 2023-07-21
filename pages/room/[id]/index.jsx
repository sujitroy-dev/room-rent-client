import { useQuery } from "react-query";
import WithoutSearchLayout from "@/layouts/Default";
import { getSingleRoom } from "@/services/apiClients/rooms";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Slider from "react-slick";
import { WishListButton } from "@/components/Rooms/RoomCard/RoomCard";
import token from "@/services/auth";
import { showLoginForm } from "@/redux/features/layout/layoutSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SimilarListedRooms from "@/components/Rooms/SimilarRooms";
import { AiFillStar, AiFillCar } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { GiWindow } from "react-icons/gi";
import { MdOutlineElevator } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

export default function RoomPage({ id }) {
  const { data: room } = useQuery(`room-${id}`, () => getSingleRoom(id));

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch();

  function handleAskForBooking() {
    if (!token) return dispatch(showLoginForm());
    toast.success("Request send for booking");
  }

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);
  return (
    <WithoutSearchLayout>
      <div className="container m-auto">
        <Breadcrumb />
        <div className="grid grid-cols-5 gap-14 mb-20">
          <div className="col-span-3">
            <Slider {...settings} asNavFor={nav2} ref={slider1Ref}>
              {room?.data?.pictures?.map((item) => {
                return (
                  <Image
                    src={room?.data?.pictures?.[0]}
                    width={800}
                    height={800}
                    className="rounded-xl w-[800px] h-full"
                  />
                );
              })}
            </Slider>
            <div className="w-full relative">
              <button
                className="p-3 rounded-full border-2 border-gray-400 bg-white absolute top-12 -left-4 z-10 text-gray-400"
                onClick={() => slider2Ref.current.slickPrev()}
              >
                <BiArrowBack fontSize={20} />
              </button>
              <Slider
                {...settings2}
                asNavFor={nav1}
                ref={slider2Ref}
                swipeToSlide
                focusOnSelect
              >
                {room?.data?.pictures?.map((item) => {
                  return (
                    <Image
                      src={room?.data?.pictures?.[0]}
                      width={800}
                      height={800}
                      className="rounded-xl w-[800px] h-full px-2 mt-5"
                    />
                  );
                })}
              </Slider>
              <button
                className="p-3 rounded-full border-2 border-gray-400 bg-white absolute top-12 -right-4 z-10 rotate-180 text-gray-400"
                onClick={() => slider2Ref.current.slickNext()}
              >
                <BiArrowBack fontSize={20} />
              </button>
            </div>
          </div>

          <div className="col-span-2">
            <div className="shadow-md p-8 rounded-md">
              <h1 className="text-2xl font-semibold mb-2.5">
                {room?.data?.title}
              </h1>
              <div className="mb-5 flex">
                <p className="text-md truncate text-light-black">
                  {room?.data?.description}
                </p>
                <span className="text-md text-gray-500 font-medium cursor-pointer">
                  More
                </span>
              </div>
              <div className="flex justify-between mb-7">
                <div className="text-2xl font-semibold text-dark">
                  ₹ {room?.data?.rent_amount} /{" "}
                  <span className="text-xl font-medium text-light-black">
                    Month
                  </span>
                </div>
                <div className="text-yellow flex items-center gap-1">
                  <AiFillStar size="22px" />
                  <span>4.7</span>
                </div>
              </div>
              <div className="mb-8">
                {/* <h4 className="text-lg font-medium mb-3">Required</h4> */}
                <div className="grid grid-cols-2 mb-5 gap-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">Listed by</div>
                    <div className="">Owner</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">Security</div>
                    <div className="">₹ 1500</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">Brokrage</div>
                    <div className="">₹ 1500</div>
                  </div>
                </div>
              </div>
              <button
                className="font-medium flex items-center justify-center gap-3 w-full bg-white border-2 border-dark hover:bg-dark text-dark hover:text-white p-3 rounded-md mb-12 transition-all duration-200"
                onClick={handleAskForBooking}
              >
                <span>Talk Now</span>
                <BiChat fontSize="1.5rem" />
              </button>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-dark">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-y-5 mb-3">
                  <div className="flex items-center gap-2">
                    <BsBuilding fontSize="1.5rem" />
                    <span className="flex-1">
                      <h5 className="text-sm font-semibold">Floor</h5>
                      <p className="text-md text-gray-700">
                        {room?.data?.floor}
                      </p>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiWindow fontSize="1.65rem" />
                    <span className="flex-1">
                      <h5 className="text-sm font-semibold">Balcony</h5>
                      <p className="text-md text-gray-700">
                        {room?.data?.balcony ? "Available" : "Not Available"}
                      </p>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineElevator fontSize="1.7rem" />
                    <span className="flex-1">
                      <h5 className="text-sm font-semibold">Lift</h5>
                      <p className="text-md text-gray-700">
                        {room?.data?.lift ? "Available" : "Not Available"}
                      </p>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiFillCar fontSize="1.5rem" />
                    <span className="flex-1">
                      <h5 className="text-sm font-semibold">Parking</h5>
                      <p className="text-md text-gray-700">
                        {room?.data?.parking || 0}
                      </p>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaDog fontSize="1.5rem" />
                    <span className="flex-1">
                      <h5 className="text-sm font-semibold">Pets</h5>
                      <p className="text-md text-gray-700">
                        {room?.data?.floor}
                      </p>
                    </span>
                  </div>
                  <button className="text-light-black rounded-md text-start font-medium">
                    Show all
                  </button>
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
