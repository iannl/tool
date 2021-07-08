function drawappicon(co,ct,svg) {
    var canvas = document.getElementById('icon');
    var ctx = canvas.getContext('2d');
    var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.width);
    grd.addColorStop(0, co);
    grd.addColorStop(1, ct);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var data = svg.replaceAll('size',canvas.width/1.5)
    var DOMURL = window.URL || window.webkitURL || window;
    var img1 = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml'});
    var url = DOMURL.createObjectURL(svg);
    img1.onload = function() {
       img1.width=canvas.width/2
       img1.height=canvas.height/2
       ctx.drawImage(img1, (canvas.width/canvas.width/1.5)*canvas.width/4, (canvas.width/canvas.width/1.5)*canvas.width/4);
       DOMURL.revokeObjectURL(url);
    }
    img1.src = url;
}

function test(){
    drawappicon(document.getElementById('co').value,document.getElementById('ct').value,document.getElementById('svgval').value)
}

function setSize(s){
    var canvas = document.getElementById('icon');
    canvas.width=s
    canvas.height=s
    test()
}

async function exportIcon(){
    var canvas = document.getElementById('icon');
    setSize(512)
    await sleep(50)
    var i512 = canvas.toDataURL();

    setSize(1024)
    await sleep(50)
    var i1024 = canvas.toDataURL();

    setSize(120)
    await sleep(50)
    var i120 = canvas.toDataURL();

    setSize(180)
    await sleep(50)
    var i180 = canvas.toDataURL();

    setSize(76)
    await sleep(50)
    var i76 = canvas.toDataURL();

    setSize(152)
    await sleep(50)
    var i152 = canvas.toDataURL();

    setSize(167)
    await sleep(50)
    var i167 = canvas.toDataURL();

    setSize(40)
    await sleep(50)
    var i40 = canvas.toDataURL();

    setSize(80)
    await sleep(50)
    var i80 = canvas.toDataURL();
    
    setSize(29)
    await sleep(50)
    var i29 = canvas.toDataURL();
    
    setSize(58)
    await sleep(50)
    var i58 = canvas.toDataURL();
    
    setSize(86)
    await sleep(50)
    var i87 = canvas.toDataURL();
    
    
    function urlToPromise(url) {
        return new Promise(function(resolve, reject) {
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        }
        var zip = new JSZip();
        zip.file('512.png', urlToPromise(i512), {binary:true});
        zip.file('1024.png', urlToPromise(i1024), {binary:true});
        zip.file('120.png', urlToPromise(i120), {binary:true});
        zip.file('180.png', urlToPromise(i180), {binary:true});
        zip.file('76.png', urlToPromise(i76), {binary:true});
        zip.file('152.png', urlToPromise(i152), {binary:true});
        zip.file('167.png', urlToPromise(i167), {binary:true});
        zip.file('40.png', urlToPromise(i40), {binary:true});
        zip.file('80.png', urlToPromise(i80), {binary:true});
        zip.file('29.png', urlToPromise(i29), {binary:true});
        zip.file('58.png', urlToPromise(i58), {binary:true});
        zip.file('87.png', urlToPromise(i87), {binary:true});
        zip.generateAsync({type:"blob"})
        .then(function callback(blob) {
            saveAs(blob, "iappiconcreator.zip");
        });
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  