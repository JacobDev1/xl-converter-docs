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
            <li>Play Sound When Conversion Finishes - plays a sound when conversion finishes. You can swap it in <code>xl-converter/_internal/sounds/finished.wav</code>.</li>
        </ul>

        <h2>Conversion</h2>
        <ul>
            <li>JPEG XL - Automatic JPEG Recompression
                <ul>
                    <li>Enabled - the program will use "Lossless JPEG Recompression" instead of regular lossless compression when converting JPEG to JPEG XL. This saves a lot of space but prevents metadata from being stripped. It affects the following formats:
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
                    <li>libjpeg - the original JPEG encoder. Well-tested, stable, and great at preserving noise. Use it when JPEGLI cannot convert a particular image.</li>
                </ul>
            </li>
            <li>JPEGLI - Disable Progressive Scan
                <ul>
                    <li>Enabled - generated JPEGs will be compatible with very old devices, but their file size will increase.</li>
                    <li>Disabled - generated JPEGs will be smaller and load faster.</li>
                </ul>
            </li>
            <li>Do Not Delete Original When Result is Larger - prevents "Delete Original" and "Replace" options (output tab) from deleting the original image if the result is larger.</li>
            <li>Copy Original When Result is Larger - copies the original image to the output folder when the result is larger.</li>
            <li>Multithreading - Controls how encoders are run.
                <ul>
                    <li>Performance - maximizes speed but requires a lot of RAM. Runs encoders in parallel.</li>
                    <li>Low RAM - slower but uses less RAM. Useful for large images and devices with low RAM. Runs encoders sequentially.</li>
                </ul>
            </li>
        </ul>

        <h2>Advanced</h2>
        <p>Make sure you know what you're doing before changing anything here.</p>
        <ul>
            <li>JPEG XL - Enable Effort 10 (slow) - raises Effort limit from 9 to 10. Effort 10 is very slow but can produce smaller files in lossless.</li>
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

        <h2>Notes</h2>
        <h3>Tooltips</h3>
        <p>Hover your cursor over a widget for a moment to get a brief explanation of its function.</p>
    </>);
}