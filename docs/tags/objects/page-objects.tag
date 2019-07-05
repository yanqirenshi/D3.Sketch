<page-objects>
    <section-header title="Class: Sketcher"></section-header>

    <page-tabs core={page_tabs} callback={clickTab}></page-tabs>

    <div>
        <page-objects_tab-readme           class="hide"></page-objects_tab-readme>
        <page-objects_tab-sketcher         class="hide"></page-objects_tab-sketcher>
        <page-objects_tab-default-sketcher class="hide"></page-objects_tab-default-sketcher>
    </div>

    <section-footer></section-footer>

    <script>
     this.page_tabs = new PageTabs([
         {code: 'readme',  label: 'README',                tag: 'page-objects_tab-readme' },
         {code: 'usage',   label: 'Class:Sketcher',        tag: 'page-objects_tab-sketcher' },
         {code: 'options', label: 'Class:DefaultSketcher', tag: 'page-objects_tab-default-sketcher' },
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
</page-objects>
