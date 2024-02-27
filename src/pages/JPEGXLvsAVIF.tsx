import digital_art_avif from '../assets/test_digital_art_avif.webp';
import digital_art_jxl from '../assets/test_digital_art_jxl.webp';
import digital_art_jpg from '../assets/test_digital_art_jpg.webp';
import photo_avif from '../assets/test_photo_avif.webp';
import photo_jxl from '../assets/test_photo_jxl.webp';

export default function JPEGXLvsAVIF() {
    return(<>
        <h1>JPEG XL vs AVIF</h1>
        
        <h2>Lossy Efficiency</h2>
        <p>Both JPEG XL and AVIF provide similar quality with different strengths.</p>
        <p>Recommended uses:</p>
        <p>AVIF</p>
        <ul>
            <li>Screenshots</li>
            <li>Digital Art</li>
            <li>Synthetic Imagery</li>
        </ul>
        <p>JPEG XL</p>
        <ul>
            <li>Photos</li>
            <li>Large Images (8k)</li>
            <li>Scanned Documents</li>
        </ul>

        <h2>Visual Comparison</h2>
        <p>Images have been cropped and upscaled. The differences may not be noticeable in everyday use.</p>
        
        <h3>Photos</h3>
        <p>JPEG XL (VarDCT, Quality 90) - 3.7 MiB</p>
        <img src={photo_jxl} />
        <p>AVIF (Quality 90) - 4.6 MiB</p>
        <img src={photo_avif} />
        <p>JPEG XL yields smaller size and produces less artifacts than AVIF in photos with high quality preset. Experts may prefer it for its high bit-depth and high resolution support.</p>
        <p>On the other hand, AVIF produces sharper image in medium to low quality presets.</p>
        
        <h3>Digital Art</h3>
        <p>Legacy JPG (Quality 53) - 168 KiB</p>
        <img src={digital_art_jpg} />
        <p>JPEG XL (Modular, Quality 80) - 167 KiB</p>
        <img src={digital_art_jxl} />
        <p>AVIF (Quality 80) - 168 KiB</p>
        <img src={digital_art_avif} />
        <p>AVIF excels at maintaining accurate colors and preserving edges with very few artifacts in digital art. It works the same way on screenshots.</p>

        <h3>Note</h3>
        <p>It's hard to make an accurate comparison, so try comparing yourself.</p>
        <p>Convert an image to both formats, import them into a canvas in GIMP, then toggle between the layers.</p>

        <h2>Lossless</h2>
        <p>JPEG XL lossless mode is very efficient. WEBP may perform better on certain images, but on average JPEG XL is the <a href="https://codepoems.eu/posts/how-to-reduce-the-size-of-lossless-images/" target="_blank">best</a>. AVIF does feature a lossless mode, but I decided not to implement as it is much worse than WEBP's.</p>

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
        <p>*Only 8193 x 4320 natively, larger sizes are achieved with tiling (which lowers efficiency beyond that resolution)</p>

        <h2>Technical State</h2>
        <p>While JPEG XL is more future-oriented, it's still in its early stages.</p>
        <p>The JPEG XL repo states the following:</p>
        <p><em>"Note: This release is for evaluation purposes and may contain bugs [...]"</em></p>

        <h2>Additional Information</h2>
        <p>It's important to note that both AVIF and JPEG XL significantly outperform HEIF.</p>
        <p>Samples:{' '}
            <a href="https://pixabay.com/vectors/girl-clouds-stars-art-calm-anime-8435339/" target="_blank" rel="noreferrer">Digital Art</a> / {' '}
            <a href="https://unsplash.com/photos/gray-concrete-building-during-daytime-q0tlOqyn_fk/" target="_blank" rel="noreferrer">Photos</a>
        </p>
        <p>Encoders:
            cjxl from libjxl 0.8.2 / libavif (AOM-AV1 3.8.0)
        </p>
        <p>XL Converter uses AOM-AV1 for AVIF. Other AV1 encoders provide worse quality. Keep this in mind when comparing your results.</p>
    </>);
}