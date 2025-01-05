export default function JPGReconstruction(){
    return(<>
        <h1>Lossless JPEG Transcoding</h1>

        <h2>Overview</h2>
        <p>JPEG XL can preserve the original JPEG while reducing its file size by 16% - 22%.</p>
        <p>This process is reversible - you can reconstruct the original JPEG image with an identical checksum.</p>

        <h2>Lossless JPEG Transcoding</h2>
        <ol>
            <li>Add JPEG images</li>
            <li>Select "Lossless JPEG Transcoding" from the format selector</li>
            <li>Convert</li>
        </ol>
        <p>The resulting JPEG XL file will have embedded reconstruction data, which can be used to reverse this process.</p>

        <h2>JPEG Reconstruction</h2>
        <p>This function reverses the recompression, resulting in the original JPEG image.</p>
        <ol>
            <li>Add JPEG XL images (jxl)</li>
            <li>Select "JPEG Reconstruction" from the format selector</li>
            <li>Convert</li>
        </ol>
        <p>The "PNG Fallback" option will decode JPEG XL to PNG if reconstruction data was not found.</p>

        <h2>Lossless JPEG Transcoding - Options</h2>
        <h3>Effort</h3>
        <p>Increasing Effort in this case always reduces file size and slow down the transcoding. Effort 9 offers the smallest file size.</p>
        <h3>Verify</h3>
        <p>Validates that a JPEG image can be reconstructed, and its checksum matches the original. An exception will be displayed if any problems occur.</p>
        <p>Enabling this option is unnecessary because the transcoding is highly reliable. However, it does provide an additional reassurance.</p>
        <p>If "Normalize" is enabled, the checksum of the normalized image will be used instead.</p>
        <p>Images will take slightly longer to process if enabled.</p>
        <h3>Normalize</h3>
        <p>Allows for transcoding problematic JPEG images. Rewrites image structure without affecting quality or metadata.</p>
        <p>Discards unnecessary information, such as unused quantization tables or arbitrary tail data. It may also lower file size.</p>
        <p>With this enabled, the checksum of a JPEG image you can reconstruct will change and its file size will increase.</p>
        <p>Equivalent to <code>jpegtran -copy all -optimize</code>. Images will take slightly longer to process if enabled.</p>

        <h2>Metadata</h2>
        <p>In the aforementioned modes, metadata will always be preserved regardless of settings. Preserving Date & Time works as usual.</p>
        
        <h2>Lossless Compression vs Lossless JPEG Transcoding</h2>
        <ul>
            <li>Lossless Compression - standard lossless compression.</li>
            <li>Lossless JPEG Transcoding - a special type of lossless compression only available in JPEG XL exclusively for JPEG images.</li>
        </ul>
        <p>Only the standard compression is applied in when "JPEG XL" format is selected. This is done for privacy reasons as recompression requires metadata preservation.</p>
        <p>While this behavior can be changed, you should use dedicated mode for this. Namely:</p>
        <ul>
            <li>Lossless JPEG Transcoding</li>
            <li>JPEG Reconstruction</li>
        </ul>
        <p>The performance of these modes is uncapped because the RAM required for those operations is tiny. They also offer safeguard, extra features, and avoid non-standard behavior.</p>
    </>);
}