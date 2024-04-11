var	dir="cafe/";
var	images=["slide (1)","slide (2)","slide (3)","slide (4)","slide (5)"]
var i=0;

function changeImage() {
document.getElementById('slide').src=dir+images[i]+".jpg";
i=i<images.length-1?++i:0;
setTimeout(changeImage,4000);
}

function prev() {
i=i>0?--i:images.length-1;
document.getElementById('slide').src=dir+images[i]+".jpg";
}

function next() {
i=i<images.length-1?++i:0;
document.getElementById('slide').src=dir+images[i]+".jpg";
}