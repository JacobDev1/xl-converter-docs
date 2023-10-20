import ModifyTab from "../assets/xl_converter_modify_tab.webp";
import ManualDownscaling from "../assets/xl_converter_manual_downscaling.webp";

export default function Downscaling(){
    return(<div>
        <h1>Downscaling</h1>
        <p>Downscaling is available in the <b>Modify tab</b>. All methods maintain <b>the same aspect ratio</b>. They only scale the image down, not up.</p>
        <img src={ModifyTab} />

        <h2>Dynamic Downscaling</h2>
        <p>Choose <b>Max File Size</b> from the list and set the <b>File Size (KiB)</b> to your preferred value.</p>
        <ul>
            <li>File Size (KiB) - maximum allowed size</li>
            <li>Step (%) - smaller is more precise, but bigger is faster. Keep between 5% - 20%</li>
        </ul>
        <p><b>Tip: </b>to preserve higher resolution, decrease the quality in the <b>Format Tab</b>.</p>
        <p>If a converted image is already smaller than the declared file size, no downscaling will occur.</p>

        <h2>Manual Downscaling</h2>
        <img src={ManualDownscaling} />
        <h3>Percent</h3>
        <p>Scales to that percentage.</p>
        <p>Example: 80% will result in a 20% smaller image</p>
        <h3>Max Resolution</h3>
        <p>Clamps the resolutions to fit in the selected range.</p>
        <h3>Shortest and Longest Side</h3>
        <p>Makes particular side fit under selected size. Helpful with vertical images.</p>

        <h2>Resampling Methods</h2>
        <p>By default, <b>Lanczos</b> will be used. You should not change this setting unless you have a very specific reason to.</p>
        <p>You can enable custom resampling in the <b>Settings Tab</b> (<b>Custom Resampling</b> checkbox).</p>
        <p>Methods</p>
        <ul>
            <li>Lanczos - best default</li>
            <li>Point (a.k.a. Nearest Neighbor) - jagged edges</li>
            <li>Other methods are mostly useless on their own.</li>
        </ul>

        <h2>Limitations</h2>
        <p>Downscaling is unavailable for animated images and in the smallest lossless mode.</p>
    </div>);
}