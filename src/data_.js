let _id = 1;

const entities = [
    {_id: _id++, code: 'c1', name: 'n1', x: 1200, y:600, z:0, w:333, h:222, _class: 'RESOURCE' },
];

const identifiers = [
    { _id: _id++, code: 'id1', name: 'id-1', _class: 'IDENTIFIER-INSTANCE' },
    { _id: _id++, code: 'id2', name: 'id-2', _class: 'IDENTIFIER-INSTANCE' },
];

const attributes = [
    { _id: _id++, code: 'attr1', name: 'attr-1', _class: 'ATTRIBUTE-INSTANCE' },
    { _id: _id++, code: 'attr2', name: 'attr-2', _class: 'ATTRIBUTE-INSTANCE' },
    { _id: _id++, code: 'attr3', name: 'attr-3', _class: 'ATTRIBUTE-INSTANCE' },
];

function portPosition () {
    return Math.random() * (360 - 1) + 1;
};

let deg = 0;
const ports = [];

(function makePorts() {
    for (let deg=0 ; deg<360 ; deg+=10)
        ports.push({ _id: _id++, code: 'port-'+deg, position: deg, _class: 'PORT' });
}());


function makeState(list) {
    let out = { list: list, ht: {} };

    for (let data of list)
        out.ht[data._id] = data;

    return out;
}

function makeEdge (from, to) {
    return {
        from_id:    from._id,
        from_class: from._class,
        to_id:      to._id,
        to_class:   to._class,
        _id:        _id++,
        _class:     'EDGE'
    };
}

function makeEdgeEntity2IdAttr () {
    let out = [];

    for (let from of entities)
        for (let to of identifiers)
            out.push(makeEdge (from, to));

    for (let from of entities)
        for (let to of attributes)
            out.push(makeEdge (from, to));

    return out;
}

function makeEdgeEntity2Port () {
    let out = [];

    for (let from of entities)
        for (let to of ports)
            out.push(makeEdge (from, to));

    return out;
}

function makeAllEdge () {
    return makeEdgeEntity2IdAttr().concat(makeEdgeEntity2Port());
}

const state = {
    entities:             makeState(entities),
    identifier_instances: makeState(identifiers),
    attribute_instances:  makeState(attributes),
    ports:                makeState(ports),
    relationships:        makeState(makeAllEdge()),
};
