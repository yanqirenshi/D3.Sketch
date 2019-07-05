<page-usage_tab-code-html>

    <section class="section" style="padding-top: 0px;">
        <div class="container">
            <h1 class="title is-4">HTML</h1>
            <h2 class="subtitle">
            </h2>
            <div class="contents" style="font-size: 14px; line-height: 14px;">
                <p><pre>{html.join('\n')}</pre></p>
            </div>
        </div>
    </section>

    <script>
     this.html = [
         '<!DOCTYPE html>',
         '<html>',
         '    <head>',
         '        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js"><\/script>',
         '        <script src="https://yanqirenshi.github.io/D3.Svg/dist/0.0.1/D3.Svg.js"><\/script>',
         '',
         '        <script src="https://yanqirenshi.github.io/D3.Sketch/dist/0.0.2/Sketcher.js"><\/script>',
         '        <script src="https://yanqirenshi.github.io/D3.Sketch/dist/0.0.2/DefaultSketcher.js"><\/script>',
         '    <\/head>',
         '    <body>',
         '        <svg id="scketchbook"><\/svg>',
         '',
         '        <script src="./data.js"><\/script>',
         '        <script src="./index.js"><\/script>',
         '    <\/body>',
         '<\/html>',
     ];
    </script>

</page-usage_tab-code-html>
