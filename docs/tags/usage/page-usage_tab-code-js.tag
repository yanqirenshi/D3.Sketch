<page-usage_tab-code-js>

    <section class="section" style="padding-top: 0px;">
        <div class="container">
            <h1 class="title is-4">Javascript: index.js</h1>
            <h2 class="subtitle"></h2>

            <div class="contents" class="contents" style="font-size: 14px; line-height: 14px;">
                <p><pre>{js.join('\n')}</pre></p>
            </div>
        </div>
    </section>

    <script>
     this.js = [
         "function makeCamera () {",
         "    return {",
         "        look: {",
         "            at: {",
         "                x: 0,",
         "                y: 0.0,",
         "            },",
         "        },",
         "        scale: 1.0,",
         "    };",
         "}",
         "",
         "function getSize () {",
         "    return {",
         "        w: window.innerWidth,",
         "        h: window.innerHeight,",
         "    };",
         "}",
         "",
         "let camera = makeCamera();",
         "let size   = getSize();",
         "",
         "let sketcher = new DefaultSketcher({",
         "    element: {",
         "        selector: 'svg#scketchbook',",
         "    },",
         "    w: size.w,",
         "    h: size.h,",
         "    x: camera.look.at.x,",
         "    y: camera.look.at.y,",
         "    scale: camera.scale,",
         "});",
         "",
         "function draw () {",
         "    let place = sketcher.getBase('forground');",
         "",
         "    sketcher",
         "        .data(_DATA)",
         "        .sizing()",
         "        .positioning()",
         "        .draw(place);",
         "};",
         "",
         "draw();",
     ];
    </script>

</page-usage_tab-code-js>
