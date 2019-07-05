<page-usage_tab-code-js>

    <h1 class="title is-5" style="margin-bottom: 11px;">Javascript: index.js</h1>

    <div class="contents" class="contents" style="font-size: 14px; line-height: 14px;">
        <p><pre>{js.join('\n')}</pre></p>
    </div>

    <script>
     this.js = [
         "/////",
         "///// Make Options",
         "/////",
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
         "function makeOption () {",
         "    let camera = makeCamera();",
         "    let size   = getSize();",
         "",
         "    return {",
         "        element: {",
         "            selector: 'svg#scketchbook',",
         "        },",
         "        w: size.w,",
         "        h: size.h,",
         "        x: camera.look.at.x,",
         "        y: camera.look.at.y,",
         "        scale: camera.scale,",
         "    };",
         "}",
         "",
         "/////",
         "///// Make Sketcher (and Draw Grid)",
         "/////",
         "let sketcher = new DefaultSketcher(makeOption());",
         "",
         "/////",
         "///// Draw Graph",
         "/////",
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
