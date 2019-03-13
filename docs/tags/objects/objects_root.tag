<objects_root>
    <section-header title="Sketcher"></section-header>

    <page-tabs core={page_tabs} callback={clickTab}></page-tabs>

    <div>
        <objects_tab_readme  class="hide"></objects_tab_readme>
        <objects_tab_options class="hide"></objects_tab_options>
        <objects_tab_usage   class="hide"></objects_tab_usage>
    </div>

    <section-footer></section-footer>

    <script>
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
    </script>
</objects_root>
