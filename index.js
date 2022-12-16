var imgArr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
var i,count=0
var imgVal=["img1","img2","img3","img4","img5"]
let idArr=["i1","i2","i3","i4","i5","i6"]
document.getElementById("i6").setAttribute("src",imgArr[Math.floor(Math.random()*5)])
var selectArr=[]
var checkDuplicate=[]
function reload(){
    let images=imgArr.concat([])
    i=Math.floor(Math.random()*5)
    images.push(imgArr[i])
    for(j=0;j<idArr.length;j++){
        let k=Math.floor(Math.random()*images.length)
        document.getElementById(idArr[j]).setAttribute("src",images[k])
        images.splice(k,1)
    }
    document.getElementById("reset").setAttribute("style","display:none;")
    document.getElementById("btn").setAttribute("style","display:none;")
    document.getElementById("para1").setAttribute("style","display:none;")
    document.getElementById("para2").setAttribute("style","display:none;")
    document.getElementById("text").removeAttribute("style")
    selectArr=[]
    checkDuplicate=[]
    count=0
}
function select(s,i){
    count++
    document.getElementById("reset").removeAttribute("style")
    if(i==checkDuplicate[0]){
        alert("Don't click twice")
        count--
        return
    }
    checkDuplicate.push(i)
    selectArr.push(s)
    if(count==2) document.getElementById("btn").removeAttribute("style")
    if(count>2){
        document.getElementById("btn").setAttribute("style","display:none;")
        setTimeout(() => {
            alert("You have selected more than 2 images. Please press Reset, select only 2 images and verify again")
        }, 0);
    } 
}
function verifyFun(){
    document.getElementById("text").setAttribute("style","display:none;")
    if(selectArr[0]==selectArr[1]) document.getElementById("para1").removeAttribute("style")
    else document.getElementById("para2").removeAttribute("style")
}