<home_page_root>
    <section-header title="D3.Sketch"></section-header>

    <page-tabs core={page_tabs} callback={clickTab}></page-tabs>

    <div>
        <home_tab_readme  class="hide"></home_tab_readme>
        <home_tab_usage   class="hide"></home_tab_usage>
    </div>

    <section-footer></section-footer>

    <script>
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
    </script>
</home_page_root>
