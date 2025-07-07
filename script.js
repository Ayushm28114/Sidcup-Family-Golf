var cur=document.querySelector("#cursor");
var cblur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    cur.style.left=dets.x+"px";
    cur.style.top=dets.y+"px";

    cblur.style.left=dets.x-170+"px";
    cblur.style.top=dets.y-170+"px"
    
})
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cur.style.scale=3;
        cur.style.border="0.1px solid #fff";
        cur.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave", function() {
        cur.style.scale=1;
        cur.style.border="2px solid #95c11e";
        cur.style.backgroundColor="#95c11e";
    })
})

gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",    
    duration: 2,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top+=5%",
        // end: "top-=4%",
        scrub: 1,
}
}) 

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#scroller h4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 40%",
        scrub: 3,
    }
})
gsap.from("#aboutus,#btwau",{
    y:90,
    opacity:0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
    }
})
gsap.from("#c1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#c1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2,
    }
})
gsap.from("#c2",{
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#c1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3,
    }
})
gsap.from("#page4,#hero",{
    y:90,
    opacity:0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#hero",
        scroller: "body",
        // markers: true,
        start: "top 98%",
        end: "top 70%",
        scrub: 2,
    }
})