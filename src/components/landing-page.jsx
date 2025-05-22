export const LandingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] bg-white relative py-12 mb-10">
      <div className="flex flex-col gap-6 z-10 max-w-xl mb-12 lg:mb-0">
        <h1 className="text-5xl font-bold">Pluto Nano Drone</h1>
        <h2 className="text-5xl font-bold text-blue-600">Documentation</h2>
        <h3 className="text-2xl font-bold mt-4">Learn. Build. Fly.</h3>
        <p className="text-lg font-normal mt-2">
          Everything you need to know about setting up and flying your Pluto Nano Drone.
        </p>
        <div className="mt-6">
          <button className="bg-black text-white px-6 py-3 font-medium tracking-wide uppercase">GET STARTED</button>
        </div>
      </div>
        <img src="./images/PlutoX-Top-View-optimised.png" alt="" />
    </div>
  )
}
