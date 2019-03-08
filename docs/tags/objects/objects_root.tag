<objects_root>
    <section-header title="Page02"></section-header>

    <page-tabs core={page_tabs} callback={clickTab}></page-tabs>

    <div>
        <objects_tab_readme class="hide"></objects_tab_readme>
        <objects_tab_tab1   class="hide"></objects_tab_tab1>
        <objects_tab_tab2   class="hide"></objects_tab_tab2>
        <objects_tab_tab3   class="hide"></objects_tab_tab3>
        <objects_tab_help   class="hide"></objects_tab_help>
    </div>

    <section-footer></section-footer>

    <script>
     this.page_tabs = new PageTabs([
         {code: 'readme', label: 'README', tag: 'objects_tab_readme' },
         {code: 'tab1',   label: 'TAB1',   tag: 'objects_tab_tab1' },
         {code: 'tab2',   label: 'TAB2',   tag: 'objects_tab_tab2' },
         {code: 'tab3',   label: 'TAB3',   tag: 'objects_tab_tab3' },
         {code: 'help',   label: 'HELP',   tag: 'objects_tab_help' },
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
