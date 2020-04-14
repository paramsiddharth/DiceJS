const makeDice = (ver=10,hor=10,invert=false,elem=".jdie",rollonclick=true) => {
    if (elem.length>0 && elem.charAt(0)=='.') {
    let elemclass = elem.slice(1);
    let el = document.getElementsByClassName(elemclass),res=[];
    for (let e of el) {
        let child = document.createElement('canvas');
        child.height=ver;
        child.width=hor;
        child.style.display='inline';
        e.append(child);
        res.push(makeDie(child,invert,rollonclick));//e.lastChild
    }
    return res;
    } else if (elem.length>0 && elem.charAt(0)=='#') {
    let elemid = elem.slice(1);
    let e = document.getElementById(elemid);
    let child = document.createElement('canvas');
    child.height=ver;
    child.width=hor;
    child.style.display='inline';
    e.append(child);
    return makeDie(child,invert,rollonclick);
    } else if (elem.length>0) {
    let el = document.getElementsByTagName(elem),res=[];
    for (let e of el) {
        let child = document.createElement('canvas');
        child.height=ver;
        child.width=hor;
        child.style.display='inline';
        e.append(child);
        res.push(makeDie(child,invert,rollonclick));//e.lastChild
    }
    return res;
    }
}

const makeDie = (canvas,invert=false,rollonclick=true) => {
    //document.write("<canvas id='' height='10' width='10'></canvas>");
    let ctx = canvas.getContext('2d');
    let h=canvas.height, w=canvas.width, d=h<w?h:w
    b=0.01*d>=0.5?0.01*d:0.5;
    br=0.1*d>=1?0.1*d:1;
    let bgcl='#FFFFFF',
    dcl='#000000';
    if (invert)
        [bgcl,dcl]=[dcl,bgcl];
    canvas.style = 'border:'+b+'px solid'+dcl+';border-radius:'+br+'px';
    if (rollonclick) {
        canvas.onclick = ()=>{rollDie(canvas,invert)};
    } else {
        canvas.onclick = undefined;
    }
    rollDie(canvas,invert);
    return {element: canvas, roll: ()=>{rollDie(canvas,invert);}};
};

const rollDie = (canvas,invert=false) => {
    let dots = [
        [0.25,0.25], //0,Top-Left
        [0.5,0.25], //1,Top-Centre
        [0.75,0.25], //2,Top-Right
        [0.25,0.5], //3,Centre-Left
        [0.5,0.5], //4,Centre
        [0.75,0.5], //5,Centre-Right
        [0.25,0.75], //6,Bottom-Left
        [0.5,0.75], //7,Bottom-Centre
        [0.75,0.75], //8,Bottom-Right
    ];
    let indices = {
        1:[4],
        2:[[0,8],[2,6]],
        3:[[2,4,6],[0,4,8]],
        4:[0,2,6,8],
        5:[0,2,4,6,8],
        6:[[0,1,2,6,7,8],[0,2,3,5,6,8]]
    };
    let h=canvas.height, w=canvas.width, d=h<w?h:w
    r=0.08*d>=0.1?0.08*d:0.1
    ctx=canvas.getContext('2d');
    let bgcl='#FFFFFF',
    dcl='#000000';
    if (invert)
        [bgcl,dcl]=[dcl,bgcl];
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    ctx.fillStyle = bgcl;
    ctx.rect(0,0,w,h);
    ctx.fill();
    let n = Math.ceil(Math.random()*6),
        cells=indices[n];
    if ([2,3,6].includes(n))
        cells=cells[Math.floor(2*Math.random())];
    for (let i of cells) {
        ctx.beginPath();
        ctx.arc(dots[i][0]*w,dots[i][1]*h,0.08*d,0,2*Math.PI);
        ctx.fillStyle = dcl;
        ctx.strokeStyle = dcl;
        ctx.fill();
        ctx.stroke();
    }
    return n;
}