import React from 'react'
import Section3content from './Section3content'
import phone from './assets/snap-phone.png'
import phonearrowleft from './assets/snap-phone-arrow-left.svg'
import phonearrowright from './assets/snap-phone-arrow-right.svg'
import ipad from './assets/rochele-mockup-ipad.png'
import ipadarrow from './assets/rochele-arrow.svg'
import tabmob from './assets/tablet_mobile.png'

const Section3 = () => {
    return (
        <>
            <div className="bg-[#F7F7F7] pt-20 md:pt-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1500">
                        <img src={phonearrowleft} alt="Left arrow" className="h-8 md:h-16 absolute left-0 transform translate-y-32 md:translate-y-96" />
                        <img src={phone} alt="Phone" className="h-80 md:h-[50rem]" />
                        <img src={phonearrowright} alt="Right arrow" className="h-8 md:h-16 absolute right-0 transform translate-y-16 md:translate-y-32" />
                    </div>
                    <Section3content
                        heading="NATIVE APP DEVELOPMENT"
                        paragraph="The team behind Snap Fitness approached us wanting to improve member retention and engagement through an app that would provide members with an enhanced gym experience. From fitness tracking, to recipes and wellness articles, the app provides members with a variety of tools to supplement their fitness journey."
                        mainblack="Creating rich user"
                        maincyan="experiences"
                        className="order-2 md:order-1"
                    />
                </div>
            </div>

            <div className="bg-[#F7F7F7] pt-20 md:pt-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center relative order-first md:order-last" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="500">
                        <img src={ipad} alt="iPad mockup" className="w-80 md:w-[80rem] pr-0 md:pr-12" />
                        <img src={ipadarrow} alt="Arrow" className="absolute -translate-y-16 md:-translate-y-24 translate-x-8 md:translate-x-16" />
                    </div>
                    <Section3content
                        heading="LEGACY MODERNISATION"
                        paragraph="The team behind Snap Fitness approached us wanting to improve member retention and engagement through an app that would provide members with an enhanced gym experience. From fitness tracking, to recipes and wellness articles, the app provides members with a variety of tools to supplement their fitness journey."
                        mainblack="Goodbye paper,"
                        maincyan="hello profit."
                        className='order-last md:order-first'
                    />
                </div>
            </div>


            <div className="bg-[#F7F7F7] pt-20 md:pt-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center relative" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1500">
                        <img src={tabmob} alt="Tablet and mobile mockup" className="-ml-24 md:-ml-52 md:w-[80rem] md:pr-12" />
                    </div>
                    <Section3content
                        heading="INTEGRATED WEB APPLICATIONS"
                        paragraph="The team behind Snap Fitness approached us wanting to improve member retention and engagement through an app that would provide members with an enhanced gym experience. From fitness tracking, to recipes and wellness articles, the app provides members with a variety of tools to supplement their fitness journey."
                        mainblack="Software built for"
                        maincyan="purpose"

                    />
                </div>
            </div>
        </>
    )
}

export default Section3;
