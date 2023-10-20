export default function Settings(){
    return(<>
        <h1>Settings</h1>
        <h2>General</h2>
        <ul>
            <li>Dark Theme - the intended look of XL Converter</li>
            <li>Disable Downscaling on Startup - You will probably forget you have downscaling enabled the next time you turn on the program. This disables it for you.</li>
            <li>Disable Exception - disable the popups you get when conversion encounters soft errors.</li>
            <li>Input - Disable Sorting - disables sorting in the <b>Input Tab</b>, has no effect on performance.</li>
        </ul>

        <h2>Conversion</h2>
        <ul>
            <li>Disable ExifTool - disables metadata management and falls back onto encoder-specific implementation. This makes conversion faster, but the metadata may not be kept or kept when you don't want it to.</li>
            <li>Enable ExifTool for JPEG XL (Experimental) - enables preserving and removing metadata for JPEG XL. If disabled, JPEG XL will preserve all metadata regardless of <b>Keep Metadata</b> state.</li>
            <li>Downscaling - Custom Resampling - enables resampling mode selection in the <b>Modify Tab</b>. You should probably not change it.</li>
        </ul>
    </>);
}