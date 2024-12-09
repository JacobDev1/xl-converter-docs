export default function Settings(){
    return(<>
        <h1>Settings</h1>

        <h2>General</h2>
        <ul>
            <li>Disable Downscaling on Startup - disables downscaling when you launch the application.</li>
            <li>Disable Delete Original on Startup - unchecks delete original when you launch the application.</li>
            <li>Quality Slider - Snap to Individual Values - makes quality slider snap to individual values instead of every 5 points.</li>
            <li>Input - Disable Sorting - disables sorting in the <b>Input Tab</b>, has no impact on performance.</li>
            <li>Play Sound When Conversion Finishes - plays a sound when conversion finishes. You can swap it in <code>xl-converter/_internal/sounds/finished.wav</code>.</li>
        </ul>

        <h2>Conversion</h2>
        <ul>
            <li>JPEG XL - Optimize RAM Usage - allows for processing very high-resolution images without excessive RAM usage.
                <ul>
                    <li>Checked - reduces RAM usage by processing images in sequence when streaming encoding is unavailable. It's slower.</li>
                    <li>Unchecked - always processes images in parallel, but may exhaust your RAM.</li>
                </ul>Both options can utilize multiple cores.
            </li>
            <li>JPEG XL - Allow Lossy Modular: Shows or hides the JPEG XL Lossy Modular option in the Output tab. This mode is experimental.
                <ul>
                    <li>Offers lower file size and better eligibility for non-photographic images.</li>
                    <li>Causes discoloration and additional artifacts around the edges.</li>
                </ul>
                Use it sparingly.</li>
            <li>JPEG XL - Automatic JPEG Transcoding
                <ul>
                    <li>Enabled - the program will use "Lossless JPEG Transcoding" instead of regular lossless compression when converting JPEG to JPEG XL. This saves a lot of space but prevents metadata from being stripped. It affects the following formats:
                        <ul>
                            <li>JPEG XL with "Lossless" enabled.</li>
                            <li>Smallest Lossless (JPEG XL).</li>
                        </ul>
                    </li>
                    <li>Disabled - JPEG will be transcoded the same as any other file. This will result in a huge file size, but metadata can be stripped.</li>
                </ul>
            </li>
            <li>JPEG Encoder
                <ul>
                    <li>JPEGLI - The new state-of-the-art in JPEG encoding. Fast and high quality. <a href="https://opensource.googleblog.com/2024/04/introducing-jpegli-new-jpeg-coding-library.html" target="_blank">Read more.</a></li>
                    <li>libjpeg - the original JPEG encoder. Well-tested, stable, and great at preserving noise. Use it when JPEGLI cannot transcode a particular image.</li>
                </ul>
            </li>
            <li>JPEGLI - Disable Progressive Scan
                <ul>
                    <li>Enabled - generated JPEG images will be compatible with very old devices, but their file size will increase.</li>
                    <li>Disabled - generated JPEG images will be smaller and load faster.</li>
                </ul>
            </li>
            <li>AVIF Encoder - Encoder used for encoding AVIF images.
                <ul>
                    <li>AOM AV1: Stable and feature rich. Recommended in the high quality range and as the default.</li>
                    <li>SVT-AV1-PSY: a new fork of SVT-AV1. Recommended in the low-to-medium quality range.</li>
                </ul>Note: Each encoder interprets quality values differently.
            </li>
            <li>Do Not Delete Original When Result is Larger - prevents "Delete Original" and "Replace" options (output tab) from deleting the original image if the result is larger.</li>
            <li>Copy Original When Result is Larger - copies the original image to the output folder when the result is larger.</li>
        </ul>

        <h2>Advanced</h2>
        <p>Make sure you know what you're doing before changing anything here.</p>
        <ul>
            <li>JPEG XL - Enable Effort 10 - raises Effort limit from 9 to 10. Effort 10 is experimental and very slow.
                <ul>
                    <li>Lossy: provides a very small visual improvement.</li>
                    <li>Lossless: lowers file size.</li>
                    <li>Lossless JPEG Transcoding: has a tendency to increase file size. Not recommended.</li>
                </ul>
            </li>
            <li>JPEG XL - Allow Intelligent Effort (Deprecated): Shows or hides the JPEG XL Intelligent Effort option in the Output tab. This functionality picks Effort based on context. It aimed at providing lower file size but made only a marginal difference. This feature will be removed in the future.</li>
            <li>Downscaling - Custom Resampling - enables resampling mode selection in the <b>modify Tab</b>.</li>
            <li>Disable Exception Popups - the pop-up displaying exceptions encountered during conversion will no longer appear.</li>
            <li>ExifTool Arguments - arguments used for handling metadata, correspond to the options is the modify tab. Supported variables:
                <ul>
                    <li><code>$src</code> - source image path.</li>
                    <li><code>$dst</code> - destination image path.</li>
                </ul>
                Remember to add <code>-overwrite_original</code> to avoid leftover files.</li>
            <li>Additional Encoder Arguments - additional arguments for the encoders. Ensure all arguments you add are valid; otherwise, the encoder will stop working.</li>
        </ul>
    </>);
}