import React, { useEffect } from 'react';

const Tiktokvid = () => {
  useEffect(() => {
    // Dynamically load the TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div style={{ backgroundColor: '#ff8904', padding: '20px' }}>
      {/* TikTok Embed Blockquote with the video */}
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@patrickpeko_/video/7423008425283505414"
        data-video-id="7423008425283505414"
        style={{ maxWidth: '605px', minWidth: '325px', margin: 'auto' }}>
        <section>
          <a
            target="_blank"
            title="@patrickpeko_"
            href="https://www.tiktok.com/@patrickpeko_?refer=embed">
            @patrickpeko_
          </a>  
          <a
            title="webdesign"
            target="_blank"
            href="https://www.tiktok.com/tag/webdesign?refer=embed">
            #webdesign
          </a>
          <a
            title="webdevelopment"
            target="_blank"
            href="https://www.tiktok.com/tag/webdevelopment?refer=embed">
            #webdevelopment
          </a>
          <a
            title="frontend"
            target="_blank"
            href="https://www.tiktok.com/tag/frontend?refer=embed">
            #frontend
          </a>
          <a
            title="backend"
            target="_blank"
            href="https://www.tiktok.com/tag/backend?refer=embed">
            #backend
          </a>
          <a
            title="tiktokviral"
            target="_blank"
            href="https://www.tiktok.com/tag/tiktokviral?refer=embed">
            #tiktokviral
          </a>
          <a
            title="tiktoker"
            target="_blank"
            href="https://www.tiktok.com/tag/tiktoker?refer=embed">
            #tiktoker
          </a>
          <a
            target="_blank"
            title="♬ Future - She77onthebea7"
            href="https://www.tiktok.com/music/Future-7161135177970747393?refer=embed">
            ♬ Future - She77onthebea7
          </a>
        </section>
      </blockquote>
    </div>
  );
}

export default Tiktokvid;
