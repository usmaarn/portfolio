import Navbar from "@/components/Navbar";


const myskills = [
    {name: 'PHP', rate: 65, logo: 'php1.png'},
    {name: 'Mysql', rate: 70, logo: 'mysql.png'},
    {name: 'Laravel', rate: 60, logo: 'laravel.png'},
    {name: 'Python', rate: 55, logo: 'python.png'},
    {name: 'Django', rate: 55, logo: 'django.png'},
    {name: 'HTML', rate: 80, logo: 'html.png'},
    {name: 'CSS', rate: 70, logo: 'css.png'},
    {name: 'Javascript', rate: 50, logo: 'js.png'},
    {name: 'VueJS', rate: 70, logo: 'vuejs.png'},
    {name: 'NuxtJS', rate: 75, logo: 'nuxt.png'},
    {name: 'GoLand', rate: 30, logo: 'go.png'},
    {name: 'NextJS', rate: 65, logo: 'nextjs.png'},
    {name: 'React', rate: 70, logo: 'react.png'},
    {name: 'React Native', rate: 50, logo: 'react.png'},
];

export default function profile() {
  return (
    <div className="md:grid grid-cols-5">

        <div className="col-span-3">

            <div className="md:px-16">
                <Navbar />
            </div>

            <div className="p-6 md:px-16 lg:px-20">

                <div>
                    <h1 className="text-2xl font-medium uppercase ">Who Am I</h1>
                    <p className="text-justify mt-2">
                        Culpa veniam veniam cillum reprehenderit cillum eiusmod Lorem est ut. Magna duis duis sit dolor. Pariatur pariatur non est anim aliquip ipsum adipisicing velit aliqua et deserunt eiusmod. Cupidatat do est consectetur pariatur amet amet ipsum. Culpa dolore cillum irure amet velit pariatur commodo est excepteur qui. Adipisicing officia nulla excepteur deserunt. Nisi voluptate pariatur aliqua quis deserunt qui qui labore magna et culpa.
                        Culpa veniam veniam cillum reprehenderit cillum eiusmod Lorem est ut. Magna duis duis sit dolor. Pariatur pariatur non est anim aliquip ipsum adipisicing velit aliqua et deserunt eiusmod. Cupidatat do est consectetur pariatur amet amet ipsum. Culpa dolore cillum irure amet velit pariatur commodo est excepteur qui. Adipisicing officia nulla excepteur deserunt. Nisi voluptate pariatur aliqua quis deserunt qui qui labore magna et culpa.
                    </p>
                </div>

                <div className="mt-16">
                    <h1 className="text-2xl font-medium uppercase">Skills</h1>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-10 mt-5">
                        {myskills.map(skill => (
                            <div key={skill.name} title={skill.name} className="flex flex-col items-center ">
                                <div className="w-16 h-16 mb-2 flex items-center justify-center">
                                    <img src={`/logos/${skill.logo}`} className="w-full" />
                                </div>
                                <h3 className='uppercase text-sm font-bold tracking-wider'>{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <h1 className="text-2xl font-medium uppercase">Skill Levels</h1>
                    <div className="flex flex-col gap-5  mt-5">
                        {myskills.map(skill => (
                            <div class="border border-gray-700/25  px-2 py-1">
                                <label class="uppercase text-sm font-bold">{skill.name}</label>
                                <div class="bg-gray-800/25 h-5 relative">
                                    <div className='h-full bg-gray-600' style={{width: `${skill.rate}%`}}>
                                        <span className="absolute left-1/2 font-semibold text-sm">
                                            {skill.rate}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            


        </div>
        <div className="col-span-2">
            <div className="sticky top-0 bg-black hidden md:block md:h-screen">
                <img className='relative -z-0 h-full' src='/pics.png' />
            </div>
        </div>
    </div>
  )
}
