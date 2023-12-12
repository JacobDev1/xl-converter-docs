import ModifyTab from "../assets/xl_converter_modify_tab.webp";
import ManualDownscaling from "../assets/xl_converter_manual_downscaling.webp";

export default function Downscaling(){
    return(<div>
        <h1>Downscaling</h1>
        <p>Downscaling is available in the <b>Modify tab</b>. All methods maintain <b>the same aspect ratio</b>. They only scale the image down, not up.</p>
        <img src={ManualDownscaling} />

        <h2>Max Resolution</h2>
        <p>Clamps the resolutions to fit in the selected range.</p>
        
        <h2>Percent</h2>
        <p>Scales to that percentage.</p>
        <p>Example: 80% will result in a 20% smaller image</p>

        <h2>Shortest and Longest Side</h2>
        <p>Makes particular side fit under selected size. Helpful with vertical images.</p>

        <h2>Max File Size</h2>
        <p>You should pick a different mode whenever possible. This one is very slow.</p>
        <ul>
            <li>File Size (KiB) - maximum allowed size</li>
            <li>Auto (Linear Regression) - faster and better algorithm. Files may end up slightly bigger than chosen file size.</li>
            <li>Step (%) - value used to progressively shrink an image</li>
        </ul>
        <p><b>Tip: </b>to preserve higher resolution, decrease the quality in the <b>Format Tab</b>.</p>
        <p>Note: If a converted image is already smaller than the declared file size, no downscaling will occur.</p>

        <h2>Resampling Methods</h2>
        <p>You should not change this unless you know a lot about resampling. By default, <b>Lanczos</b> will be used.</p>
        <p>You can enable custom resampling in the <b>Settings Tab</b> (<b>Custom Resampling</b> checkbox).</p>

        <h2>Notes</h2>
        <ul>
            <li>Intelligent Effort (in JPEG XL) is compatible with all downscaling types</li>
            <li>Downscaling is unavailable for animated images and in the "Smallest Lossless" mode</li>
        </ul>
    </div>);
}