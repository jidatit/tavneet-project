import React, { useState } from 'react'
import PropertyCard from './Cards/PropertyCard';

const dummyData = [
    { type: 'house', houseNumber: '38A', plotArea: 900, houseArea: 147, price: 250000, sold: true },
    { type: 'apartment', houseNumber: '12B', plotArea: 600, houseArea: 90, price: 180000, sold: false },
    { type: 'villa', houseNumber: '5C', plotArea: 1200, houseArea: 300, price: 450000, sold: true },
    { type: 'apartment', houseNumber: '22D', plotArea: 700, houseArea: 110, price: 200000, sold: false },
  ];

const Segments = ({ sectionHeight }) => {
    return (
        <>
            <section className={` text-white w-full min-h-screen ${sectionHeight ? 'h-[700px]' : 'h-fit'} flex items-center justify-start px-5 md:px-20`}>
                <div className=" w-full md:max-w-[50%] flex flex-col gap-6">
                    <div className=" flex flex-col gap-4">
                        <h2 className="text-[42px] md:block hidden md:text-[64px] font-bold leading-snug">Select your house</h2>
                        <h2 className="text-[42px] md:hidden block md:text-[64px] font-bold leading-snug">Choose your house</h2>

                        {/* <div className=" w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.3)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400 ">
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
                        </div> */}

                        {dummyData.map((property, index) => (
                            <PropertyCard key={index} {...property} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Segments