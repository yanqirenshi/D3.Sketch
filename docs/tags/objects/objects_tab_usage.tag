<objects_tab_usage>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">HTML</h1>
            <h2 class="subtitle">
            </h2>
            <div class="contents">
                <p><pre>{html.join('\n')}</pre></p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">Javascript</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <p><pre>{js.join('\n')}</pre></p>
            </div>
        </div>
    </section>

    <script>
        this.html = [
        '<html>',
        '    <head>',
        '        <script src="Sketcher.js"><\/script>',
        '    </head>',
        '',
        '    <body>',
        '        <sample-tag>',
        '            <svg></svg>',
        '        </sample-tag>',
        '    </body>',
        '</html>',
        ];

        this.js = [
        "let camera = {",
        "    x: 0,",
        "    y: 0.0,",
        "    scale: 1.0,",
        "};",
        "",
        "new Sketcher({",
        "    selector: 'sample-tag > svg',",
        "    w: window.innerWidth,",
        "    h: window.innerHeight,",
        "    x: camera.look_at.X,",
        "    y: camera.look_at.Y,",
        "    scale: camera.scale,",
        "    callbacks: {",
        "        svg: {",
        "            click: () => { /* ... */ },",
        "            move: {",
        "                end: (position) => { /* ... */ },",
        "            },",
        "            zoom: (scale) => { /* ... */ },",
        "        }",
        "    }",
        "});",
        ];
        </script>

</objects_tab_usage>
