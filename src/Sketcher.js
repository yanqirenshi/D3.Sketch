// ////////////////////////////////////////////////////////////////
// Sketcher.js
//
// Version: 0.0.1
// Date: 2019-01-29 (Tue)
//
// ////////////////////////////////////////////////////////////////
class Sketcher {
    constructor (options) {
        this._options = this.ensureOptions(options);
    }
    ensureOptions (options) {
        if (!options)
            options = {};

        if (!options.x) options.x = 0;
        if (!options.y) options.y = 0;
        if (!options.w) options.w = 0;
        if (!options.h) options.h = 0;
        if (!options.scale) options.scale = 1;

        return options;
    }
    makeBases (d3svg) {
        let svg = this.svg();

        let base = [
            { _id: -10, code: 'background' },
            { _id: -15, code: 'forground' },
        ];

        svg.selectAll('g.base')
            .data(base, (d) => { return d._id; })
            .enter()
            .append('g')
            .attr('class', (d) => {
                return 'base ' + d.code;
            });
    }
    makeGridData (start, end) {
        let x_data = [];
        let y_data = [];

        for (var i=start ; i < end ; i+=100)
            x_data.push({ _id: this._id--,
                          x1:i,
                          y1:start,
                          x2:i,
                          y2: end});

        for (var i=start ; i < end ; i+=100)
            y_data.push({ _id: this._id--,
                          x1:start,
                          y1:i,
                          x2:end,
                          y2: i});

        return [].concat(x_data).concat(y_data);
    }
    makeAxisData (start, end) {
        return [
            { _id: this._id--, x1: start, x2: end, y1: 0, y2: 0},
            { _id: this._id--, x1: 0, x2: 0, y1: start, y2: end},
        ];
    }
    drawGridLines (selection) {
        selection
            .attr('x1', (d) => { return d.x1;})
            .attr('y1', (d) => { return d.y1;})
            .attr('x2', (d) => { return d.x2;})
            .attr('y2', (d) => { return d.y2;})
            .attr('stroke', '#cccccc')
            .attr('stroke-width', 0.3)
            .attr('stroke-dasharray', 3);
    }
    drawAxis (selection) {
        selection
        .attr('x1', (d) => { return d.x1;})
        .attr('y1', (d) => { return d.y1;})
        .attr('x2', (d) => { return d.x2;})
        .attr('y2', (d) => { return d.y2;})
        .attr('stroke', '#888888')
        .attr('stroke-width', 3);
    }
    drawBackground (d3svg) {
        let length = 8800;

        let start = length * -1;
        let end   = length;

        this._id = -100;

        let axis_data = this.makeAxisData(start, end);
        let grid_data = this.makeGridData(start, end);

        let svg = d3svg.Svg();
        let background = svg.selectAll('g.base.background');

        let grids = background
            .selectAll('line.grid')
            .data(grid_data, (d) => { return d._id; })
            .enter()
            .append('line')
            .attr('class', 'grid');

        this.drawGridLines(grids);

        let axis = background
            .selectAll('line.axis')
            .data(axis_data, (d) => { return d._id; })
            .enter()
            .append('line')
            .attr('class', 'axis');

        this.drawAxis(axis);
    }
    makeCampus () {
        let params = this._options;

        let w = window.innerWidth;
        let h = window.innerHeight;

        let selection = d3.select(params.selector);
        if (selection.size()==0)
            throw new Error('タグが存在しません。params.selector='+params.selector);

        let svg_tag = selection._groups[0][0];
        svg_tag.setAttribute('height',h);
        svg_tag.setAttribute('width',w);

        let self = this;
        this._d3svg = new D3Svg({
            d3: d3,
            svg: selection,
            x: params.x,
            y: params.y,
            w: params.w,
            h: params.h,
            scale: params.scale,
            callbacks: {
                clickSvg: () => {
                    let callback = self.getCallback('svg.click');
                    if (callback)
                        params.callbacks.svg.click();
                },
                moveEndSvg: (position) => {
                    let callback = self.getCallback('svg.move.end');
                    if (callback)
                        params.callbacks.svg.click();
                },
                zoomSvg: (scale) => {
                    let callback = self.getCallback('svg.zoom');
                    if (callback)
                        params.callbacks.svg.click();
                }
            }
        });

        this.makeBases(this._d3svg);
        this.drawBackground(this._d3svg);

        return this;
    }
    svg () {
        return this._d3svg.Svg();
    }
    getCallback(keys_str) {
        let keys = keys_str.split(".");

        let callbacks = this._options.callbacks;

        if (!callbacks)
            return null;

        let callback = null;
        for (let key of keys) {
            callback = callbacks[key];
            if (!callback)
                return null;

            callbacks = callback;
        }

        if (typeof(callback) != "function")
            return null;

        return callback;
    }
}
