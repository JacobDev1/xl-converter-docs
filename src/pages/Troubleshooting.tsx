import { Link } from "react-router-dom";

export default function Troubleshooting(){
    return(<div>
        <h1>Troubleshooting</h1>
        <h2>Bug Reports</h2>
        <p>You can submit a bug report using <a href="https://github.com/JacobDev1/xl-converter/issues" rel="noreferrer noopener" target="_blank">GitHub Issues</a>. If it's a critical bug, email me at: contact@codepoems.eu</p>
        <p>Gold tier Patreon subscribers can message me directly about bugs and get priority for fixing them.</p>

        <h2>Some TIFF images fail to convert (single page).</h2>
        <p>Problems with TIFF images are normal. The image is either not up to the specification, incompatible or corrupted.</p>
        <p>You can fix non-compliant TIFF images with <code>tiffcp</code>. Install <code>libtiff-tools</code> with your package manager. Example: <code>tiffcp input.tif output.tif</code>.</p>
        <p>Note: Multipage TIFF images and some compression algorithms are not supported.</p>

        <h2>Lossless JPEG Transcoding fails on some JPEG images.</h2>
        <p>Enable "Normalize". This feature is described <Link to="/lossless-jpeg-transcoding">here</Link>. Keep in mind this option alters the checksums in the JPEG images you can reconstruct.</p>
        <p>While the vast majority of JPEG images can be losslessly transcoded, there are <a href="https://github.com/libjxl/libjxl/issues/895#issuecomment-991148244" rel="noreferrer noopener" target="_blank">minor exceptions</a>.</p>
        <p>Limitations:</p>
        <ul>
            <li>No CMYK images.</li>
            <li>No more than 4 MB of arbitrary tail data is allowed.</li>
            <li>No unused quantization tables.</li>
            <li>Possibly more limitations.</li>
        </ul>

        <h2>This program fails to read an image, but my image viewer can open it fine.</h2>
        <p>Image viewers are a poor metric for verifying image integrity. They will often open slightly corrupted or out of spec images. Problems usually occur during transcoding, where image integrity is crucial.</p>

        <h2>Setting a network disk as output causes problems.</h2>
        <p>This application is not designed to use networking storage as an output location. It performs many transformations on images in the output directory.</p>

        <h2>Image fails to process correctly if it has no extension / an incorrect extension.</h2>
        <p>This program requires the file extension to match its file type. You can use <code>identify</code> from ImageMagick to check the type of an image.</p>
    </div>);
}