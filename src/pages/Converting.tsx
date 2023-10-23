import Output from "../assets/xl_converter_output.webp";
import SmallestLossless from "../assets/xl_converter_smallest_lossless.webp";
import Formats from "../assets/xl-converter_formats.webp";

export default function Converting(){
    return(<div>
        <h1>Converting</h1>
        <p>Conversion is configured in the <b>Output tab</b>.</p>
        <img src={Output} />

        <h2>Save To</h2>
        <h3>Source Folder</h3>
        <p>Each image will be saved in the same folder as its source.</p>
        <h3>Custom</h3>
        <p>All images will be saved to that particular folder. If a folder doesn't exist, it will be created.</p>
        <p>Copy and paste a path or click on the button with 3 dots to use a dialog.</p>
        <p>There are two types of paths:</p>
        <ul>
            <li>Absolute path (e.g. <code>C:/Images/Converted</code>)</li>
            <li>Relative path (e.g. <code>Converted</code>) - saves to a folder of that name next source image</li>
        </ul>

        <h2>Formats - Introduction</h2>
        <p>You should understand the difference between the two types of compression first.</p>
        <ul>
            <li>Lossy - file size shrinks along with the quality.</li>
            <li>Lossless - file size can shrink, but the quality stays the same.</li>
        </ul>
        <p>Modern formats offer better efficiency (i.e. smaller file size). No single format is good at everything.</p>
        
        <h2>Formats - Overview</h2>
        <img src={Formats} />
        <p>Great quality at a small size and but not widely adopted and slow to convert.</p>
        <ul>
            <li>JPEG XL - great for both lossy and lossless</li>
            <li>AVIF - as good as JPEG XL at lossy.</li>
        </ul>

        <p>Web standard, fast to convert and mostly supported.</p>
        <ul>
            <li>WEBP - a better replacement for JPG and PNG. Lossless mode works great and lossy is decent.</li>
        </ul>

        <p>Large size, but compatible with everything.</p>
        <ul>
            <li>JPG - lossy only, a 30-year-old format with poor quality that people need to stop using</li>
            <li>PNG - lossless only</li>
        </ul>

        <h2>Formats - Lossy</h2>
        <h3>JPEG XL</h3>
        <ul>
            <li>Quality</li>
            <ul>
                <li>90 - great</li>
                <li>80 - a good compromise between size and quality</li>
                <li>60 - space saving sweet-spot</li>
            </ul>
            <li>Effort - higher is better
                <ul>
                    <li>7 - regular speed and good quality</li>
                    <li>9 - slow speed, better quality, and possibly smaller file size</li>
                    <li>Intelligent Effort - chooses the appropriate effort for the image type and settings. It prioritizes smaller file size, but often ends up also improving the quality.</li>
                </ul>
            </li>
        </ul>

        <h3>AVIF</h3>
        <p>The quality goes from 0 - 63 as all video codecs do.</p>
        <ul>
            <li>Constant Quality - lower is better
                <ul>
                    <li>20 - good compromise between size and quality</li>
                    <li>30 - space saving sweet-spot</li>
                    <li>40 - reasonable limit for space-saving (looks way worse than 30)</li>
                    <li>50 - very low quality</li>
                </ul>
            </li>
            <li>Speed - lower is better
                <ul>
                    <li>6 - good default</li>
                    <li>0 - very slow, best quality and smallest size</li>
                </ul>
            </li>
        </ul>
      
        <h3>WEBP</h3>
        <ul>
            <li>Lossy
                <ul>
                    <li>90 - great quality, but large size</li>
                    <li>80 - 60% the size of 90, a bit blurry, but far away looks fine</li>
                    <li>60 - looks fine only far away, I wouldn't go any lower</li>
                </ul>
            </li>
            <li>Lossless - it works great. You may find the <b>Lossless (only If smaller) option useful here.</b></li>
        </ul>

        <h2>Formats - Lossless</h2>
        <p>XL Converter features the <b>Smallest Lossless</b> mode which is a great tool for using multiple formats. Use the checkboxes to disable the ones you don't want.</p>
        <img src={SmallestLossless} />

        <p>Each format is good at a different thing</p>
        <ul>
            <li>JPEG XL - complex images (e.g. photographs)</li>
            <li>WEBP - simple images (e.g. screenshots)</li>
            <li>PNG - very simple images</li>
        </ul>

        <h2>JPEG XL vs AVIF</h2>

        <p>The visual differences in lossy mode are negligible but one may perform slightly better in a given context.</p>
        <p>Preferred format:</p>
        <ul>
            <li>Text images - JPEG XL</li>
            <li>Full-page website screenshots - JPEG XL</li>
            <li>Photographs (high quality) - tie</li>
            <li>Anime drawings from Pixiv - AVIF</li>
            <li>Desktop screenshots - AVIF</li>
            <li>Photographs (low quality) - AVIF</li>
        </ul>
        <p>If you're unsure, try out both. These criteria are arbitrary and may not be representative.</p>
        
        <p>Technical differences</p>
        <ul>
            <li>AVIF is supported by most web browsers and JPEG XL isn't</li>
            <li>AVIF does not feature (a good) lossless mode</li>
            <li>AVIF is more secure (lower attack vector, based a video codec)</li>
        </ul>
    </div>);
}