export default function Troubleshooting(){
    return(<div>
        <h1>Troubleshooting</h1>
        <h2>Bug Reports</h2>
        <p>You can submit a bug report in 2 ways</p>
        <ul>
            <li>[public] - Submit a new <a href="https://github.com/JacobDev1/xl-converter/issues" target="_blank">GitHub Issue</a></li>
            <li>[private] - Email me at contact@codepoems.eu</li>
        </ul>

        <h2>VCOMP140.DLL was not found</h2>
        <p>Install <a href="https://aka.ms/vs/17/release/vc_redist.x64.exe" target="_blank">Visual C++ Redistributables 2015 - 2022</a>. This is needed for ImageMagick to work.</p>

        <h2>Running out of RAM (JPEG XL)</h2>
        <p>High resolution images require a lot of RAM. Set the thread count to 1 to limit RAM usage.</p>

        <h2>(Linux) After an update, the program's start menu icon disappeared.</h2>
        <p>The icon will appear after restarting your system.</p>
        <p>You can also update the menu manualy. Run <code>update-desktop-database ~/.local/share/applications</code></p>

        <h2>Doesn't Launch</h2>
        <p>If the program won't launch, delete the following folder.</p>
        <ul>
            <li>Windows - <code>%localappdata%/xl-converter</code></li>
            <li>Linux - <code>~/.config/xl-converter</code></li>
        </ul>
    </div>);
}