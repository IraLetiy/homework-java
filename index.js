function disc (a,b,c) {
    return b*b-4*a*c;
}
const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

function solvQuadr(a,b,c) {
    const  d = disc (a,b,c);
    if (d>0) {
       const x1=(-b + Math.sqrt(d))/(2*a);
       const x2=(-b - Math.sqrt(d))/(2*a);
       return 'x1=' + x1 + '<br>'  + 'x2=' + x2;
    }
    else if (d===0) {
        const x3=(-b /(2*a));
        return 'x3=' + x3;
    }
    else if (d<0) {
        return ('рішення немає');
    }
}
const result = solvQuadr (a,b,c);
document.write(result);