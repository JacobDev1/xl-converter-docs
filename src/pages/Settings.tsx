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

        <h2>Advanced</h2>
        <ul>
            <li>JPEG XL - Disable UTF-8 Check - on Windows, JPEG XL supports ANSI only. If you find some ANSI characters being blocked, try checking this option.</li>
            <li>Downscaling - Custom Resampling - enables resampling mode selection in the <b>Modify Tab</b>. Do not change it.</li>
        </ul>
    </>);
}