/*
    Utility functions
*/
// see: https://dev.to/onmyway133/how-to-safely-access-deeply-nested-object-in-javascript-3n62
export const getValueNestedObject = (p, d, o) =>
    p.reduce((xs, x) => (xs != null && xs[x] != null ? xs[x] : d), o);

/*
    Big Number

export const b = (a, b) => {
    var ab = new BigNumber(a);
    var bb = new BigNumber(b);
    return ab.times(bb).toString();
};
*/