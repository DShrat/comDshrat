"use client"

import { useState } from 'react';
import "../../globals.css";

export default function UrlShort() {
    const [url, setUrl] = useState<string>(''); 
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null); 
    const [error, setError] = useState<string | null>(null); 

    const handleSubmit = async () => {
        if (url) {
            try {
                const response = await fetch('http://localhost:8080/shorten', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ url }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();

                setShortenedUrl(data.short_url); 
                setError(null);
            } catch (err) {
                setError('Failed to shorten URL');
                setShortenedUrl(null);
            }
        }
    };

    return (
        <main className='font-mono grid min-h-screen items-center justify-between bg-gray-900 mx-auto xs:p-3 md:px-28 md:pt-12 lg:px-56 lg:pt-28'>
            <section className='xs:-mt-48 grid xs:grid-cols-1 md:grid-cols-2'>
                <section className='grid mx-auto'>
                    <p className='text-3xl font-bold'>URL Shortener</p>
                </section>
                <section className='grid my-auto'>
                    <section className='grid grid-cols-2 gap-2'>
                        <input
                            type="text"
                            placeholder='Input URL Here'
                            className='text-black px-3 w-auto rounded'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button onClick={handleSubmit} className="bg-blue-500 text-white rounded px-3">
                            Shorten URL
                        </button>   
                    </section>
                    
                    {shortenedUrl && (
                        <section className='grid mx-auto mt-3'>
                            <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
                        </section>
                    )}
                    {error && (
                        <section className='grid mx-auto mt-3'>
                            <div className="mx-auto">
                            <p className="text-red-500">{error}</p> 
                            </div>
                            
                        </section>
                    )}
                </section>    
            </section>
            

            

            
        </main>
    );
}
