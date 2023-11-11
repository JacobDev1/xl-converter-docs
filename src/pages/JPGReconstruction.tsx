export default function JPGReconstruction(){
    return(<>
        <h1>JPG Reconstruction</h1>
        <p>All options are contained within the <b>Output</b> tab.</p>

        <h2>Overview</h2>
        <p>This feature allows you to:</p>
        <ul>
            <li>Convert existing JPG to JPEG XL losslessly (lowers size by 15% - 25%)</li>
            <li>Reconstruct the original JPG from JPEG XL</li>
        </ul>

        <h2>Encoding Reconstruction Data</h2>
        <ul>
            <li>Select JPEG XL format in the Output tab</li>
            <li>Check <b>lossless</b></li>
            <li>Reconstruction data will be added to the generated JXL</li>
        </ul>
        <p>Note: the input file has to be a JPG, but its aliases (JPEG, JFIF...) are also supported.</p>
        <p>Increasing the <b>Effort</b> does reduce the file size slightly more.</p>

        <h2>Reconstructing JPG</h2>
        <ul>
            <li>Select PNG format</li>
            <li>Check <b>Reconstruct JPG from JPEG XL</b></li>
            <li>A JPG will be generated instead of a PNG, If reconstruction data is found</li>
        </ul>

        <h2>When To Use It?</h2>
        <p>Use this method when your JPGs are already low quality or you don't want any more compression artifacts.</p>
    </>);
}