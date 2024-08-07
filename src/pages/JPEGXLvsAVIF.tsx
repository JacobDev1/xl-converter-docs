import digital_art_avif from '../assets/test_digital_art_avif.webp';
import digital_art_jxl from '../assets/test_digital_art_jxl.webp';
import photo_avif from '../assets/test_photo_avif.webp';
import photo_jxl from '../assets/test_photo_jxl.webp';

export default function JPEGXLvsAVIF() {
    return(<>
        <h1>JPEG XL vs AVIF</h1>

        <h2>Lossy Efficiency</h2>
        <p>JPEG XL and AVIF are both modern formats offering high compression ratios.</p>
        <p>Recommended use cases:</p>
        <p>JPEG XL</p>
        <ul>
            <li>Photographs</li>
            <li>Large Images (8k and larger)</li>
            <li>Scanned Documents</li>
        </ul>
        <p>AVIF</p>
        <ul>
            <li>Digital Art</li>
            <li>Screenshots</li>
            <li>Synthetic Images</li>
        </ul>

        <h2>Visual Comparison</h2>
        <p>Images have been cropped and upscaled for clearer comparison. The differences may not be noticeable in everyday use.</p>
        
        <h3>Photos</h3>
        <p>JPEG XL (VarDCT, Quality 90) - 3.7 MiB</p>
        <img src={photo_jxl} />
        <p>AVIF (Quality 90) - 4.6 MiB</p>
        <img src={photo_avif} />
        <p>JPEG XL yields smaller file sizes and produces fewer artifacts than AVIF in photos. It performs exceptionally well in the high-quality range. Professionals may prefer it for its support for high bit depth and high resolution.</p>
        <p>On the other hand, AVIF produces sharper photos in the low-to-medium quality range.</p>
        
        <h3>Digital Art</h3>
        <p>JPEG XL (Modular, Quality 80) - 167 KiB</p>
        <img src={digital_art_jxl} />
        <p>AVIF (Quality 80) - 168 KiB</p>
        <img src={digital_art_avif} />
        <p>AVIF performs best on images with sharp edges and flat areas. It also maintains accurate colors and prevents discolored spots.</p>

        <h3>Try Comparing Yourself</h3>
        <p>Convert an image to both formats, open GIMP, click on "File" and "Open as Layers...". Toggle between the layers to compare the images.</p>

        <h2>Lossless</h2>
        <p>JPEG XL lossless mode offers the best efficiency. WebP performs better on certain images, but on average JPEG XL is the <a href="https://codepoems.eu/posts/how-to-reduce-the-size-of-lossless-images/" target="_blank">best</a>. AVIF lossless mode is nothing worthy of note.</p>

        <h2>Conversion Speed</h2>
        <p>Higher is better</p>
        <table>
            <tr>
                <th>Format</th>
                <th>Encoder</th>
                <th>Speed</th>
            </tr>
            <tr>
                <td>JPEG</td>
                <td>JPEGLI</td>
                <td>10.26x</td>
            </tr>
            <tr>
                <td>JPEG</td>
                <td>libjpeg</td>
                <td>1.09x</td>
            </tr>
            <tr>
                <td>JPEG XL</td>
                <td>libjxl</td>
                <td>1x</td>
            </tr>
            <tr>
                <td>AVIF</td>
                <td>libavif</td>
                <td>0.7x</td>
            </tr>
        </table>
        <p>Speed / Effort were set to default. Input format was PNG.</p>

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
                <td>*65,536 x 65,536</td>
            </tr>
            <tr>
                <td>Max Bit Depth</td>
                <td>32 bit</td>
                <td>12 bit</td>
            </tr>
            <tr>
                <td>Compatibility</td>
                <td>Low</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Lossy</td>
                <td>Excellent</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Lossless</td>
                <td>Excellent</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Transparency</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Additional Features</td>
                <td>Lossless JPEG Recompression</td>
                <td></td>
            </tr>
        </table>
        <p>*Only 8193 x 4320 natively, larger sizes are achieved with tiling (which lowers efficiency and introduces artifacts).</p>

        <h2>Technical State</h2>
        <p>While JPEG XL is more future-oriented, it's still in its early stages. Bugs are to be expected. The JPEG XL repo states the following:</p>
        <p><em>"Note: This release is for evaluation purposes and may contain bugs [...]"</em></p>

        <h2>Additional Information</h2>
        <p>It's important to note that both AVIF and JPEG XL significantly outperform HEIF. Consider not using HEIF as its license makes it hard to support.</p>
        <p>Samples:{' '}
            <a href="https://pixabay.com/vectors/girl-clouds-stars-art-calm-anime-8435339/" target="_blank" rel="noreferrer">Digital Art</a> / {' '}
            <a href="https://unsplash.com/photos/gray-concrete-building-during-daytime-q0tlOqyn_fk/" target="_blank" rel="noreferrer">Photos</a>
        </p>
        <p>XL Converter uses AOM-AV1 for AVIF. Other AV1 encoders do not match its quality.</p>
    </>);
}