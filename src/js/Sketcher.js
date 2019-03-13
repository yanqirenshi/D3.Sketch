/**
 * D3.js でスケッチする人のためのクラスです。
 * Ver 0.0.1 @2019-03-14 (Thu) 08:10:00 (JST)
 */
class Sketcher {
    constructor(options) {
        this._options = options;

        if (this._options)
            return;

        this._options = {
            d3: d3,
            svg: d3.select("#scketchbook"),
            x: 0,
            y: 0,
            w: window.innerWidthn,
            h: window.innerHeight,
            scale: 1
        };
    }
    /**
     * D3.Svg を作成するメソッド。
     * これ単体で利用するみたいじゃね。
     */
    makeD3Svg () {
        let w = this._options.w;
        let h = this._options.h;

        let selector = this._options.element.selector;

        // let svg_tag = document.getElementById(selector);
        let svg_tag = document.querySelector(selector);

        if (!svg_tag)
            throw new Error('Element Not Found. selector="' + selector + '"');

        svg_tag.setAttribute('height' ,h);
        svg_tag.setAttribute('width'  ,w);

        let d3svg = new D3Svg({
            d3: d3,
            svg: d3.select(selector),
            x: 0,
            y: 0,
            w: w,
            h: h,
            scale: this._options.scale,
            callbacks: this._options.callbacks,
        });

        // this.makeBases(d3svg);
        // this.drawBackground(d3svg);

        return d3svg;
    }
    /**
     * D3.Svg にベースとしての Group を追加する。
     * g.background と g.forground は必ず作成される。
     * 追加したい場合は、引数 base で追加指定可能。
     *
     * @param {Object}     d3svg - 描画場所としての D3.Svg
     * @param {hash-table} base  - 追加で描画する Base
     */
    makeBases (d3svg, base) {
        let svg = d3svg.Svg();
        let _base = [
            { _id: -100, code: 'background' },
            { _id: -150, code: 'forground' },
        ];

        if (!base)
            base = _base;
        else
            base = _base.concat(base);

        svg.selectAll('g.base')
            .data(base, (d) => { return d._id; })
            .enter()
            .append('g')
            .attr('class', (d) => {
                return 'base ' + d.code;
            });
    }
    getBase (name) {
        if (!this._d3svg)
            return null;
        let svg = this._d3svg.Svg();

        return svg.selectAll('g.base.' + name);
    }
    /**
     * d3svg に 罫線を描画する。
     * @param {Object} d3svg - 描画場所としての D3.Svg
     */
    drawBackground (d3svg) {
        let length = 8800;
        let start = length * -1;
        let end   = length;
        let x_data = [];
        let y_data = [];
        let _id = 100;

        let axis = [
            { _id: _id++, x1: start, x2: end, y1: 0, y2: 0},
            { _id: _id++, x1: 0, x2: 0, y1: start, y2: end},
        ];

        for (var i=start ; i < end ; i+=100)
            x_data.push({ _id: _id++,
                          x1:i,
                          y1:start,
                          x2:i,
                          y2: end});

        for (var i=start ; i < end ; i+=100)
            y_data.push({ _id: _id++,
                          x1:start,
                          y1:i,
                          x2:end,
                          y2: i});

        let data = [].concat(x_data).concat(y_data);

        let svg = d3svg.Svg();
        let background = svg.selectAll('g.base.background');

        background.selectAll('line.grid')
            .data(data, (d) => { return d._id; })
            .enter()
            .append('line')
            .attr('class', 'grid')
            .attr('x1', (d) => { return d.x1;})
            .attr('y1', (d) => { return d.y1;})
            .attr('x2', (d) => { return d.x2;})
            .attr('y2', (d) => { return d.y2;})
            .attr('stroke', '#888888')
            .attr('stroke-width', 0.3)
            .attr('stroke-dasharray', 3);

        background.selectAll('line.axis')
            .data(axis, (d) => { return d._id; })
            .enter()
            .append('line')
            .attr('class', 'axis')
            .attr('x1', (d) => { return d.x1;})
            .attr('y1', (d) => { return d.y1;})
            .attr('x2', (d) => { return d.x2;})
            .attr('y2', (d) => { return d.y2;})
            .attr('stroke', '#333333')
            .attr('stroke-width', 3);
    }
    underpainting (base) {
        this._d3svg = this.makeD3Svg();

        this.makeBases(this._d3svg, base);
        this.drawBackground(this._d3svg);

        return this;
    }
    /* **************************************************************** *
     * Data manegement
     * **************************************************************** */
    data(list) {
        this._data =  list;

        return this;
    }
    /* **************************************************************** *
     * Sizing
     * **************************************************************** */
    sizing () {
        return this;
    }
    /* **************************************************************** *
     * Positioning
     * **************************************************************** */
    positioning () {
        return this;
    }
    /* **************************************************************** *
     * Draw
     * **************************************************************** */
    draw (place) {}
}
