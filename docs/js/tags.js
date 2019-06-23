riot.tag2('app', '<menu-bar brand="{{label:\'RT\'}}" site="{site()}" moves="{[]}"></menu-bar> <div ref="page-area"></div>', '', '', function(opts) {
     this.site = () => {
         return STORE.state().get('site');
     };

     STORE.subscribe((action)=>{
         if (action.type!='MOVE-PAGE')
             return;

         let tags= this.tags;

         tags['menu-bar'].update();
         ROUTER.switchPage(this, this.refs['page-area'], this.site());
     })

     window.addEventListener('resize', (event) => {
         this.update();
     });

     if (location.hash=='')
         location.hash=STORE.get('site.active_page');
});

riot.tag2('markdown-preview', '', 'markdown-preview h1 { font-weight: bold; font-size: 20px; margin-top: 11px; margin-bottom: 6px; } markdown-preview h2 { font-weight: bold; font-size: 18px; margin-top: 8px; margin-bottom: 4px; } markdown-preview h3 { font-weight: bold; font-size: 16px; margin-top: 6px; margin-bottom: 3px; } markdown-preview h4 { font-weight: bold; font-size: 14px; margin-top: 6px; margin-bottom: 3px; } markdown-preview h5 { font-weight: bold; font-size: 12px; margin-bottom: 4px; } markdown-preview * { font-size: 12px; } markdown-preview table { border-collapse: collapse; } markdown-preview td { border: solid 0.6px #888888; padding: 2px 5px; } markdown-preview th { border: solid 0.6px #888888; padding: 2px 5px; background: #eeeeee; }', '', function(opts) {
     this.on('update', () => {
         this.root.innerHTML = this.opts.data;
     });

    this.root.innerHTML = opts.data

});

riot.tag2('menu-bar', '<aside class="menu"> <p ref="brand" class="menu-label" onclick="{clickBrand}"> {opts.brand.label} </p> <ul class="menu-list"> <li each="{opts.site.pages}"> <a class="{opts.site.active_page==code ? \'is-active\' : \'\'}" href="{\'#\' + code}"> {menu_label} </a> </li> </ul> </aside> <div class="move-page-menu hide" ref="move-panel"> <p each="{moves()}"> <a href="{href}">{label}</a> </p> </div>', 'menu-bar .move-page-menu { z-index: 666665; background: #ffffff; position: fixed; left: 55px; top: 0px; min-width: 111px; height: 100vh; box-shadow: 2px 0px 8px 0px #e0e0e0; padding: 22px 55px 22px 22px; } menu-bar .move-page-menu.hide { display: none; } menu-bar .move-page-menu > p { margin-bottom: 11px; } menu-bar > .menu { z-index: 666666; height: 100vh; width: 55px; padding: 11px 0px 11px 11px; position: fixed; left: 0px; top: 0px; background: #FAF5F9; } menu-bar .menu-label, menu-bar .menu-list a { padding: 0; width: 33px; height: 33px; text-align: center; margin-top: 8px; border-radius: 3px; background: none; color: #333333; font-weight: bold; padding-top: 7px; font-size: 14px; } menu-bar .menu-label,[data-is="menu-bar"] .menu-label{ background: #ffffff; color: #FAF5F9; } menu-bar .menu-label.open,[data-is="menu-bar"] .menu-label.open{ background: #ffffff; color: #333333; width: 44px; border-radius: 3px 0px 0px 3px; text-shadow: 0px 0px 1px #eee; padding-right: 11px; } menu-bar .menu-list a.is-active { width: 44px; padding-right: 11px; border-radius: 3px 0px 0px 3px; background: #ffffff; color: #333333; }', '', function(opts) {
     this.moves = () => {
         let moves = [
             { code: 'link-a', href: '', label: 'Link A' },
             { code: 'link-b', href: '', label: 'Link B' },
             { code: 'link-c', href: '', label: 'Link C' },
         ]
         return moves.filter((d)=>{
             return d.code != this.opts.current;
         });
     };

     this.brandStatus = (status) => {
         let brand = this.refs['brand'];
         let classes = brand.getAttribute('class').trim().split(' ');

         if (status=='open') {
             if (classes.find((d)=>{ return d!='open'; }))
                 classes.push('open')
         } else {
             if (classes.find((d)=>{ return d=='open'; }))
                 classes = classes.filter((d)=>{ return d!='open'; });
         }
         brand.setAttribute('class', classes.join(' '));
     }

     this.clickBrand = () => {
         let panel = this.refs['move-panel'];
         let classes = panel.getAttribute('class').trim().split(' ');

         if (classes.find((d)=>{ return d=='hide'; })) {
             classes = classes.filter((d)=>{ return d!='hide'; });
             this.brandStatus('open');
         } else {
             classes.push('hide');
             this.brandStatus('close');
         }
         panel.setAttribute('class', classes.join(' '));
     };
});

riot.tag2('modal-description-editor', '<div class="modal {isActive()}"> <div class="modal-background"></div> <div class="modal-content" style="width: 88vw;"> <div class="card"> <div class="card-content" style="height: 88vh;"> <div style="display:flex; height: 100%; width: 100%;flex-direction: column;"> <div style="margin-bottom:11px;"> <h1 class="title is-4">{title()} の Description の変更</h1> </div> <div style="display:flex; flex-grow: 1"> <div style="flex-grow: 1;margin-right: 8px;"> <div class="element-container"> <h1 class="title is-5">Markdown</h1> <textarea class="input" ref="description" onkeyup="{inputDescription}">{description()}</textarea> </div> </div> <div style=";flex-grow: 1;margin-left: 8px;"> <div class="element-container"> <h1 class="title is-5">Preview</h1> <div class="preview" style="padding: 0px 11px 11px 11px;"> <markdown-preview data="{marked(markdown)}"></markdown-preview> </div> </div> </div> </div> <div style="margin-top:11px;"> <button class="button is-warning" onclick="{clickCancel}">Cancel</button> <button class="button is-danger" style="float:right;" onclick="{clickSave}">Save</button> </div> </div> </div> </div> </div> </div>', 'modal-description-editor .element-container { display:flex; height: 100%; width: 100%; flex-direction: column; } modal-description-editor .element-container .title{ margin-bottom:6px; } modal-description-editor .input { border: 1px solid #eeeeee; padding: 11px; box-shadow: none; height: 100%; width: 100%; } modal-description-editor .preview { border: 1px solid #eeeeee; flex-grow:1; }', '', function(opts) {
     this.markdown = null;

     this.clickCancel = () => {
         this.opts.callback('close-modal-description-editor');
     };
     this.clickSave = () => {
         this.opts.callback('save-column-instance-description', {
             object: this.opts.data,
             value: this.refs['description'].value,
         });
     };
     this.inputDescription = () => {
         this.markdown = this.refs['description'].value;

         this.tags['markdown-preview'].update();
     };

     this.description = () => {
         if (!this.markdown) {
             let obj = this.opts.data;

             this.markdown = !obj ? '' : obj.description;
         }

         return this.markdown;
     };
     this.title = () => {
         if (!this.opts.data)
             return '';

         let obj = this.opts.data;
         return obj._class + ':' + obj.name;
     };
     this.isActive = () => {
         return this.opts.data ? 'is-active' : '';
     };
});

riot.tag2('page-tabs', '<div class="tabs is-boxed" style="padding-left:55px;"> <ul> <li each="{opts.core.tabs}" class="{opts.core.active_tab==code ? \'is-active\' : \'\'}"> <a code="{code}" onclick="{clickTab}">{label}</a> </li> </ul> </div>', 'page-tabs li:first-child { margin-left: 55px; }', '', function(opts) {
     this.clickTab = (e) => {
         let code = e.target.getAttribute('code');
         this.opts.callback(e, 'CLICK-TAB', { code: code });
     };
});

riot.tag2('section-breadcrumb', '<section-container data="{path()}"> <nav class="breadcrumb" aria-label="breadcrumbs"> <ul> <li each="{opts.data}"> <a class="{active ? \'is-active\' : \'\'}" href="{href}" aria-current="page">{label}</a> </li> </ul> </nav> </section-container>', 'section-breadcrumb section-container > .section,[data-is="section-breadcrumb"] section-container > .section{ padding-top: 3px; }', '', function(opts) {
     this.path = () => {
         let hash = location.hash;
         let path = hash.split('/');

         if (path[0] && path[0].substr(0,1)=='#')
             path[0] = path[0].substr(1);

         let out = [];
         let len = path.length;
         let href = null;
         for (var i in path) {
             href = href ? href + '/' + path[i] : '#' + path[i];

             if (i==len-1)
                 out.push({
                     label: path[i],
                     href: hash,
                     active: true
                 });

             else
                 out.push({
                     label: path[i],
                     href: href,
                     active: false
                 });
         }
         return out;
     }
});

riot.tag2('section-container', '<section class="section"> <div class="container"> <h1 class="title is-{opts.no ? opts.no : 3}"> {opts.title} </h1> <h2 class="subtitle">{opts.subtitle}</h2> <yield></yield> </div> </section>', '', '', function(opts) {
});

riot.tag2('section-contents', '<section class="section"> <div class="container"> <h1 class="title is-{opts.no ? opts.no : 3}"> {opts.title} </h1> <h2 class="subtitle">{opts.subtitle}</h2> <div class="contents"> <yield></yield> </div> </div> </section>', 'section-contents > section.section { padding: 0.0rem 1.5rem 2.0rem 1.5rem; }', '', function(opts) {
});

riot.tag2('section-footer', '<footer class="footer"> <div class="container"> <div class="content has-text-centered"> <p> </p> </div> </div> </footer>', 'section-footer > .footer { background: #ffffff; padding-top: 13px; padding-bottom: 13px; }', '', function(opts) {
});

riot.tag2('section-header-with-breadcrumb', '<section-header title="{opts.title}"></section-header> <section-breadcrumb></section-breadcrumb>', 'section-header-with-breadcrumb section-header > .section,[data-is="section-header-with-breadcrumb"] section-header > .section{ margin-bottom: 3px; }', '', function(opts) {
});

riot.tag2('section-header', '<section class="section"> <div class="container"> <h1 class="title is-{opts.no ? opts.no : 3}"> {opts.title} </h1> <h2 class="subtitle">{opts.subtitle}</h2> <yield></yield> </div> </section>', 'section-header > .section { background: #ffffff; }', '', function(opts) {
});

riot.tag2('section-list', '<table class="table is-bordered is-striped is-narrow is-hoverable"> <thead> <tr> <th>機能</th> <th>概要</th> </tr> </thead> <tbody> <tr each="{data()}"> <td><a href="{hash}">{title}</a></td> <td>{description}</td> </tr> </tbody> </table>', '', '', function(opts) {
     this.data = () => {
         return opts.data.filter((d) => {
             if (d.code=='root') return false;

             let len = d.code.length;
             let suffix = d.code.substr(len-5);
             if (suffix=='_root' || suffix=='-root')
                 return false;

             return true;
         });
     };
});

riot.tag2('sections-list', '<table class="table"> <tbody> <tr each="{opts.data}"> <td><a href="{hash}">{name}</a></td> </tr> </tbody> </table>', '', '', function(opts) {
});

riot.tag2('home', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('home_page_root', '<section-header title="D3.Sketch"></section-header> <page-tabs core="{page_tabs}" callback="{clickTab}"></page-tabs> <div> <home_tab_readme class="hide"></home_tab_readme> <home_tab_usage class="hide"></home_tab_usage> </div> <section-footer></section-footer>', '', '', function(opts) {
     this.page_tabs = new PageTabs([
         {code: 'readme',  label: 'README',  tag: 'home_tab_readme' },
         {code: 'usage',   label: 'Usage',   tag: 'home_tab_usage' },
     ]);

     this.on('mount', () => {
         this.page_tabs.switchTab(this.tags)
         this.update();
     });

     this.clickTab = (e, action, data) => {
         if (this.page_tabs.switchTab(this.tags, data.code))
             this.update();
     };
});

riot.tag2('home_tab_readme', '<section class="section"> <div class="container"> <h1 class="title is-4"></h1> <h2 class="subtitle"></h2> <p>D3.js で絵を描くときに、単体の作り込みをしたいときがあります。</p> <p>そのためのツールです。</p> <section class="section"> <div class="container"> <h1 class="title is-5">CDN</h1> <h2 class="subtitle"></h2> </div> <div class="contents"> <table class="table is-bordered is-striped is-narrow is-hoverable"> <thead> <tr> <th>Version</th> <th>Url</th> <th>Description</th> </tr> </thead> <tbody> <tr each="{rec in cdn}"> <td>{rec.version}</td> <td><a href="rec.url">{rec.url}</a></td> <td>{rec.description}</td> </tr> </tbody> </table> </div> </section> </div> </section> <section class="section"> <div class="container"> <h1 class="title is-4">Dependency</h1> <h2 class="subtitle"></h2> <div class="contents"> <ol> <li><a href="https://d3js.org/">D3.js</a></li> <li><a href="https://bulma.io/">Bulma</a></li> </ol> </div> </div> </section> <section class="section"> <div class="container"> <h1 class="title is-4">Authors</h1> <h2 class="subtitle"></h2> <div class="contents"> <p>Satoshi Iwasaki (<a href="mailto:yanqirenshi@gmail.com">yanqirenshi@gmail.com</a>)</p> </div> </div> </section> <section class="section"> <div class="container"> <h1 class="title is-4">Copyright</h1> <h2 class="subtitle"></h2> <div class="contents"> <p>Copyright (c) 2018 Satoshi Iwasaki (<a href="mailto:yanqirenshi@gmail.com">yanqirenshi@gmail.com</a>)</p> </div> </div> </section> <section class="section"> <div class="container"> <h1 class="title is-4">Licence</h1> <h2 class="subtitle"></h2> <div class="contents"> <p>This software is released under the GNU GENERAL PUBLIC LICENSE Version 3, see <a href="http://www.gnu.org/licenses/gpl-3.0.txt">LICENSE</a>.</p> </div> </div> </section>', '', '', function(opts) {
     this.cdn = [
         { version: 'edge',  description: '', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/edge/Sketcher.js' },
         { version: 'edge',  description: '', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/edge/DefaultSketcher.js' },
         { version: '0.0.2', description: '', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/0.0.2/Sketcher.js' },
         { version: '0.0.2', description: '', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/0.0.2/DefaultSketcher.js' },
         { version: '0.0.1', description: '', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/0.0.1/Sketcher.js' },
     ];
});

riot.tag2('home_tab_usage', '<section class="section"> <div class="container"> <h1 class="title">使い方はかんたんです。</h1> <h2 class="subtitle"></h2> <div class="contents"> <p><code>./src/index.html</code> をブラウザで開くだけで動きます。</p> <p><code>`./src/sketch.js</code> を変更しながら、D3.js の描画とそのデータを作り込んでいきます。</p> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('objects', '', '', '', function(opts) {
     this.mixin(MIXINS.page);

     this.on('mount', () => { this.draw(); });
     this.on('update', () => { this.draw(); });
});

riot.tag2('objects_root', '<section-header title="Class: Sketcher"></section-header> <page-tabs core="{page_tabs}" callback="{clickTab}"></page-tabs> <div> <objects_tab_readme class="hide"></objects_tab_readme> <objects_tab_options class="hide"></objects_tab_options> <objects_tab_usage class="hide"></objects_tab_usage> </div> <section-footer></section-footer>', '', '', function(opts) {
     this.page_tabs = new PageTabs([
         {code: 'readme',  label: 'README',  tag: 'objects_tab_readme' },
         {code: 'usage',   label: 'Usage',   tag: 'objects_tab_usage' },
         {code: 'options', label: 'Options', tag: 'objects_tab_options' },
     ]);

     this.on('mount', () => {
         this.page_tabs.switchTab(this.tags)
         this.update();
     });

     this.clickTab = (e, action, data) => {
         if (this.page_tabs.switchTab(this.tags, data.code))
             this.update();
     };
});

riot.tag2('objects_tab_options-callbacks', '<section class="section"> <div class="container"> <h1 class="title is-4">Callbacks</h1> <h2 class="subtitle"></h2> <div class="contents"> <table class="table is-bordered is-striped is-narrow is-hoverable"> <thead> <tr> <th>Code</th> <th>Name</th> <th>Description</th> </tr> </thead> <tbody> <tr each="{cb in callbacks}"> <td>{cb.code}</td> <td>{cb.name}</td> <td>{cb.description}</td> </tr> </tbody> </table> </div> </div> </section>', '', '', function(opts) {
     this.callbacks = [
         { code: 'svg.click',    name: '', description: '' },
         { code: 'svg.move.end', name: '', description: '' },
         { code: 'svg.zoom',     name: '', description: '' },
     ];
});

riot.tag2('objects_tab_options-description', '<section class="section"> <div class="container"> <h1 class="title is-4">概要</h1> <h2 class="subtitle"></h2> <div class="contents"> <table class="table is-bordered is-striped is-narrow is-hoverable"> <thead> <tr> <th>Code</th> <th>Type</th> <th>非推奨</th> <th>Description</th> </tr> </thead> <tbody> <tr each="{attr in attributes}"> <td>{attr.code}</td> <td>{attr.type}</td> <td>{attr.deprecated ? \'○\' : \'--\'}</td> <td>{attr.description}</td> </tr> </tbody> </table> </div> </div> </section>', '', '', function(opts) {
     this.attributes = [
         { code: 'selector',  type: 'String',     deprecated: false, description: '描画する場所を指定する。 ex) sample-tag > svg' },
         { code: 'd3',        type: 'Object',     deprecated: true,  description: '' },
         { code: 'svg',       type: 'Object',     deprecated: true,  description: '描画する場所を指定する。 ex) d3.select(selector)' },
         { code: 'w',         type: 'Number',     deprecated: false, description: '描画する場所のサイズ' },
         { code: 'y',         type: 'Number',     deprecated: false, description: '描画する場所のサイズ' },
         { code: 'x',         type: 'Number',     deprecated: false, description: '初期のカメラの位置' },
         { code: 'y',         type: 'Number',     deprecated: false, description: '初期のカメラの位置' },
         { code: 'scale',     type: 'Number',     deprecated: false, description: '初期のカメラ倍率' },
         { code: 'callbacks', type: 'Hash Table', deprecated: false, description: '' },
     ];
});

riot.tag2('objects_tab_options-selector', '<section class="section"> <div class="container"> <h1 class="title is-4">Selector</h1> <h2 class="subtitle"></h2> <div class="contents"> <p>このセレクターで指定したものはユニークになるようにしてください。</p> <p>複数取得出来た場合は最初のものを利用します。</p> <p>また、複数取得出来た場合は警告をコンソールに出力します。</p> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('objects_tab_options', '<objects_tab_options-description></objects_tab_options-description> <objects_tab_options-selector></objects_tab_options-selector> <objects_tab_options-callbacks></objects_tab_options-callbacks>', '', '', function(opts) {
});

riot.tag2('objects_tab_readme', '<section class="section"> <div class="container"> <h1 class="title">概要</h1> <h2 class="subtitle"></h2> <div class="contents"> <p>Class: Sketcher は D3.Sketch の中核を成すクラスです。</p> <p>このクラスを利用すれば、標準で必要なものを描いてくれたりするので便利です。</p> <p>他でのこのクラスを利用する場合は、Class: Sketcher を継承したクラスを新設して利用してください。</p> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('objects_tab_usage', '<section class="section"> <div class="container"> <h1 class="title is-4">HTML</h1> <h2 class="subtitle"> </h2> <div class="contents"> <p><pre>{html.join(\'\\n\')}</pre></p> </div> </div> </section> <section class="section"> <div class="container"> <h1 class="title is-4">Javascript</h1> <h2 class="subtitle"></h2> <div class="contents"> <p><pre>{js.join(\'\\n\')}</pre></p> </div> </div> </section>', '', '', function(opts) {
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
});
