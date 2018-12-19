class Sketcher {
    constructor() {
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
