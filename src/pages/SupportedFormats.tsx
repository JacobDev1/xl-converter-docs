import Table, { TableData } from "../components/Table";

const supportedFormatsData: TableData = {
    columns: [
        { key: "format", header: "Format", align: "left" },
        { key: "reading", header: "Reading", align: "center" },
        { key: "writing", header: "Writing", align: "center" },
        { key: "ext", header: "Extensions", align: "left" },
    ],
    rows: [
        { format: "JPEG XL", writing: "Yes", reading: "Yes", ext: "jxl" },
        { format: "AVIF", writing: "Yes", reading: "Yes", ext: "avif" },
        { format: "WebP", writing: "Yes", reading: "Yes", ext: "webp" },
        { format: "JPEG", writing: "Yes", reading: "Yes", ext: "jpg, jpeg, jfif, jif, jpe" },
        { format: "PNG", writing: "Yes", reading: "Yes", ext: "png" },
        { format: "TIFF", writing: "No", reading: "Yes", ext: "tiff, tif" },
        { format: "HEIF", writing: "No", reading: "Yes", ext: "heif, heifs, heic, heics, avci, avcs, hif" },
        { format: "JP2", writing: "No", reading: "Yes", ext: "jp2" },
        { format: "BMP", writing: "No", reading: "Yes", ext: "bmp" },
        { format: "ICO", writing: "No", reading: "Yes", ext: "ico" },
    ]
}

export default function SupportedFormats(){
    return(<div>
        <h1>Supported Formats</h1>
        <Table tableData={supportedFormatsData}/>
        <p>Multipage images are not supported</p>

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