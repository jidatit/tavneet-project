import Header from "../../components/Header"
import markerheroicon from "../../assets/maps-and-flags.png"
import markericon from "../../assets/m.png"
import caricon from "../../assets/c.jpg"
import logo from "../../assets/logo.png"
// import l1 from "../../assets/l1.svg"
// import l2 from "../../assets/l2.svg"
// import l3 from "../../assets/l3.svg"
// import l4 from "../../assets/l4.svg"
// import l5 from "../../assets/l5.svg"
// import l6 from "../../assets/l6.svg"
// import l7 from "../../assets/l7.svg"
// import l8 from "../../assets/l8.svg"
import MapContainer from "../../components/Map/MapContainer"
import { useEffect, useRef, useState } from "react"
import Gallery from "./Gallery/Gallery"
import bedimg from "../../assets/a1/bed.png"
import kitimg from "../../assets/a1/kit.png"
import loungeimg from "../../assets/a1/lounge.png"
import a2dinimg from "../../assets/a2/a2din.png"
import a2kitimg from "../../assets/a2/a2kit.png"
import a2livingimg from "../../assets/a2/a2living.png"
import { Link } from "react-router-dom"

function LandingPage() {
  const [sectionHeight, setSectionHeight] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isSegmentsVisible, setIsSegmentsVisible] = useState(false);
  const [isCardVideoVisible, setIsCardVideoVisible] = useState(false);

  const [isFirst, setIsFirst] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);

  }, []);

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
      const card = document.getElementById('firstCard');
      if (sectionHeading) {
        const bounding = sectionHeading.getBoundingClientRect();
        setIsHeroVisible(bounding.top > window.innerHeight || bounding.bottom < 0);

        console.log("hero", bounding.top > window.innerHeight || bounding.bottom < 0)
        console.log("segment", bounding.top <= window.innerHeight && bounding.bottom >= 0)

        setIsSegmentsVisible(window.scrollY > window.innerHeight);

        // const timer = setTimeout(() => {
        //   setIsCardVideoVisible(true)
        // }, 3000);

        return () => clearTimeout(timer);
      }

      // if(isHeroVisible){
      //   setIsCardVideoVisible(false)
      // }
      if (card) {
        const bounding = card.getBoundingClientRect();
        setIsCardVideoVisible(bounding.top <= window.innerHeight && bounding.bottom >= 0);

        console.log("card", bounding.top <= window.innerHeight && bounding.bottom >= 0)
      }

    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const video3 = document.getElementById('segments-video3');
    const video5 = document.getElementById('segments-video5');
    const video2 = document.getElementById('segments-video2');
    const video4 = document.getElementById('segments-video4');

    if (isFirst) {
      video5.classList.remove('visible')
      video5.classList.add('hidden')
    }

    if (video3 && isSegmentsVisible) {
      video3.currentTime = 0; // Reset video playback to the beginning
    }

    if (video5 && isSegmentsVisible) {
      video5.currentTime = 0; // Reset video playback to the beginning
    }

    if (!isSegmentsVisible && !isFirst) {
      video4.classList.toggle('hidden')
      const timer = setTimeout(() => {
        video5.classList.toggle('hidden')
        video2.classList.toggle('hidden')
      }, 5000);

      return () => clearTimeout(timer);
    }

    if (isSegmentsVisible) {
      video2.classList.toggle('hidden')
      const timer = setTimeout(() => {
        video3.classList.toggle('hidden')
        video4.classList.toggle('hidden')
      }, 3000);

      return () => clearTimeout(timer);
    }

  }, [isSegmentsVisible])

  useEffect(() => {
    setIsFirst(false)
  })

  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showVideoPlayer2, setShowVideoPlayer2] = useState(false);
  const [showVideoPlayer3, setShowVideoPlayer3] = useState(false);
  const [showVideoPlayer4, setShowVideoPlayer4] = useState(false);

  const [showVideoPlayerInterior, setShowVideoPlayerInterior] = useState(false);
  const [showVideoPlayerInterior2, setShowVideoPlayerInterior2] = useState(false);
  const [showVideoPlayerInterior3, setShowVideoPlayerInterior3] = useState(false);

  const [modalpop, setmodalpop] = useState(false);

  const [playInt, setplayInt] = useState(false);
  const [playInt2, setplayInt2] = useState(false);
  const [playInt3, setplayInt3] = useState(false);
  const [playInt4, setplayInt4] = useState(false);

  const [gotoextvideo, setgotoextvideo] = useState(false);
  const [gotoextvideo2, setgotoextvideo2] = useState(false);
  const [gotoextvideo3, setgotoextvideo3] = useState(false);

  const [closeapartment, setcloseapartment] = useState(false);
  const [closeapartment2, setcloseapartment2] = useState(false);
  const [closeapartment3, setcloseapartment3] = useState(false);
  const [closeapartment4, setcloseapartment4] = useState(false);

  if (isLoading === true || (showVideoPlayer === true) || (showVideoPlayerInterior === true) || (showVideoPlayer2 === true) || (showVideoPlayerInterior2 === true) || (showVideoPlayer3 === true) || (showVideoPlayerInterior3 === true) || (showVideoPlayer4 === true)) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto"
  }


  const handlemodalpop = () => {
    setmodalpop(!modalpop)
  }

  const handleCardClick = () => {
    setShowVideoPlayer(true);

  };

  const handleCardClick2 = () => {
    setShowVideoPlayer2(true);

  };

  const handleCardClick3 = () => {
    setShowVideoPlayer3(true);

  };

  const handleCardClick4 = () => {
    setShowVideoPlayer4(true);

  };

  const handlecloseall = () => {
    setShowVideoPlayer(false);
    setShowVideoPlayer2(false);
    setShowVideoPlayer3(false);
    setShowVideoPlayer4(false);

    setcloseapartment(false);
    setcloseapartment2(false);
    setcloseapartment3(false);
    setcloseapartment4(false);

    setShowVideoPlayerInterior(false); 
    setShowVideoPlayerInterior2(false); 
    setShowVideoPlayerInterior3(false); 

    setplayInt(false); 
    setplayInt2(false); 
    setplayInt3(false);
    setplayInt4(false); 

    setgotoextvideo(false);
    setgotoextvideo2(false);
    setgotoextvideo3(false);

  }

  const handlecloseapartment1 = () => {
    setcloseapartment(true);
    setShowVideoPlayerInterior(false); 
    setplayInt(false); 
    setgotoextvideo(false);
  }
  const handlecloseapartment2 = () => {
    setcloseapartment2(true);
    setShowVideoPlayerInterior2(false); 
    setplayInt2(false); 
    setgotoextvideo2(false);
  }
  const handlecloseapartment3 = () => {
    setcloseapartment3(true);
    setShowVideoPlayerInterior3(false); 
    setplayInt3(false); 
    setgotoextvideo3(false);
  }
  const handlecloseapartment4 = () => {
    setcloseapartment4(true);
    setplayInt4(false); 
  }

  const handleplayInt = () => {
    console.log("played")
    setplayInt(true)
  }

  const handleplayInt2 = () => {
    console.log("played");
    setplayInt2(true)
  }

  const handleplayInt3 = () => {
    console.log("played");
    setplayInt2(true)
  }

  const handleplayInt4 = () => {
    console.log("played");
    setplayInt4(true)
  }

  const [marker, setmarker] = useState("");

  const handlemarkerclick = (srcmarker) => {
    setmodalpop(true)
    setmarker(srcmarker)
  }

  return (
    <div className={`font-poppins bg-black `} >
      {
        (<>
          {/* Header done */}
          <Header handlecloseall={handlecloseall} />

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
                  <h2 className="text-[42px] md:text-[64px] font-bold leading-snug">Reign</h2>
                  <p className="text-[16px] md:text-[18px] max-w-[80%]">Reign over Toronto. Luxury living in the heart of the city.</p>
                </div>
                <div className=" flex md:flex-row flex-col gap-6 items-start pb-5 md:pb-14 border-b border-gray-400 ">
                  <Link to="#appartments" className=" text-black bg-white py-2 px-4 shadow-md rounded-full uppercase text-base">Pick an apartment</Link>
                  <div className=" flex gap-3 items-center">
                    <div className=" p-3 rounded-full border border-white">
                      <img className=" max-w-[18px]" src={markerheroicon} />
                    </div>
                    <div className=" text-sm font-semibold">
                      <p>1026 1st Ave</p>
                      <p>Toronto</p>
                      <p>Canada</p>
                    </div>
                  </div>
                </div>
                <div className=" flex gap-2 md:gap-8 items-start pt-8 w-[80%]">
                  <div className=" flex flex-col gap-4 min-w-[80px] md:min-w-[118px]">
                    <h2 className=" text-[24px] md:text-[32px] font-semibold">0.2 km</h2>
                    <p className=" text-[12px] md:text-[16px] md:text-lg">Dunsmuir Public School</p>
                  </div>
                  <div className=" flex flex-col gap-4 min-w-[80px] md:min-w-[118px]">
                    <h2 className="text-[24px] md:text-[32px] font-semibold">1 km</h2>
                    <p className="  text-[12px] md:text-[16px] md:text-lg">St Paul Hospital</p>
                  </div>
                  <div className=" flex flex-col gap-4 min-w-[100px] md:min-w-[118px]">
                    <h2 className=" text-[24px] md:text-[32px] font-semibold">0.6 km</h2>
                    <p className="  text-[12px] md:text-[16px] md:text-lg">King St. Subway Station</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div id="appartments" className="relative z-[998] pt-[100px]">
            <section id="segments-section" className={`bg-transparent text-white w-full min-h-screen ${sectionHeight ? 'h-[700px]' : 'h-fit'} flex items-start justify-start px-5 md:px-20 relative`}>
              <div className=" w-full md:max-w-[50%] flex flex-col gap-6">
                <div className=" flex flex-col gap-4 w-full">
                  <h2 id="SectionHeading" className="text-[42px] md:block hidden md:text-[64px] font-bold leading-snug">Select your Dream home</h2>
                  <h2 className="text-[42px] md:hidden block md:text-[64px] font-bold leading-snug">Choose your house</h2>
                  <div onClick={handleCardClick} className="md:w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
                    <div className="flex flex-col gap-2 pr-6 border-r border-[#404040] ">
                      <p className=" text-[10px]">Apt</p>
                      <p className=" text-base">102</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6 ">
                      <p className=" text-[10px]">CN Tower</p>
                      <p className=" text-[10px]">View</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6 ">
                      <p className=" text-[10px]">Apt Sq.ft</p>
                      <p className=" text-base">800</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6 ">
                      <p className=" text-[10px]">price, EUR</p>
                      <p className=" text-xs py-1 px-2 md:px-[42px] rounded-md bg-[#404040] text-white">sold</p>
                    </div>
                  </div>
                  <div onClick={handleCardClick2} id="firstCard" className="md:w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
                    <div className="flex flex-col gap-2 pr-6 border-r border-[#404040] ">
                      <p className=" text-[10px]">Apt</p>
                      <p className=" text-base">2102</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6 ">
                      <p className=" text-[10px]">TORONTO</p>
                      <p className=" text-[10px]">Skyline</p>
                      <p className=" text-[10px]">VIEW</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6 ">
                      <p className=" text-[10px]">Apt Sq.ft</p>
                      <p className=" text-base">1204</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6 ">
                      <p className=" text-[10px]">3.5 Mil</p>
                      <p className=" text-xs py-1 px-1 md:px-6 rounded-md bg-[#404040] text-white">Available</p>
                    </div>
                  </div>
                  <div className="border-[#e0dfdf] px-3 w-[55%] border-t-[2px]"></div>
                  <h2 className="text-[32px] font-semibold leading-snug">Complex Amenities</h2>
                  <div onClick={handleCardClick3} className="md:w-[55%] py-3 px-7 flex flex-col justify-center items-center rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
                    <p>Common Lounge</p>
                  </div>
                  <div onClick={handleCardClick4} className="md:w-[55%] py-3 px-7 flex flex-col justify-center items-center rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.6)] uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
                    <p>Park</p>
                  </div>
                  {/* for apartment one */}
                  <>
                    {showVideoPlayer === true && gotoextvideo === false && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a1/A1fc.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {closeapartment && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          onEnded={() => { setShowVideoPlayer(false); setShowVideoPlayerInterior(false); setplayInt(false); setgotoextvideo(false); setcloseapartment(false) }}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a1/A1gotolist.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {gotoextvideo && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a1/A1gotoext.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {showVideoPlayerInterior && (
                      <div id="video-container" className={`w-full h-full bg-black fixed top-0 left-0 z-10`}>
                        <video
                          onEnded={handleplayInt}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a1/A1gotoint.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                        {playInt && (<video
                          id="segments-video"
                          onEnded={() => setgotoextvideo(false)}
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a1/A1int.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />)}
                      </div>
                    )}
                    {showVideoPlayer && (
                      <div className="fixed top-0 left-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-start  md:py-10 md:px-10 z-20">
                        <div className="lg:w-[35%] gap-1 pt-10 px-5 md:p-5 flex flex-col justify-start items-start bg-transparent">
                          <div className="flex mb-[20px] flex-row items-center justify-center gap-2">
                            <button
                              className="rounded-full text-black bg-white p-2"
                              onClick={handlecloseapartment1}
                            // () => { setShowVideoPlayer(false); setShowVideoPlayerInterior(false); setplayInt(false); setgotoextvideo(false) }
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

                          <div className={`w-full ${showVideoPlayerInterior !== true ? "flex" : "md:hidden flex"} gap-1 pt-10 px-5 md:p-5 flex-col justify-start items-start bg-transparent`}>
                            <div className={`w-full flex flex-col justify-center items-center backdrop-blur-1xl border-[#7a7a7a] bg-[rgba(0,0,0,0.6)] shadow-lg isolate rounded-[20px]`}>
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
                                <button className=" px-3 md:px-10 py-3 text-[12px] md:text-[14px] font-bold rounded-[30px] bg-white text-black uppercase">Book a call</button>
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-[20px] flex-col lg:flex-row items-center justify-center gap-2 w-full">
                            {showVideoPlayer === true && showVideoPlayerInterior === false && (
                              <button
                                className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                                onClick={() => { setShowVideoPlayerInterior(true); setplayInt(false) }}
                              >
                                View interior
                              </button>
                            )}
                            {showVideoPlayer === true && showVideoPlayerInterior === true && (
                              <button
                                className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                                onClick={() => { setShowVideoPlayerInterior(false); setgotoextvideo(true); setShowVideoPlayer(true); setplayInt(false) }}
                              >
                                View Exterior
                              </button>
                            )}
                          </div>
                        </div>
                        {(<div className={` ${(showVideoPlayerInterior && playInt)?" opacity-100":" opacity-0"} lg:w-[40%] w-full md:h-0 h-full relative gap-1 p-5 flex flex-col justify-start items-start bg-transparent`}>
                          <div onClick={()=>handlemarkerclick("m1")} className="absolute cursor-pointer top-[10%] left-[2%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          </div>
                          <div onClick={()=>handlemarkerclick("m2")} className="absolute top-[30%] cursor-pointer right-[15%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          </div>
                          <div onClick={()=>handlemarkerclick("m3")} className="absolute top-[30%] cursor-pointer right-[40%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          </div>
                        </div>)}
                        {modalpop && (
                          <>
                            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                              <div className="bg-white relative w-[90%] md:w-[60%] text-black p-1 rounded">
                                <svg onClick={handlemodalpop} className="absolute hover:text-white z-[10] transition-all ease-in-out delay-100 top-3 md:top-5 right-3 md:right-5 cursor-pointer w-8 h-8 md:w-[50px] md:h-[50px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {/* <video
                                  src="/pop.mp4"
                                  type="video/mp4"
                                  muted
                                  playsInline
                                  autoPlay
                                  controls
                                /> */}
                                <img className="w-full h-full object-cover" src={marker === "m1" ? bedimg : marker === "m2" ? kitimg : loungeimg} alt="" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </>
                  {/* for apartment two */}
                  <>
                    {showVideoPlayer2 === true && gotoextvideo2 === false && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a2/A2fc.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {closeapartment2 && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          onEnded={() => { setShowVideoPlayer2(false); setShowVideoPlayerInterior2(false); setplayInt2(false); setgotoextvideo2(false); setcloseapartment2(false) }}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a2/A2gotolist.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {gotoextvideo2 && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a2/A2gotoext.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {showVideoPlayerInterior2 && (
                      <div id="video-container" className={`w-full h-full bg-black fixed top-0 left-0 z-10`}>
                        <video
                          onEnded={handleplayInt2}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a2/A2gotoint.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                        {playInt2 && (<video
                          id="segments-video"
                          onEnded={() => setgotoextvideo2(false)}
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/a2/A2int.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />)}
                      </div>
                    )}
                    {showVideoPlayer2 && (
                      <div className="fixed top-0 left-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-start  md:py-10 md:px-10 z-20">
                        <div className="lg:w-[35%] gap-1 pt-10 px-5 md:p-5 flex flex-col justify-start items-start bg-transparent">
                          <div className="flex mb-[20px] flex-row items-center justify-center gap-2">
                            <button
                              className="rounded-full text-black bg-white p-2"
                              onClick={handlecloseapartment2}
                            // () => { setShowVideoPlayer(false); setShowVideoPlayerInterior(false); setplayInt(false); setgotoextvideo(false) }
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

                          <div className={`w-full ${showVideoPlayerInterior2 !== true ? "flex" : "md:hidden flex"} gap-1 pt-10 px-5 md:p-5 flex-col justify-start items-start bg-transparent`}>
                            <div className={`w-full flex flex-col justify-center items-center backdrop-blur-1xl border-[#7a7a7a] bg-[rgba(0,0,0,0.6)] shadow-lg isolate rounded-[20px]`}>
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
                                <button className=" px-3 md:px-10 py-3 text-[12px] md:text-[14px] font-bold rounded-[30px] bg-white text-black uppercase">Book a call</button>
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-[20px] flex-col lg:flex-row items-center justify-center gap-2 w-full">
                            {showVideoPlayer2 === true && showVideoPlayerInterior2 === false && (
                              <button
                                className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                                onClick={() => { setShowVideoPlayerInterior2(true); setplayInt2(false) }}
                              >
                                View interior
                              </button>
                            )}
                            {showVideoPlayer2 === true && showVideoPlayerInterior2 === true && (
                              <button
                                className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                                onClick={() => { setShowVideoPlayerInterior2(false); setgotoextvideo2(true); setShowVideoPlayer2(true); setplayInt2(false) }}
                              >
                                View Exterior
                              </button>
                            )}
                          </div>
                        </div>
                        {(<div className={` ${(showVideoPlayerInterior2 && playInt2)?" opacity-100":" opacity-0"} lg:w-[70%] w-full md:h-0 h-full relative gap-1 p-5 flex flex-col justify-start items-start bg-transparent`}>
                          <div onClick={()=>handlemarkerclick("m4")} className="absolute cursor-pointer top-[70%] md:top-[-60px] left-[10%] md:left-[2%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          </div>
                          <div onClick={()=>handlemarkerclick("m5")} className="absolute top-[70%] md:top-[-60px] cursor-pointer right-[40%] md:right-[60%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          </div>
                          <div onClick={()=>handlemarkerclick("m6")} className="absolute top-[45%] md:top-[30%] cursor-pointer right-[5%] md:right-[10%]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          </div>
                        </div>)}
                        {modalpop && (
                          <>
                            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                              <div className="bg-white relative w-[90%] md:w-[60%] text-black p-1 rounded">
                                <svg onClick={handlemodalpop} className="absolute hover:text-white z-[10] transition-all ease-in-out delay-100 top-3 md:top-5 right-3 md:right-5 cursor-pointer w-8 h-8 md:w-[50px] md:h-[50px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {/* <video
                                  src="/pop.mp4"
                                  type="video/mp4"
                                  muted
                                  playsInline
                                  autoPlay
                                  controls
                                /> */}
                                <img className="w-full h-full object-cover" src={marker === "m4" ? a2dinimg : marker === "m5" ? a2livingimg : a2kitimg} alt="" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </>
                  {/* for Lounge */}
                  <>
                    {showVideoPlayer3 === true && gotoextvideo3 === false && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/lg/Lgfc.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {closeapartment3 && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          onEnded={() => { setShowVideoPlayer3(false); setShowVideoPlayerInterior3(false); setplayInt3(false); setgotoextvideo3(false); setcloseapartment3(false) }}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/lg/Lggotolist.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {gotoextvideo3 && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/lg/Lggotoext.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {showVideoPlayerInterior3 && (
                      <div id="video-container" className={`w-full h-full bg-black fixed top-0 left-0 z-10`}>
                        <video
                          onEnded={handleplayInt3}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/lg/Lggotoint.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                        {playInt3 && (<video
                          id="segments-video"
                          onEnded={() => setgotoextvideo3(false)}
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/lg/Lgint.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />)}
                      </div>
                    )}
                    {showVideoPlayer3 && (
                      <div className="fixed top-0 left-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-start  md:py-10 md:px-10 z-20">
                        <div className="lg:w-[35%] gap-1 pt-10 px-5 md:p-5 flex flex-col justify-start items-start bg-transparent">
                          <div className="flex mb-[20px] flex-row items-center justify-center gap-2">
                            <button
                              className="rounded-full text-black bg-white p-2"
                              onClick={handlecloseapartment3}
                            // () => { setShowVideoPlayer(false); setShowVideoPlayerInterior(false); setplayInt(false); setgotoextvideo(false) }
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

                          <div className={`w-full ${showVideoPlayerInterior3 !== true ? "flex" : "md:hidden flex"} gap-1 pt-10 px-5 md:p-5 flex-col justify-start items-start bg-transparent`}>
                            <div className={`w-full flex flex-col justify-center items-center backdrop-blur-1xl border-[#7a7a7a] bg-[rgba(0,0,0,0.6)] shadow-lg isolate rounded-[20px]`}>
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
                                <button className=" px-3 md:px-10 py-3 text-[12px] md:text-[14px] font-bold rounded-[30px] bg-white text-black uppercase">Book a call</button>
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-[20px] flex-col lg:flex-row items-center justify-center gap-2 w-full">
                            {showVideoPlayer3 === true && showVideoPlayerInterior3 === false && (
                              <button
                                className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                                onClick={() => { setShowVideoPlayerInterior3(true); setplayInt3(false) }}
                              >
                                View interior
                              </button>
                            )}
                            {showVideoPlayer3 === true && showVideoPlayerInterior3 === true && (
                              <button
                                className="px-5 mt-[10px] py-3 text-[14px] font-bold rounded-[30px] text-black uppercase bg-white p-2 md:w-fit w-full"
                                onClick={() => { setShowVideoPlayerInterior3(false); setgotoextvideo3(true); setShowVideoPlayer3(true); setplayInt3(false) }}
                              >
                                View Exterior
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                  {/* for Park */}
                  <>
                    {closeapartment4 && (
                      <div id="video-container" className="w-full h-full bg-black fixed top-0 left-0 z-10">
                        <video
                          onEnded={() => { setShowVideoPlayer4(false); setplayInt4(false); setcloseapartment4(false) }}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/park/parkgotolist.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                      </div>
                    )}
                    {showVideoPlayer4 === true && closeapartment4 === false && (
                      <div id="video-container" className={`w-full h-full bg-black fixed top-0 left-0 z-10`}>
                        <video
                          onEnded={handleplayInt4}
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/park/parkfc.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                        />
                        {playInt4 && (<video
                          id="segments-video"
                          className={`absolute inset-0 w-full h-[50vh] md:h-full object-cover z-0 `}
                          src="/park/parkext.mp4"
                          type="video/mp4"
                          muted
                          playsInline
                          autoPlay
                          loop
                        />)}
                      </div>
                    )}
                    {showVideoPlayer4 && (
                      <div className="fixed top-0 left-0 w-full h-full flex md:flex-row flex-col-reverse items-center justify-start  md:py-10 md:px-10 z-20">
                        <div className="lg:w-[35%] gap-1 pt-10 px-5 md:p-5 flex flex-col justify-start items-start bg-transparent">
                          <div className="flex mb-[20px] flex-row items-center justify-center gap-2">
                            <button
                              className="rounded-full text-black bg-white p-2"
                              onClick={handlecloseapartment4}
                            // () => { setShowVideoPlayer(false); setShowVideoPlayerInterior(false); setplayInt(false); setgotoextvideo(false) }
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

                          <div className={`w-full flex gap-1 pt-10 px-5 md:p-5 flex-col justify-start items-start bg-transparent`}>
                            <div className={`w-full flex flex-col justify-center items-center backdrop-blur-1xl border-[#7a7a7a] bg-[rgba(0,0,0,0.6)] shadow-lg isolate rounded-[20px]`}>
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
                                <button className=" px-3 md:px-10 py-3 text-[12px] md:text-[14px] font-bold rounded-[30px] bg-white text-black uppercase">Book a call</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </section>
          </div>

          <div className=" sticky z-10">

            {/* location section responsive done */}
            <section className=" text-white bg-[#092863] w-full h-[170vh] md:h-screen gap-2 flex flex-col md:flex-row items-center justify-start z-[23]">
              <div className="md:w-[50%] w-full flex flex-col justify-center items-center px-5 md:px-20">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <h2 className="text-[42px] md:text-[64px] md:mt-0 mt-[40px] mb-[30px] font-bold leading-snug">Location</h2>
                  <div className="w-full border-b border-gray-400 h-[1px]"></div>

                  <div className="w-full flex flex-col justify-center mt-[30px] items-start">

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex flex-col md:flex-row w-[60%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={markericon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">King St. Subway Station</p>
                          <p className=" text-lg font-bold">0.2 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={caricon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">1 min drive</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex flex-col md:flex-row w-[60%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={markericon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Dunsmuir Public School</p>
                          <p className=" text-lg font-bold">0.6 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={caricon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">2 min drive</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex w-[60%] flex-col md:flex-row justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={markericon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">St Paul Hospital</p>
                          <p className=" text-lg font-bold">1 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={caricon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">5 min drive</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-[80%] w-full flex flex-row gap-x-[50px] mt-[20px] mb-[20px] justify-between items-center">
                      <div className="flex flex-col md:flex-row w-[60%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={markericon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">Toronto Beaches</p>
                          <p className=" text-lg font-bold">2.5 <span className="text-sm font-normal">Km</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row w-[50%] justify-start items-start md:items-center gap-3">
                        <img className="w-[32px] h-[32px]" src={caricon} alt="" />
                        <div className="flex flex-col gap-1 justify-center items-start">
                          <p className=" text-md">12 min drive</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <div id="map" className="md:w-[50%] w-full h-full flex flex-col justify-center items-center pt-[36px] sm:pt-0">
                <MapContainer />
              </div>
            </section>

            {/* construction section responsive  */}
            <section id="gallery" className={`text-white bg-[#031f56] w-full ${sectionHeight ? 'h-[700px]' : 'h-full'} gap-2 flex flex-col items-center justify-start z-[23]`}>
              <div className="md:w-[95%] w-full flex flex-col justify-center items-center px-5 md:px-20">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <h2 className="text-[42px] md:text-[64px] mb-[30px] mt-[90px] font-bold leading-snug">Gallery</h2>
                  <div className="w-full border-b border-gray-400 h-[1px]"></div>

                  <Gallery />

                </div>
              </div>
            </section>

            {/* lets talk section responsive */}
            <section id="contact" className={` text-white bg-[#afbfde] w-full md:min-h-screen ${sectionHeight ? 'h-[700px]' : 'h-full'} gap-10 md:gap-2 flex flex-col md:flex-row items-center justify-start z-[23]`}>
              <div className="md:w-[60%] border-r h-[40%] border-gray-400 w-full flex flex-col justify-center items-center px-5 md:px-20">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <h2 className="text-[64px] md:mt-0 mt-[40px] mb-[30px] font-bold text-5xl leading-snug pt-[36px] sm:pt-0">Let's talk!</h2>

                  <div className="w-full flex flex-col gap-5 justify-center mt-[30px] items-start">
                    <p className="font-normal text-white mt-[20px] mb-[20px] text-lg uppercase">SEND THE EMAIL</p>
                    <input type="text" placeholder="Name" className="w-full placeholder-white transition-all ease-in-out delay-800 text-lg focus:border-transparent bg-transparent py-6 border-b border-gray-400 outline-none" />
                    <input type="email" placeholder="Email" className="w-full placeholder-white transition-all ease-in-out delay-800 text-lg focus:border-transparent bg-transparent py-6 border-b border-gray-400 outline-none" />
                    <input type="text" placeholder="Tell us about your project" className="w-full placeholder-white transition-all ease-in-out delay-800 text-md focus:border-transparent bg-transparent py-6 border-b border-gray-400 outline-none" />
                    <label for="file-upload" className="flex items-center justify-center gap-3 py-2 bg-transparent text-white rounded-md cursor-pointer">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" className="ContactFormstyles__AttachmentIcon-sc-18i7pts-0 cVgPey" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z"></path></svg>
                      Add Attachment
                    </label>
                    <input id="file-upload" type="file" className="hidden" />
                    <div className="w-full flex flex-col md:gap-2 gap-4 justify-center md:justify-between items-center lg:flex-row">
                      <button className="lg:w-[46%] uppercase w-full py-3 px-3 bg-[#333333] text-white text-lg font-semibold rounded-[30px]">SEND</button>
                      <button className="lg:w-[46%] uppercase w-full py-3 px-3 bg-transparent text-white border-white border-[2px] text-lg font-semibold rounded-[30px]">BOOK A CALL</button>
                    </div>
                  </div>

                </div>
              </div>
              <div className="md:w-[40%] md:border-none border-l border-gray-400 pl-2 md:mb-0 mb-[50px] md:ml-[30px] w-[90%] h-full flex gap-5 flex-col justify-center items-center">
                <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-normal text-white mt-[10px] mb-[10px] text-lg uppercase">Write us</p>
                  <p className="text-[1.20rem] md:text-1xl lg:text-3xl font-bold cursor-pointer">tuvneet@gmail.com</p>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-normal text-white mt-[10px] mb-[10px] text-lg uppercase">Call us</p>
                  <p className="text-[1.20rem] md:text-1xl lg:text-3xl font-bold cursor-pointer">+1 647 860 1467</p>
                </div>
                {/* <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-normal text-white mt-[10px] mb-[10px] text-lg uppercase">ADDRESS</p>
                  <p className="text-[1.20rem] md:text-1xl lg:text-3xl font-bold cursor-pointer">05-420, Józefów, Tadeusza 22 Poland</p>
                </div> */}
                {/* <div className="w-full flex-col justify-start items-center gap-4">
                  <p className="font-light text-justify w-full md:pr-[50px] text-[10px] md:text-xs">I agree that my data in this form will be sent to contact@prographers.com and will be read by human beings. We will answer you as soon as possible. If you sent this form by mistake or want to remove your data, you can let us know by sending an email to contact@prographers.com. We will never send you any spam or share your data with third parties.</p>
                </div> */}
              </div>
            </section>

            {/* projects responsive  */}
            {/* <section className=" text-white bg-[#82cb8a] w-full min-h-[60vh] gap-10 md:gap-2 flex flex-col lg:flex-row items-center justify-center px-20 py-10 z-[23]">
              <div className="lg:w-[65%]">
                <p className="w-full lg:w-[70%] md:text-start text-center text-[42px] md:text-[64px] mb-[30px] mt-[30px] font-bold leading-snug">Other projects of the developer</p>
              </div>
              <div className="lg:w-[35%] flex flex-col justify-center items-center lg:items-start gap-2">
                <p className="lg:text-start text-center lg:w-[50%] text-white text-[18px]">Check out other projects on the developer's website</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="147" height="61" fill="none"><g fill="#EAEAEA" clip-path="url(#kamien_milowy_svg__a)"><path d="m13.745 39.425-9.19-4.197L0 33.34l5.844 26.332 7.901-9.99V39.425ZM20.65 30.58V.8L.605 31.353l13.77 6.289 6.275-7.062ZM28.861 37.642l13.77-6.287L22.591.804v29.778l6.27 7.06ZM29.452 49.632l7.912 10.001L43.2 33.34l-4.119 1.708-9.629 4.395v10.189ZM15.659 50.318l-7.383 9.334-.764 1.148h28.302l-.321-.482-7.91-10H15.659Z"></path></g><path fill="#fff" d="m67.232 43.032-9.528-7.224V54h3.72V43.224l5.808 4.2 5.808-4.2V54h3.72V35.808l-9.528 7.224ZM81.813 39.744c1.152 0 2.04-.888 2.04-1.944 0-.984-.888-1.872-2.04-1.872-1.056 0-1.968.912-1.968 1.872 0 1.056.912 1.944 1.968 1.944Zm1.728 2.136h-3.408V54h3.408V41.88ZM86.426 36.12V54h3.408V36.12h-3.408ZM98.502 41.616c-3.48 0-6.288 2.832-6.288 6.336 0 3.456 2.808 6.312 6.288 6.312 3.48 0 6.384-2.856 6.384-6.312 0-3.504-2.904-6.336-6.384-6.336Zm0 9.264c-1.56 0-2.832-1.2-2.832-2.928 0-1.704 1.272-2.928 2.832-2.928 1.656 0 2.904 1.224 2.904 2.928 0 1.728-1.248 2.928-2.904 2.928ZM117.382 47.688l-2.784-5.808h-3.264l1.632 3.48-1.104 2.352-2.904-5.832h-3.768l6.576 12.432 2.736-5.712 2.736 5.712 6.024-12.432h-3.336l-2.544 5.808ZM128.907 52.848l-3.24 6.936h3.528l8.328-17.904h-3.384l-3.432 7.512-3.504-7.512h-3.744l5.448 10.968ZM61.424 10.12h-3.72V28h3.72v-4.728l1.992-1.992L70.112 28h5.016l-9.072-9.096 8.784-8.784h-4.968l-8.448 8.448V10.12ZM84.057 15.88v.84c-.528-.576-1.872-1.104-2.952-1.104-3.24 0-5.952 2.832-5.952 6.336 0 3.456 2.64 6.312 5.952 6.312 1.104 0 2.424-.432 2.952-1.128V28h3.408V15.88h-3.408Zm-2.616 9c-1.56 0-2.832-1.2-2.832-2.928 0-1.704 1.272-2.928 2.832-2.928 1.584 0 2.76 1.224 2.76 2.928 0 1.728-1.176 2.928-2.76 2.928ZM102.172 21.952c0-1.608 1.128-2.928 2.616-2.928 1.368 0 2.496 1.08 2.496 2.928V28h3.384v-6.048c0-3.504-1.8-6.336-5.52-6.336-1.248 0-3.168.384-4.32 1.92-.72-1.104-2.328-1.92-4.104-1.92-1.056 0-2.424.432-2.976 1.104v-.84H90.34V28h3.408v-6.048c0-1.608 1.128-2.928 2.4-2.928 1.536 0 2.616.84 2.616 2.928V28h3.408v-6.048ZM115.07 13.744c1.152 0 2.04-.888 2.04-1.944 0-.984-.888-1.872-2.04-1.872-1.056 0-1.968.912-1.968 1.872 0 1.056.912 1.944 1.968 1.944Zm1.728 2.136h-3.408V28h3.408V15.88ZM128.371 23.656c-.552.864-1.584 1.224-2.616 1.224-.36 0-.696-.024-1.008-.144l6.768-4.848c-.744-2.256-3.048-4.272-6.048-4.272-3.48 0-6.288 2.832-6.288 6.336 0 3.456 2.928 6.312 6.576 6.312 2.16 0 4.296-.984 5.328-2.52l-2.712-2.088Zm-5.736-1.704c0-1.704 1.272-2.928 2.832-2.928.648 0 1.2.216 1.68.576l-4.416 3.144a2.757 2.757 0 0 1-.096-.792ZM140.285 9.76l-2.832 4.464h3.192l1.896-2.856-2.256-1.608Zm5.64 12.192c0-3.504-2.304-6.336-5.616-6.336-1.104 0-2.52.336-3.192 1.104v-.84h-3.408V28h3.408v-6.048c0-1.944 1.392-2.928 2.904-2.928 1.392 0 2.52.984 2.52 2.928V28h3.384v-6.048Z"></path><defs><clipPath id="kamien_milowy_svg__a"><path fill="#fff" d="M0 .8h43.2v60H0z"></path></clipPath></defs></svg>
              </div>
            </section> */}

            <footer className="text-black h-[40vh] md:h-[30vh] p-5 bg-white gap-2 w-full flex flex-row justify-center items-center z-[23]">

              <div className="md:w-[30%] w-[50%] flex flex-col justify-between items-start h-full">
                <div className="flex flex-col justify-start items-center">
                  <div className='text-black'>
                    <p>Reign</p>
                    <p className='font-semibold'>Skyrise Group</p>
                  </div>
                </div>

                <div className="md:hidden block">
                  <Link to="#appartments" className="uppercase mb-[10px] font-light cursor-pointer hover:underline text-sm">Apartments</Link>
                  <Link to="#map" className="uppercase mb-[10px] font-light cursor-pointer hover:underline text-sm">Map</Link>
                  <Link to="#gallery" className="uppercase font-light cursor-pointer hover:underline text-sm">Gallery</Link>
                </div>

                <p className="uppercase font-light text-sm">@2024 Tuvneet</p>
              </div>

              <div className="hidden md:w-[30%] md:flex flex-col justify-center items-center">
                <Link to="#appartments" className="uppercase mb-[20px] font-light cursor-pointer hover:underline text-sm">Apartments</Link>
                <Link to="#map" className="uppercase mb-[20px] font-light cursor-pointer hover:underline text-sm">Map</Link>
                <Link to="#gallery" className="uppercase mb-[20px] font-light cursor-pointer hover:underline text-sm">Gallery</Link>
              </div>

              <div className="md:w-[30%] w-[50%] flex flex-col justify-between items-end h-full">
                <div className="flex flex-row gap-2 justify-end items-center">

                  <div className="rounded-full bg-transparent border-black border-[1px] flex flex-col justify-center items-center p-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
                  </div>

                  <div className="rounded-full bg-transparent border-black border-[1px] flex flex-col justify-center items-center p-3">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg>
                  </div>

                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="font-light text-sm">Created By</p>
                  <img className="w-[32px] h-[32px]" src={logo} alt="" />
                </div>
              </div>

            </footer>
          </div>

        </>)
      }
      {
        isLoading && (<>
          <div className={`fixed top-0 transition-all ease-in-out delay-200 left-0 w-screen h-full flex justify-center items-center bg-black z-[1000] ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="\1.mp4" type="video/mp4" />
            </video>
            {isLoading && (
              <>
                <h1 className="text-white w-full absolute text-[8vw] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] capitalize font-extrabold top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">Reign</h1>
                <h1 className="text-white absolute text-[5vw] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] capitalize font-light top-[40%] md:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">Multi Family Complex</h1>
              </>
            )}
          </div>
        </>)
      }
    </div >
  )
}

export default LandingPage
