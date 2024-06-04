console.log("ça marche");

function createCircle(){
    const visible = document.getElementById("MIDDLE");
    const circle = document.createElement('div');
    const size = document.getElementById("SIZE").value;
    const color = document.getElementById("COLOR").value;
    
    circle.id = 'circle';
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.border =`3px solid ${color}`;
    
    document.body.appendChild(circle);
    visible.style.display = "none";
}
function resetCircle(){
    const circle = document.getElementById('circle');
    if (circle) {
        circle.remove();
    }
}
function circle(){
    const visible = document.getElementById("MIDDLE");
    if(getComputedStyle(visible).display != "none"){
        visible.style.display = "none";
    }else{
        visible.style.display = "flex";
    }
    const circle = document.getElementById('circle');
    if (circle) {
        circle.remove();
    }
}




