export default function SupportedFormats(){
    return(<div>
        <h1>Supported Formats</h1>
        <h2>Images</h2>
        <table>
            <thead>
                <tr>
                    <th>Format</th>
                    <th>Writing</th>
                    <th>Reading</th>
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
                    <td>No</td>
                </tr>
                <tr>
                    <td>HEIF</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>JP2</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>BMP</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>ICO</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
                <tr>
                    <td>TIFF <sup>[1]</sup></td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>to PNG</td>
                </tr>
            </tbody>
        </table>
        <p><sup>[1]</sup> Only single-page TIFFs are supported</p>
        <p>Supported aliases</p>
        <ul>
            <li><b>JPG</b> - jpg, jpeg, jfif, jif, jpe</li>
            <li><b>HEIF</b> - heif, heifs, heic, heics, avci, avcs, hif</li>
            <li><b>TIFF</b> - tiff, tif</li>
        </ul>

        <h2>Supported Color Depth</h2>
        <p>XL Converter supports bit depths up to 16-bit. Below are the theoretical limits. </p>
        <table>
            <thead>
                <tr>
                    <th>Format</th>
                    <th>Bit Depth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>JPEG XL</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>AVIF</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>JPG</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>WEBP</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>PNG</td>
                    <td>16</td>
                </tr>
            </tbody>
        </table>

        <h2>Animation</h2>
        <p>XL Converter is focused on images. Animation support is limited and will be removed in the future. Use FFmpeg instead.</p>
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