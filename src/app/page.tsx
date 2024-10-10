"use client"
import "../app/globals.css";
import { useRouter } from 'next/navigation';


export default function loadingScreen(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    setTimeout(() => {
      router.push('./mainPage');
    }, 3000);

    return(
        <main className="font-mono grid min-h-screen items-center bg-gray-900 mx-auto xs:p-3 md:px-28 md:pt-12 lg:px-56 lg:pt-28 overflow-hidden;">
            <div className="absolute w-36 h-36 border-4 border-white rounded-full animate-ping bg-white overflow-hidden"></div>
            <h1 className="xs:text-3xl capitalize text-center">wait a second</h1>
        </main>
    )
}

