import {Button} from "@/components/Form";
import Wrapper from "@/components/Wrapper";
import {ImGithub} from 'react-icons/im'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {GiExpand} from 'react-icons/gi'

export default function Projects(){
    return(
        <Wrapper className="" title='My Works'>
            <div className="grid md:grid-cols-3 gap-5">
                {projects.map(project => (
                    <div key={project.id} className="relative shadow p-5 rounded-xl h-72 
                        bg-black/70 cursor-pointer text-slate-300 
                        hover:bg-green-200 hover:text-slate-700">
                        <div className="absolute bottom-5 right-5 text-2xl flex items-center gap-5">
                            <a href="#" className="hover:scale-125"><ImGithub /></a>
                            <a href='#' className="hover:scale-125"><HiOutlineExternalLink /></a>
                            <a href="#" className="hover:scale-125"><GiExpand /></a>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center h-full">
                            <h1 className="uppercase text-xl font-bold">{project.name}</h1>
                        </div>
                    </div>
                ) )}
            </div>
        </Wrapper>
    )
}

const projects = [
  {
    id: 1,
    name: "Safona Media",
    url: "#",
    description: "",
    thumbnail: "",
  },
  {
    id: 2,
    name: "PQ Writer",
    url: "#",
    description: "",
    thumbnail: "",
  },
  {
    id: 3,
    name: "Class.NG",
    url: "#",
    description: "",
    thumbnail: "",
  },
  {
    id: 4,
    name: "Code.NG",
    url: "#",
    description: "",
    thumbnail: "",
  },
];