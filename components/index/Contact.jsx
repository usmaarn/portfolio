

import Wrapper from "@/components/Wrapper";
import { AiOutlineWhatsApp, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Button, Input, Textarea } from "@/components/Form";
import SocialIcon from "@/components/SocialIcon";

export default function Contact(props){
    return(
        <Wrapper title='Get In Touch' id='contact'>
            <div className="md:grid grid-cols-2 gap-20">
                <div className="mb-5 flex flex-col gap-2">
                    <SocialIcon link='https://wa.me/2349077022461' label='09077022461' icon={<AiOutlineWhatsApp />}/>
                    <SocialIcon link='tel:09077022461' label='09077022461' icon={<AiOutlinePhone />}/>
                    <SocialIcon link='mailto:usmaarn@gmail.com' label='usmaarn@gmail.com' icon={<AiOutlineMail />} />
                </div>
                
                <div>
                    <p className="text-center my-2 text-slate-500 md:hidden">or send me a message</p>
                    <form action="" className="text-slate-500">
                        <Input placeholder='Full Name' />
                        <Input type='email' placeholder='Email Address' />
                        <Textarea placeholder='Message' className='resize-none h-36' />
                        <Button text='Send Message' />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}