<page-usage_tab-options-description>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">概要</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <table class="table is-bordered is-striped is-narrow is-hoverable">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Type</th>
                            <th>非推奨</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr each={attr in attributes}>
                            <td>{attr.code}</td>
                            <td>{attr.type}</td>
                            <td>{attr.deprecated ? '○' : '--'}</td>
                            <td>{attr.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <script>
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
    </script>

</page-usage_tab-options-description>
