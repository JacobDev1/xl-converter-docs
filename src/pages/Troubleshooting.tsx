export default function Troubleshooting(){
    return(<div>
        <h1>Troubleshooting</h1>
        <h2>Bug Reports</h2>
        <p>Send an email to contact@codepoems.eu</p>

        <h2>Technical Supports</h2>
        <p>Technical support is paid and available via <a href="https://www.patreon.com/codepoems" target="_blank">Patreon</a>.</p>

        <h2>Doesn't Launch</h2>
        <p>If the program won't launch, delete the following folder.</p>
        <ul>
            <li>Windows - <code>%localappdata%/xl-converter</code></li>
            <li>Linux - <code>~/.config/xl-converter</code></li>
        </ul>
        <p>It contains widget states. Updates may break the compatibility.</p>
    </div>);
}