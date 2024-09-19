import Link from 'next/link';
import "../app/globals.css";

const projects = [
  {
    name: "Nekoya",
    imgUrl: "https://nekoya.moe.team/img/logo_transparent.webp",
    alt: "Profile Image 1",
    url: "https://nekoya.moe.team",
    gith: "https://github.com/Nekoya-Site/Web/"
  },
  {
    name: "Nekoya Mobile",
    imgUrl: "https://nekoya.moe.team/img/logo_transparent.webp",
    alt: "Profile Image 2",
    url: "",
    gith: "https://github.com/Nekoya-Site/App/"
  },
  {
    name: "Klik Fauna",
    imgUrl: "https://klikfauna.com/assets/logo-23d38f2b.png",
    alt: "Profile Image 3",
    url: "https://klikfauna.com/",
    gith: ""
  },
  {
    name: "Don's Website",
    imgUrl: "https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png",
    alt: "Profile Image 4",
    url: "https://dshrat.com/",
    gith: ""
  },
];

const sosmeds = [
  {
    name: "Github",
    imgUrl: "https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png",
    url: "https://github.com/DShrat",
    alt: "Profile Image 1"
  },
  {
    name: "Twitter",
    imgUrl: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg",
    url: "https://x.com/dshrat_",
    alt: "Profile Image 2"
  },
  {
    name: "Youtube",
    imgUrl: "https://pbs.twimg.com/profile_images/1427292844612595720/RC1YSvuT_400x400.jpg",
    url: "https://www.youtube.com/@JOH1_YT",
    alt: "Profile Image 3"
  },
  {
    name: "LinkedIn",
    imgUrl: "https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png",
    url: "https://www.linkedin.com/in/donni-suharyanto-387495211/",
    alt: "Profile Image 4"
  },
];

const otherProjects = [
  {
    name: "deepfake detection",
    imgUrl: "",
    url: "https://github.com/DShrat/deepfake-detection",
    alt:""
  },
];

export const contentProjects = [
  {
    name: "Nekoya",
    imgUrl: "",
    description: "",
    purposes: "",
    purposesDecs: "",
    technos: "",
    technosDecs: "",
    partners: ""
  },
  {
    name: "Nekoya Mobile",
    imgUrl: "",
    description: "",
    purposes: "",
    purposesDecs: "",
    technos: "",
    technosDecs: "",
    partners: ""
  },
  {
    name: "Klik Fauna",
    imgUrl: "",
    description: "",
    purposes: "",
    purposesDecs: "",
    technos: "",
    technosDecs: "",
    partners: ""
  },
  {
    name: "Don's Website",
    imgUrl: "",
    description: "",
    purposes: "",
    purposesDecs: "",
    technos: "",
    technosDecs: "",
    partners: ""
  },
]


export default function Home() {
  return (
    <main className="font-mono grid min-h-screen grid-cols items-center justify-between p-3 bg-gray-900 mx-auto">
      <section>
        <p className="capitalize">Welcome to Don&#39;s personal Website.</p>
      </section>

      <section className="mt-4">
        <p className="capitalize">hi, i&#39;m Donni Suharyanto, a passionate front-end developer with a love for learn new things. with a background in front-end website development, qa and also computer vision, i specialize in front-end web development using react and vue with css or tailwinds framework.</p>
      </section>
        

      <section className="subContent projectList mt-5">
        <div className="box-sizing h-5 rounded-md bg-orange-500"></div>
        <p className="capitalize text-2xl mb-4 -mt-5 font-bold ml-3">Project</p>
        <div className="grid grid-cols-2 gap-3 mx-auto justify-items-center">
          {projects.map((project, index) => (
            <div key={index} >
              <div className="box-border p-2 border-2 rounded-md">
                <div className='mx-auto'>{project.name}</div>
                <div className="image-content">
                  <picture>
                    <img src={project.imgUrl} alt="" className="rounded-md h-24 w-24 p-1 mx-auto" />
                  </picture>
                </div>
                <Link href={`./${encodeURIComponent(project.name)}`}>
                  <button type="button" className="grid rounded-md bg-orange-700 mx-auto mt-1 box-sizing h-7">
                    <span className="px-8">view more</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
          
        </div>
      </section>
      
      <section>
        <div className="subContent sosmed mt-5">
          <div className="box-sizing h-5 rounded-md bg-orange-500"></div>
          <p className="capitalize text-2xl mb-4 -mt-5 font-bold ml-3">Social Media</p>
          <div className="grid grid-cols-3 gap-3 mx-auto justify-items-center">
            {sosmeds.map((sosmed, index) => (
              <div key={index} >
                <Link href = {sosmed.url}>
                  <picture>
                    <img className="rounded-md h-24 w-24" src={sosmed.imgUrl} alt={sosmed.alt}/>
                  </picture>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="subContent other mt-5">
          <div className="box-sizing h-5 rounded-md bg-orange-500"></div>
          <p className="capitalize text-2xl mb-4 -mt-5 font-bold ml-3">Other Project</p>
          <div className="grid grid-cols-2 gap-3 mx-auto justify-items-center">
          {otherProjects.length > 1 ? (
              otherProjects.map((othProject, index) => (
                <div key={index}>
                  <div className="box-border p-2 border-2 rounded-md">
                    <div>
                      <p>{othProject.name}</p>
                    </div>
                    <div className="image-content">
                      <picture>
                        <img
                          src={othProject.imgUrl}
                          alt={othProject.alt}
                          className="rounded-md h-24 w-24 p-1 mx-auto"
                        />
                      </picture>
                    </div>
                    <button className="grid rounded-md bg-orange-700 mx-auto mt-1 box-sizing h-7">
                      <span className="px-8">view more</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="box-border p-2 border-2 rounded-md">
                <p className="text-xl font-bold text-center">Coming Soon</p>
                <div className="image-content">
                  <picture>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Placeholder"
                      className="rounded-md h-24 w-24 p-1 mx-auto"
                    />
                  </picture>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="box-border border-2 mt-5"></div>
        <div className="grid grid-cols-1 justify-items-start">
          <p className="footerConter">Contact me: <a href="mailto:dshrat29@gmail.com">dshrat29@gmail.com</a></p>
        </div>
      </section>
      


    </main>
  );
}
