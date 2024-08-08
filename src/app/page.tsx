import Link from 'next/link';
import "../app/globals.css";

const images = [
  {
    url: "https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png",
    alt: "Profile Image 1"
  },
  {
    url: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg",
    alt: "Profile Image 2"
  },
  {
    url: "https://pbs.twimg.com/profile_images/1427292844612595720/RC1YSvuT_400x400.jpg",
    alt: "Profile Image 3"
  },
  {
    url: "https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png",
    alt: "Profile Image 4"
  },
];




export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols items-center justify-between p-3 bg-gray-900 mx-auto">
      <section>
        <p className="capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, fuga.</p>
      </section>

      <section className="mt-4">
        <p className="capitalize">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae in ducimus eos, officia reiciendis corrupti doloremque error et sequi officiis inventore voluptas aliquam cum modi nesciunt id recusandae accusantium ipsam illum voluptatibus iusto obcaecati quaerat. Temporibus culpa impedit soluta repellendus eos, neque qui. Minima cupiditate recusandae asperiores molestiae, ad nisi!</p>
      </section>
        

      <section className="subContent projectList mt-5">
        <div className="box-sizing h-5 rounded-md bg-orange-500"></div>
        <p className="capitalize text-2xl mb-4 -mt-5 font-bold ml-3">Project</p>
        <div className="grid grid-cols-2 gap-3 mx-auto justify-items-center">
          {images.map((image, index) => (
            <div key={index} >
              <div className="box-border p-2 border-2 rounded-md">
                <p>Lorem, ipsum dolor.</p>
                <div className="image-content">
                  <picture>
                    <img src="https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png" alt="" className="rounded-md h-24 w-24 p-1 mx-auto" />
                  </picture>
                </div>
                <Link href='project'>
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
            {images.map((image, index) => (
              <div key={index} >
                <picture>
                  <img className="rounded-md h-24 w-24" src={image.url} alt={image.alt}/>
                </picture>
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
            {images.map((image, index) => (
              <div key={index} >
                <div className="box-border p-2 border-2 rounded-md">
                  <p>Lorem, ipsum dolor.</p>
                  <div className="image-content">
                    <picture>
                      <img src="https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png" alt="" className="rounded-md h-24 w-24 p-1 mx-auto" />
                    </picture>
                  </div>
                  <button className="grid rounded-md bg-orange-700 mx-auto mt-1 box-sizing h-7">
                    <span className="px-8">view more</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="box-border border-2 mt-5"></div>
        <div className="grid grid-cols-1 justify-items-start">
          <p className="footerConter">Lorem ipsum dolor sit amet.</p>
          <p className="footerConter">Lorem ipsum dolor sit amet.</p>
          <p className="footerConter">Lorem ipsum dolor sit amet.</p>
          <p className="footerConter">Lorem ipsum dolor sit amet.</p>
          <p className="footerConter">Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      


    </main>
  );
}
