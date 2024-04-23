import Header from "../../components/Header"
import marker from "../../assets/maps-and-flags.png"
import l1 from "../../assets/l1.svg"
import l2 from "../../assets/l2.svg"
import l3 from "../../assets/l3.svg"
import l4 from "../../assets/l4.svg"
import l5 from "../../assets/l5.svg"
import l6 from "../../assets/l6.svg"
import l7 from "../../assets/l7.svg"
import l8 from "../../assets/l8.svg"
import MapContainer from "../../components/Map/MapContainer"
import { useEffect, useRef, useState } from "react"

function LandingPage() {
  const [sectionHeight, setSectionHeight] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isSegmentsVisible, setIsSegmentsVisible] = useState(false);
  const [isCardVideoVisible, setIsCardVideoVisible] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showVideoPlayerInterior, setShowVideoPlayerInterior] = useState(false);
  const [videopop, setvideopop] = useState(false);

  const handlevideopop = () => {
    setvideopop(!videopop)
  }

  const handleCardClick = () => {
    setShowVideoPlayer(true);

  };

  // Variable to store the previous state of isHeroVisible
  const isHeroVisibleRef = useRef(true); // Assuming it starts as true initially

  const [isFirst, setIsFirst] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
    
  }, []);

  if(isLoading === true ||(showVideoPlayer === true) ||( showVideoPlayerInterior === true) ) {
    document.body.style.overflow = "hidden";
  }else {
    document.body.style.overflow = "auto"
  }
  
  useEffect(() => {
    const updateSectionHeight = () => {
      const screenHeight = window.innerHeight;
      if (screenHeight < 650) {
        setSectionHeight(true);
      } else {
        setSectionHeight(false);
      }
    };

    updateSectionHeight();
    window.addEventListener('resize', updateSectionHeight);

    return () => {
      window.removeEventListener('resize', updateSectionHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeading = document.getElementById('SectionHeading');
      if (sectionHeading) {
        const bounding = sectionHeading.getBoundingClientRect();
        setIsHeroVisible(bounding.top > window.innerHeight || bounding.bottom < 0);

        console.log("hero", bounding.top > window.innerHeight || bounding.bottom < 0)
        console.log("segment",bounding.top <= window.innerHeight && bounding.bottom >= 0)

        setIsSegmentsVisible(window.scrollY > window.innerHeight);

        // const timer = setTimeout(() => {
        //   setIsCardVideoVisible(true)
        // }, 3000);
    
        return () => clearTimeout(timer);
      }
    };
  
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  // useEffect(()=>{
  //   const video3 = document.getElementById('segments-video2');
  //     if (video3 && isSegmentsVisible) {
  //       video3.currentTime = 0; // Reset video playback to the beginning
  //       video3.load(); // Reload the video to ensure it starts from the beginning
  //     }
  // },[isSegmentsVisible])

  const [firstTime, setFirstTime] = useState(true)
  useEffect(()=>{
    const video2 = document.getElementById('segments-video');
    const video3 = document.getElementById('segments-video2');
    const video4 = document.getElementById('segments-video4');
    const video5 = document.getElementById('segments-video5');

    const sectionHeading = document.getElementById('SectionHeading');
      if (sectionHeading){
        setFirstTime(false)
        if(isHeroVisible && video5){
          const childElement = video5.querySelector('video');
          childElement.currentTime = 0;
          childElement.load()
        }

        if(!isHeroVisible && video3){
          const childElement = video3.querySelector('video');
          childElement.currentTime = 0;
          childElement.load()
        }
      }

  },[isHeroVisible])

  useEffect(()=>{
    const video3 = document.getElementById('segments-video3');
    const video5 = document.getElementById('segments-video5');
    const video2 = document.getElementById('segments-video2');
    const video4 = document.getElementById('segments-video4');

      if(isFirst){
        video5.classList.remove('visible')
        video5.classList.add('hidden')
      }

      if (video3 && isSegmentsVisible) {
        video3.currentTime = 0; // Reset video playback to the beginning
      }

      if (video5 && isSegmentsVisible) {
        video5.currentTime = 0; // Reset video playback to the beginning
      }

      if(!isSegmentsVisible&&!isFirst){
        video4.classList.toggle('hidden')
        const timer = setTimeout(() => {
          video5.classList.toggle('hidden')
          video2.classList.toggle('hidden')
        }, 5000);
    
        return () => clearTimeout(timer);
      }

      if(isSegmentsVisible){
        video2.classList.toggle('hidden')
        const timer = setTimeout(() => {
          video3.classList.toggle('hidden')
          video4.classList.toggle('hidden')
        }, 3000);
    
        return () => clearTimeout(timer);
      }

  },[isSegmentsVisible])

  useEffect(()=>{
    setIsFirst(false)
  })

  return (
    <div className={`font-poppins bg-black `} >
      {
        (<>
          {/* Header done */}
          <Header />

          <div className={`fixed top-0 right-0 left-0 bottom-0 `}>
            <video
              id="segments-video2"
              className={`absolute inset-0 w-full h-full object-cover z-0 `}
              src="/2.mp4"
              type="video/mp4"
              muted
              playsInline
              autoPlay
              loop
            />
            <video
              id="segments-video3"
              className={`absolute inset-0 w-full h-full object-cover z-0 ${isSegmentsVisible ? 'visible' : 'hidden'}`}
              src="/3.mp4"
              type="video/mp4"
              muted
              playsInline
              autoPlay
            />
            <video
              id="segments-video4"
              className="absolute inset-0 w-full h-full object-cover z-0 hidden"
              src="/4.mp4"
              type="video/mp4"
              muted
              loop
              playsInline
              autoPlay
            />
            <video
                id="segments-video5"
                className={`absolute inset-0 w-full h-full object-cover z-0 ${!isSegmentsVisible ? 'visible' : 'hidden'}`}
                src="/5.mp4"
                type="video/mp4"
                muted
                playsInline
                autoPlay
              />
          </div>

          <div className={`relative mb-[250px]`}>
            <section
              id="hero-section"
              className={`relative bg-transparent text-white w-full md:pt-[40px] pt-[120px] min-h-screen ${isHeroVisible ? 'h-[800px]' : 'h-full'
                } flex items-center justify-start px-5 md:px-20`}
            >
              <div className={`w-full md:max-w-[50%] flex flex-col gap-6 relative z-10 `}>
                <div className=" flex flex-col gap-4">
                  <h2 className="text-[42px] md:text-[64px] font-bold leading-snug">Malinowski housing estate</h2>
                  <p className="text-[16px] md:text-[18px] max-w-[80%]">A quiet place in a great neighborhood. Enjoy unlimited nature and the charms of city life in Józefów.</p>
                </div>
                <div className=" flex md:flex-row flex-col gap-6 items-start pb-5 md:pb-14 border-b border-gray-400 ">
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
                <div className=" flex gap-3 md:gap-8 items-start pt-2 md:pt-8 w-full md:w-[80%]">
                  <div className=" flex flex-col gap-4 min-w-[80px] md:min-w-[118px]">
                    <h2 className=" text-[24px] md:text-[32px] font-semibold">0.5 km</h2>
                    <p className=" text-[12px] md:text-[16px] md:text-lg">to shops and bus stops</p>
                  </div>
                  <div className=" flex flex-col gap-4 min-w-[80px] md:min-w-[118px]">
                    <h2 className="text-[24px] md:text-[32px] font-semibold">3 km</h2>
                    <p className="  text-[12px] md:text-[16px] md:text-lg">to Warsaw ring road</p>
                  </div>
                  <div className=" flex flex-col gap-4 min-w-[100px] md:min-w-[118px]">
                    <h2 className=" text-[24px] md:text-[32px] font-semibold">0.3 km</h2>
                    <p className="  text-[12px] md:text-[16px] md:text-lg">to forests</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="relative z-[998]">
            <section id="segments-section" className={`bg-transparent text-white w-full min-h-screen ${sectionHeight ? 'h-[700px]' : 'h-fit'} flex items-start justify-start px-5 md:px-20 relative`}>
              <div className=" w-full md:max-w-[50%] flex flex-col gap-6">
                <div className=" flex flex-col gap-4 w-full">
                  <h2 id="SectionHeading" className="text-[42px] md:block hidden md:text-[64px] font-bold leading-snug">Select your house</h2>
                  <h2 className="text-[42px] md:hidden block md:text-[64px] font-bold leading-snug">Choose your house</h2>

                  <div onClick={handleCardClick} className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
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

                  <div onClick={handleCardClick} className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
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

                  <div onClick={handleCardClick} className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
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

                  <div onClick={handleCardClick} id="firstCard" className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
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

                  {showVideoPlayer && (
                    <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                      <video
                        id="segments-video"
                        className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                        src="/ex.mp4"
                        type="video/mp4"
                        muted
                        playsInline
                        autoPlay
                      />
                    </div>
                  )}

                  {showVideoPlayerInterior && (
                    <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                      <video
                        id="segments-video"
                        className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                        src="/in.mp4"
                        type="video/mp4"
                        muted
                        playsInline
                        autoPlay
                      />
                    </div>
                  )}

                  {showVideoPlayer && (
                    <div className="fixed top-0 left-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-start  md:py-10 md:px-10 z-20">

                      <div className="lg:w-[35%] gap-1 pt-10 px-5 md:p-5 flex flex-col justify-start items-start bg-transparent">

                        <div className="flex mb-[20px] flex-row items-center justify-center gap-2">
                          <button
                            className="rounded-full text-black bg-white p-2"
                            onClick={() => { setShowVideoPlayer(false); setShowVideoPlayerInterior(false)}}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-black"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                              />
                            </svg>
                          </button>
                          <p className="text-white font-bold">TO HOUSE LIST</p>
                        </div>

                        <div className="w-full flex flex-col justify-center items-center backdrop-blur-1xl border-[#7a7a7a] bg-[rgba(0,0,0,0.6)] shadow-lg isolate rounded-[20px]">
                          <div className="w-full py-3 px-7 grid grid-cols-4 justify-center items-center rounded-lg">
                            <div className="flex flex-col justify-center items-center gap-2 pr-6">
                              <p className=" text-3xl">E38</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2  ">
                              <p className=" text-[10px]">house</p>
                              <p className=" text-base">38A</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2  ">
                              <p className=" text-[10px]">Plot, M²</p>
                              <p className=" text-base">900</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2">
                              <p className=" text-[10px]">House, M²</p>
                              <p className=" text-base">147</p>
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-col justify-center items-center backdrop-blur-1xl border-[#7a7a7a] bg-[rgba(0,0,0,0.6)] shadow-lg isolate rounded-[20px]">

                          <div className="w-full py-3 gap-y-5 gap-x-4 px-7 grid grid-cols-4 justify-center items-center rounded-lg">


                            <div className="flex flex-col justify-center items-start gap-2 ">
                              <p className=" text-[10px]">Date</p>
                              <p className=" text-1xl">3Q/2023</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2  ">
                              <p className=" text-[10px]">house</p>
                              <p className=" text-base">38A</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2  ">
                              <p className=" text-[10px]">Plot, M²</p>
                              <p className=" text-base">900</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2">
                              <p className=" text-[10px]">House, M²</p>
                              <p className=" text-base">147</p>
                            </div>


                            <div className="flex flex-col justify-center items-start gap-2 pr-6"></div>
                            <div className="flex flex-col justify-center items-center gap-2  ">
                              <p className=" text-[10px]">house</p>
                              <p className=" text-base">38A</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2  ">
                              <p className=" text-[10px]">Plot, M²</p>
                              <p className=" text-base">900</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2">
                              <p className=" text-[10px]">House, M²</p>
                              <p className=" text-base">147</p>
                            </div>


                            <div className="flex flex-col justify-center items-start gap-2 pr-6"></div>

                            <div className="flex flex-col justify-center items-center gap-2 pr-6 "></div>
                            <div className="flex flex-col justify-center items-center gap-2 pr-6 "></div>


                          </div>

                          <div className="border-[#e0dfdf] px-3 w-[95%] border-t-[1px]"></div>

                          <div className="w-full py-3 px-3 flex flex-row justify-between items-center">
                            <div className="flex flex-col justify-center items-start gap-2 py-2">
                              <p className="text-[10px]">HOUSE DOCUMENTATION</p>
                              <p className="text-[12px]">HOUSE DOCUMENTATION</p>
                            </div>
                            <button className=" px-5 md:px-10 py-3 text-[14px] font-bold rounded-[30px] bg-white text-black uppercase">Book a call</button>
                          </div>

                        </div>

                        <div className="flex mb-[20px] flex-col lg:flex-row items-center justify-center gap-2 w-full">
                          {showVideoPlayer === true && showVideoPlayerInterior === false && (
                            <button
                              className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                              onClick={() => setShowVideoPlayerInterior(true)}
                            >
                              View interior
                            </button>
                          )}
                          {showVideoPlayer === true && showVideoPlayerInterior === true && (
                            <button
                              className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                              onClick={() => { setShowVideoPlayerInterior(false); setShowVideoPlayer(true); }}
                            >
                              View Exterior
                            </button>
                          )}
                        </div>

                      </div>

                      {showVideoPlayerInterior && (<div className="lg:w-[40%] w-full relative gap-1 p-5 flex flex-col justify-start items-start bg-transparent">
                        <div onClick={handlevideopop} className="absolute cursor-pointer  top-[10%] right-[10%]">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                        </div>
                        <div onClick={handlevideopop} className="absolute top-[30%] cursor-pointer right-[40%]">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                        </div>
                      </div>)}

                      {videopop && (
                        <>
                          <div className="fixed top-[30px] left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                            <div className="bg-white relative w-[90%] md:w-[60%] text-black p-1 rounded">
                              <svg onClick={handlevideopop} className="absolute hover:text-white z-[10] transition-all ease-in-out delay-100 top-3 md:top-5 right-3 md:right-5 cursor-pointer w-8 h-8 md:w-[50px] md:h-[50px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <video
                                src="/pop.mp4"
                                type="video/mp4"
                                muted
                                playsInline
                                autoPlay
                                controls
                              />
                            </div>
                          </div>
                        </>
                      )}

                    </div>
                  )}

                </div>
              </div>
            </section>
          </div>


          <div className=" sticky z-20">
            {/* location section responsive done */}
            <section className=" text-white bg-[#0f0f0f] w-full h-[170vh] md:h-screen gap-2 flex flex-col md:flex-row items-center justify-start z-[23]">
              <div className="md:w-[50%] w-full flex flex-col justify-center items-center px-5 md:px-20">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <h2 className="text-[42px] md:text-[64px] md:mt-0 mt-[40px] mb-[30px] font-bold leading-snug">Location</h2>
                  <div className="w-full border-b border-gray-400 h-[1px]"></div>

                  <div className="w-full flex flex-col justify-center mt-[30px] items-start">

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l1} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Warsaw Ring Road</p>
                          <p className=" text-lg font-bold">3 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l2} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Bus Stop</p>
                          <p className=" text-lg font-bold">0.4 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l3} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Playground</p>
                          <p className=" text-lg font-bold">0.2 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l4} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Primary School</p>
                          <p className=" text-lg font-bold">1.5 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex w-[50%] flex-col md:flex-row justify-start items-start md:items-center gap-3">
                        <img src={l5} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Grocery Store</p>
                          <p className=" text-lg font-bold">0.4 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l6} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Clinic</p>
                          <p className=" text-lg font-bold">0.5 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l7} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Pharmacy</p>
                          <p className=" text-lg font-bold">0.5 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img src={l8} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Woods and Lake</p>
                          <p className=" text-lg font-bold">0.4 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <div className="md:w-[50%] w-full h-full flex flex-col justify-center items-center">
                <MapContainer />
              </div>
            </section>

            {/* construction section responsive  */}
            <section className={`text-black bg-[#eaeaea] w-full ${sectionHeight ? 'h-[700px]' : 'h-full'} gap-2 flex flex-col items-center justify-start z-[23]`}>
              <div className="md:w-[95%] w-full flex flex-col justify-center items-center px-5 md:px-20">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <h2 className="text-[42px] md:text-[64px] mb-[30px] mt-[90px] font-bold leading-snug">Construction technology</h2>
                  <div className="w-full border-b border-gray-400 h-[1px]"></div>

                  <div className="w-full flex gap-y-[50px] md:gap-y-[70px] flex-row flex-wrap gap-x-[20px] md:gap-x-[50px] mt-[30px] mb-[30px] md:mt-[60px] md:mb-[80px] justify-between items-center">

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="#888" clip-path="url(#brickwall_svg__a)"><path d="M.533 32.062h25.6a.533.533 0 0 0 .534-.533v-4.8H30.4a.533.533 0 0 0 .534-.534v-5.333a.533.533 0 0 0-.534-.533h-3.733v-4.8a.533.533 0 0 0-.534-.534h-.978a1.233 1.233 0 0 0-.218-.998l-2.41-3.213 1.113-.835c.494-.37.77-.963.735-1.58l-.053-.96a.78.78 0 0 1 .31-.668l1.113-.834.468.624a.533.533 0 0 0 .747.106l4.4-3.3a1.6 1.6 0 0 0 .32-2.24L31.384.7a1.602 1.602 0 0 0-2.24-.319l-4.4 3.3a.534.534 0 0 0-.107.748l.468.624-1.113.834c-.494.37-.77.964-.735 1.58l.053.96a.779.779 0 0 1-.31.668l-1.113.835-2.41-3.213a1.237 1.237 0 0 0-1.086-.498c-.404.029-.765.263-.956.62l-4.383 8.155H.533A.533.533 0 0 0 0 15.53v5.333c0 .295.239.533.533.533h3.734v4.267H.533a.533.533 0 0 0-.533.533v5.334c0 .294.239.533.533.533Zm29.25-30.827a.533.533 0 0 1 .747.106l.297.396a.533.533 0 0 1-.107.746l-3.974 2.982-.936-1.249 3.974-2.981ZM9.6 26.73h7.467v4.266H9.6V26.73Zm4.267-5.334h7.466v4.267h-7.466v-4.267Zm11.733 9.6h-7.467V26.73H25.6v4.266Zm4.267-5.333H22.4v-4.267h7.467v4.267ZM25.6 20.329h-7.467v-3.106l5.46-1.161H25.6v4.267ZM18.375 7.346a.111.111 0 0 1 .097-.063h.01c.057 0 .11.029.142.075l2.41 3.213-2.2 1.65a.533.533 0 0 0 .64.854l2.2-1.65 2.41 3.212c.038.047.049.11.029.167a.112.112 0 0 1-.087.076l-10.581 2.25a.173.173 0 0 1-.17-.073.17.17 0 0 1-.022-.182l5.122-9.53Zm-5.953 10.351c.284.391.772.577 1.245.476l3.4-.723v2.879H9.6v-4.267h2.879l-.165.307c-.229.426-.186.946.108 1.328Zm-11.355.498h1.066a.533.533 0 1 0 0-1.066H1.067v-1.067h7.466v4.267H1.067v-2.134Zm4.266 3.2H12.8v4.267H5.333v-4.267ZM1.067 26.73h7.466v4.266H1.067V26.73Z"></path><path d="M6.934 17.662a.533.533 0 0 0-.533-.533H4.268a.533.533 0 0 0 0 1.066H6.4a.533.533 0 0 0 .533-.533Z"></path></g><defs><clipPath id="brickwall_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Walls</p>
                        <p className=" text-md font-normal">Porotherm ceramic block</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#888" d="M30.325 2.5h-4.891V1a.506.506 0 0 0-.143-.354.484.484 0 0 0-.346-.146h-1.957a.484.484 0 0 0-.346.146A.506.506 0 0 0 22.5 1v1.5H8.314V1a.506.506 0 0 0-.143-.354A.484.484 0 0 0 7.825.5H5.87a.484.484 0 0 0-.346.146A.506.506 0 0 0 5.38 1v1.5H3.912c-.908 0-1.779.369-2.42 1.025A3.54 3.54 0 0 0 .487 6c0 .928.361 1.819 1.003 2.475A3.387 3.387 0 0 0 3.912 9.5H5.38v1H.977a.484.484 0 0 0-.345.146.506.506 0 0 0-.144.354v20c0 .133.052.26.144.354a.484.484 0 0 0 .345.146h19.566c.13 0 .254-.053.346-.146a.506.506 0 0 0 .143-.354v-1.5h1.467V31c0 .133.052.26.143.354a.484.484 0 0 0 .346.146h1.957c.13 0 .254-.053.346-.146a.506.506 0 0 0 .143-.354v-1.5h1.956c.909 0 1.78-.369 2.421-1.025A3.54 3.54 0 0 0 30.814 26a3.54 3.54 0 0 0-1.003-2.475 3.386 3.386 0 0 0-2.42-1.025h-1.957v-1h1.956c.909 0 1.78-.369 2.421-1.025A3.54 3.54 0 0 0 30.814 18a3.54 3.54 0 0 0-1.003-2.475 3.386 3.386 0 0 0-2.42-1.025h-1.957v-1h1.956c.909 0 1.78-.369 2.421-1.025A3.54 3.54 0 0 0 30.814 10a3.54 3.54 0 0 0-1.003-2.475 3.387 3.387 0 0 0-2.42-1.025h-1.957v-1h4.891c.13 0 .254-.053.346-.146A.506.506 0 0 0 30.814 5V3a.506.506 0 0 0-.143-.354.484.484 0 0 0-.346-.146Zm-6.848-1h.979v1h-.979v-1Zm-17.12 0h.98v1h-.98v-1Zm0 8h.98v1h-.98v-1Zm21.034 0c.13 0 .254.053.345.146a.505.505 0 0 1 0 .708.484.484 0 0 1-.346.146h-1.956v-1h1.956Zm-2.935 1h-.979v-1h.979v1Zm-1.957 0H8.314v-1H22.5v1Zm-11.25 4v-1H22.5v1H11.25Zm16.142 3c.13 0 .254.053.345.146a.506.506 0 0 1 0 .708.484.484 0 0 1-.346.146h-1.956v-1h1.956Zm-2.935 1h-.979v-1h.979v1Zm-1.957 0H11.25v-1H22.5v1Zm-12.228-7v9H1.467v-9h8.804Zm-8.804 10h8.804v9H1.467v-9Zm18.586 9H11.25v-9h8.804v9Zm.979-9h1.467v1h-1.467v-1Zm0 4h1.467v1h-1.467v-1Zm6.358 0c.13 0 .255.053.346.146a.506.506 0 0 1 0 .708.484.484 0 0 1-.346.146h-1.956v-1h1.956Zm-2.934 1h-.979v-1h.979v1Zm0 4h-.979v-1h.979v1Zm5.38-4.5c0 .663-.259 1.298-.717 1.767a2.422 2.422 0 0 1-1.729.733h-6.358v-1h6.358c.39 0 .763-.158 1.038-.44.275-.28.43-.662.43-1.06s-.155-.78-.43-1.06a1.452 1.452 0 0 0-1.038-.44h-6.358v-1h6.358c.649 0 1.27.264 1.729.733.458.469.716 1.104.717 1.767Zm-5.38-3.5h-.979v-1h.979v1Zm5.38-4.5c0 .663-.259 1.298-.717 1.767a2.422 2.422 0 0 1-1.729.733H11.25v-1h16.14c.39 0 .763-.158 1.038-.44.275-.28.43-.662.43-1.06s-.155-.78-.43-1.06a1.452 1.452 0 0 0-1.038-.44H11.25v-1h16.14c.649 0 1.27.264 1.729.733.458.469.716 1.104.717 1.767Zm-5.38-3.5h-.979v-1h.979v1Zm0-8h-.979v-1h.979v1Zm-20.544 0a.484.484 0 0 1-.346-.146.506.506 0 0 1 0-.708.484.484 0 0 1 .346-.146H5.38v1H3.912Zm2.446-1h.978v1h-.978v-1Zm1.956 0H22.5v1H8.314v-1Zm21.522-1H3.912c-.389 0-.762.158-1.037.44-.276.28-.43.662-.43 1.06s.154.78.43 1.06c.275.282.648.44 1.037.44h23.479c.648 0 1.27.263 1.729.732.458.47.716 1.105.716 1.768s-.258 1.299-.716 1.768a2.42 2.42 0 0 1-1.73.732H11.25v-1h16.14c.39 0 .763-.158 1.038-.44.275-.28.43-.662.43-1.06s-.155-.78-.43-1.06a1.452 1.452 0 0 0-1.038-.44H3.912c-.648 0-1.27-.263-1.73-.732A2.528 2.528 0 0 1 1.468 6c0-.663.257-1.299.716-1.768a2.419 2.419 0 0 1 1.73-.732h25.923v1Z"></path></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Heating</p>
                        <p className=" text-md font-normal">gas, underfloor</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="#888" clip-path="url(#styrofoam_svg__a)"><path d="M31.375 5.807h-2.286v-2.28a.625.625 0 0 0-.625-.625H26.18V.625A.632.632 0 0 0 25.555 0H.625A.625.625 0 0 0 0 .625v24.874c0 .34.284.626.625.626h2.284v2.277c0 .345.28.625.625.625H5.82v2.28c0 .345.28.625.625.625h24.93c.345 0 .625-.28.625-.625V6.432a.625.625 0 0 0-.625-.625Zm-20.93 19.068 4.4-4.39 2.4-2.394 3.27 3.263-3.529 3.52h-6.54Zm-8.309 0 6.799-6.784 3.27 3.262-3.53 3.522H2.136Zm22.794-7.927L21.4 20.47l-3.27-3.262 6.8-6.786v6.526ZM13.09 20.47l-3.27-3.262L17.245 9.8l3.27 3.263-3.71 3.701-.003.003-.002.003-2.837 2.83-.873.871ZM1.25 10.422l2.644 2.64L1.25 15.7v-5.279Zm7.684-.624 3.271 3.264L8.51 16.75l-.018.016L4.78 20.47l-3.27-3.262 3.71-3.703.009-.01 3.705-3.697Zm4.598-4.585 3.713-3.705 3.27 3.263-3.694 3.686c-.006.006-.013.01-.019.017l-.015.017-3.697 3.689L9.82 8.916l3.703-3.695.01-.008Zm-9.637 16.14-2.645 2.64v-5.279l2.645 2.639ZM24.93 8.656 21.4 12.18l-3.27-3.264 6.8-6.784v6.524ZM21.4 3.888 18.756 1.25h5.288L21.4 3.888ZM8.493 8.473l-3.714 3.706-3.27-3.264 7.425-7.407 3.27 3.262-3.712 3.703ZM24.93 18.714v6.16h-6.174l6.174-6.16ZM15.733 1.25 13.09 3.887 10.446 1.25h5.287Zm-8.31 0L1.25 7.409V1.25h6.173ZM30.75 30.682H7.07v-1.655h7.577a.625.625 0 0 0 0-1.25H4.16v-1.652h21.396c.345 0 .625-.28.625-.625V4.152h1.66v23.625h-7.578a.625.625 0 0 0 0 1.25h8.202c.345 0 .625-.28.625-.625V7.057h1.661v23.625Z"></path><path d="M17.455 27.777a.625.625 0 0 0 0 1.25h.002a.624.624 0 1 0-.002-1.25Z"></path></g><defs><clipPath id="styrofoam_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Styrofoam</p>
                        <p className=" text-md font-normal">facade 20cm</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#888" d="M.729 20.42a.5.5 0 0 0 .476.036l1.295-.582V21.5a.5.5 0 0 0 .707.455l.793-.36V27.5a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5V10.685l2.707-1.23a.5.5 0 0 0 .24-.678l-.697-1.392.953-.429a.5.5 0 0 0 .243-.68l-1-2a.5.5 0 0 0-.65-.232l-29 13A.5.5 0 0 0 .5 17.5V20a.5.5 0 0 0 .229.42ZM6 27H5v-5.86l1-.454V27Zm5 0H7v-6.769l4-1.819V27Zm2 0h-1v-9.042l1-.454V27Zm5 0h-4v-9.95l4-1.818V27Zm2 0h-1V14.777l1-.455V27Zm5 0h-4V13.867l4-1.817V27Zm2 0h-1V11.595l1-.455V27ZM3.5 20.724v-1.3L29.339 7.796l.482.964L3.5 20.724Zm-2-2.9L29.767 5.152l.553 1.105L1.5 19.227v-1.404Z"></path></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Roof</p>
                        <p className=" text-md font-normal">silicone plaster</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#888" d="M1.5 31h24a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-3v-1.285c.55.02 1.1-.025 1.64-.133a6.624 6.624 0 0 0 4.656-3.556 6.701 6.701 0 0 0 .704-2.982V8.5h1a.5.5 0 0 0 .4-.8l-3-4a.5.5 0 0 0-.8 0l-3 4a.5.5 0 0 0 .4.8h1v4.994a3.656 3.656 0 0 1-1.379 2.869 2.908 2.908 0 0 1-3.117.33L18.618 15.5a4.736 4.736 0 0 0-4.236 0l-2.21 1.105A3.76 3.76 0 0 1 10.5 17c-.58 0-1.151-.136-1.67-.394l-2.39-1.195a3.899 3.899 0 0 0-.94-.326V12.08L7.078 11l1.461-1 1.462-1h6.998l1.462 1 1.461 1 1.578 1v4h1v-3.236l.218.149a.5.5 0 0 0 .698-.136l1-1.5a.5.5 0 0 0-.125-.684L21.5 8.6V1.5A.5.5 0 0 0 21 1h-3a.5.5 0 0 0-.5.5v4.243l-3.71-2.65a.5.5 0 0 0-.58 0l-10.5 7.5a.5.5 0 0 0-.126.684l1 1.5a.5.5 0 0 0 .698.136l.218-.15v2.24c-.81.034-1.59.312-2.238.8L1.6 16.3c-.173.13-.384.2-.6.2v1c.433 0 .853-.141 1.2-.4l.662-.497A2.998 2.998 0 0 1 4.675 16H4.7c.45 0 .892.105 1.293.305l2.39 1.195a4.756 4.756 0 0 0 2.116.5h.001a4.765 4.765 0 0 0 2.119-.5l2.21-1.106a3.736 3.736 0 0 1 3.342 0l2.386 1.193a3.908 3.908 0 0 0 4.189-.443 4.651 4.651 0 0 0 1.754-3.65V8a.5.5 0 0 0-.5-.5h-.5l2-2.667 2 2.667H29a.5.5 0 0 0-.5.5v6.544a5.696 5.696 0 0 1-2.225 4.507 5.632 5.632 0 0 1-2.33 1.05 6.02 6.02 0 0 1-3.645-.404l-1.683-.748A5.18 5.18 0 0 0 16.5 18.5a4.76 4.76 0 0 0-2.118.5l-2.21 1.105a3.76 3.76 0 0 1-1.672.395c-.58 0-1.151-.136-1.67-.394l-2.39-1.195A3.91 3.91 0 0 0 4.7 18.5h-.025a3.99 3.99 0 0 0-2.413.803L1.6 19.8c-.173.13-.384.2-.6.2v1c.433 0 .853-.141 1.2-.4l.662-.497a2.998 2.998 0 0 1 1.813-.603H4.7c.45 0 .892.105 1.293.305L8.383 21a4.756 4.756 0 0 0 2.116.5h.001a4.765 4.765 0 0 0 2.119-.5l2.21-1.106A3.756 3.756 0 0 1 16.5 19.5c.59 0 1.172.123 1.71.363l1.684.748a7.013 7.013 0 0 0 4.246.47 6.618 6.618 0 0 0 4.36-3.024 5.696 5.696 0 0 1-2.225 4.494 5.632 5.632 0 0 1-2.33 1.05 6.02 6.02 0 0 1-3.645-.404l-1.683-.748A5.18 5.18 0 0 0 16.5 22a4.76 4.76 0 0 0-2.118.5l-2.21 1.105A3.76 3.76 0 0 1 10.5 24c-.58 0-1.151-.136-1.67-.394l-2.39-1.195A3.91 3.91 0 0 0 4.7 22h-.025a3.99 3.99 0 0 0-2.413.803L1.6 23.3c-.173.13-.384.2-.6.2v1c.433 0 .853-.141 1.2-.4l.662-.497A2.998 2.998 0 0 1 4.675 23H4.7c.45 0 .892.105 1.293.305l2.39 1.195a4.756 4.756 0 0 0 2.116.5h.001a4.765 4.765 0 0 0 2.119-.5l2.21-1.106A3.756 3.756 0 0 1 16.5 23c.59 0 1.172.123 1.71.363l1.684.748a7.068 7.068 0 0 0 1.606.496V26h-5a.5.5 0 0 0-.5.5v.5h-4.5v-.5a.5.5 0 0 0-.5-.5H5.5v-2h-1v2h-3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5Zm9.962-23L13.5 6.606 15.538 8h-4.076ZM18.5 2h2v5.886l-2-1.429V2ZM4.135 11.802l-.45-.676L13.5 4.114l9.815 7.012-.45.676-9.083-6.215a.5.5 0 0 0-.564 0l-9.083 6.215ZM25 30h-5.5v-3H25v3Zm-8-3h2.5v3H17v-3Zm-5.5 3v-.5H16v.5h-4.5Zm4.5-3v2.5h-4.5V27H16Zm-5.5 3H9v-3h1.5v3ZM2 27h7v3H2v-3Z"></path></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Heat recovery</p>
                        <p className=" text-md font-normal">heat recovery in ventilation system</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="#888" clip-path="url(#elevation_svg__a)"><path d="M1.067 20.8h10.666c.59 0 1.066-.478 1.067-1.067v-7.466c0-.59-.478-1.066-1.067-1.067H1.067C.477 11.2 0 11.678 0 12.267v7.466c0 .59.478 1.066 1.067 1.067Zm0-8.533h10.666v7.466H1.068v-7.466ZM1.067 32h4.266c.59 0 1.066-.478 1.067-1.067v-7.466c0-.59-.478-1.066-1.067-1.067H1.067C.477 22.4 0 22.878 0 23.467v7.466C0 31.523.478 32 1.067 32Zm0-8.533h4.266l.001 7.466H1.067v-7.466Z"></path><path d="M30.933 0H1.067C.477 0 0 .478 0 1.067v7.466C0 9.123.478 9.6 1.067 9.6h14.685c.3.511.559 1.046.772 1.6h-1.057c-.59 0-1.066.478-1.067 1.067v7.466c0 .59.478 1.066 1.067 1.067h1.026c-.007.241-.021.483-.019.721.004.282.018.578.036.879H9.067c-.59 0-1.066.478-1.067 1.067v7.466C8 31.523 8.478 32 9.067 32h21.866c.59 0 1.066-.478 1.067-1.067V1.067C32 .477 31.522 0 30.933 0ZM1.067 1.067h8.93a14.33 14.33 0 0 0 .072 2.24c.295 1.53 1.49 2.304 2.545 2.986l.171.11a9.049 9.049 0 0 1 2.26 2.13H1.066V1.067Zm14.4 11.2h1.399c.244.89.376 1.806.393 2.729a10.386 10.386 0 0 1-.338 2.44c-.08.36-.159.722-.225 1.096-.069.39-.115.794-.149 1.201h-1.08v-7.466Zm-6.4 11.2h7.55a14.704 14.704 0 0 0 2.992 7.466H9.067v-7.466Zm21.866 7.466h-9.91a13.407 13.407 0 0 1-3.409-8.048 17.715 17.715 0 0 1-.073-1.377c-.005-.398.006-.805.032-1.216.025-.528.083-1.054.174-1.575.063-.359.14-.707.216-1.052.228-.878.35-1.78.363-2.686a12.084 12.084 0 0 0-1.813-6.192 10.352 10.352 0 0 0-3.145-3.277l-.175-.113c-1.002-.648-1.868-1.208-2.075-2.278a16.54 16.54 0 0 1-.06-2.052h19.875v29.866Z"></path><path d="M12.188 3.002c.16.555.706.931 1.585 1.499l.18.117a11.374 11.374 0 0 1 3.463 3.6 13.215 13.215 0 0 1 1.39 3.05.534.534 0 0 0 1.017-.32 14.294 14.294 0 0 0-1.501-3.293 12.433 12.433 0 0 0-3.787-3.93l-.183-.12a4.877 4.877 0 0 1-1.126-.866l-.008-.108a.533.533 0 1 0-1.065.071l.016.204c.004.033.01.065.019.096ZM19.392 14.96a12.51 12.51 0 0 1-.394 2.967c-.07.32-.141.643-.2.975-.084.485-.138.974-.16 1.466-.024.375-.034.755-.03 1.127.005.408.028.84.069 1.288a12.59 12.59 0 0 0 2.654 6.89.534.534 0 1 0 .822-.68 11.695 11.695 0 0 1-2.414-6.308 15.844 15.844 0 0 1-.064-1.203c-.005-.346.005-.697.028-1.053.02-.45.069-.898.145-1.342.056-.316.125-.624.2-.964.265-1.04.403-2.108.411-3.18a.533.533 0 0 0-.533-.525h-.009a.531.531 0 0 0-.525.542Z"></path></g><defs><clipPath id="elevation_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Facade</p>
                        <p className=" text-md font-normal">silicone plaster, waterproof</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#888" d="M30.527 28.771h-1.976V.481c0-.288-.192-.481-.482-.481H3.973c-.29 0-.482.193-.482.482v28.29H1.515c-.289 0-.482.192-.482.481v2.265c0 .29.193.482.482.482H30.48c.29 0 .482-.193.482-.482v-2.265c.048-.241-.193-.482-.434-.482ZM4.455.964h23.132V28.77h-1.253V2.651c0-.29-.192-.482-.482-.482H6.19c-.29 0-.482.192-.482.482v26.12H4.455V.964Zm12.048 18.94V12h8.868v7.904h-8.868Zm8.868.963v7.904h-8.868v-7.904h8.868Zm-8.868-9.83V3.132h8.868v7.903h-8.868Zm-9.831 8.867V12h8.867v7.904H6.672Zm8.867.963v7.904H6.672v-7.904h8.867Zm-8.867-9.83V3.132h8.867v7.903H6.672Zm-4.675 20v-1.302H30.045v1.301H1.997Z"></path></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Windows</p>
                        <p className=" text-md font-normal">warm, triple-glazed, energy-efficient plastic</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g clip-path="url(#installation_svg__a)"><mask id="installation_svg__b" width="44" height="44" x="-6" y="-6" maskUnits="userSpaceOnUse"><path fill="#fff" d="M37.337 37.33H-5.33V-5.338h42.667v42.666Z"></path></mask><g fill="#888" mask="url(#installation_svg__b)"><path d="M13.495 31.998H1.471A1.47 1.47 0 0 1 .002 30.53V2.475A2.477 2.477 0 0 1 2.477 0h10.018a2.477 2.477 0 0 1 2.475 2.475V30.53a1.48 1.48 0 0 1-1.475 1.468ZM2.471.938A1.54 1.54 0 0 0 .933 2.474V30.53a.53.53 0 0 0 .531.531h12.031a.53.53 0 0 0 .531-.531V2.475A1.54 1.54 0 0 0 12.49.937H2.47Z"></path><path d="M14.494 18.973h-1a.472.472 0 0 1-.469-.469c0-.256.213-.469.47-.469h1c.255 0 .468.213.468.47a.468.468 0 0 1-.469.468ZM11.493 18.973H.47A.472.472 0 0 1 0 18.504c0-.256.212-.469.469-.469h11.024c.256 0 .469.213.469.47a.472.472 0 0 1-.469.468ZM30.528 31.998H18.504a1.47 1.47 0 0 1-1.469-1.468V15.5a1.47 1.47 0 0 1 1.469-1.47h12.024a1.47 1.47 0 0 1 1.469 1.47v15.03a1.47 1.47 0 0 1-1.469 1.468Zm-12.024-17.03a.53.53 0 0 0-.531.531v15.03a.53.53 0 0 0 .53.532h12.025a.53.53 0 0 0 .532-.531V15.5a.53.53 0 0 0-.532-.532H18.504ZM29.526 8.953H19.508a1.471 1.471 0 0 1-1.469-1.468V1.472A1.47 1.47 0 0 1 19.508.004h10.018c.813 0 1.469.662 1.469 1.468v6.013c0 .806-.657 1.468-1.469 1.468ZM19.508.935a.53.53 0 0 0-.531.531v6.019a.53.53 0 0 0 .53.53h10.019a.53.53 0 0 0 .531-.53V1.472a.53.53 0 0 0-.531-.53H19.508V.934ZM1.969 16.969h-1.5A.472.472 0 0 1 0 16.5c0-.256.212-.468.469-.468h1.5c.018 0 .03-.013.03-.032v-3.506c0-.019-.012-.031-.03-.031h-1.5A.472.472 0 0 1 0 11.994c0-.256.212-.469.469-.469h1.5a.97.97 0 0 1 .968.97V16a.965.965 0 0 1-.968.969ZM1.969 25.486h-1.5a.472.472 0 0 1-.469-.47c0-.255.212-.468.469-.468h1.5c.018 0 .03-.012.03-.031v-3.506c0-.019-.012-.031-.03-.031h-1.5A.472.472 0 0 1 0 20.51c0-.255.212-.468.469-.468h1.5a.97.97 0 0 1 .968.969v3.506a.966.966 0 0 1-.968.969ZM8.485 6.95H6.478a.97.97 0 0 1-.968-.97v-1a.97.97 0 0 1 .968-.968h2.007a.97.97 0 0 1 .968.969v1a.97.97 0 0 1-.968.968ZM6.478 4.942c-.018 0-.03.013-.03.031v1.007c0 .018.012.03.03.03h2.007c.018 0 .03-.012.03-.03v-1c0-.02-.012-.032-.03-.032H6.478v-.006Z"></path><path d="M31.532 18.973h-14.03a.472.472 0 0 1-.469-.469c0-.256.213-.469.469-.469h14.03c.257 0 .47.213.47.47a.472.472 0 0 1-.47.468Z"></path><path d="M22.512 18.973a.472.472 0 0 1-.469-.469v-1.537h-2.068v1.537a.472.472 0 0 1-.47.469.472.472 0 0 1-.468-.469v-2.006c0-.256.213-.469.469-.469h3.006c.256 0 .469.213.469.469v2.006a.472.472 0 0 1-.47.469ZM25.52 18.97a1.472 1.472 0 0 1-1.475-1.468 1.472 1.472 0 0 1 2.943 0c0 .813-.662 1.469-1.468 1.469Zm0-1.999a.53.53 0 1 0-.001 1.061.53.53 0 0 0 0-1.061ZM29.525 16.969h-1.5a.472.472 0 0 1-.468-.469c0-.256.212-.468.468-.468h1.5c.257 0 .469.212.469.468a.472.472 0 0 1-.469.469ZM24.518 29.492a4.478 4.478 0 0 1-4.475-4.475 4.478 4.478 0 0 1 4.475-4.475 4.478 4.478 0 0 1 4.474 4.475 4.478 4.478 0 0 1-4.474 4.475Zm0-8.012a3.542 3.542 0 0 0-3.538 3.537 3.542 3.542 0 0 0 3.538 3.537 3.542 3.542 0 0 0 3.537-3.537 3.542 3.542 0 0 0-3.537-3.537Z"></path><path d="M24.512 27.49a2.477 2.477 0 0 1-2.475-2.475 2.476 2.476 0 0 1 2.475-2.475c.212 0 .419.025.619.082a.468.468 0 0 1-.232.906 1.6 1.6 0 0 0-.38-.05 1.54 1.54 0 0 0-1.538 1.537 1.54 1.54 0 0 0 1.537 1.538 1.54 1.54 0 0 0 1.488-1.925.468.468 0 0 1 .906-.232c.05.207.075.413.075.62a2.477 2.477 0 0 1-2.475 2.474ZM27.521 8.956a.472.472 0 0 1-.468-.469V.47c0-.257.212-.469.468-.469.257 0 .47.212.47.469v8.018a.472.472 0 0 1-.47.469Z"></path><path d="M30.528 3.943h-3.006a.472.472 0 0 1-.47-.468c0-.257.213-.47.47-.47h3.006c.256 0 .468.213.468.47a.472.472 0 0 1-.468.468ZM25.516 6.947h-5.012a.472.472 0 0 1-.469-.468V2.473c0-.257.213-.47.469-.47h2.006c.256 0 .469.213.469.47a.472.472 0 0 1-.469.468h-1.537V6.01h4.074V2.941h-.53a.472.472 0 0 1-.47-.468c0-.257.213-.47.47-.47h1c.255 0 .468.213.468.47v4.006a.464.464 0 0 1-.469.468ZM24.516 14.965a.472.472 0 0 1-.47-.469V8.484c0-.256.213-.469.47-.469.256 0 .468.213.468.47v6.011a.472.472 0 0 1-.468.469ZM17.502 23.482h-3.006a.472.472 0 0 1-.469-.469c0-.256.213-.469.47-.469h3.005c.256 0 .469.213.469.469a.472.472 0 0 1-.469.469ZM18.504 4.945h-4.006a.472.472 0 0 1-.469-.468c0-.257.213-.47.469-.47h4.006c.256 0 .469.213.469.47a.472.472 0 0 1-.469.468Z"></path></g></g><defs><clipPath id="installation_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Installations</p>
                        <p className=" text-md font-normal">electric, water supply, sewage, gas central heating, fiber optic</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full max-w-[45%] lg:w-[30%] justify-start items-start md:items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="#888" clip-path="url(#celings_svg__a)"><path d="M30.4 5.334a1.608 1.608 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6h-.533V1.6A1.56 1.56 0 0 0 29.4.476 1.565 1.565 0 0 0 28.267 0a1.6 1.6 0 0 0-1.6 1.6v.534h-2.134V1.6a1.56 1.56 0 0 0-.466-1.124A1.565 1.565 0 0 0 22.933 0a1.6 1.6 0 0 0-1.6 1.6v.534H19.2V1.6a1.56 1.56 0 0 0-.466-1.124A1.565 1.565 0 0 0 17.6 0 1.6 1.6 0 0 0 16 1.6v.534h-1.765A2.133 2.133 0 0 0 12.102 0H2.667A2.67 2.67 0 0 0 0 2.667v26.667A2.67 2.67 0 0 0 2.667 32h26.666A2.67 2.67 0 0 0 32 29.334v-9.435a2.133 2.133 0 0 0-2.133-2.133V16h.533a1.608 1.608 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6h-.533v-2.133h.533a1.608 1.608 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6h-.533V5.334h.533Zm0-2.134c.295 0 .533.239.533.534a.521.521 0 0 1-.163.38.515.515 0 0 1-.37.153h-.533V3.2h.533Zm-2.667-1.6c0-.294.24-.533.534-.533.143 0 .28.059.38.163a.51.51 0 0 1 .153.37v16.382c-.186.06-.362.121-.533.182-.172.06-.35.123-.534.18V1.6Zm-4.266 3.734v2.133H22.4V5.334h1.067Zm3.2 0v2.133h-2.134V5.334h2.134Zm-7.467 9.6v-1.067h7.467v1.066H19.2Zm7.467-6.4V9.6H19.2V8.534h7.467ZM22.4 12.8v-2.133h1.067V12.8H22.4Zm-3.2 0v-2.133h2.133V12.8H19.2Zm5.333-2.133h2.134V12.8h-2.134v-2.133Zm-3.2-3.2H19.2V5.334h2.133v2.133ZM19.2 16h2.133v1.79c-.643-.135-1.3-.199-1.958-.19-.06 0-.116.007-.175.01V16Zm3.2 0h1.067v2.447c-.32-.083-.604-.182-.892-.283l-.175-.061V16Zm2.133 0h2.134v2.586c-.413.057-.83.084-1.246.08-.334 0-.624-.014-.888-.038V16ZM22.4 1.6c0-.294.239-.533.533-.533.144 0 .281.059.38.163a.51.51 0 0 1 .154.37v.534H22.4V1.6Zm4.267 1.6v1.067H19.2V3.2h7.467Zm-9.6-1.6c0-.294.238-.533.533-.533.144 0 .281.059.38.163a.51.51 0 0 1 .153.37v16.163a6.363 6.363 0 0 0-1.066.38V1.6Zm-2.856 9.067H16V12.8h-1.61c0-.06.01-.118.01-.179a8.951 8.951 0 0 0-.19-1.954ZM16 7.467h-2.628a9.596 9.596 0 0 1-.039-.892c-.002-.415.024-.83.08-1.241H16v2.133Zm0 1.067V9.6h-2.1l-.064-.18c-.1-.285-.2-.567-.282-.886H16Zm-1.763 5.333H16v1.066h-2.143c.158-.343.285-.7.38-1.066ZM13.305 16H16v2.694c-1.207.663-1.76.882-2.667-.027-.906-.91-.69-1.46-.028-2.667ZM16 4.267h-2.347c.058-.184.12-.359.182-.533.063-.175.122-.347.181-.534H16v1.067Zm14.933 15.632v9.434a1.6 1.6 0 0 1-1.6 1.6H2.667a1.6 1.6 0 0 1-1.6-1.6V2.668a1.6 1.6 0 0 1 1.6-1.6H12.1a1.07 1.07 0 0 1 1.04 1.317 9.684 9.684 0 0 1-.31.992 8.313 8.313 0 0 0-.564 3.2 8.31 8.31 0 0 0 .563 3.2c.356.905.527 1.873.503 2.845a5.574 5.574 0 0 1-.92 2.784c-.64 1.163-1.368 2.481.166 4.016 1.534 1.535 2.85.807 4.014.165a5.57 5.57 0 0 1 2.782-.92 7.314 7.314 0 0 1 2.846.504 8.305 8.305 0 0 0 3.2.563 8.3 8.3 0 0 0 3.2-.564c.326-.12.658-.224.995-.31a1.07 1.07 0 0 1 1.317 1.04Zm-.533-6.032c.295 0 .533.239.533.533a.521.521 0 0 1-.163.38.515.515 0 0 1-.37.154h-.533v-1.067h.533Zm0-5.333c.295 0 .533.238.533.533a.521.521 0 0 1-.163.38.515.515 0 0 1-.37.153h-.533V8.533h.533Z"></path><path d="M4.266 26.133a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm0 2.134a.533.533 0 1 1 0-1.067.533.533 0 0 1 0 1.067ZM9.6 2.667a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm0 2.133a.533.533 0 1 1 0-1.067.533.533 0 0 1 0 1.067ZM4.8 25.067A.533.533 0 1 0 4.8 24a.533.533 0 0 0 0 1.067ZM8.533 8a.533.533 0 1 0 0-1.067.533.533 0 0 0 0 1.067ZM28.8 21.867a.533.533 0 1 0 0-1.067.533.533 0 0 0 0 1.067Z"></path><path fill-rule="evenodd" d="M25.806 26.246a.533.533 0 1 0 .653.843.533.533 0 0 0-.653-.843ZM24.74 20.913a.533.533 0 1 0 .653.843.533.533 0 0 0-.653-.843Z" clip-rule="evenodd"></path></g><defs><clipPath id="celings_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath></defs></svg>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <p className=" text-lg font-bold">Ceilings</p>
                        <p className=" text-md font-normal">cast-in-place reinforced concrete</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* lets talk section responsive */}
            <section className={` text-black bg-[#e3e3e3] w-full md:min-h-screen ${sectionHeight ? 'h-[700px]' : 'h-full'} gap-10 md:gap-2 flex flex-col md:flex-row items-center justify-start z-[23]`}>
              <div className="md:w-[60%] border-r h-[40%] border-gray-400 w-full flex flex-col justify-center items-center px-5 md:px-20">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <h2 className="text-[64px] md:mt-0 mt-[40px] mb-[30px] font-bold text-5xl leading-snug">Let's talk!</h2>

                  <div className="w-full flex flex-col gap-5 justify-center mt-[30px] items-start">
                    <p className="font-normal text-[#afacac] mt-[20px] mb-[20px] text-lg uppercase">SEND THE EMAIL</p>
                    <input type="text" placeholder="Name" className="w-full transition-all ease-in-out delay-800 text-lg focus:border-transparent bg-transparent py-6 border-b border-gray-400 outline-none" />
                    <input type="email" placeholder="Email" className="w-full transition-all ease-in-out delay-800 text-lg focus:border-transparent bg-transparent py-6 border-b border-gray-400 outline-none" />
                    <input type="text" placeholder="Tell us about your project" className="w-full transition-all ease-in-out delay-800 text-md focus:border-transparent bg-transparent py-6 border-b border-gray-400 outline-none" />
                    <label for="file-upload" className="flex items-center justify-center gap-3 py-2 bg-transparent text-black rounded-md cursor-pointer">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" className="ContactFormstyles__AttachmentIcon-sc-18i7pts-0 cVgPey" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z"></path></svg>
                      Add Attachment
                    </label>
                    <input id="file-upload" type="file" className="hidden" />
                    <div className="w-full flex flex-col md:gap-2 gap-4 justify-center md:justify-between items-center lg:flex-row">
                      <button className="lg:w-[46%] uppercase w-full py-3 px-3 bg-[#333333] text-white text-lg font-semibold rounded-[30px]">SEND</button>
                      <button className="lg:w-[46%] uppercase w-full py-3 px-3 bg-transparent text-black border-black border-[2px] text-lg font-semibold rounded-[30px]">BOOK A CALL</button>
                    </div>
                  </div>

                </div>
              </div>
              <div className="md:w-[40%] md:border-none border-l border-gray-400 pl-2 md:mb-0 mb-[50px] md:ml-[30px] w-[90%] h-full flex gap-5 flex-col justify-center items-center">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-normal text-[#afacac] mt-[10px] mb-[10px] text-lg uppercase">Write us</p>
                  <p className="text-[1.20rem] md:text-1xl lg:text-3xl font-bold cursor-pointer">contact@prographers.com</p>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-normal text-[#afacac] mt-[10px] mb-[10px] text-lg uppercase">Call us</p>
                  <p className="text-[1.20rem] md:text-1xl lg:text-3xl font-bold cursor-pointer">(+48) 692 223 170</p>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-normal text-[#afacac] mt-[10px] mb-[10px] text-lg uppercase">ADDRESS</p>
                  <p className="text-[1.20rem] md:text-1xl lg:text-3xl font-bold cursor-pointer">05-420, Józefów, Tadeusza 22 Poland</p>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-light text-justify w-full md:pr-[50px] text-[10px] md:text-xs">I agree that my data in this form will be sent to contact@prographers.com and will be read by human beings. We will answer you as soon as possible. If you sent this form by mistake or want to remove your data, you can let us know by sending an email to contact@prographers.com. We will never send you any spam or share your data with third parties.</p>
                </div>
              </div>
            </section>

            {/* projects responsive  */}
            <section className=" text-white bg-[#82cb8a] w-full min-h-[60vh] gap-10 md:gap-2 flex flex-col lg:flex-row items-center justify-center px-20 py-10 z-[23]">
              <div className="lg:w-[65%]">
                <p className="w-full lg:w-[70%] md:text-start text-center text-[42px] md:text-[64px] mb-[30px] mt-[30px] font-bold leading-snug">Other projects of the developer</p>
              </div>
              <div className="lg:w-[35%] flex flex-col justify-center items-center lg:items-start gap-2">
                <p className="lg:text-start text-center lg:w-[50%] text-white text-[18px]">Check out other projects on the developer's website</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="147" height="61" fill="none"><g fill="#EAEAEA" clip-path="url(#kamien_milowy_svg__a)"><path d="m13.745 39.425-9.19-4.197L0 33.34l5.844 26.332 7.901-9.99V39.425ZM20.65 30.58V.8L.605 31.353l13.77 6.289 6.275-7.062ZM28.861 37.642l13.77-6.287L22.591.804v29.778l6.27 7.06ZM29.452 49.632l7.912 10.001L43.2 33.34l-4.119 1.708-9.629 4.395v10.189ZM15.659 50.318l-7.383 9.334-.764 1.148h28.302l-.321-.482-7.91-10H15.659Z"></path></g><path fill="#fff" d="m67.232 43.032-9.528-7.224V54h3.72V43.224l5.808 4.2 5.808-4.2V54h3.72V35.808l-9.528 7.224ZM81.813 39.744c1.152 0 2.04-.888 2.04-1.944 0-.984-.888-1.872-2.04-1.872-1.056 0-1.968.912-1.968 1.872 0 1.056.912 1.944 1.968 1.944Zm1.728 2.136h-3.408V54h3.408V41.88ZM86.426 36.12V54h3.408V36.12h-3.408ZM98.502 41.616c-3.48 0-6.288 2.832-6.288 6.336 0 3.456 2.808 6.312 6.288 6.312 3.48 0 6.384-2.856 6.384-6.312 0-3.504-2.904-6.336-6.384-6.336Zm0 9.264c-1.56 0-2.832-1.2-2.832-2.928 0-1.704 1.272-2.928 2.832-2.928 1.656 0 2.904 1.224 2.904 2.928 0 1.728-1.248 2.928-2.904 2.928ZM117.382 47.688l-2.784-5.808h-3.264l1.632 3.48-1.104 2.352-2.904-5.832h-3.768l6.576 12.432 2.736-5.712 2.736 5.712 6.024-12.432h-3.336l-2.544 5.808ZM128.907 52.848l-3.24 6.936h3.528l8.328-17.904h-3.384l-3.432 7.512-3.504-7.512h-3.744l5.448 10.968ZM61.424 10.12h-3.72V28h3.72v-4.728l1.992-1.992L70.112 28h5.016l-9.072-9.096 8.784-8.784h-4.968l-8.448 8.448V10.12ZM84.057 15.88v.84c-.528-.576-1.872-1.104-2.952-1.104-3.24 0-5.952 2.832-5.952 6.336 0 3.456 2.64 6.312 5.952 6.312 1.104 0 2.424-.432 2.952-1.128V28h3.408V15.88h-3.408Zm-2.616 9c-1.56 0-2.832-1.2-2.832-2.928 0-1.704 1.272-2.928 2.832-2.928 1.584 0 2.76 1.224 2.76 2.928 0 1.728-1.176 2.928-2.76 2.928ZM102.172 21.952c0-1.608 1.128-2.928 2.616-2.928 1.368 0 2.496 1.08 2.496 2.928V28h3.384v-6.048c0-3.504-1.8-6.336-5.52-6.336-1.248 0-3.168.384-4.32 1.92-.72-1.104-2.328-1.92-4.104-1.92-1.056 0-2.424.432-2.976 1.104v-.84H90.34V28h3.408v-6.048c0-1.608 1.128-2.928 2.4-2.928 1.536 0 2.616.84 2.616 2.928V28h3.408v-6.048ZM115.07 13.744c1.152 0 2.04-.888 2.04-1.944 0-.984-.888-1.872-2.04-1.872-1.056 0-1.968.912-1.968 1.872 0 1.056.912 1.944 1.968 1.944Zm1.728 2.136h-3.408V28h3.408V15.88ZM128.371 23.656c-.552.864-1.584 1.224-2.616 1.224-.36 0-.696-.024-1.008-.144l6.768-4.848c-.744-2.256-3.048-4.272-6.048-4.272-3.48 0-6.288 2.832-6.288 6.336 0 3.456 2.928 6.312 6.576 6.312 2.16 0 4.296-.984 5.328-2.52l-2.712-2.088Zm-5.736-1.704c0-1.704 1.272-2.928 2.832-2.928.648 0 1.2.216 1.68.576l-4.416 3.144a2.757 2.757 0 0 1-.096-.792ZM140.285 9.76l-2.832 4.464h3.192l1.896-2.856-2.256-1.608Zm5.64 12.192c0-3.504-2.304-6.336-5.616-6.336-1.104 0-2.52.336-3.192 1.104v-.84h-3.408V28h3.408v-6.048c0-1.944 1.392-2.928 2.904-2.928 1.392 0 2.52.984 2.52 2.928V28h3.384v-6.048Z"></path><defs><clipPath id="kamien_milowy_svg__a"><path fill="#fff" d="M0 .8h43.2v60H0z"></path></clipPath></defs></svg>
              </div>
            </section>

            <footer className="text-[#afacac] h-[40vh] md:h-[30vh] p-5 bg-[#0f0f0f] gap-2 w-full flex flex-row justify-center items-center z-[23]">

              <div className="md:w-[30%] w-[50%] flex flex-col justify-between items-start h-full">
                <div className="flex flex-col justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 99 34" height="43" alt="Osiedle Malinowskiego" width="125" className="Footerstyles__LogoProject-sc-5uyeej-3 hVNTQc"><path fill="#fff" d="M8.314 9.136c0 .91-.162 1.7-.486 2.374-.324.67-.77 1.19-1.338 1.56-.565.366-1.216.55-1.952.55-.735 0-1.387-.184-1.956-.55-.565-.37-1.01-.89-1.333-1.56-.321-.673-.482-1.464-.482-2.374 0-.909.16-1.698.482-2.369.323-.673.77-1.193 1.338-1.56.568-.369 1.218-.554 1.951-.554.736 0 1.387.185 1.952.554.568.367 1.014.887 1.338 1.56.324.67.486 1.46.486 2.37Zm-.776 0c0-.78-.13-1.45-.392-2.007-.261-.56-.618-.987-1.07-1.282a2.748 2.748 0 0 0-1.538-.444 2.74 2.74 0 0 0-1.534.444c-.451.295-.81.721-1.074 1.278-.261.557-.392 1.227-.392 2.011 0 .782.131 1.45.392 2.008.262.556.618.984 1.07 1.282.452.296.964.443 1.538.443.574 0 1.087-.147 1.539-.443.454-.295.812-.722 1.074-1.278.26-.56.39-1.23.387-2.012Zm6.842-2.181a1.586 1.586 0 0 0-.644-1.16c-.38-.286-.86-.43-1.436-.43-.406 0-.764.07-1.074.209a1.76 1.76 0 0 0-.724.58c-.173.244-.26.522-.26.835 0 .23.05.431.15.605.099.173.232.322.4.447.17.122.358.227.562.316.208.088.416.161.627.221l.92.264c.279.077.557.175.835.294.279.12.533.27.763.452.233.18.42.4.558.66.142.26.213.57.213.934 0 .466-.12.885-.362 1.257-.241.372-.588.668-1.04.886-.451.216-.992.324-1.623.324-.594 0-1.11-.098-1.547-.294a2.514 2.514 0 0 1-1.031-.822c-.25-.35-.39-.755-.422-1.215h.818c.028.344.142.635.34.874.2.238.458.42.777.545a2.95 2.95 0 0 0 1.065.184c.435 0 .82-.073 1.159-.218.34-.148.608-.352.801-.614.196-.264.294-.57.294-.92 0-.295-.077-.543-.23-.741a1.782 1.782 0 0 0-.643-.508 5.687 5.687 0 0 0-.95-.362l-1.045-.307c-.684-.204-1.216-.487-1.594-.848-.377-.36-.566-.82-.566-1.38 0-.469.125-.88.375-1.236a2.52 2.52 0 0 1 1.022-.835 3.393 3.393 0 0 1 1.454-.303c.542 0 1.022.1 1.44.298.418.2.748.473.993.823.247.346.379.741.396 1.185h-.771Zm3.005-2.182V13.5h-.797V4.773h.797Zm1.72 8.727V4.773h5.063v.716h-4.266v3.285H23.9v.716h-3.997v3.294h4.35v.716h-5.147Zm9.082 0H25.63V4.773h2.71c.833 0 1.544.173 2.135.52a3.407 3.407 0 0 1 1.364 1.491c.315.648.473 1.425.473 2.331 0 .915-.162 1.7-.486 2.357a3.418 3.418 0 0 1-1.406 1.504c-.614.35-1.358.524-2.233.524Zm-1.76-.716h1.713c.75 0 1.378-.148 1.884-.443a2.77 2.77 0 0 0 1.137-1.266c.253-.548.38-1.201.38-1.96-.003-.753-.128-1.4-.375-1.943a2.712 2.712 0 0 0-1.091-1.249c-.48-.29-1.074-.434-1.781-.434h-1.867v7.295Zm7.217.716V4.773h.796v8.011h4.16v.716h-4.956Zm6.15 0V4.773h5.062v.716H40.59v3.285h3.997v.716H40.59v3.294h4.351v.716h-5.148ZM.759 21.773h2.275l2.404 5.863h.102l2.403-5.863h2.276V30.5h-1.79v-5.68h-.072l-2.259 5.637H4.879l-2.258-5.659h-.073V30.5H.758v-8.727ZM12.643 30.5h-1.977l3.013-8.727h2.378l3.008 8.727h-1.977l-2.186-6.733h-.068l-2.19 6.733Zm-.123-3.43h4.67v1.44h-4.67v-1.44Zm6.996 3.43v-8.727h1.845v7.206h3.741V30.5h-5.586Zm8.053-8.727V30.5h-1.845v-8.727h1.845Zm8.218 0V30.5h-1.594l-3.796-5.493h-.064V30.5h-1.846v-8.727h1.62l3.767 5.488h.076v-5.488h1.837Zm8.944 4.363c0 .952-.18 1.762-.54 2.43a3.752 3.752 0 0 1-1.467 1.53c-.616.349-1.31.523-2.08.523-.775 0-1.47-.176-2.087-.528-.617-.352-1.104-.862-1.462-1.53-.358-.668-.537-1.476-.537-2.425 0-.951.18-1.761.537-2.429.358-.667.845-1.176 1.462-1.525.616-.352 1.312-.529 2.088-.529.77 0 1.463.177 2.08.529.619.35 1.107.858 1.465 1.525.361.668.541 1.478.541 2.43Zm-1.87 0c0-.616-.092-1.136-.277-1.56-.182-.423-.44-.744-.772-.962a2.076 2.076 0 0 0-1.167-.329c-.446 0-.835.11-1.168.329-.332.218-.59.54-.775.963-.182.423-.273.943-.273 1.56 0 .616.09 1.136.273 1.559.184.423.443.744.775.963.333.219.722.328 1.168.328.446 0 .835-.11 1.167-.328.333-.219.59-.54.772-.963.184-.423.277-.943.277-1.56Zm4.274 4.364-2.497-8.727h2.015l1.445 6.064h.072l1.594-6.064h1.726l1.59 6.076h.076l1.445-6.076h2.015L54.12 30.5h-1.798l-1.662-5.706h-.068L48.933 30.5h-1.798Zm14.521-6.217a1.079 1.079 0 0 0-.439-.802c-.258-.19-.61-.285-1.052-.285-.301 0-.556.043-.763.128a1.073 1.073 0 0 0-.477.345.831.831 0 0 0-.162.503.718.718 0 0 0 .098.409c.074.116.174.217.302.303.128.082.276.154.444.217.167.06.346.11.536.153l.785.188c.38.085.73.199 1.048.34.318.143.593.317.827.525.232.207.413.452.54.733.131.281.198.604.201.967-.003.534-.14.997-.41 1.39-.266.389-.653.691-1.158.907-.503.213-1.11.32-1.82.32-.704 0-1.318-.108-1.84-.324-.52-.216-.927-.536-1.22-.96-.29-.425-.441-.952-.455-1.58h1.785c.02.293.104.537.252.733.15.193.35.34.6.439.253.096.539.145.857.145.312 0 .584-.046.814-.137.233-.09.413-.217.541-.379a.876.876 0 0 0 .192-.558.725.725 0 0 0-.175-.494 1.325 1.325 0 0 0-.503-.341 5.12 5.12 0 0 0-.805-.256l-.95-.239c-.736-.179-1.317-.458-1.743-.84-.426-.38-.638-.893-.635-1.537-.003-.529.137-.99.421-1.386.288-.394.68-.703 1.18-.924.5-.222 1.07-.333 1.706-.333.647 0 1.213.111 1.696.333.485.221.863.53 1.133.924.27.395.41.853.418 1.373h-1.769Zm2.53 6.217v-8.727h1.844v3.848h.115l3.14-3.848h2.213l-3.24 3.907 3.278 4.82h-2.207l-2.391-3.588-.908 1.108v2.48h-1.845Zm9.518-8.727V30.5h-1.845v-8.727h1.845Zm.918 8.727v-8.727h5.88v1.521h-4.035v2.08H80.2v1.52h-3.733v2.085h4.052V30.5h-5.897Zm12.534-5.906a1.916 1.916 0 0 0-.251-.55 1.702 1.702 0 0 0-.925-.669 2.233 2.233 0 0 0-.652-.09c-.446 0-.838.111-1.176.333-.335.222-.597.544-.784.967-.188.42-.281.935-.281 1.543 0 .608.092 1.125.277 1.551.184.426.446.751.784.976.338.221.737.332 1.197.332.418 0 .775-.074 1.07-.221.298-.15.525-.363.682-.635.159-.273.238-.596.238-.968l.375.056h-2.25v-1.39h3.652v1.1c0 .767-.162 1.426-.485 1.977-.324.549-.77.972-1.338 1.27-.569.296-1.22.443-1.952.443-.818 0-1.537-.18-2.157-.54a3.755 3.755 0 0 1-1.448-1.548c-.344-.67-.516-1.466-.516-2.386 0-.707.102-1.338.307-1.892a4.042 4.042 0 0 1 .87-1.415c.371-.386.805-.68 1.299-.882a4.211 4.211 0 0 1 1.606-.303c.495 0 .955.073 1.381.218.426.142.804.344 1.134.605.332.261.603.572.814.933.21.358.345.753.404 1.185h-1.875Zm10.762 1.542c0 .952-.18 1.762-.54 2.43a3.753 3.753 0 0 1-1.467 1.53c-.616.349-1.31.523-2.08.523-.775 0-1.471-.176-2.088-.528-.616-.352-1.103-.862-1.461-1.53-.358-.668-.537-1.476-.537-2.425 0-.951.179-1.761.537-2.429.358-.667.845-1.176 1.462-1.525.616-.352 1.312-.529 2.088-.529.77 0 1.463.177 2.08.529.618.35 1.107.858 1.465 1.525.36.668.541 1.478.541 2.43Zm-1.87 0c0-.616-.093-1.136-.278-1.56-.181-.423-.438-.744-.77-.962a2.076 2.076 0 0 0-1.168-.329c-.446 0-.836.11-1.168.329-.332.218-.59.54-.776.963-.181.423-.272.943-.272 1.56 0 .616.09 1.136.272 1.559.185.423.444.744.776.963.332.219.722.328 1.168.328.446 0 .835-.11 1.167-.328.333-.219.59-.54.772-.963.184-.423.276-.943.276-1.56Z"></path></svg>
                </div>

                <div className="md:hidden block">
                  <p className="uppercase mb-[10px] font-light cursor-pointer hover:underline text-sm">segments</p>
                  <p className="uppercase mb-[10px] font-light cursor-pointer hover:underline text-sm">map</p>
                  <p className="uppercase font-light cursor-pointer hover:underline text-sm">technology</p>
                </div>

                <p className="uppercase font-light text-sm">@2024 prographers</p>
              </div>

              <div className="hidden md:w-[30%] md:flex flex-col justify-center items-center">
                <p className="uppercase mb-[20px] font-light cursor-pointer hover:underline text-sm">segments</p>
                <p className="uppercase mb-[20px] font-light cursor-pointer hover:underline text-sm">map</p>
                <p className="uppercase mb-[20px] font-light cursor-pointer hover:underline text-sm">technology</p>
              </div>

              <div className="md:w-[30%] w-[50%] flex flex-col justify-between items-end h-full">
                <div className="flex flex-row gap-2 justify-end items-center">

                  <div className="rounded-full bg-transparent border-white border-[1px] flex flex-col justify-center items-center p-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
                  </div>

                  <div className="rounded-full bg-transparent border-white border-[1px] flex flex-col justify-center items-center p-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg>
                  </div>

                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="font-light text-sm">Created By</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26" fill="none">
                    <g clip-path="url(#clip0_367_9100)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2715 6.39708C17.2715 2.8642 20.1171 0 23.627 0C27.1369 0 29.9824 2.8642 29.9824 6.39708C29.9824 6.67017 29.9654 6.93925 29.9324 7.20333C30.1719 7.17578 30.4153 7.16162 30.6621 7.16162C31.4126 7.16162 32.1328 7.29258 32.8012 7.53303C32.9333 7.20314 33.1975 6.74158 33.715 6.35652C34.6344 5.67256 35.7936 5.73854 35.7936 5.73854H36.7641V8.56935H35.9135C35.6337 8.56935 35.3539 8.60959 35.0341 8.89122L35.0208 8.90315C36.2502 10.0697 37.0176 11.724 37.0176 13.5587C37.0176 17.0916 34.172 19.9558 30.6621 19.9558C29.6665 19.9558 28.7243 19.7253 27.8853 19.3145C27.6775 19.5161 27.4799 19.8182 27.4799 20.2377C27.4799 21.1229 28.5591 21.2436 28.5591 21.2436H33.0359C33.2758 21.2436 34.6348 21.324 35.794 22.2546C36.9531 23.1852 37.153 24.7841 37.153 24.7841C37.153 24.7841 34.1951 25.5888 33.9952 25.629C33.7954 24.1001 32.1106 24.1806 32.1106 24.1806H27.8396C26.3207 24.1806 24.482 23.1345 24.442 20.9619C24.4104 19.2408 25.5577 18.2729 26.0359 17.9449C24.9637 16.7997 24.3066 15.2564 24.3066 13.5587C24.3066 13.2856 24.3236 13.0165 24.3566 12.7525C24.1172 12.78 23.8737 12.7942 23.627 12.7942C21.9884 12.7942 20.4945 12.1699 19.3675 11.1448H18.5248C17.4855 11.1448 16.806 11.8288 16.4063 12.553C16.2539 12.8289 16.1706 13.1478 16.1277 13.4535V20.4788H13.0898V15.9786C12.1039 16.6117 10.9329 16.9785 9.67676 16.9785C8.43379 16.9785 7.27414 16.6193 6.29467 15.9984V20.2774H3.25684V4.18414H6.29467V5.1643C7.2741 4.54348 8.43373 4.18433 9.67676 4.18433C12.7555 4.18433 15.3231 6.38804 15.9074 9.31374C16.0243 9.18322 16.1627 9.05376 16.3264 8.93196C16.7402 8.62412 17.2025 8.4682 17.5859 8.38981C17.3819 7.76268 17.2715 7.09285 17.2715 6.39708ZM20.4292 6.37697C20.4292 8.20999 21.9058 9.69621 23.7269 9.69621C25.548 9.69621 27.0245 8.20999 27.0245 6.37697C27.0245 4.54394 25.548 3.05773 23.7269 3.05773C21.9058 3.05773 20.4292 4.54394 20.4292 6.37697ZM27.4644 13.5386C27.4644 15.3716 28.9409 16.8578 30.762 16.8578C32.5831 16.8578 34.0597 15.3716 34.0597 13.5386C34.0597 11.7056 32.5831 10.2193 30.762 10.2193C28.9409 10.2193 27.4644 11.7056 27.4644 13.5386ZM9.77669 13.8805C7.95559 13.8805 6.47904 12.3943 6.47904 10.5613C6.47904 8.72827 7.95559 7.24205 9.77669 7.24205C11.5978 7.24205 13.0743 8.72827 13.0743 10.5613C13.0743 12.3943 11.5978 13.8805 9.77669 13.8805Z" fill="#D1D1D1" />
                    </g>
                    <defs>
                      <clipPath id="clip0_367_9100">
                        <rect width="37.5" height="25.5" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

            </footer>
          </div>

        </>)} 
          {isLoading&&(<>
            <div className={`fixed top-0 transition-all ease-in-out delay-200 left-0 w-screen h-full flex justify-center items-center bg-black z-[1000] ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="\1.mp4" type="video/mp4" />
              </video>
              {isLoading && (
                <>
                  <h1 className="text-white w-full absolute text-[8vw] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] capitalize font-extrabold top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">Malinowskiego 38</h1>
                  <h1 className="text-white absolute text-[5vw] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] capitalize font-light top-[40%] md:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">SINGLE-FAMILY</h1>
                  <h1 className="text-white absolute text-[5vw] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] capitalize font-light top-[45%] md:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">HOUSES ESTATE</h1>
                </>
              )}
            </div>
          </>)}
    </div >
  )
}

export default LandingPage
