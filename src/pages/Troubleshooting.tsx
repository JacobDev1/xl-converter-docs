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
        <p>Install <a href="https://aka.ms/vs/17/release/vc_redist.x64.exe" target="_blank">Visual C++ Redistributable 2015 - 2022</a>. This is needed for ImageMagick to work.</p>

        <h2>Running out of RAM (JPEG XL)</h2>
        <p>Set the thread count to 1.</p>
        <p>JPEG XL requires a lot of RAM for very large images. To make the conversion faster, XL Converter runs encoders in parallel. This also increases the total RAM usage.</p>

    </div>);
}