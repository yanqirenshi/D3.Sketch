<page-usage_tab-code>

    <section class="section">
        <div class="container">
            <h1 class="title"></h1>
            <h2 class="subtitle"></h2>

                <div class="flex-root">
                    <div class="left">
                        <page-usage_tab-code-js></page-usage_tab-code-js>
                    </div>

                    <div class="right">
                        <page-usage_tab-code-html></page-usage_tab-code-html>
                        <page-usage_tab-code-data></page-usage_tab-code-data>
                    </div>
                </div>
        </div>
    </section>

    <style>
     page-usage_tab-code .flex-root {
         display: flex;
     }
     page-usage_tab-code .left {
         width: 444px;
         margin-right: 22px;
     }
     page-usage_tab-code .right {
         flex-grow: 1;

         display: flex;
         flex-direction: column;
     }
     page-usage_tab-code .right > * {
         margin-bottom: 22px;
     }
    </style>

</page-usage_tab-code>
