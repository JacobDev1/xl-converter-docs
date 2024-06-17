export default function Metadata(){
    return(<>
        <h1>Metadata</h1>
        <p>All metadata options are located in the <b>Modify Tab</b>.</p>
        <h2>Encoder</h2>
        <p><b>These options are recommended for most users.</b> They are faster and less likely to cause any issues.</p>
        <ul>
            <li><b>Wipe</b> - wipes metadata. Works well for encoding everything except PNG, where it depends on the input format.</li>    
            <li><b>Preserve</b> - preserves metadata. Works on common input formats, may not work for less popular ones.</li>
        </ul>

        <h2>ExifTool</h2>
        <p>ExifTool will handle your metadata more thoroughly, but the conversion will take longer.</p>
        <ul>
            <li><b>Wipe</b> - deletes all metadata except the one affecting the final image.</li>
            <li><b>Preserve</b> - copies over all metadata.</li>
            <li><b>Unsafe Wipe</b> - deletes every last bit of metadata, including color profile. It can potentially alter the final image.</li>
        </ul>
        <p>Corresponding commands</p>
        <ul>
            <li><b>Wipe</b> - <code>exiftool -all= -tagsFromFile @ --icc_profile:all --ColorSpace:all -overwrite_original &lt;dst&gt;</code></li>
            <li><b>Preserve</b> - <code>exiftool -tagsfromfile &lt;src&gt; -overwrite_original &lt;dst&gt;</code></li>
            <li><b>Unsafe Wipe</b> - <code>exiftool -all= -overwrite_original &lt;dst&gt;</code></li>
        </ul>

        <h2>Notes</h2>
        <p>Preserving metadata is challenging because image formats are rarely 100% compatible with one another.</p>
        <p>If your metadata holds significant value, consider using ExifTool directly to export it to text files.</p>
        
        <h2>Exceptions</h2>
        <p>The following behavior may differ from what's expected.</p>
        <table>
            <tr>
                <th>Format</th>
                <th>Mode</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>JPEG -&gt; JPEG XL (lossless)</td>
                <td>Encoder - Wipe</td>
                <td>All metadata is preserved to ensure JPEG can be fully reconstructed.</td>
            </tr>
        </table>

        <h2>Technical Explanation</h2>
        <ul>
            <li>Encoder metadata modes use encoder parameters. For example <code>--ignore-exif</code> for <code>avifenc</code>. This is quick and safe for the image visually. The effectiveness of these modes varies.</li>
            <li>ExifTool metadata modes run the ExifTool binary with corresponding commands. Color profile is set to be carried over, but edge-cases happen.</li>
        </ul>
    </>);
}