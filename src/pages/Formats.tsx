import { Link } from "react-router-dom";

import SmallestLossless from "../assets/xl_converter_smallest_lossless.webp";

export default function Formats(){
    return(<div>
        <h1>Formats</h1>

        <h2>Formats - Overview</h2>
        <p>Estimated compression efficiency.</p>
        <table>
            <thead>
                <th>Format</th>
                <th>Lossy</th>
                <th>Lossless</th>
                <th>Compatibility</th>
                <th>Transparency</th>
            </thead>
            <tbody>
                <tr>
                    <td>JPEG XL</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>AVIF</td>
                    <td>High</td>
                    <td>-</td>
                    <td>Medium</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>WebP</td>
                    <td>Medium</td>
                    <td>Medium</td>
                    <td>Medium-High</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>JPEG</td>
                    <td>Low</td>
                    <td>-</td>
                    <td>High</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>PNG</td>
                    <td>-</td>
                    <td>Low</td>
                    <td>High</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>

        <h2>Formats - Lossy</h2>
        <h3>JPEG XL</h3>
        <ul>
            <li>Quality</li>
            <ul>
                <li>90 - visually lossless</li>
                <li>80 - high quality and reasonable file size</li>
                <li>70 - medium-high quality and small file size</li>
                <li>60 - space-saving, noticeable blurriness</li>
            </ul>
            <li>Effort - higher is better quality but slower. Its behavior depends on the mode used.
                <ul>
                    <li>7 - normal speed and good quality</li>
                    <li>9 - slower speed and better quality or smaller file size</li>
                    <li>Intelligent Effort - prioritizes smaller file size</li>
                </ul>
            </li>
            <li>Effort - behavior
                <ul>
                    <li>Lossy - higher values result in higher quality. File size may end up larger, especially for non-photographic images.</li>
                    <li>Lossy (Modular) - higher values result in better quality and smaller file size, but only for non-photographic images.</li>
                    <li>Lossless - higher values always result in lower file size.</li>
                </ul>
            </li>
            <li>Lossy Mode - Modular
                <ul>
                    <li>Disabled - best for photos and complex images.</li>
                    <li>Enabled - best for images with sharp edges and flat areas, like digital art, screenshots or documents. Can lower file size and/or improve quality.</li>
                </ul>
            </li>
        </ul>
        <p>Learn more about <a href="https://codepoems.eu/posts/vardct-vs-modular-in-jpeg-xl/" target="_blank">modes in JPEG XL</a>.</p>

        <h3>AVIF</h3>
        <ul>
            <li>Quality - higher is better quality and bigger size
                <ul>
                    <li>90 - visually lossless</li>
                    <li>80 - high quality and file size</li>
                    <li>70 - good balance between quality and file size</li>
                    <li>60 - space-saving</li>
                </ul>
            </li>
            <li>Speed - lower is slower, better quality, and smaller file size 
                <ul>
                    <li>6 - regular speed, and good quality</li>
                    <li>0 - very slow, the best quality, and smallest file size</li>
                </ul>
            </li>
        </ul>
      
        <h3>WebP</h3>
        <ul>
            <li>Quality
                <ul>
                    <li>90 - high quality and large file size</li>
                    <li>80 - reasonable quality and file size</li>
                    <li>60 - looks fine only from far away</li>
                </ul>
            </li>
            <li>Method
                <ul>
                    <li>6 - slow, smallest file size</li>
                    <li>4 - faster, bigger file size</li>
                </ul>
            </li>
        </ul>

        <h3>JPEG</h3>
        <li>Quality
            <ul>
                <li>95 - high quality and very large file size</li>
                <li>90 - reasonably high quality and large file size</li>
                <li>80 - reasonable quality and file size</li>
                <li>60 - looks fine only from far away</li>
            </ul>
        </li>

        <h3>Chroma Subsampling</h3>
        <p>Controls color compression. Lower number means less color information and smaller file size.</p>
        <ul>
            <li>Default - usually picks 4:4:4, but tries to match the input</li>
            <li>4:4:4 - full color, the highest quality and file size</li>
            <li>4:2:2 - less color (small visual difference), and significant space-saving</li>
            <li>4:2:0 - colors may appear washed out</li>
            <li>4:0:0 - grayscale</li>
        </ul>
        <p><a href="https://en.wikipedia.org/wiki/Chroma_subsampling#Regarding_gamma_and_transfer_functions" target="_blank">Learn more</a></p>
        <p>If you are confused, just leave it at default.</p>

        <h2>Formats - Lossless</h2>
        <p>Lossless encoding is available for <b>JPEG XL, WebP or PNG</b>.</p>

        <h3>Smallest Lossless</h3>
        <p>Converts to multiple formats, then picks the smallest one. Can save up to 25% of space.</p>
        <p>The checkboxes control which formats will be used.</p>
        <img src={SmallestLossless} />

        <p>While JPEG XL features the most efficient lossless compression on average, other formats can outperform it on certain images.</p>
        <p>Remember the <Link to="/supported-formats">bit depth limits</Link> of each format.</p>

    </div>);
}