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
        <p>Supported aliases</p>
        <ul>
            <li><b>JPG</b> - jpg, jpeg, jfif, jif, jpe</li>
            <li><b>HEIF</b> - heif, heifs, heic, heics, avci, avcs, hif</li>
        </ul>

        <h2>Animation</h2>
        <p>XL Converter is an image-only tool. Animation support is limited and will be removed in the future. Use FFmpeg instead.</p>
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
                    <td>-</td>
                </tr>
                <tr>
                    <td>WEBP</td>
                    <td>Yes</td>
                    <td>-</td>
                    <td>GIF</td>
                    <td>Partial support</td>
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
    </div>);
}