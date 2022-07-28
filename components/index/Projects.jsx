import {Button} from "@/components/Form";
import Wrapper from "@/components/Wrapper";
import {ImGithub} from 'react-icons/im'
import {HiOutlineExternalLink} from 'react-icons/hi'

export default function Projects(){
    return(
        <Wrapper className="" title='Some of my works' id='projects'>
            <div className="max-w-[1000px] mx-auto">
                {projects.map(project => (
                  <div className="relative mb-10">
                      <div className="bg-slate-800 rounded-lg w-2/3 h-96" />
                      <div className="absolute right-0 w-2/3 top-0 h-full p-10 flex flex-col items-end gap-5">
                        
                        <div className="flex flex-col gap-3">
                          <h6>Featured Project</h6>
                          <h5 className="text-2xl">Build a Spotify Connected App</h5>
                        </div>

                        <div className="px-8 text-[15px] py-7 rounded bg-slate-700">
                          <p className=''>
                            A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                          </p>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center'>
                              {['laravel', 'tailwindcss', 'react', 'mysql'].map(item => (
                              <p key={item} className='px-3 py-1.5 rounded text-xs uppercase tracking-wide'>{item}</p>
                            ))}
                          </div>

                        <div className="flex items-center gap-5 text-2xl">
                            <a href=""><HiOutlineExternalLink /></a>
                            <a href=""><ImGithub /></a>
                          </div>

                      </div>
                  </div>
                ))}
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