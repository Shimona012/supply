	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground;
	var box,heli;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	var box1,box2,box3;

	function preload()
	{
		helicopterIMG=loadImage("helicopter.png");
		packageIMG=loadImage("package.png");
		//box=loadSound("box.mp3");
		//heli=loadSound("helicopter.mp3");
	}

	function setup() {
		createCanvas(800, 700);
		rectMode(CENTER);
		


		packageSprite=createSprite(width/2, 80, 10,10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2


		helicopterSprite=createSprite(width/2, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6

		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)


		engine = Engine.create();
		world = engine.world;

		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
		World.add(world, packageBody);
		

		//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);


		Engine.run(engine);
	
		//heli.loop(); 


		box1 = new Box(400,670,240,20);
		box2= new Box(510,630,20,100);
		box3= new Box(290,630,20,100);
	}


	function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 


	/*if(packageSprite.x-ground.x<ground.width/2+packageSprite.width/2 &&   

		ground.x-packageSprite.x<ground.width/2+packageSprite.width/2&& 
		
		packageSprite.y-ground.y<ground.height/2+packageSprite.height/2 &&  
		
		ground.y-packageSprite.y<ground.height/2+packageSprite.height/2){ 
		
		helicopterSprite.destroy(); 
		
		packageSprite.destroy(); 
		
		box1.destroy(); 
		
		box2.destroy(); 
		 
		
		 
		
		box3.destroy(); 
		
		text("You Lost, refresh the page to play",200,200); 
		 
		
		 
		 
		
		} */
		
		 
packageSprite.x=helicopterSprite.x;



	drawSprites();
	
	//var Audio= new(SupplyMission-master\helicopter.mp3: "sounds");
	box1.display();
box2.display();
box3.display();
	}

	function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic( packageBody,false);
		//box.play();
	}
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x=helicopterSprite.x-50;
		//packageSprite.visible=false;
	}
	/*else{
		packageSprite.visible=true;
	}*/
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+50;
		//packageSprite.visible=false;
	}
	/*else{
		packageSprite.visible=true;
	}
*/
	}


