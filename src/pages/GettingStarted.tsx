import Output from "../assets/xl_converter_output.webp";

export default function GettingStarted(){
    return(<div>
        <h1>Getting Started</h1>
        <p>XL Converter is a powerful image converter for the latest formats.</p>
        <img src={Output} />

        <h2>Installation</h2>
        <a href="https://codepoems.eu/xl-converter" target="_blank"><button>Download Page</button></a>
        <p>Only download XL Converter from codepoems.eu.</p>

        <h3>Windows</h3>
        <p>Double-click on the downloaded file. You will get a warning, click on</p>
        <ul>
            <li>More Info (link)</li>
            <li>Run Anyway (button)</li>
        </ul>
        <p>This happens for every program that hasn't rented an expensive digital signature, which serves no other purpose than to remove this popup. The Ardour developers put it nicely <a href="https://ardour.org/first_time_windows.html" target="_blank">into words</a>.</p>

        <h3>Linux</h3>
        <ul>
            <li>Unpack the archive</li>
            <li>Run <code>./install.sh</code></li>
        </ul>
        <p>A shortcut will be added to both the start menu and the desktop.</p>

        <h2>Image Viewers</h2>
        <p>You will need to install an image viewer with support for AVIF and JPEG XL.</p>
        <h3>Windows</h3>
        <ul>
            <li><a href="https://imageglass.org/" target="_blank">ImageGlass</a> - easiest to use</li>
            <li>
                <a href="https://xnview.com/" target="_blank">XnViewMP</a>{' / '}
                <a href="https://photoqt.org/" target="_blank">PhotoQt</a>{' / '}
                <a href="https://picview.org/" target="_blank">PicView</a>{' / '}
                <a href="https://github.com/nomacs/nomacs" target="_blank">nomacs</a> - alternatives
            </li>
        </ul>
        <h3>Linux</h3>
        <h4>AVIF</h4>
        <p>Install the package.</p>
        <p><code>sudo apt install libavif-gdk-pixbuf</code></p>
        <p><a href="https://codepoems.eu/posts/how-to-open-avif-images-on-linux/" target="_blank">Detailed tutorial</a></p>
        <h4>JPEG XL</h4>
        <p>If you're security conscious, you might want to just stick with AVIF.</p>
        <p>Download the latest <a href="https://github.com/libjxl/libjxl/releases">binaries</a> for your distribution.</p>
        <p>Unpack then install them</p>
        <p><code>sudo dpkg -i *deb</code></p>
        <p><a href="https://codepoems.eu/posts/how-to-open-jpeg-xl-images-on-linux/" target="_blank">Detailed tutorial</a></p>

        <h2>Updates</h2>
        <p>Check for updates in the <b>About tab</b>.</p>

        <h2>Is XL Converter Safe?</h2>
        <p>The program is safe to use and the source code is publicly available.</p>
    </div>);
}