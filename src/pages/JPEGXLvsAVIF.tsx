import cid22_all from '../assets/cid22_all.webp';
import cid22_diagram_chart from '../assets/cid22_diagram_chart.webp';
import cid22_landscape_nature from '../assets/cid22_landscape_nature.webp';
import Table, { TableData } from "../components/Table";

const observedLossyPerformanceData: TableData = {
    columns: [
        { key: "dataset", header: "Dataset", align: "left" },
        { key: "winner", header: "Winner", align: "left" },
        { key: "dataset_examples", header: "Dataset Examples", align: "left" },
        { key: "explanation", header: "Explanation", align: "left" },
    ],
    rows: [
        { dataset: "Photographic", winner: "JPEG XL", dataset_examples: "Photographs, scans", explanation: "JPEG XL excels at compressing photographic material thanks to the VarDCT mode." },
        { dataset: "Non-photographic", winner: "AVIF", dataset_examples: "Screenshots, diagrams, vector graphics, Anime, digital art.", explanation: "AOM AV1 has noticeably better efficiency on synthetic images. JPEG XL can get close efficiency-wise in the Lossy Modular mode, but it comes at a cost of visual artifacts." },
        { dataset: "Mixed", winner: "JPEG XL", dataset_examples: "A mix of photographic and non-photographic images.", explanation: "JPEG XL is better for unsorted datasets because how much more efficient it is on photographic images with VarDCT." }
    ]
}

export default function JPEGXLvsAVIF() {
    return(<>
        <h1>JPEG XL vs AVIF</h1>

        <h2>Brief Description</h2>
        <p>JPEG XL and AVIF are both modern image formats offering high compression ratios. They outperform HEIC, WebP, and JPEG by a wide margin.</p>

        <h2>CID22</h2>
        <p>Provided by Cloudinary (JPEG XL developers). CID22 is a mixed dataset, featuring both photographic, and synthetic (non-photographic) images. <a href="https://cloudinary.com/labs/cid22" rel="noreferrer noopener" target="_blank">Source</a></p>
        <p>JPEG XL performs well on this mixed dataset.</p>
        <img src={cid22_all} />
        <p>JPEG XL performs even better when tested on just photographic data.</p>
        <img src={cid22_landscape_nature} />
        <p>AVIF (AOM AV1) outperforms JPEG XL on diagrams and charts, which is an example of non-photographic (synthetic) data.</p>
        <img src={cid22_diagram_chart} />
        <p>Try this <a href="https://cloudinary.com/labs/cid22/plots" rel="noreferrer noopener" target="_blank">interactive comparison</a>.</p>
        <p>This dataset was covered in more detail in the official JPEG XL presentation by Jon Sneyers  <a href="https://docs.google.com/presentation/d/1LlmUR0Uoh4dgT3DjanLjhlXrk_5W2nJBDqDAMbhe8v8/edit#slide=id.g2c51e8f95e1_0_422" rel="noreferrer noopener" target="_blank">here</a>.</p>

        <h2>Personally Observed Performance</h2>
        <p>This is a subjective overview. Efficiency on your dataset may vary.</p>
        <h3>Lossy</h3>
        <Table tableData={observedLossyPerformanceData} />
        <h3>Lossless</h3>
        <p>JPEG XL lossless mode offers the best efficiency overall. WebP may perform better on certain images, but JPEG XL is the <a href="https://codepoems.eu/posts/how-to-reduce-the-size-of-lossless-images/" target="_blank">best</a> on average. AVIF lossless mode is oftentimes worse than PNG.</p>

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
                <td>AOM AV1</td>
                <td>0.7x</td>
            </tr>
        </table>
        <small>Speed / Effort: default. Input: PNG.</small>

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
        </table>
        <p>*Only 8193 x 4320 natively, larger sizes are achieved with tiling (which lowers efficiency and introduces artifacts).</p>
        <p>Note: Most digital images are encoded with a bit depth of 8.</p>
        <p>JPEG XL has extra features, such as:</p>
        <ul>
            <li>Lossless JPEG Transcoding</li>
            <li>(Better) Progressive Decoding</li>
            <li>Generation Loss Resilience</li>
            <li>Photon Noise</li>
            <li>and much more...</li>
        </ul>
    </>);
}