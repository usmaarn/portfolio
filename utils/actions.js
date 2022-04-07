import axios from "axios";
import {industries, company_descriptions, company_uses} from "@/components/dillali";


const baseUrl = "https://api.app.dillali.com/";


//Register Function
export function register(data, callback) {
    const registerationData = {
        email: data.email,
        password: "12345678",
        setting: {
            refferal_code: data.referral_code,
            business_phone: data.business_phone,
            agreement: true,
        }
    }
    axios.post(`${baseUrl}/auth/register/`, registerationData)
        .then(res => {
            console.log(res.data);
            callback();
        })
        .catch(err => alert("Registration Failed"))
}


//Login Function
export function login(email, callback) {
    axios.post(`${baseUrl}/auth/login/`, {email, password: "12345678"})
        .then(res => callback(res.data))
        .catch(err => alert("Login Failed"))
}


//Settings Update Function
export function updateSettings({settings, access_token}, callback) {

    const data = {
        ...settings,
        country:"Nigeria",
        company_size:"1-3",
        industry: generate_random_value(industries),
        company_use: generate_random_value(company_uses),
        company_description: generate_random_value(company_descriptions),
        national_number: settings.business_phone.slice(1),
        onboarding_status: false,
    }

    const config = {
        headers: {Authorization: `Bearer ${access_token}`}
    }

    callback({data, config});

    axios.patch(`${baseUrl}/settings/`, data, config)
        .then(res => callback(res.data))
        .catch(err => alert("Settings Update Failed"))
}


function generate_random_value(array) {
    return array[Math.floor(Math.random() * array.length)]
}