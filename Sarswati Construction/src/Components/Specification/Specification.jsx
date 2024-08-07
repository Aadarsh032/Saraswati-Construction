import React, { useEffect } from 'react'
import Specificfeature from './Specificfeature/Specificfeature'
import specification1 from '../../assets/specification1.png'
import specification2 from '../../assets/specification2.png'

import AnimateLeftRight from '../Animate/AnimateLeftRight/AnimateLeftRight'
import AnimateUpDown from '../Animate/AnimateUpDown/AnimateUpDown'


let specification_details = {

    structure: {
        title: "STRUCTURE",
        details: "RCC framed structure. Seismic reinforced design. Anti termite treatment exclusive in all foundation & plinth."
    },
    floors: {
        title: "FLOORS",
        details: "Vitrified / Ceramic floor tiles in entire flat. (Make size & quality as per discretion of the builder)"
    },
    walls: {
        title: "WALLS",
        details: "10 inch thick external & 5 inch thick internal partition walls. All internal walls & ceiling will have plaster & plaster of pairs finish"
    },
    toilets: {
        title: "TOILETS",
        details: "Flooring in ceramic tiles & dado in theme based ceramic tiles upto 7’0” height. Corner / Full basin will be provided in all toilets. Pipes for hot & cold water provided in all toilets. (Geysers not Provided)"
    },
    doors: {
        title: "DOORS",
        details: "Wooden flush doors with modern heavy duty locking for main door and cylindrical locks in all bedrooms and toilet doors"
    },
    electrification: {
        title: "WIRING",
        details: "Concealed wiring with standard makes modular fitting & fixtures. Fan regulators, provision for AC points in all bedrooms, living & dining rooms & TV points in drawing room & Master bedroom shall be provided"
    },
    windows: {
        title: "WINDOWS",
        details: "Three track sliding aluminum windows with two glazed and one track mosquito net provision"
    },
    water_arrangements: {
        title: "WATER",
        details: "Connection from deep tube-well to overhead tank connection with electric pump. "
    },
    kitchen: {
        title: "KITCHEN",
        details: "Granite top kitchen platform, ISI marked stainless steel sink. Pipeline for hot and cold water provision."
    },
    parking: {
        title: "PARKING",
        details: "Floor Checkered Tiles / interlocking pavers / Industrial coating."
    },
    water_arrangements_sanitary: {
        title: "WATER",
        details: "All C.P. or brass fitting of standard ISI mark. White glazed vitreous sanitary ware."
    },
    staircase: {
        title: "STAIRCASE",
        details: "Lobby Area, Tread, Riser & Skirting to be of Mable/ Granite. Stainless Steel railing along the staircase"
    },
}

const Specification = () => {



    return (

        <>
            <div className='specification-top  flex py-10 px-10 items-center justify-evenly max-lg:flex-col max-lg:py-0 max-lg:pt-10 max-sm:px-1 '>

                <div className='specification-top left flex flex-col gap-5 w-[374px] max-lg:w-[100%] '>
                    <p className='font-bold text-[16px] text-black max-lg:text-center  max-lg:text-2xl ' >"The pinnacle of success is where you find the keys to the kingdom"</p>
                    <h1 className='font-bold text-5xl text-[#DF7F8E] max-2xl:text-4xl max-lg:text-center'>Specifications</h1>
                    <AnimateLeftRight direction='left'>
                        <img src={specification1} className='w-[374px] h-[182px] max-2xl:w-[300px] max-2xl:h-[150px]  max-lg:m-auto ' alt="" />
                    </AnimateLeftRight>
                </div>
                <div className='specification-bottom-list-box  flex flex-row gap-10 max-lg:w-[95%] max-lg:m-auto max-lg:justify-center max-lg:gap-8 max-md:flex-col max-md:w-fit max-md:justify-center max-sm:pl-0 '>
                    <div className='specification-top middle'>
                        <Specificfeature title={specification_details.structure.title} details={specification_details.structure.details} />
                        <Specificfeature title={specification_details.walls.title} details={specification_details.walls.details} />
                        <Specificfeature title={specification_details.doors.title} details={specification_details.doors.details} />
                    </div>
                    <div className='specification-top right'>
                        <Specificfeature title={specification_details.floors.title} details={specification_details.floors.details} />4
                        <Specificfeature title={specification_details.toilets.title} details={specification_details.toilets.details} />
                        <Specificfeature title={specification_details.electrification.title} details={specification_details.electrification.details} />
                    </div>
                </div>
            </div>

            <div className='specification-bottom flex py-10 px-10 items-center justify-evenly  max-lg:flex-col max-lg:py-0 max-sm:px-1 max-sm:pt-5 '>
                <div className=' specification-bottom-list-box flex flex-row gap-10 max-lg:w-[95%] max-lg:m-auto max-lg:justify-center max-lg:gap-9 max-md:flex-col max-md:w-fit max-md:justify-center   ' >
                    <div className='specification-top-left '>
                        <Specificfeature title={specification_details.windows.title} details={specification_details.windows.details} />
                        <Specificfeature title={specification_details.kitchen.title} details={specification_details.kitchen.details} />
                        <Specificfeature title={specification_details.water_arrangements_sanitary.title} details={specification_details.water_arrangements_sanitary.details} />
                    </div>

                    <div className='specification-top-middle'>
                        <Specificfeature title={specification_details.water_arrangements.title} details={specification_details.water_arrangements.details} />
                        <Specificfeature title={specification_details.parking.title} details={specification_details.parking.details} />
                        <Specificfeature title={specification_details.staircase.title} details={specification_details.staircase.details} />
                    </div>
                </div>
                <div className='specification-right '>
                    <AnimateUpDown direction='down'>
                        <img src={specification2} alt="" className='max-lg:m-auto' />
                    </AnimateUpDown>
                </div>

            </div>
        </>

    )
}

export default Specification
