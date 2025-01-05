export default function Downscaling(){
    return(<div>
        <h1>Downscaling</h1>
        <p>Downscaling is available in the <b>Modify tab</b>. Compared to other software, downscaling in XL Converter works in the following way:</p>
        <ul>
            <li>Aspect ratios are always maintained.</li>
            <li>Resolution can only be reduced, not increased.</li>
        </ul>

        <h2>Resolution</h2>
        <p>Clamps the resolutions to fit in the selected range.</p>
        
        <h2>Percent</h2>
        <p>Scales to the specified percentage of each dimension.</p>
        <p>For example, 50% of 1920 x 1080 will result in 960 x 540.</p>

        <h2>Shortest and Longest Side</h2>
        <p>Makes a particular side fit to the selected resolution.</p>

        <h2>Megapixels</h2>
        <p>Scales down to megapixel count. A megapixel is the total pixel count of an image divided by a million.</p>
        <p>Formula: (width * height) / 1 000 000</p>
        <p>Reference (rounded):</p>
        <ul>
            <li>0.9 MP - 1280 x 720 (HD)</li>
            <li>2.1 MP - 1920 x 1080 (Full HD)</li>
            <li>8.3 MP - 3840 x 2160 (4K)</li>
            <li>33.2 MP - 7680 x 4320 (8K)</li>
        </ul>

        <h2>File Size</h2>
        <p>Scales image to approximated file size in kibibytes.</p>
        <p>It is much slower than other downscaling modes. Its accuracy and reliability varies. Other modes are recommended instead.</p>

        <h2>Resampling Methods</h2>
        <p>You can enable custom resampling in the <b>Settings Tab</b> (<b>Custom Resampling</b> checkbox).</p>
        <p>You should not change this unless you are very knowledgeable about resampling. By default, <b>Lanczos</b> will be used.</p>

        <h2>Notes</h2>
        <ul>
            <li>Intelligent Effort (in JPEG XL) is compatible with all downscaling types</li>
            <li>Downscaling is unavailable for animated images and in the "Smallest Lossless" mode</li>
        </ul>
    </div>);
}