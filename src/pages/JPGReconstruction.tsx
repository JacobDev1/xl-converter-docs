export default function JPGReconstruction(){
    return(<>
        <h1>JPG Reconstruction</h1>

        <h2>Overview</h2>
        <p>This feature allows you to preserve the original JPG while lowering its file size by 15% - 25%</p>
        <p>You can reconstruct the original JPG file at any moment.</p>

        <h2>Encoding Reconstruction Data</h2>
        <ol>
            <li>Add JPG files</li>
            <li>Select JPEG XL format in the Output tab</li>
            <li>Check <b>Lossless</b></li>
            <li>Convert</li>
        </ol>
        <p>Reconstruction data will be added automatically If the input format is a JPG</p>
        <p>Increasing the <b>Effort</b> will reduce the file size.</p>

        <h2>Reconstructing JPG</h2>
        <ol>
            <li>Add JXL files</li>
            <li>Select PNG format</li>
            <li>Check <b>Reconstruct JPG from JPEG XL</b></li>
            <li>Convert</li>
        </ol>
        <p>A JPG will be generated instead of a PNG, If reconstruction data is found</p>
    </>);
}