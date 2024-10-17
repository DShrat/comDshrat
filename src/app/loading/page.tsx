import "../../app/globals.css";

export default function loadingScreen(){
    return(
        <main className="font-mono grid min-h-screen items-center bg-gray-900 mx-auto xs:p-3 md:px-28 md:pt-12 lg:px-56 lg:pt-28 overflow-hidden;">
            <div className="absolute w-36 h-36 border-4 border-white rounded-full animate-ping bg-white overflow-hidden"></div>
            <h1 className="xs:text-3xl capitalize text-center">wait a seconds</h1>
        </main>
    )
}