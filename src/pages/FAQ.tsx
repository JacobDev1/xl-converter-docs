export default function FAQ(){
    return(<div>
        <h1>FAQ</h1>
        
        <h2>Is XL Converter safe?</h2>
        <p>Of course! The source is publicly available (and auditable).</p>

        <h2>What technologies are used?</h2>
        <ul>
            <li>JPEG XL, JPG - libjxl</li>
            <li>AVIF - libavif (AOM AV1)</li>
            <li>JPG, WEBP, Downscaling - ImageMagick</li>
        </ul>
        <p>XL Converter was written in Python and PySide6.</p>
        <p><a href="https://github.com/JacobDev1/xl-converter/blob/stable/LICENSE_3RD_PARTY.txt" target="_blank" >Full list</a></p>

        <h2>Does it support high bit depth?</h2>
        <p>Yes, the limits are</p>
        <ul>
            <li>JPEG XL - 32 bit</li>
            <li>AVIF - 12 bit</li>
        </ul>
        <p>JPG, WEBP, Smallest Lossless, and Downscaling are limited to 8 bit.</p>

        <h2>What are the requirements to run it?</h2>
        <p>System</p>
        <ul>
            <li>Windows 10 64-bit (1809 or later)</li>
            <li>Linux 64-bit (kernel 5.15 or later)</li>
        </ul>
        <p>Hardware: 4-core CPU and 8 GB of RAM</p>

        <h2>Will you add MozJPEG?</h2>
        <p>XL Converter uses <a href="https://github.com/libjxl/libjxl/blob/main/lib/jpegli/README.md" target="_blank">JPEGLI</a>, which performs on pair with MozJPEG (If not better).</p>
        
    </div>);
}