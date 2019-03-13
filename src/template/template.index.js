function dump() {
    if (arguments.length==0) return;
    if (arguments.length==1) console.log(arguments[0]);

    console.log(arguments);
}

(function draw () {
    let d3svg = makeD3Svg();
    let svg = d3svg.Svg();
    let forground = svg.selectAll('g.base.forground');

    new DefaultSketcher()
        .data(_DATA)
        .sizing()
        .positioning()
        .draw(forground);
}());
