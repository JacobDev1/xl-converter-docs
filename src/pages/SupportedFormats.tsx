export default function SupportedFormats(){
    return(<div>
        <h1>Supported Formats</h1>
        <h2>Images</h2>
        <p>XL Converter features an image proxy, which allows you to convert from any image it can decode. For example HEIF -&gt; AVIF.</p>
        <table>
            <thead>
                <tr>
                    <th>Format</th>
                    <th>Encoding</th>
                    <th>Decoding</th>
                    <th>Downscaling</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>JPEG XL</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>AVIF</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>WEBP</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>JPG</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>PNG</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Smallest Lossless</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>HEIF</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>TIFF</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>JP2</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>BMP</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>ICO</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
            </tbody>
        </table>

        <h2>Animation</h2>
        <p>XL Converter is an image-only tool. Animation support is limited, will not be expanded, and may be removed in the future.</p>
        <table>
            <thead>
                <tr>
                    <th>Format</th>
                    <th>Encoding</th>
                    <th>Decoding</th>
                    <th>Encoding Input</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>JPEG XL</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>GIF, APNG</td>
                    <td>Limited to Effort 7</td>
                </tr>
                <tr>
                    <td>WEBP</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>GIF</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>GIF</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>

        <h2>Metadata</h2>
        <ul>
            <li>If <b>Keep Metadata</b> is not checked, XL Converter wipes metadata for privacy. Disabling ExifTool may make it malfunction.</li>
            <li>For JPEG XL, do not assume metadata is completely wiped or completely preserved. Support in 3rd party tools is flaky and I can't get the encoder to behave.</li>
            <li>ExifTool can be disabled in the settings. The fallback mode uses encoder-based implementation, which may preserve or wipe metadata regardless of <b>Keep Metadata</b> state.</li>
            <li>When wiping, ExifTool is set to remove all metadata except the color tags.</li>
        </ul>
    </div>);
}