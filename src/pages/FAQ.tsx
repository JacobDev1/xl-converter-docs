export default function FAQ(){
    return(<div>
        <h1>FAQ</h1>

        <h2>What technologies are used?</h2>
        <p>XL Converter was written in Python and PySide6. Image processing is done via libjxl, libavif (AOM AV1), and ImageMagick.</p>

        <h2>Is it really free?</h2>
        <p>Yes, XL Converter is free as in freedom under the GPLv3 license.</p>

        <h2>How will I know the conversion was successful?</h2>
        <p>The program will notify you when something goes wrong.</p>

        <h2>What will happen if "Delete Original" is enabled and the conversion fails?</h2>
        <p>The original image will stay intact. There are safety mechanisms.</p>

        <h2>What is XL Converter, who made it, and when?</h2>
        <ul>
            <li>XL Converter is an image converter focused on technology with the highest compression ratios. It can encode JPEG XL, AVIF, JPEG (with JPEGLI), WebP, and PNG. It's a popular choice for Lossless JPEG Transcoding.</li>
            <li>XL Converter was created entirely by one programmer -- me. You can call me Jacob.</li>
            <li>The first public version was published in August 2023. The program was frequently worked on ever since.</li>
        </ul>

        <h2>The program doesn't do what I need.</h2>
        <p>Try <a href="https://xnview.com/" rel="noreferrer noopener" target="_blank">XnViewMP</a> (Ctrl + U opens the converter). It's better suited for advanced tasks. Generated PNG images can be used with XL Converter.</p>

        <h2>Is XL Converter safe?</h2>
        <p>Yes! The source code is publicly available (and auditable).</p>
        <p>Make sure you are downloading XL Converter from the official website (<a href="https://codepoems.eu/xl-converter/" target="_blank">codepoems.eu</a>). Never download this program from 3rd party sites!</p>
        
        <h2>Where are config files located?</h2>
        <p>All config files and logs are located here:</p>
        <ul>
            <li>Windows: <code>%LOCALAPPDATA%/Local/xl-converter</code></li>
            <li>Linux: <code>~/.config/xl-converter</code></li>
        </ul>

        <h2>Where is the temp directory located?</h2>
        <p>XL Converter uses the output directory as the temp location.</p>

        <h2>What are the "tmp_" files in the output directory?</h2>
        <p>Those are temporary files. You may see them left over from canceled or failed conversions. You can safely delete them.</p>

        <h2>I want to suggest a change to this manual / the program.</h2>
        <p>Send your suggestions to: contact@codepoems.eu</p>

    </div>);
}