import React from 'react';
import apia from './assets/apia.png'; 
import apib from './assets/apib.png'; 
import apic from './assets/apic.png'; 
import apid from './assets/apid.png'; 
import apie from './assets/apie.png'; 
import apif from './assets/apif.png'; 




const Section4 = () => {
    return (
        <div className="bg-[#F7F7F7] py-12 px-4">
            <h2 className="text-lg font-semibold text-gray-600 ml-20 mb-5">
                SOME OF THE APIS WE WORK WITH
            </h2>
            <div className="flex flex-wrap  ml-20 items-center">
                <img src={apia} alt="Shopify" className="w-32 m-4" />
                <img src={apib} alt="Stripe" className="w-32 m-4" />
                <img src={apic} alt="Workflow Max" className="w-32 m-4" />
                <img src={apid} alt="MYOB" className="w-32 m-4" />
                <img src={apie} alt="Glofox" className="w-32 m-4" />
                <img src={apif} alt="Xero" className="w-32 m-4" />
            </div>
        </div>
    );
}

export default Section4;
