<home_tab_readme>

    <section class="section">
        <div class="container">
            <h1 class="title is-4"></h1>
            <h2 class="subtitle"></h2>

            <p>D3.js で絵を描くときに、単体の作り込みをしたいときがあります。</p>
            <p>そのためのツールです。</p>

            <section class="section">
                <div class="container">
                    <h1 class="title is-5">CDN</h1>
                    <h2 class="subtitle"></h2>
                </div>

                <div class="contents">
                    <table class="table is-bordered is-striped is-narrow is-hoverable">
                        <thead>
                            <tr>
                                <th>Version</th>
                                <th>Url</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr each={rec in cdn}>
                                <td>{rec.version}</td>
                                <td><a href="rec.url">{rec.url}</a></td>
                                <td>{rec.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">Dependency</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <ol>
                    <li><a href="https://d3js.org/">D3.js</a></li>
                    <li><a href="https://bulma.io/">Bulma</a></li>
                </ol>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">Authors</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <p>Satoshi Iwasaki (<a href="mailto:yanqirenshi@gmail.com">yanqirenshi@gmail.com</a>)</p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">Copyright</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <p>Copyright (c) 2018 Satoshi Iwasaki (<a href="mailto:yanqirenshi@gmail.com">yanqirenshi@gmail.com</a>)</p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">Licence</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <p>This software is released under the GNU GENERAL PUBLIC LICENSE Version 3, see <a href="http://www.gnu.org/licenses/gpl-3.0.txt">LICENSE</a>.</p>
            </div>
        </div>
    </section>

    <script>
     this.cdn = [
         { version: '0.0.1', description: '', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/0.0.1/Sketcher.js' },
         { version: 'Beta',  description: 'Ver 0.0.1 の開発バージョン', url: 'https://yanqirenshi.github.io/D3.Sketch/dist/beta/Sketcher.js' },
     ];
    </script>

</home_tab_readme>
