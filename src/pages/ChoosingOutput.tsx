import Output from "../assets/xl_converter_output.webp";

export default function ChoosingOutput(){
    return(<>
        <h1>Choosing Output</h1>
        <img src={Output} />
        <p>Notice the <b>top-left corner</b> in the <b>Output</b> tab.</p>

        <h2>Source Folder</h2>
        <p>Each image will be saved in the same folder as its source.</p>

        <h2>Custom</h2>
        <p>All images will be saved to that particular folder. If a folder doesn't exist, it will be created.</p>
        <p>Copy and paste a path or click on the button with 3 dots to use a dialog.</p>
        <p>There are two types of paths:</p>
        <ul>
            <li>Absolute path (e.g. <code>C:/Images/Converted</code>)</li>
            <li>Relative path (e.g. <code>Converted</code>) - saves to a folder of that name next source image</li>
        </ul>
    </>);
}