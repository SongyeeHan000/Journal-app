'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { sha256, sha224 } from 'js-sha256';


export default function Home() {
  const [urls, setUrls] = useState([])
  const [originalUrl, setOriginalUrl] = useState(""); // Corrected order

  const submit = () => {
    console.log(originalUrl);
    /*
    Steps:
    Randomize letters and numbers. 
    then attach to the end of the domain : "urlShortner.com"
    Have it link to POST api and have it append the new shortened URL with its original URL. 
    
    */
    const randomizedPath = sha256(originalUrl).slice(0,6) //https://www.npmjs.com/package/js-sha256
    const shortenedUrl = "https://www.urlShortner.com/" + randomizedPath
    

  };

  const onChange = (e) => {
    setOriginalUrl(e.target.value);
  };
  useEffect(() => {
    try { 
      const fetchUrls = async () => {
        const response = await fetch(`/api`);
        const urls = await response.json()
        setUrls(urls)
        console.log(urls)
      }
      fetchUrls();
    } catch (e){
      console.log("Error in fetching urls from data")
    }
    
    
  },[])

  return (
    <main>
      <h3>Current Data</h3>
      <ul>
        {urls.map((url) => {
          return <li key={url.id}>Original URL: {url.originalUrl} / Shortened URL: {url.shortUrl}</li>

        })}
      </ul>
      
      <h3>URL Shortener:</h3>
      <input type="text" onChange={onChange} value={originalUrl} /> 
      <button onClick={submit}>Submit</button>
    </main>
  );
}
