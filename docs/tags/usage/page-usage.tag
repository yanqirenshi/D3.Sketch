<page-usage>
    <section-header title="Class: Sketcher"></section-header>

    <page-tabs core={page_tabs} callback={clickTab}></page-tabs>

    <div>
        <page-usage_tab-readme  class="hide"></page-usage_tab-readme>
        <page-usage_tab-code   class="hide"></page-usage_tab-code>
        <page-usage_tab-data></page-usage_tab-data>
        <page-usage_tab-options class="hide"></page-usage_tab-options>
    </div>

    <section-footer></section-footer>

    <script>
     this.page_tabs = new PageTabs([
         {code: 'readme',  label: 'README',  tag: 'page-usage_tab-readme' },
         {code: 'usage',   label: 'Code',    tag: 'page-usage_tab-code' },
         {code: 'data',    label: 'Data',    tag: 'page-usage_tab-data' },
         {code: 'options', label: 'Options', tag: 'page-usage_tab-options' },
     ]);

     this.on('mount', () => {
         this.page_tabs.switchTab(this.tags)
         this.update();
     });

     this.clickTab = (e, action, data) => {
         if (this.page_tabs.switchTab(this.tags, data.code))
             this.update();
     };
    </script>
</page-usage>
