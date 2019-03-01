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

        this.makeBases(d3svg);
        this.drawBackground(d3svg);

        return d3svg;
    }
    /* **************************************************************** *
       Data manegement
       * **************************************************************** */
    data(list) {
        this._data =  list;

        return this;
    }
    /* **************************************************************** *
       Sizing
       * **************************************************************** */
    sizing () {
        return this;
    }
    /* **************************************************************** *
       Positioning
       * **************************************************************** */
    positioning () {
        return this;
    }
    /* **************************************************************** *
       Draw
       * **************************************************************** */
    draw (place) {
        let data = this._data;

        place.selectAll('rect.sample')
            .data(data, (d) => { return d._id; })
            .enter()
            .append('rect')
            .attr('class', 'sample')
            .attr('x', (d) => { return d.x;})
            .attr('y', (d) => { return d.y;})
            .attr('width', (d) => { return d.w;})
            .attr('height', (d) => { return d.h;})
            .attr('rx', (d) => { return d.r;})
            .attr('ry', (d) => { return d.r;})
            .attr('fill', (d) => {
                return d.background.color;
            })
            .attr('stroke', (d) => { return d.stroke.color; })
            .attr('stroke-width', (d) => { return d.stroke.width; });
    }
}
