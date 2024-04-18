import React, { useState } from 'react';
import weblogo from "../../assets/web.svg"
import Grow from '@mui/material/Grow';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [lang, setlang] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl">
        <div className="max-w-[1390px] mx-auto w-full flex items-center justify-between p-4">

          {/* Icon */}
          <div className="max-w-[125px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 99 34" height="43" alt="Osiedle Malinowskiego" width="125" className="Footerstyles__LogoProject-sc-5uyeej-3 hVNTQc"><path fill="#fff" d="M8.314 9.136c0 .91-.162 1.7-.486 2.374-.324.67-.77 1.19-1.338 1.56-.565.366-1.216.55-1.952.55-.735 0-1.387-.184-1.956-.55-.565-.37-1.01-.89-1.333-1.56-.321-.673-.482-1.464-.482-2.374 0-.909.16-1.698.482-2.369.323-.673.77-1.193 1.338-1.56.568-.369 1.218-.554 1.951-.554.736 0 1.387.185 1.952.554.568.367 1.014.887 1.338 1.56.324.67.486 1.46.486 2.37Zm-.776 0c0-.78-.13-1.45-.392-2.007-.261-.56-.618-.987-1.07-1.282a2.748 2.748 0 0 0-1.538-.444 2.74 2.74 0 0 0-1.534.444c-.451.295-.81.721-1.074 1.278-.261.557-.392 1.227-.392 2.011 0 .782.131 1.45.392 2.008.262.556.618.984 1.07 1.282.452.296.964.443 1.538.443.574 0 1.087-.147 1.539-.443.454-.295.812-.722 1.074-1.278.26-.56.39-1.23.387-2.012Zm6.842-2.181a1.586 1.586 0 0 0-.644-1.16c-.38-.286-.86-.43-1.436-.43-.406 0-.764.07-1.074.209a1.76 1.76 0 0 0-.724.58c-.173.244-.26.522-.26.835 0 .23.05.431.15.605.099.173.232.322.4.447.17.122.358.227.562.316.208.088.416.161.627.221l.92.264c.279.077.557.175.835.294.279.12.533.27.763.452.233.18.42.4.558.66.142.26.213.57.213.934 0 .466-.12.885-.362 1.257-.241.372-.588.668-1.04.886-.451.216-.992.324-1.623.324-.594 0-1.11-.098-1.547-.294a2.514 2.514 0 0 1-1.031-.822c-.25-.35-.39-.755-.422-1.215h.818c.028.344.142.635.34.874.2.238.458.42.777.545a2.95 2.95 0 0 0 1.065.184c.435 0 .82-.073 1.159-.218.34-.148.608-.352.801-.614.196-.264.294-.57.294-.92 0-.295-.077-.543-.23-.741a1.782 1.782 0 0 0-.643-.508 5.687 5.687 0 0 0-.95-.362l-1.045-.307c-.684-.204-1.216-.487-1.594-.848-.377-.36-.566-.82-.566-1.38 0-.469.125-.88.375-1.236a2.52 2.52 0 0 1 1.022-.835 3.393 3.393 0 0 1 1.454-.303c.542 0 1.022.1 1.44.298.418.2.748.473.993.823.247.346.379.741.396 1.185h-.771Zm3.005-2.182V13.5h-.797V4.773h.797Zm1.72 8.727V4.773h5.063v.716h-4.266v3.285H23.9v.716h-3.997v3.294h4.35v.716h-5.147Zm9.082 0H25.63V4.773h2.71c.833 0 1.544.173 2.135.52a3.407 3.407 0 0 1 1.364 1.491c.315.648.473 1.425.473 2.331 0 .915-.162 1.7-.486 2.357a3.418 3.418 0 0 1-1.406 1.504c-.614.35-1.358.524-2.233.524Zm-1.76-.716h1.713c.75 0 1.378-.148 1.884-.443a2.77 2.77 0 0 0 1.137-1.266c.253-.548.38-1.201.38-1.96-.003-.753-.128-1.4-.375-1.943a2.712 2.712 0 0 0-1.091-1.249c-.48-.29-1.074-.434-1.781-.434h-1.867v7.295Zm7.217.716V4.773h.796v8.011h4.16v.716h-4.956Zm6.15 0V4.773h5.062v.716H40.59v3.285h3.997v.716H40.59v3.294h4.351v.716h-5.148ZM.759 21.773h2.275l2.404 5.863h.102l2.403-5.863h2.276V30.5h-1.79v-5.68h-.072l-2.259 5.637H4.879l-2.258-5.659h-.073V30.5H.758v-8.727ZM12.643 30.5h-1.977l3.013-8.727h2.378l3.008 8.727h-1.977l-2.186-6.733h-.068l-2.19 6.733Zm-.123-3.43h4.67v1.44h-4.67v-1.44Zm6.996 3.43v-8.727h1.845v7.206h3.741V30.5h-5.586Zm8.053-8.727V30.5h-1.845v-8.727h1.845Zm8.218 0V30.5h-1.594l-3.796-5.493h-.064V30.5h-1.846v-8.727h1.62l3.767 5.488h.076v-5.488h1.837Zm8.944 4.363c0 .952-.18 1.762-.54 2.43a3.752 3.752 0 0 1-1.467 1.53c-.616.349-1.31.523-2.08.523-.775 0-1.47-.176-2.087-.528-.617-.352-1.104-.862-1.462-1.53-.358-.668-.537-1.476-.537-2.425 0-.951.18-1.761.537-2.429.358-.667.845-1.176 1.462-1.525.616-.352 1.312-.529 2.088-.529.77 0 1.463.177 2.08.529.619.35 1.107.858 1.465 1.525.361.668.541 1.478.541 2.43Zm-1.87 0c0-.616-.092-1.136-.277-1.56-.182-.423-.44-.744-.772-.962a2.076 2.076 0 0 0-1.167-.329c-.446 0-.835.11-1.168.329-.332.218-.59.54-.775.963-.182.423-.273.943-.273 1.56 0 .616.09 1.136.273 1.559.184.423.443.744.775.963.333.219.722.328 1.168.328.446 0 .835-.11 1.167-.328.333-.219.59-.54.772-.963.184-.423.277-.943.277-1.56Zm4.274 4.364-2.497-8.727h2.015l1.445 6.064h.072l1.594-6.064h1.726l1.59 6.076h.076l1.445-6.076h2.015L54.12 30.5h-1.798l-1.662-5.706h-.068L48.933 30.5h-1.798Zm14.521-6.217a1.079 1.079 0 0 0-.439-.802c-.258-.19-.61-.285-1.052-.285-.301 0-.556.043-.763.128a1.073 1.073 0 0 0-.477.345.831.831 0 0 0-.162.503.718.718 0 0 0 .098.409c.074.116.174.217.302.303.128.082.276.154.444.217.167.06.346.11.536.153l.785.188c.38.085.73.199 1.048.34.318.143.593.317.827.525.232.207.413.452.54.733.131.281.198.604.201.967-.003.534-.14.997-.41 1.39-.266.389-.653.691-1.158.907-.503.213-1.11.32-1.82.32-.704 0-1.318-.108-1.84-.324-.52-.216-.927-.536-1.22-.96-.29-.425-.441-.952-.455-1.58h1.785c.02.293.104.537.252.733.15.193.35.34.6.439.253.096.539.145.857.145.312 0 .584-.046.814-.137.233-.09.413-.217.541-.379a.876.876 0 0 0 .192-.558.725.725 0 0 0-.175-.494 1.325 1.325 0 0 0-.503-.341 5.12 5.12 0 0 0-.805-.256l-.95-.239c-.736-.179-1.317-.458-1.743-.84-.426-.38-.638-.893-.635-1.537-.003-.529.137-.99.421-1.386.288-.394.68-.703 1.18-.924.5-.222 1.07-.333 1.706-.333.647 0 1.213.111 1.696.333.485.221.863.53 1.133.924.27.395.41.853.418 1.373h-1.769Zm2.53 6.217v-8.727h1.844v3.848h.115l3.14-3.848h2.213l-3.24 3.907 3.278 4.82h-2.207l-2.391-3.588-.908 1.108v2.48h-1.845Zm9.518-8.727V30.5h-1.845v-8.727h1.845Zm.918 8.727v-8.727h5.88v1.521h-4.035v2.08H80.2v1.52h-3.733v2.085h4.052V30.5h-5.897Zm12.534-5.906a1.916 1.916 0 0 0-.251-.55 1.702 1.702 0 0 0-.925-.669 2.233 2.233 0 0 0-.652-.09c-.446 0-.838.111-1.176.333-.335.222-.597.544-.784.967-.188.42-.281.935-.281 1.543 0 .608.092 1.125.277 1.551.184.426.446.751.784.976.338.221.737.332 1.197.332.418 0 .775-.074 1.07-.221.298-.15.525-.363.682-.635.159-.273.238-.596.238-.968l.375.056h-2.25v-1.39h3.652v1.1c0 .767-.162 1.426-.485 1.977-.324.549-.77.972-1.338 1.27-.569.296-1.22.443-1.952.443-.818 0-1.537-.18-2.157-.54a3.755 3.755 0 0 1-1.448-1.548c-.344-.67-.516-1.466-.516-2.386 0-.707.102-1.338.307-1.892a4.042 4.042 0 0 1 .87-1.415c.371-.386.805-.68 1.299-.882a4.211 4.211 0 0 1 1.606-.303c.495 0 .955.073 1.381.218.426.142.804.344 1.134.605.332.261.603.572.814.933.21.358.345.753.404 1.185h-1.875Zm10.762 1.542c0 .952-.18 1.762-.54 2.43a3.753 3.753 0 0 1-1.467 1.53c-.616.349-1.31.523-2.08.523-.775 0-1.471-.176-2.088-.528-.616-.352-1.103-.862-1.461-1.53-.358-.668-.537-1.476-.537-2.425 0-.951.179-1.761.537-2.429.358-.667.845-1.176 1.462-1.525.616-.352 1.312-.529 2.088-.529.77 0 1.463.177 2.08.529.618.35 1.107.858 1.465 1.525.36.668.541 1.478.541 2.43Zm-1.87 0c0-.616-.093-1.136-.278-1.56-.181-.423-.438-.744-.77-.962a2.076 2.076 0 0 0-1.168-.329c-.446 0-.836.11-1.168.329-.332.218-.59.54-.776.963-.181.423-.272.943-.272 1.56 0 .616.09 1.136.272 1.559.185.423.444.744.776.963.332.219.722.328 1.168.328.446 0 .835-.11 1.167-.328.333-.219.59-.54.772-.963.184-.423.276-.943.276-1.56Z"></path></svg>
          </div>

          {/* Hamburger menu icon */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <div className='flex flex-col justify-center items-center px-2 py-2 rounded-full bg-white'>
                <svg className={`h-6 w-6 fill-current ${showMenu ? 'hidden' : ''}`} viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          {/* Menu items */}
          <div className="hidden lg:flex gap-6 uppercase text-white">
            <div className="cursor-pointer group">
              <p className="mb-1 px-2">Segments</p>
              <div className="w-full h-[1px] bg-white group-hover:block hidden"></div>
            </div>
            <div className="cursor-pointer group">
              <p className="mb-1 px-2">Map</p>
              <div className="w-full h-[1px] bg-white group-hover:block hidden"></div>
            </div>
            <div className="cursor-pointer group">
              <p className="mb-1 px-2">Technology</p>
              <div className="w-full h-[1px] bg-white group-hover:block hidden"></div>
            </div>
          </div>
          {/* Contact button */}
          <div className='hidden lg:block'>

            <div className="relative hidden mr-2 lg:inline-block">
              <button onClick={() => setlang(!lang)} className="text-white bg-transparent border-[2px] py-3 px-5 flex flex-row justify-center items-center gap-1 shadow-md rounded-full">ENG <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="styled__DropdownIcon-sc-1tnrbxg-1 dGFIsG" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></button>

              {lang && (<div className='absolute p-2 top-[60px] left-0 w-[163px] min-h-[200px] rounded-3xl bg-white'>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
              </div>)}

            </div>

            <div className="hidden lg:inline-block">
              <button className="text-black bg-white py-3 px-5 shadow-md rounded-full">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* small header */}
      <Grow
        in={showMenu}
        style={{ transformOrigin: 'right top' }}
        {...(showMenu ? {  } : {})}
      >
        <div className={`pop z-50 transition-all duration-500 fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto ${showMenu ? ' opacity-100' : 'opacity-0'}`}>
          <div className="max-w-[1350px] mx-auto flex gap-5 flex-col items-center justify-center p-4">

            <div className='w-full flex flex-row justify-between items-center'>
              <img className='w-[125px] h-[43px]' src={weblogo} alt="" />
              <button onClick={toggleMenu} className="text-white bg-black py-4 px-4 shadow-md rounded-full">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
              </button>
            </div>

            <div className='w-full flex mt-[30px] flex-row justify-end gap-3 items-center'>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-2 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>ENG</p>
              </div>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-4 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>PL</p>
              </div>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-3 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>ESP</p>
              </div>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-4 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>PT</p>
              </div>
            </div>

            <div className='w-full flex flex-col justify-center gap-0 items-center'>
              <div className='w-full flex flex-col justify-center items-start border-t-[2px] border-b-[2px] border-[#e5e7eb] py-3 '>
                <h1 className='text-[28px] text-black text-start font-extrabold'>Segments</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-start py-3 '>
                <h1 className='text-[28px] text-black text-start font-extrabold'>Map</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-start border-t-[2px] border-b-[2px] border-[#e5e7eb] py-3 '>
                <h1 className='text-[28px] text-black text-start font-extrabold'>Technology</h1>
              </div>
            </div>

            <div className='w-full flex mt-[30px] flex-row gap-3 justify-center items-center'>
              <button className='w-[70%] uppercase rounded-[30px] text-[14px] font-semibold text-white bg-[#333333] py-3'>contact us</button>

              <div className="rounded-full bg-transparent border-black border-[1px] flex flex-col justify-center items-center p-3">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
              </div>

              <div className="rounded-full bg-transparent border-black border-[1px] flex flex-col justify-center items-center p-3">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg>
              </div>

            </div>

          </div>
        </div>
      </Grow>
    </>
  );
}

export default Header;




