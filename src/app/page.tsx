import Link from 'next/link';
import "../app/globals.css";
import { Router } from 'react-router';
import { sosmeds } from '../app/utils/data/socialmedias'
import { contentProjects } from '../app/utils/data/projects'
import { otherProjects } from '../app/utils/data/otherprojects'

export default function Home() {
  return (
    <main className="formatPage">
      <section>
        <p className="capitalize xs:text-l lg:text-xl">Welcome to Don&#39;s personal Website.</p>
      </section>

      <section className="mt-4">
        <p className="capitalize xs:text-l lg:text-xl">hi, i&#39;m Donni Suharyanto, a passionate front-end developer with a love for learn new things. with a background in front-end website development, qa and also computer vision, i specialize in front-end web development using react and vue with css or tailwinds framework.</p>
      </section>
        

      <section className="projectList mt-5">
        <div className="orangeBar"></div>
        <p className="titleSubContent xs:text-2xl md:text-3xl lg:text-4xl">Project</p>
        <div className="cardDiv">
          {contentProjects.map((project, index) => (
            <div key={index} >
              <div className="box-border p-2 border-2 rounded-md">
                <div className='mx-auto xs:text-l md:text-xl'>{project.name.replace('-', ' ')}</div>
                <div className="image-content">
                  <picture>
                    <img src={project.imgUrl} alt="" className="imgCard"/>
                  </picture>
                </div>
                <Link href={`./Projects/${encodeURIComponent(project.name.replace(/\s/g, '-'))}`}>
                  <button type="button" className="buttonView">
                    <span className="px-8 xs:text-l ">view more</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
          
        </div>
      </section>
      
      <section>
        <div className="sosmed mt-5">
          <div className="orangeBar"></div>
          <p className="titleSubContent xs:text-2xl md:text-3xl">Social Media</p>
          <div className="cardDiv">
            {sosmeds.map((sosmed, index) => (
              <div key={index} >
                <Link href = {sosmed.url}>
                  <picture>
                    <img className="rounded-md xs:h-24 xs:w-24 lg:h-32 lg:w-32" src={sosmed.imgUrl} alt={sosmed.alt}/>
                  </picture>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="other mt-5">
          <div className="orangeBar"></div>
          <p className="titleSubContent xs:text-2xl md:text-3xl">Other Project</p>
          <div className="cardDiv">
          {otherProjects.map((othProject, index) => (
            <div key={index}>
              <div className="box-border p-2 border-2 rounded-md">
                <div>
                  <p className='mx-auto xs:text-l md:text-xl'>{othProject.name.replace('-', ' ')}</p>
                </div>
                <div className="image-content">
                  <picture>
                    <img src={othProject.imgUrl} alt='' className="imgCard" />
                  </picture>
                </div>
                <Link href={`./OtherProjects/${encodeURIComponent(othProject.name.replace(/\s/g, '-'))}`}>
                  <button type="button" className="buttonView">
                    <span className="px-8 xs:text-l">view more</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section>
        <div className="box-border border-2 mt-5"></div>
        <div className="grid grid-cols-1 justify-items-start">
          <p className="footerConter xs:text-l lg:text-xl">Contact me: <a href="mailto:dshrat29@gmail.com">dshrat29@gmail.com</a></p>
        </div>
      </section>
      


    </main>
  );
}
