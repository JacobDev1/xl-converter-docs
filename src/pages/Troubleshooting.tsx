export default function Troubleshooting(){
    return(<div>
        <h1>Troubleshooting</h1>
        <h2>Bug Reports</h2>
        <p>You can submit a bug report in 2 ways</p>
        <ul>
            <li>[public] - Submit a new <a href="https://github.com/JacobDev1/xl-converter/issues" target="_blank">GitHub Issue</a></li>
            <li>[private] - Email me at contact@codepoems.eu</li>
        </ul>

        <h2>Technical Supports</h2>
        <p>Direct support from the developer is available via <a href="https://www.patreon.com/codepoems" target="_blank">Patreon</a>.</p>
        
        <h2>VCOMP140.DLL was not found</h2>
        <p>Install <a href="https://aka.ms/vs/17/release/vc_redist.x64.exe" target="_blank">Visual C++ Redistributables 2015 - 2022</a>. This is needed for ImageMagick to work.</p>

        <h2>Doesn't Launch</h2>
        <p>If the program won't launch, delete the following folder.</p>
        <ul>
            <li>Windows - <code>%localappdata%/xl-converter</code></li>
            <li>Linux - <code>~/.config/xl-converter</code></li>
        </ul>
    </div>);
}