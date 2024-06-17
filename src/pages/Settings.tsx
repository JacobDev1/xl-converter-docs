export default function Settings(){
    return(<>
        <h1>Settings</h1>

        <h2>General</h2>
        <ul>
            <li>Disable Downscaling on Startup - disables downscaling when you launch the application.</li>
            <li>Disable Delete Original on Startup - unchecks delete original when you launch the application.</li>
            <li>Dark Theme - the intended look of XL Converter</li>
            <li>Quality Slider - Snap to Individual Values - makes quality slider snap to individual values instead of every 5 points.</li>
            <li>Input - Disable Sorting - disables sorting in the <b>Input Tab</b>, has no impact on performance.</li>
            <li>Play Sound When Conversion Finishes - plays a sound at the end of conversion. You can swap it in <code>xl-converter/_internal/sounds/finished.wav</code>.</li>
        </ul>

        <h2>Conversion</h2>
        <ul>
            <li>JPEG XL - Automatic JPEG Recompression - if enabled, the program will use lossless JPEG recompression whenever possible (outside of its designated options). For example, if you've selected regular "JPEG XL", checked "Lossless", and added a JPEG image, the program would automatically perform lossless recompression (saving more space) with this setting enabled. <b>The drawback is metadata always gets preserved during lossless JPEG recompression.</b></li>
            <li>JPEG Encoder
                <ul>
                    <li>JPEGLI - The new state of the art in JPEG encoding. Fast and high quality. <a href="https://opensource.googleblog.com/2024/04/introducing-jpegli-new-jpeg-coding-library.html" target="_blank">Read more.</a></li>
                    <li>libjpeg - the original JPEG encoder. Well-tested, stable, and great at preserving noise. Use it when JPEGLI cannot convert a particular image.</li>
                </ul>
            </li>
            <li>JPEGLI - Disable Progressive Scan - generated JPGs will be compatible with very old devices, but their file size will increase.</li>
        </ul>

        <h2>Advanced</h2>
        <p>Make sure you really know what you're doing before changing anything here.</p>
        <ul>
            <li>JPEG XL - Enable Effort 10 (slow) - raises Effort limit from 9 to 10. Effort 10 is very slow but can produce smaller files in lossless.</li>
            <li>Downscaling - Custom Resampling - enables resampling mode selection in the <b>Modify Tab</b>.</li>
            <li>Disable Exception Popups - the pop-up displaying errors encountered during conversion will no longer appear.</li>
            <li>Additional Encoder Parameters - additional params for the encoders. Make sure all parameters you add are valid; otherwise, the encoder will stop working.</li>
        </ul>
    </>);
}