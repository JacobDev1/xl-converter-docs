export default function Metadata(){
    return(<>
        <h1>Metadata</h1>
        <p>All metadata options are located in the <b>Modify Tab</b>.</p>
        <h2>Encoder</h2>
        <p><b>These options are recommended for most users.</b> They are faster and less likely to cause issues.</p>
        <ul>
            <li><b>Wipe</b> - wipes metadata. Works well for encoding everything except PNG, where it depends on the input format.</li>    
            <li><b>Preserve</b> - preserves metadata. Works on common input formats, may not work for less popular ones.</li>
        </ul>

        <h2>ExifTool</h2>
        <p>ExifTool will handle your metadata more thoroughly, but the conversion will take longer and may affect the color profile.</p>
        <ul>
            <li><b>Wipe</b> - deletes all metadata except that which affects the final image.</li>
            <li><b>Preserve</b> - copies all metadata.</li>
            <li><b>Unsafe Wipe</b> - deletes every last bit of metadata, including color profile. This may alter colors displayed.</li>
            <li><b>Custom</b> - empty. It allows you to specify custom behavior (in the settings).</li>
        </ul>
        <p>View and edit ExifTool commands in the settings (<b>Settings -&gt; Advanced -&gt; ExifTool Arguments</b>).</p>

        <h2>Notes</h2>
        <p>Preserving metadata is challenging because image formats are rarely 100% compatible with one another.</p>
        <p>If your metadata holds significant value, consider using ExifTool directly to export it to text files.</p>
        
        <h2>Exception</h2>
        <p>Lossless JPEG Recompression always preserves metadata, so the image can be fully reconstructed.</p>

        <h2>Technical Explanation</h2>
        <ul>
            <li>Encoder metadata modes use encoder arguments. For example <code>--ignore-exif</code> for <code>avifenc</code>. This is quick and safe for the image visually.</li>
            <li>ExifTool metadata modes run the ExifTool binary with the corresponding commands.</li>
        </ul>
    </>);
}