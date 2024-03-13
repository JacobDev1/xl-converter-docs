export default function Metadata(){
    return(<>
        <h1>Metadata</h1>
        <p>The metadata options are located in the <b>Modify Tab</b>, over to the right.</p>
        <h2>Encoder</h2>
        <p><b>These options are recommended for most users.</b></p>
        <ul>
            <li><b>Wipe</b> - wipes metadata.</li>    
            <li><b>Preserve</b> - preserves metadata.</li>    
        </ul>

        <p>How encoders respect those preferences.</p>
        <table>
            <tr>
                <th>Format</th>
                <th>Encoder - Wipe</th>
                <th>Encoder - Preserve</th>
            </tr>
            <tr>
                <td>JPEG XL</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>AVIF</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>WEBP</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>JPG (ImageMagick)</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>JPG (JPEGLI)</td>
                <td>No</td>
                <td>No</td>
            </tr>
            <tr>
                <td>PNG</td>
                <td>Varies</td>
                <td>Varies</td>
            </tr>
        </table>
        <p>Using a format unsupported by the encoder will lower the chances of metadata being preserved.</p>

        <h2>ExifTool</h2>
        <p>Those options will ensure metadata will be handled properly, but the conversion will take longer. They can be potentially destructive.</p>
        <ul>
            <li><b>Safe Wipe</b> - deletes all metadata except the one affecting the final image.</li>
            <li><b>Preserve</b> - copies over all metadata.</li>
            <li><b>Unsafe Wipe</b> - deletes every last bit of metadata, including color profile. It can potentially alter the final image.</li>
        </ul>
        
        <h2>Exceptions</h2>
        <p>The following behavior may differ from what's expected.</p>
        <table>
            <tr>
                <th>Format</th>
                <th>Mode</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>JPG -&gt; JPEG XL (lossless)</td>
                <td>Encoder - Wipe</td>
                <td>All metadata is preserved to ensure JPG can be fully reconstructed.</td>
            </tr>
        </table>

        <h2>Notes</h2>
        <p>Preserving metadata is challenging because image formats are rarely 100% compatible with one another.</p>
        <p>If your metadata holds significant value, consider using ExifTool directly to export it to text files.</p>
    </>);
}