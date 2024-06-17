export default function JPGReconstruction(){
    return(<>
        <h1>Lossless JPEG Recompression</h1>

        <h2>Overview</h2>
        <p>JPEG XL can preserve the original JPEG while lowering its file size by 15% - 25%.</p>
        <p>This process is reversible - you can reconstruct the original JPEG file with an identical checksum.</p>

        <h2>Lossless JPEG Recompression</h2>
        <ol>
            <li>Add JPEG images</li>
            <li>Select "Lossless JPEG Recompression" from the format selector</li>
            <li>Convert</li>
        </ol>
        <p>The resulting JPEG XL file will have embedded reconstruction data, which can be used to reverse this process.</p>
        <p>Increasing <b>Effort</b> will reduce the file size.</p>

        <h2>JPEG Reconstruction</h2>
        <p>This function reverses the recompression, resulting in the original JPEG image.</p>
        <ol>
            <li>Add JPEG XL images (jxl)</li>
            <li>Select "JPEG Reconstruction" from the format selector</li>
            <li>Convert</li>
        </ol>
        <p>The "PNG Fallback" option will decode JPEG XL to PNG if reconstruction data was not found.</p>

        <h2>Metadata</h2>
        <p>In the aforementioned modes, metadata will always be preserved regardless of settings. Preserving Date & Time works as usual.</p>
    </>);
}