import Output from "../assets/xl_converter_output.webp";

export default function GettingStarted(){
    return(<div>
        <h1>Getting Started</h1>
        <p>XL Converter is an easy-to-use image converter for modern formats.</p>
        <img src={Output} />

        <h2>Installation</h2>
        <a href="https://codepoems.eu/xl-converter" target="_blank"><button>Download Page</button></a>
        <p><em>Only download XL Converter from codepoems.eu.</em></p>

        <h3>Windows</h3>
        <p>Double-click on the downloaded file. A warning may appear. Click on</p>
        <ul>
            <li>More Info (link)</li>
            <li>Run Anyway (button)</li>
        </ul>
        <p>Windows shows this warning on all software without an expensive digital certificate. <a href="https://ardour.org/windows_defender.html" target="_blank">More info</a></p>
        <p>Next, follow the installer instructions.</p>

        <h3>Linux</h3>
        <ul>
            <li>Unpack the 7z archive</li>
            <li>Run <code>./install.sh</code></li>
        </ul>

        <h2>Image Viewers</h2>
        <p>These image viewers support AVIF and JPEG XL.</p>
        <h3>Windows</h3>
        <ul>
            <li><a href="https://imageglass.org/" target="_blank">ImageGlass</a> - easiest to use</li>
            <li>
                <a href="https://xnview.com/" target="_blank">XnViewMP</a>{' / '}
                <a href="https://irfanview.com/" target="_blank">IrfanView (with plugins)</a>{' / '}
                <a href="https://picview.org/" target="_blank">PicView</a>{' / '}
                <a href="https://photoqt.org/" target="_blank">PhotoQt</a>{' / '}
                <a href="https://github.com/nomacs/nomacs" target="_blank">nomacs</a>{' '}
                - alternatives
            </li>
        </ul>
        <h3>Linux</h3>
        <h4>AVIF</h4>
        <p>Install this package.</p>
        <p><code>sudo apt install libavif-gdk-pixbuf</code></p>
        <p><a href="https://codepoems.eu/posts/how-to-open-avif-images-on-linux/" target="_blank">Detailed tutorial</a></p>
        <h4>JPEG XL</h4>
        <p>Download the latest <a href="https://github.com/libjxl/libjxl/releases">binaries</a> for your distribution.</p>
        <p>Unpack then install them</p>
        <p><code>sudo dpkg -i *deb</code></p>
        <p><a href="https://codepoems.eu/posts/how-to-open-jpeg-xl-images-on-linux/" target="_blank">Detailed tutorial</a></p>

        <h2>Tip</h2>
        <p>Hover your cursor over a widget for a moment to get a brief explanation of its functionality.</p>
    </div>);
}