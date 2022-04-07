import { useState } from "react";
import { register, login, updateSettings } from "@/utils/actions";

export default function Dillali() {

    const [state, setState] = useState({
        email:"",
        contact_name: "",
        referral_code:"",
        business_name: "",
        business_phone:"",
        business_address: '',
    })

    const handleChange = (e) =>{
        setState({...state, [e.target.name]: e.target.value})
    }


    const process = (e) => {
        e.preventDefault();
        register(state, () => {

            login(state.email, (data) => {
                eval('window.tokens='+data.tokens);
                const access_token = tokens.access;

                updateSettings({settings: state, access_token}, (res) => {
                    console.log(res);
                    alert("Registration Successfull");
                })

            }); 
        })
    }

    return(
        <div className="p-10">
            <form onSubmit={process} className="flex flex-col gap-5 p-5 bg-white max-w-[500px] mx-auto">
                <input type="email" className="px-5 py-2 rounded border text-black " name="email" placeholder="email" value={state.email} onChange={handleChange} />
                <input className="px-5 py-2 rounded border text-black " name="contact_name" placeholder="contact_name" value={state.contact_name} onChange={handleChange} />
                <input className="px-5 py-2 rounded border text-black " name="referral_code" placeholder="referral_code" value={state.referral_code} onChange={handleChange} />
                <input className="px-5 py-2 rounded border text-black " name="business_phone" placeholder="phone number" value={state.business_phone} onChange={handleChange} />
                <input className="px-5 py-2 rounded border text-black " name="business_name" placeholder="business_name" value={state.business_name} onChange={handleChange} />
                <textarea className="px-5 py-2 rounded border text-black " name="business_address" placeholder="business_address" value={state.business_address} onChange={handleChange} />
                <button className="bg-green-500 py-3 rounded">Submit</button>
            </form>
        </div>
    )
}
