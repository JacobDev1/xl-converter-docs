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
        <p>This is only a problem for unreasonably large images.</p>
        <p>Set Effort to 7 and Lossy Mode to VarDCT. Image viewers may fail to open JPEG XL images of extreme sizes. <a href="https://github.com/libjxl/libjxl/issues/3398" target="_blank">~libjxl issue</a></p>

    </div>);
}