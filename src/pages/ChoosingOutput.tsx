export default function ChoosingOutput(){
    return(<>
        <h1>Choosing Output</h1>
        <p>All these options are located in the Output tab.</p>

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
        <p><b>Keep Folder Structure</b> - preserves the original folder hierarchy when saving images.</p>

        <h2>Conversion</h2>
        <ul>
            <li>Duplicate - what to do when a file with the same name already exists in the output directory.</li>
            <li>Threads - how much of your CPU to dedicate for conversion. Higher means faster. Setting it to max is not advisable If you're actively using your computer.</li>
        </ul>

        <h2>After Conversion</h2>
        <ul>
            <li>Clear File List - file list in the input tab will be cleared after conversion.</li>
            <li>Delete Original - the image you added to the list will be deleted after it's converted.</li>
        </ul>

    </>);
}