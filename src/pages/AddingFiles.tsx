import InputTab from "../assets/xl_converter_input_tab.webp";

export default function AddingFiles(){
    return(<div>
        <h1>Adding Files</h1>
        <p>Add files (or folders) by <b>dragging and dropping</b> them onto the program.</p>
        <img src={InputTab} />
        <p>This works on every tab, not just the <b>Input tab</b></p>
        <p>Alternatively, use the buttons at the bottom.</p>
        <ul>
            <li>Add Files - add selected files</li>
            <li>Add Folder - add all files from a folder (and its subfolders)</li>
        </ul>
    </div>);
}