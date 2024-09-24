"use client";

import Link from 'next/link';
import { otherProjects } from '../../utils/data/otherprojects'; 
import "../../globals.css";
import { useParams } from 'next/navigation';

export default function ProjectPages(){
    const params = useParams();

    // Check if params exist and params.name is available
    if (!params?.name) {
        return <p className="text-center text-white">Project not found</p>;
    }

    // Find the project by name (string comparison)
    const project = otherProjects.find((item) => item.name === params.name);

    // Handle case if no project is found
    if (!project) {
        return <p className="text-center text-white">Project not found</p>;
    }
    return(
        <main className="formatPage">
            <section>
                <p className='text-3xl font-bold '>{project.name.replace('-', ' ')}</p>
                <section>
                    <picture>
                        <img src={project.imgUrl} alt="" className="rounded-md p-1 mx-auto xs:h-64 xs:w-64 md:h-96 md:w-96"/>
                    </picture>
                    <p className='xs:text-l lg:text-xl'>{project.description}</p>
                </section>
           </section>
           <section>
                {project.urlWeb && (
                    <div className='mt-5 box-sizing hover:text-blue-200'>
                        <a href={project.urlWeb} className='xs:text-l lg:text-xl'>{project.urlWeb}</a>
                    </div>
                )}
                {project.gith && (
                    <div className='mt-5 box-sizing hover:text-blue-200'>
                        <a href={project.gith} className='xs:text-l lg:text-xl'>See Repository</a>
                    </div>
                )}
                {project.purposesDecs && (  
                    <div className="subContent">
                        <p className='text-xl px-3 py-2'>Purposes</p>
                        <p className='detailCard px-3 py-2 xs:text-l lg:text-xl'>{project.purposesDecs}</p>
                    </div>
                )}
                {project.technosDecs && (
                    <div className="subContent">
                        <p className='text-xl px-3 py-2'>technology</p>
                        <div className='px-7 py-2 xs:text-l lg:text-xl'>
                            {project.technosDecs.map((item) => (
                            <li key={item.name}>
                                {item.name}
                            </li>
                            ))}
                        </div>
                    </div>    
                )}
                {project.partners && (
                    <div className="subContent">
                        <p className='text-xl px-3 py-2'>partners</p>
                        <div className='px-7 py-2 xs:text-l lg:text-xl'>
                            {project.partners.map((item) => (
                            <li key={item.name}>
                                <a href={item.gitLink}>{item.name}</a>
                            </li>
                            ))}
                        </div>
                    </div>    
                )}
           </section>
           <section className='mt-5'>
                <Link href='/'>
                    <button className='box-sizing border-2 rounded-md w-full'>
                        <p className='xs:text-l lg:text-xl'>Back</p>
                    </button>
                </Link>
           </section>
            
        </main>
    );
}