

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
    myOtherBox.object3D.rotation.x -= rotationSpeed;
    myOtherBox.object3D.rotation.y -= rotationSpeed; 
    myOtherBox.object3D.rotation.z -= rotationSpeed; 
    console.log(myOtherBox.object3D.rotation.x);
}

function inflate(){
    myOtherBox.object3D.scale.x += rotationSpeed;
    myOtherBox.object3D.scale.y += rotationSpeed;
}

setInterval(inflate, 16);

setInterval(spin, 16); //equivalent to 60 fps