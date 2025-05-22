import {Zap,Wifi,Battery} from 'lucide-react'
import { Element } from 'react-scroll';


export const Overview = () => {
  return (
    <Element name="overview" className="scroll-mt-28 pt-20">
    <div className="flex flex-col lg:flex-row items-start gap-8 mb-50 mt-20 lg:gap-16">
      <div className="flex flex-col gap-8 max-w-xl">
        <h1 className="text-4xl font-bold">OVERVIEW</h1>
        <p className="text-lg font-normal tracking-wide">
          The Pluto Nano Drone is a compact, lightweight, and versatile drone designed for both beginners and
          experienced pilots. With its advanced features and intuitive controls, the Pluto Nano offers an exceptional
          flying experience in a pocket-sized package.
        </p>
        <p className="text-lg font-normal tracking-wide">
          Whether you're learning to fly, capturing aerial footage, or exploring programmable drone capabilities, the
          Pluto Nano is your perfect companion for aerial adventures.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div
          className="rounded-lg p-8 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02] flex justify-center items-center flex-col bg-white relative overflow-hidden"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="z-10 w-10 h-10">
           <img src="./images/drone.svg" alt="" />
          </div>
          <h1 className="font-semibold text-base tracking-wide z-10">Ultra Compact</h1>
          <p className="text-gray-500 text-base text-center z-10">Fits in your palm, easy to transport anywhere</p>
        </div>
        <div
          className="rounded-lg p-8 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02] flex justify-center items-center flex-col bg-white relative overflow-hidden"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="z-10">
            <Zap />
          </div>
          <h1 className="font-semibold text-base tracking-wide z-10">Powerful Motors</h1>
          <p className="text-gray-500 text-base text-center z-10">Responsive controls with impressive lift capacity</p>
        </div>
        <div
          className="rounded-lg p-8 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02] flex justify-center items-center flex-col bg-white relative overflow-hidden"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="z-10">
            <Wifi />
          </div>
          <h1 className="font-semibold text-base tracking-wide z-10">Smart Connectivity</h1>
          <p className="text-gray-500 text-base text-center z-10">Connect via mobile app for advanced features</p>
        </div>
        <div
          className="rounded-lg p-8 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02] flex justify-center items-center flex-col bg-white relative overflow-hidden"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="z-10">
            <Battery />
          </div>
          <h1 className="font-semibold text-base tracking-wide z-10">Long Battery Life</h1>
          <p className="text-gray-500 text-base text-center z-10">Extended flight time on a single charge</p>
        </div>
      </div>
    </div>
    </Element>
  )
}
