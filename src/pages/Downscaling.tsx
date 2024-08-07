export default function Downscaling(){
    return(<div>
        <h1>Downscaling</h1>
        <p>Downscaling is available in the <b>Modify tab</b>. All methods maintain <b>the same aspect ratio</b>. They only scale the image down, not up.</p>

        <h2>Resolution</h2>
        <p>Clamps the resolutions to fit in the selected range.</p>
        
        <h2>Percent</h2>
        <p>Scales to that percentage.</p>
        <p>Example: 80% will result in both width and height being 80% of the original resolution.</p>

        <h2>Shortest and Longest Side</h2>
        <p>Makes a particular side fit to the selected resolution.</p>

        <h2>File Size</h2>
        <p>Scales image to approximated file size in kibibytes.</p>
        <p>It is about 4 times slower than regular conversion. Its accuracy varies. You may prefer using different modes.</p>
        <p>You can preserve higher resolution by decreasing the quality (output tab). </p>
        <p>The algorithm uses linear regression to predict image scale.</p>

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