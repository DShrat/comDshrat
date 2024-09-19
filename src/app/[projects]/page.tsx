import Link from 'next/link';
import { contentProjects } from '../page'; 
import "../globals.css";
import { useRouter } from 'next/navigation';

export default function ProjectPages(){
    return(
        <main className="font-mono grid min-h-screen grid-cols items-center justify-between p-3 bg-gray-900 mx-auto">
            <section>
                <p className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempore!</p>
                <section>
                    <picture>
                        <img src="https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png" alt="" className="rounded-md h-25 w-25 p-1 mx-auto" />
                    </picture>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur. In necessitatibus repudiandae possimus eveniet at soluta quo ad commodi vel, excepturi suscipit enim eaque tempora voluptates, nesciunt voluptatum itaque amet doloribus laudantium! Corrupti molestias nobis animi at! Reiciendis impedit doloribus culpa explicabo illo iste consequatur autem cumque asperiores odit dignissimos, praesentium molestiae placeat voluptatibus ratione dolore odio eos incidunt et suscipit enim quod ipsam! Dolorum dolor magni accusamus harum repellat quibusdam ex minus impedit temporibus. Non modi magnam, soluta, ab doloremque dolor placeat pariatur debitis natus voluptatem, officiis beatae eveniet eos esse quasi minima quidem vitae? Natus, quidem qui?</p>
                </section>
           </section>
           <section>
                <div className="subContent mt-5 box-sizing rounded-md border-2">
                    <p className='text-xl px-3 py-2'>Lorem.</p>
                    <p className='detailCard px-3 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora odio mollitia consequuntur incidunt? Beatae facilis necessitatibus deserunt accusamus earum veniam numquam quibusdam ipsa pariatur?</p>
                </div>
                <div className="subContent mt-5 box-sizing rounded-md border-2">
                    <p className='text-xl px-3 py-2'>Lorem.</p>
                    <p className='detailCard px-3 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora odio mollitia consequuntur incidunt? Beatae facilis necessitatibus deserunt accusamus earum veniam numquam quibusdam ipsa pariatur?</p>
                </div>
                <div className="subContent mt-5 box-sizing rounded-md border-2">
                    <p className='text-xl px-3 py-2'>Lorem.</p>
                    <p className='detailCard px-3 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora odio mollitia consequuntur incidunt? Beatae facilis necessitatibus deserunt accusamus earum veniam numquam quibusdam ipsa pariatur?</p>
                </div>
           </section>
           <section className='mt-5'>
                <Link href='/'>
                    <button className='box-sizing border-2 rounded-md w-full'>
                        <p className=''>Back</p>
                    </button>
                </Link>
           </section>
            
        </main>
    );
}