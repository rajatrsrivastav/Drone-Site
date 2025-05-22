import {Drill,Zap,Smartphone,Battery,Wifi,TicketsPlane,CircleCheck,ArrowDownToLine} from 'lucide-react'
import { Element } from 'react-scroll';

export const Setup = () => {
  return (
    <Element name="setup" className="scroll-mt-28 pt-20">
      <div className="py-16">
      <h1 className="text-4xl font-bold mb-16 text-center">HOW TO SET UP</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Drill />
              </div>
              <h2 className="text-xl font-semibold">Unbox Your Drone</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Carefully unpack your Pluto Nano Drone and verify all components are included.
            </p>
            <div className="text-sm font-medium text-center">Step 1</div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Battery />
              </div>
              <h2 className="text-xl font-semibold">Charge the Battery</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Connect the USB charging cable to charge the drone battery fully before first use.
            </p>
            <div className="text-sm font-medium text-center">Step 2</div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Smartphone />
              </div>
              <h2 className="text-xl font-semibold">Download the App</h2>
            </div>
            <p className="text-gray-600 mb-6">Install the Pluto Drone app from your device's app store.</p>
            <div className="text-sm font-medium text-center">Step 3</div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Zap/>
              </div>
              <h2 className="text-xl font-semibold">Power On</h2>
            </div>
            <p className="text-gray-600 mb-6">Press and hold the power button until the LED indicators light up.</p>
            <div className="text-sm font-medium text-center">Step 4</div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Wifi/>
              </div>
              <h2 className="text-xl font-semibold">Connect</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Open the app and follow instructions to connect to your drone's WiFi signal.
            </p>
            <div className="text-sm font-medium text-center">Step 5</div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <TicketsPlane />
              </div>
              <h2 className="text-xl font-semibold">Ready to Fly</h2>
            </div>
            <p className="text-gray-600 mb-6">Calibrate if needed, then you're ready for takeoff!</p>
            <div className="text-sm font-medium text-center">Step 6</div>
          </div>
        </div>
      </div>

      <div
        className="mt-16 bg-gray-50 p-6 rounded-lg shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
        style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
      >
        <h2 className="text-2xl font-bold mb-4">PRO TIPS</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-1">
            <Zap size={20}/>
            <span>Charge the battery fully before first flight for optimal performance.</span>
          </li>
          <li className="flex items-start gap-1">
            <CircleCheck size={20}/>
            <span>Perform calibration in an open area away from magnetic interference.</span>
          </li>
          <li className="flex items-start gap-1">
            <ArrowDownToLine size={20}/>
            <span>Update firmware through the app before your first flight for the latest features.</span>
          </li>
        </ul>
      </div>
    </div>
    </Element>
  )
}
