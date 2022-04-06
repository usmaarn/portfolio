import { useState } from "react";
import {industries, company_sizes, company_descriptions, company_uses} from "@/components/dillali";

export default function Dillali() {

    const [settings, setSettings] = useState({
        contact_name: "",
        business_phone:"",
        agreement:true,
        referral_code:"",
        industry:"",
        company_use:"",
        company_size:"1-3",
        company_description:"",
        national_number:"",
        business_name: "",
        business_phone:"",
        business_address: '',
        country:"Nigeria"
    })

    const [data, setData] = useState({
        email:"",
        password:"12345678",
        onboarding_status:true,
    });


    const changeData = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const changeSettings = (e) =>{
        setSettings({...settings, [e.target.name]: e.target.value})
    }


    const process = (e) => {
        e.preventDefault();
        
    }

    return(
        <div className="p-10">
            <form onSubmit={process} className="flex flex-col gap-5 p-5 bg-white max-w-[500px] mx-auto">
                <input type="email" className="px-5 py-2 rounded border text-black " name="email" placeholder="email" value={data.email} onChange={changeData} />
                <input className="px-5 py-2 rounded border text-black " name="contact_name" placeholder="contact_name" value={settings.contact_name} onChange={changeSettings} />
                <input className="px-5 py-2 rounded border text-black " name="referral_code" placeholder="referral_code" value={settings.referral_code} onChange={changeSettings} />
                <input className="px-5 py-2 rounded border text-black " name="national_number" placeholder="national_number" value={settings.national_number} onChange={changeSettings} />
                <input className="px-5 py-2 rounded border text-black " name="business_name" placeholder="business_name" value={settings.business_name} onChange={changeSettings} />
                <textarea className="px-5 py-2 rounded border text-black " name="business_address" placeholder="business_address" value={settings.business_address} onChange={changeSettings} />
                <button className="bg-green-500 py-3 rounded">Submit</button>
            </form>
        </div>
    )
}
