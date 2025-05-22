import { MoveUp , MoveDown,CircleArrowLeft,CircleArrowRight} from "lucide-react";
import { Element } from 'react-scroll';

export const Controls = () => {
  return (
    <Element name="controls" className="scroll-mt-28 pt-20">
      <div className="py-8 lg:py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">BASIC CONTROLS</h1>
      <div className="flex justify-center mb-8 overflow-x-auto w-full">
        <div className="inline-flex bg-gray-100 rounded-md">
          <button className="px-4 sm:px-8 py-3 bg-white rounded-l-md font-medium">Mobile Control</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <img src="./images/app-card-1.png" alt="" width={500}/>
        <div className="flex-1">
          <div className="mb-6">
            <p className="text-lg">
              The Pluto Nano Drone uses a standard dual-joystick control scheme. The left stick controls altitude
              (throttle) and rotation (yaw), while the right stick controls direction (pitch and roll).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-1">
              <MoveUp size={20}/>
              <span>Throttle Up</span>
            </div>
            <div className="flex items-center gap-1">
              <MoveDown />
              <span>Throttle Down</span>
            </div>
            <div className="flex items-center gap-1">
             <CircleArrowLeft />
              <span>Yaw Left</span>
            </div>
            <div className="flex items-center gap-1">
              <CircleArrowRight />
              <span>Yaw Right</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
              <MoveUp size={25} />
            <h3 className="font-medium mb-1">Throttle Up</h3>
            <p className="text-sm text-gray-500 text-center">Push left stick forward to increase altitude</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
            <MoveDown size={25}/>
            <h3 className="font-medium mb-1">Throttle Down</h3>
            <p className="text-sm text-gray-500 text-center">Pull left stick backward to decrease altitude</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
            <CircleArrowLeft size={25}/>
            <h3 className="font-medium mb-1">Yaw Left</h3>
            <p className="text-sm text-gray-500 text-center">Move left stick left to rotate counterclockwise</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
            <CircleArrowRight size={25}/>
            <h3 className="font-medium mb-1">Yaw Right</h3>
            <p className="text-sm text-gray-500 text-center">Move left stick right to rotate clockwise</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
              <MoveUp size={25} />
            <h3 className="font-medium mb-1">Forward</h3>
            <p className="text-sm text-gray-500 text-center">Push right stick forward to fly forward</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
              <MoveDown size={25} />
            <h3 className="font-medium mb-1">Backward</h3>
            <p className="text-sm text-gray-500 text-center">Pull right stick backward to fly backward</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
            <CircleArrowLeft size={25}/>
            <h3 className="font-medium mb-1">Left</h3>
            <p className="text-sm text-gray-500 text-center">Move right stick left to fly left</p>
          </div>
        </div>

        <div
          className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
          style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="flex flex-col items-center relative z-10 gap-1">
            <CircleArrowRight size={25}/>
            <h3 className="font-medium mb-1">Right</h3>
            <p className="text-sm text-gray-500 text-center">Move right stick right to fly right</p>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-50 p-6 rounded-lg shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
        style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
      >
        <h2 className="text-xl font-bold mb-4">FLIGHT TIPS</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span>Start with small, gentle movements until you get comfortable with the controls.</span>
          </li>
          <li className="flex items-start">
            <span>Practice hovering in place before attempting more complex maneuvers.</span>
          </li>
          <li className="flex items-start">
            <span>Use the trim buttons to fine-tune the drone if it drifts in any direction.</span>
          </li>
        </ul>
      </div>
    </div>
    </Element>
    
  )
}
