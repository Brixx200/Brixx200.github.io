$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
    

    // TODO 2 - Create Platforms
   createPlatform(10,300,100,10,'hotPink');
   createPlatform(250,200,100,10,'hotPink');
   createPlatform(1100,200,50,10,"hotPink");
   createPlatform(1300,350,150,10,"hotPink");
   createPlatform(1375,601,100,10,"lightBlue");
   createPlatform(350,600,100,10,"hotPink");
   createPlatform(850,500,100,10,"hotPink");
   createPlatform(1100,601,50,10,"hotPink");
   
   //top walls//
   createPlatform(450,18,100,10,"hotPink");
   createPlatform(550,18,100,10,"hotPink");
   createPlatform(650,18,100,10,"hotPink");
   createPlatform(750,18,100,10,"hotPink");
   createPlatform(850,18,10,200,"hotPink")
   createPlatform(850,215,75,10,"hotPink")
   //bottom walls//
   createPlatform(450,120,100,10,"hotPink");
   createPlatform(550,120,100,10,"hotPink");
   createPlatform(650,120,100,10,"hotPink");
   createPlatform(750,120,10,200,"hotPink");
   createPlatform(750,320,200,10,"hotPink");
   //hidden collectable wall//
   createPlatform(1300,350,10,250,"hotPink");
   createPlatform(1275,475,30,10,"hotPink");
   //grass//
   createPlatform(100,700,10,50,"green");
   createPlatform(125,700,10,400,"green");
   createPlatform(150,700,10,50,"green");
   createPlatform(200,700,10,50,"green");
   createPlatform(225,700,10,55,"green");
   createPlatform(250,700,10,59,"green");
   createPlatform(300,700,10,50,"green");
   createPlatform(325,700,10,60,"green");
   createPlatform(350,700,10,50,"green");
   createPlatform(400,700,10,62,"green");
   createPlatform(425,700,10,50,"green");
   createPlatform(450,700,10,65,"green");
   createPlatform(500,700,10,50,"green");
   createPlatform(525,700,10,49,"green");
   createPlatform(550,700,10,50,"green");
   createPlatform(600,700,10,50,"green");
   createPlatform(625,700,10,50,"green");
   createPlatform(650,700,10,50,"green");
   createPlatform(700,700,10,50,"green");
   createPlatform(725,700,10,50,"green");
   createPlatform(750,700,10,50,"green");
   createPlatform(800,700,10,50,"green");
   createPlatform(825,700,10,50,"green");
   createPlatform(850,700,10,50,"green");
   createPlatform(900,700,10,50,"green");
   createPlatform(925,700,10,50,"green");
   createPlatform(950,700,10,50,"green");
   createPlatform(1000,700,10,50,"green");
   createPlatform(1025,700,10,50,"green");
   createPlatform(1050,700,10,50,"green");
   createPlatform(1100,700,10,50,"green");
   createPlatform(1125,700,10,50,"green");
   createPlatform(1150,700,10,50,"green");
   createPlatform(1200,700,10,50,"green");
   createPlatform(1225,700,10,50,"green");
   createPlatform(1250,700,10,50,"green");
   createPlatform(1300,700,10,50,"green");
   createPlatform(1325,700,10,50,"green");
   createPlatform(1350,700,10,50,"green");
   createPlatform(25,700,10,50,"green");
   createPlatform(50,700,10,50,"green");
   createPlatform(75,700,10,50,"green");
   createPlatform(175,700,10,50,"green");
   createPlatform(275,700,10,50,"green");
   createPlatform(375,700,10,50,"green");
   createPlatform(475,700,10,50,"green");
   createPlatform(575,700,10,50,"green");
   createPlatform(675,700,10,50,"green");
   createPlatform(775,700,10,50,"green");
   createPlatform(875,700,10,50,"green");
   createPlatform(975,700,10,50,"green");
   createPlatform(1075,700,10,50,"green");
   createPlatform(1175,700,10,50,"green");
   createPlatform(1275,700,10,50,"green");
   createPlatform(1375,700,10,50,"green");
   //clouds
  
   createPlatform(1200,100,75,50,'white');
   createPlatform(1200,50,10,50,'white');
   createPlatform(1150,50,60,100,'white');
   createPlatform(1100,100,50,50,'white');

   createPlatform(450,275,100,50,'white');
   createPlatform(540,250,100,75,'white');
   //sun
   createPlatform(0,0,125,125,'yellow');



    // TODO 3 - Create Collectables

    createCollectable("diamond",810,50);
    createCollectable("grace",375,550);
    createCollectable("kennedi",875,450);
    createCollectable('steve',1335,375);
    createCollectable('max',1105,225);
    
    // TODO 4 - Create Cannons

    createCannon("left",300,2000);
    createCannon('bottom',1075,2000,);
    createCannon('top',250,2000,);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
