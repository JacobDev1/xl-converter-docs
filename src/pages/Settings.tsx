export default function Settings(){
    return(<>
        <h1>Settings</h1>
        <h2>General</h2>
        <ul>
            <li>Dark Theme - the intended look of XL Converter</li>
            <li>Disable Downscaling on Startup - disables downscaling when you when you launch the application.</li>
            <li>Disable Delete Original on Startup - unchecks delete original when you when you launch the application.</li>
            <li>Disable Exception Popups - the pop-up displaying errors encountered during conversion will no longer appear.</li>
            <li>Input - Disable Sorting - disables sorting in the <b>Input Tab</b>, has no effect on performance.</li>
        </ul>

        <h2>Conversion</h2>
        <ul>
            <li>Downscaling - Custom Resampling - enables resampling mode selection in the <b>Modify Tab</b>. You should probably not change it.</li>
            <li>Disable UTF-8 Check (JPEG XL / Windows) - JPEG XL only supports ANSI on Windows. If you find some ANSI characters being blocked, try enabling this option.</li>
        </ul>
    </>);
}