import test_avif from '../assets/test_avif.webp';
import test_jxl from '../assets/test_jxl.webp';
import test_jpg from '../assets/test_jpg.webp';
import digital_art_avif from '../assets/test_digital_art_avif.webp';
import digital_art_jxl from '../assets/test_digital_art_jxl.webp';
import digital_art_jpg from '../assets/test_digital_art_jpg.webp';
import large_img_jpg from '../assets/test_large_jpg.webp';
import large_img_jxl from '../assets/test_large_jxl.webp';
import large_img_avif from '../assets/test_large_avif.webp';
import photo_hq_avif from '../assets/test_photo_hq_avif.webp';
import photo_hq_jxl from '../assets/test_photo_hq_jxl.webp';

export default function JPEGXLvsAVIF() {
    return(<>
        <h1>JPEG XL vs AVIF</h1>
        
        <h2>Lossy Efficiency</h2>
        <p>Both JPEG XL and AVIF provide similar quality with different strengths.</p>
        <p>Recommended uses:</p>
        <p>AVIF</p>
        <ul>
            <li>Desktop Screenshots</li>
            <li>Digital Drt</li>
            <li>Saving Space</li>
            <li>Medium to Low Quality Preset</li>
        </ul>
        <p>JPEG XL</p>
        <ul>
            <li>Scanned Documents</li>
            <li>Website Screenshots (full-page)</li>
            <li>Large Images (8k)</li>
            <li>High Quality Preset</li>
            <li>Lossless Images</li>
        </ul>
        
        <h2>Visual Test</h2>
        <p>All Images are first converted, then cropped and enlarged to emphasize differences. <b>These differences will not be noticeable in everyday use.</b> All file sizes are roughly the same.</p>
        <h3>Digital Text</h3>
        <p>Legacy JPG</p>
        <img src={test_jpg} />
        <p>JPEG XL</p>
        <img src={test_jxl} />
        <p>AVIF</p>
        <img src={test_avif} />
        <p><b>AVIF produces digital text with better colors and fewer artifacts</b></p>

        <h3>Digital Art</h3>
        <p>Legacy JPG</p>
        <img src={digital_art_jpg} />
        <p>JPEG XL</p>
        <img src={digital_art_jxl} />
        <p>AVIF</p>
        <img src={digital_art_avif} />
        <p><b>AVIF excels in maintaining accurate colors and edges with fewer artifacts in digital art.</b> JPEG XL does generate occasional gray spots and blurs non-outlined edges.</p>

        <h3>Photos</h3>
        <p>JPEG XL</p>
        <img src={photo_hq_jxl} />
        <p>AVIF</p>
        <img src={photo_hq_avif} />
        <p><b>For photos, the visual quality of both is similar, but JPEG XL usually yields 30% smaller file size in high quality presets.</b></p>
        <p>On the other hand, <b>AVIF performs better in medium to low quality presets.</b></p>

        <h3>Very Large Images</h3>
        <p>The image used here is large full-page screenshots. As previously mentioned, all images have been cropped.</p>
        <p>Legacy JPG</p>
        <img src={large_img_jpg} />
        <p>JPEG XL</p>
        <img src={large_img_jxl} />
        <p>AVIF</p>
        <img src={large_img_avif} />
        <p><b>For large images (8 k) JPEG XL outperforms AVIF, regardless of context</b> and produces much smaller file sizes.</p>

        <h3>Suggestion</h3>
        <p>To compare, convert an image to both formats, import them into a canvas in GIMP, then toggle between them. See which one you like.</p>

        <h2>Conversion Speed</h2>
        <p>Higher is better</p>
        <table>
            <tr>
                <th>Format</th>
                <th>Speed</th>
            </tr>
            <tr>
                <td>Legacy JPG</td>
                <td>1x</td>
            </tr>
            <tr>
                <td>JPEG XL (XL Converter)</td>
                <td>0.4x</td>
            </tr>
            <tr>
                <td>JPEG XL (cjxl)</td>
                <td>0.2x</td>
            </tr>
            <tr>
                <td>AVIF</td>
                <td>0.17x</td>
            </tr>
        </table>

        <h2>Capabilities</h2>
        <table>
            <tr>
                <th>Feature</th>
                <th>JPEG XL</th>
                <th>AVIF</th>
            </tr>
            <tr>
                <td>Max Resolution</td>
                <td>1,073,741,823 x 1,073,741,823</td>
                <td>*65536 x 65536</td>
            </tr>
            <tr>
                <td>Max Bit Depth</td>
                <td>32 bit</td>
                <td>12 bit</td>
            </tr>
            <tr>
                <td>Compatibility</td>
                <td>Low</td>
                <td>High</td>
            </tr>
            <tr>
                <td>Lossy</td>
                <td>Excellent</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Lossless</td>
                <td>Excellent</td>
                <td>Bad</td>
            </tr>
            <tr>
                <td>Encoding Speed</td>
                <td>Fast</td>
                <td>Slow</td>
            </tr>
            <tr>
                <td>Transparency</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Security</td>
                <td>Average</td>
                <td>Good</td>
            </tr>
            <tr>
                <td>Additional Features</td>
                <td>JPEG Reconstruction</td>
                <td></td>
            </tr>
        </table>
        <p>*Only 8193 x 4320 natively, larger sizes are achieved with tiling (which lowers efficiency beyond this resolution)</p>

        <h2>Additional Information</h2>
        <p>While JPEG XL is more future-oriented, it's still in its early stages. AVIF, on the other hand, is more refined.</p>
        <p>The JPEG XL's GitHub page mentions that each release is intended for evaluation and may contain bugs. If you choose to use JPEG XL, you may need to deal with technical issues.</p>
        <p>It's important to note that both AVIF and JPEG XL significantly outperform HEIF.</p>
        <p>I am not affiliated with any format or their developers, nor have I received a single cent for the 1000+ hours of work I have done on XL Converter.</p>
        <p>Credits:{' '}
            <a href="https://www.linuxmint.com/download.php/" target="_blank" rel="noreferrer">Digital Text</a> / {' '}
            <a href="https://pixabay.com/users/andsproject-26081561/" target="_blank" rel="noreferrer">Digital Art</a> / {' '}
            <a href="https://unsplash.com/photos/gray-concrete-building-during-daytime-q0tlOqyn_fk/" target="_blank" rel="noreferrer">Photos</a>
        </p>
        <p>Encoders:
            cjxl from libjxl 0.8.2 / libavif (AOM-AV1 3.8.0)
        </p>
        <p>XL Converter uses AOM-AV1 for AVIF. Other libraries will not perform as well.</p>
    </>);
}