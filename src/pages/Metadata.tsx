export default function Metadata(){
    return(<>
        <h1>Metadata</h1>
        <p>The metadata options are located in <b>Modify Tab</b>, over to the right.</p>
        <h2>Encoder</h2>
        <p>These options do not alter the final image, but whether your preferences are respected depends solely on the encoder used.</p>
        <ul>
            <li><b>Wipe</b> - safely wipes metadata, with the exception of JPEG XL.</li>    
            <li><b>Preserve</b> - preserves basic metadata.</li>    
        </ul>
        <h2>ExifTool</h2>
        <p>Those options will ensure that metadata will be handled the way you want it to. The conversion will take longer because every file gets rewritten.</p>
        <ul>
            <li><b>Safe Wipe</b> - deletes all except the data affecting the final image.</li>
            <li><b>Preserve</b> - copies over all metadata.</li>
            <li><b>Unsafe Wipe</b> - deletes every last bit of metadata, including color profile. It can potentially alter the final image.</li>
        </ul>
        <p>Preserving metadata is challenging, because image formats are rarely 100% compatible with one another.</p>
        <p>If your metadata holds significant value, consider using ExifTool directly to export it to text files.</p>
    </>);
}