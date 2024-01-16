export default function FAQ(){
    return(<div>
        <h1>FAQ</h1>
        
        <h2>Is XL Converter safe?</h2>
        <p>Of course! The source is public available (and auditable).</p>

        <h2>What technologies are used?</h2>
        <ul>
            <li>JPEG XL - libjxl</li>
            <li>AVIF - libavif (AOM AV1)</li>
            <li>JPG, WEBP, Downscaling - ImageMagick</li>
        </ul>
        <p><a href="https://github.com/JacobDev1/xl-converter/blob/stable/LICENSE_3RD_PARTY.txt" target="_blank" >Full list</a></p>

        <h2>Does it support high bit depth?</h2>
        <p>Yes, the limits are</p>
        <ul>
            <li>JPEG XL - 32 bit</li>
            <li>AVIF - 12 bit</li>
        </ul>
        <p>The Legacy JPG, WEBP, Smallest Lossless and Downscaling are limited to 8 bit.</p>

        <h2>What are the hardware requirements?</h2>
        <ul>
            <li>System:
                <ul>
                    <li>Windows 10 64-bit (1809 or later)</li>
                    <li>Linux 64-bit (kernel 5.15 or later)</li>
                </ul>
            </li>
            <li>Processor: a quad-core made in the last decade</li>
            <li>RAM:
                <ul>
                    <li>4 GB minimum</li>
                    <li>8 GB recommended</li>
                </ul>
            </li>
        </ul>

        <h2>(Linux) What is the difference between "Installer" and "AppImage"?</h2>
        <ul>
            <li>Installer (recommended) - launches faster, sets up permissions, and adds shortcuts</li>
            <li>AppImage - takes up less space</li>
        </ul>
    </div>);
}