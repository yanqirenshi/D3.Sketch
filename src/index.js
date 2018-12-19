(function draw () {
    let d3svg = makeD3Svg();
    let svg = d3svg.Svg();
    let forground = svg.selectAll('g.base.forground');

    new Sketcher()
        .data(_DATA)
        .sizing()
        .positioning()
        .draw(forground);
}());
