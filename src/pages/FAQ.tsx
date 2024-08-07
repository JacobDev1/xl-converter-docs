export default function FAQ(){
    return(<div>
        <h1>FAQ</h1>

        <h2>Is XL Converter safe?</h2>
        <p>Yes! The source code is publicly available (and auditable).</p>
        <p>Just make sure you are downloading it from the official website (<a href="https://codepoems.eu/xl-converter/" target="_blank">codepoems.eu</a>) or the <a href="https://github.com/JacobDev1/xl-converter" target="_blank">GitHub repo</a>.</p>

        <h2>What technologies are used?</h2>
        <p>XL Converter was written in Python and PySide6. Image processing is done via libjxl, libavif (AOM-AV1), and ImageMagick.</p>

        <h2>How will I know the conversion was successful?</h2>
        <p>The program will notify you when something goes wrong.</p>

        <h2>The program doesn't do what I need.</h2>
        <p>Try <a href="https://xnview.com/en/xnconvert/" target="_blank">XnConvert</a>. It's better suited for advanced tasks. Generated PNGs can be used with XL Converter.</p>

        <h2>Your Question Here.</h2>
        <p>Email me your questions at: contact@codepoems.eu</p>

    </div>);
}