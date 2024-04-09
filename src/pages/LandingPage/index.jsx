import Header from "../../components/Header"
import marker from "../../assets/maps-and-flags.png"

function LandingPage() {

  return (
    <div className="font-poppins bg-black">
      <Header/>

      {/* hero section  */}
      <section className=" text-white w-full h-screen flex items-center justify-start px-20">
        <div className=" w-full max-w-[40%] flex flex-col gap-6">
          <div className=" flex flex-col gap-4">
            <h2 className="text-[64px] font-bold leading-snug">Malinowski housing estate</h2>
            <p className=" max-w-[80%]">A quiet place in a great neighborhood. Enjoy unlimited nature and the charms of city life in Józefów.</p>
          </div>
          <div className=" flex gap-6 items-start pb-14 border-b border-gray-400 ">
            <button className=" text-black bg-white py-2 px-4 shadow-md rounded-full uppercase text-base">Pick a house</button>
            <div className=" flex gap-3 items-center">
              <div className=" p-3 rounded-full border border-white">
                <img className=" max-w-[18px]" src={marker} />
              </div>
              <div className=" text-sm font-semibold">
                <p>JÓZEFÓW,</p>
                <p>KSIĘDZA MALINOWSKIEGO 38</p>
                <p>POLAND</p>
              </div>
            </div>
          </div>
          <div className=" flex gap-8 items-start pt-8 w-[80%]">
            <div className=" flex flex-col gap-4 min-w-[118px]">
              <h2 className=" text-[32px] font-semibold">0.5 km</h2>
              <p className=" text-lg">to shops and bus stops</p>
            </div>
            <div className=" flex flex-col gap-4 min-w-[118px]">
              <h2 className=" text-[32px] font-semibold">3 km</h2>
              <p className=" text-lg">to Warsaw ring road</p>
            </div>
            <div className=" flex flex-col gap-4 min-w-[118px]">
              <h2 className=" text-[32px] font-semibold">0.3 km</h2>
              <p className=" text-lg">to forests</p>
            </div>
          </div>
        </div>
      </section>

      {/* segments section  */}
      <section className=" text-white w-full h-screen flex items-center justify-start px-20">
        <div className=" w-full max-w-[50%] flex flex-col gap-6">
          <div className=" flex flex-col gap-4">
            <h2 className="text-[64px] font-bold leading-snug">Select your house</h2>
            <div className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.3)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
              <div className="flex flex-col gap-2 pr-6 border-r border-[#404040] ">
                <p className=" text-[10px]">house</p>
                <p className=" text-base">38A</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">Plot, M²</p>
                <p className=" text-base">900</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">House, M²</p>
                <p className=" text-base">147</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">price, EUR</p>
                <p className=" text-xs py-1 px-6 rounded-md bg-[#404040] text-white">sold</p>
              </div>
            </div>
            <div className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.3)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
              <div className="flex flex-col gap-2 pr-6 border-r border-[#404040] ">
                <p className=" text-[10px]">house</p>
                <p className=" text-base">38A</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">Plot, M²</p>
                <p className=" text-base">900</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">House, M²</p>
                <p className=" text-base">147</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">price, EUR</p>
                <p className=" text-xs py-1 px-6 rounded-md bg-[#404040] text-white">sold</p>
              </div>
            </div>
            <div className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.3)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
              <div className="flex flex-col gap-2 pr-6 border-r border-[#404040] ">
                <p className=" text-[10px]">house</p>
                <p className=" text-base">38A</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">Plot, M²</p>
                <p className=" text-base">900</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">House, M²</p>
                <p className=" text-base">147</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">price, EUR</p>
                <p className=" text-xs py-1 px-6 rounded-md bg-[#404040] text-white">sold</p>
              </div>
            </div>
            <div className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.3)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
              <div className="flex flex-col gap-2 pr-6 border-r border-[#404040] ">
                <p className=" text-[10px]">house</p>
                <p className=" text-base">38A</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">Plot, M²</p>
                <p className=" text-base">900</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">House, M²</p>
                <p className=" text-base">147</p>
              </div>
              <div className="flex flex-col gap-2 pl-6 ">
                <p className=" text-[10px]">price, EUR</p>
                <p className=" text-xs py-1 px-6 rounded-md bg-[#404040] text-white">sold</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
