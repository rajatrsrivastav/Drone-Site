import {ShieldCheck,TriangleAlert,Eye,Cloud,CircleX,Ban,Battery,MapPin,CircleAlert} from 'lucide-react'
import { Element } from 'react-scroll';

export const Safety = () => {
  return (
    <Element name="safety" className="scroll-mt-28 pt-20">
    <div className="py-8 lg:py-16">
      <div className="flex items-center mb-8 lg:mb-12 gap-2">
        <ShieldCheck size={40}/>
        <h1 className="text-4xl font-bold">SAFETY TIPS</h1>
      </div>
      <div
        className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-r-lg mb-8 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
        style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="flex items-start gap-2">
          <TriangleAlert />
          <div>
            <h2 className="text-lg font-semibold text-red-600 mb-2">Important Safety Notice</h2>
            <p className="text-gray-700">
              The Pluto Nano Drone is designed for recreational use. Always prioritize safety when operating your drone.
              Failure to follow safety guidelines may result in damage to property, injury to persons, or legal
              consequences.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex items-start relative z-10">
            <div className="mr-4 mt-1">
              <Eye />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Always Keep Visual Contact</h3>
              <p className="text-sm text-gray-600">Never fly your drone beyond your line of sight.</p>
            </div>
          </div>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex items-start relative z-10">
            <div className="mr-4 mt-1">
              <Cloud />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Check Weather Conditions</h3>
              <p className="text-sm text-gray-600">Avoid flying in strong winds, rain, or adverse weather.</p>
            </div>
          </div>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex items-start relative z-10">
            <div className="mr-4 mt-1">
              <CircleX />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Maintain Safe Distance</h3>
              <p className="text-sm text-gray-600">Keep away from people, animals, and private property.</p>
            </div>
          </div>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex items-start relative z-10">
            <div className="mr-4 mt-1">
              <Ban />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Avoid Water</h3>
              <p className="text-sm text-gray-600">The Pluto Nano is not waterproof. Keep away from water bodies.</p>
            </div>
          </div>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex items-start relative z-10">
            <div className="mr-4 mt-1">
              <Battery />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Battery Safety</h3>
              <p className="text-sm text-gray-600">
                Never overcharge batteries and store them properly when not in use.
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex items-start relative z-10">
            <div className="mr-4 mt-1">
              <MapPin />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Know Local Regulations</h3>
              <p className="text-sm text-gray-600">
                Be aware of and follow local drone flying regulations and restrictions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-50 p-6 rounded-lg shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
        style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
      >
        <h2 className="text-xl font-bold mb-6">PRE-FLIGHT CHECKLIST</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-1.5">
            <CircleAlert/>
            <span>Check propellers for damage</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CircleAlert />
            <span>Verify battery is fully charged</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CircleAlert />
            <span>Ensure flying area is clear of obstacles</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CircleAlert />
            <span>Calibrate compass if needed</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CircleAlert />
            <span>Check controller battery level</span>
          </div>
          <div className="flex items-start gap-1.5">
            <CircleAlert />
            <span>Verify stable connection before takeoff</span>
          </div>
        </div>
      </div>
    </div>
    </Element>
  )
}
