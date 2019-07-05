<page-usage_tab-options-callbacks>

    <section class="section">
        <div class="container">
            <h1 class="title is-4">Callbacks</h1>
            <h2 class="subtitle"></h2>

            <div class="contents">
                <table class="table is-bordered is-striped is-narrow is-hoverable">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr each={cb in callbacks}>
                            <td>{cb.code}</td>
                            <td>{cb.name}</td>
                            <td>{cb.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <script>
     this.callbacks = [
         { code: 'svg.click',    name: '', description: '' },
         { code: 'svg.move.end', name: '', description: '' },
         { code: 'svg.zoom',     name: '', description: '' },
     ];
    </script>

</page-usage_tab-options-callbacks>
