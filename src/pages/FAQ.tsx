export default function FAQ(){
    return(<div>
        <h1>FAQ</h1>

        <h2>Is XL Converter safe?</h2>
        <p>Of course! The source code is publicly available (and auditable).</p>

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

    </div>);
}