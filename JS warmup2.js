window.addEventListener("mousemove",function(axis)

{
    var rect=this.document.querySelector("#rect");
 var xval=gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-(100+rect.getBoundingClientRect().width/2),axis.clientX)
    gsap.to(`#rect`,
    {
        left:xval,
        ease:Power3,
    })
})