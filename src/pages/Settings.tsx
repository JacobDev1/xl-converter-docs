export default function Settings(){
    return(<>
        <h1>Settings</h1>
        <p>The default is usually the best. Make sure you really know what you're doing before changing anything.</p>

        <h2>General</h2>
        <ul>
            <li>Dark Theme - the intended look of XL Converter</li>
            <li>Disable Downscaling on Startup - disables downscaling when you when you launch the application.</li>
            <li>Disable Delete Original on Startup - unchecks delete original when you when you launch the application.</li>
            <li>Disable Exception Popups - the pop-up displaying errors encountered during conversion will no longer appear.</li>
            <li>Input - Disable Sorting - disables sorting in the <b>Input Tab</b>, has no impact on performance.</li>
        </ul>

        <h2>Conversion</h2>
        <ul>
            <li>JPEGLI - Disable Progressive Scan - generated JPGs will be compatible with very old devices, but their file size will increase.</li>
            <li>WEBP - Method - lowering it will make encoding WEBP faster, but will also lower the quality and increase the file size.</li>
        </ul>

        <h2>Advanced</h2>
        <ul>
            <li>JPEG XL - Enable Effort 10 (slow) - raises Effort limit from 9 to 10. Effort 10 is very slow but can produce smaller files in lossless.</li>
            <li>Downscaling - Custom Resampling - enables resampling mode selection in the <b>Modify Tab</b>.</li>
            <li>Custom Encoder Parameters - additional params for the encoders. Make sure all parameters you add are valid; otherwise, the encoder will stop working.</li>
        </ul>
    </>);
}