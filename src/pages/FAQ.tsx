export default function FAQ(){
    return(<div>
        <h1>FAQ</h1>

        <h2>Is XL Converter safe?</h2>
        <p>Of course! The source code is publicly available (and auditable).</p>
        <p>Just make sure you are getting it from the official website - <a href="https://codepoems.eu/xl-converter/" target="_blank">codepoems.eu</a> or the <a href="https://github.com/JacobDev1/xl-converter" target="_blank">GitHub repo</a>.</p>

        <h2>What technologies are used?</h2>
        <ul>
            <li>JPEG XL, JPG - libjxl</li>
            <li>AVIF - libavif (AOM AV1)</li>
            <li>JPG, WEBP, Downscaling - ImageMagick</li>
        </ul>
        <p>XL Converter was written in Python and PySide6.</p>

    </div>);
}