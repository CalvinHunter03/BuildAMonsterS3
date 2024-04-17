class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        my.sprite.rightArm = this.add.sprite(this.bodyX +100, this.bodyY, "monsterParts", "arm_yellowA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX-100, this.bodyY, "monsterParts", "arm_yellowA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm.angle = -25;
        my.sprite.leftArm.angle = 25;

        my.sprite.rightAnt = this.add.sprite(this.bodyX + 30, this.bodyY - 108, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.leftAnt = this.add.sprite(this.bodyX - 30, this.bodyY - 108, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.leftAnt.flipX = true;


        my.sprite.rightLeg = this.add.sprite(this.bodyX + 45, this.bodyY + 130, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 45, this.bodyY + 130, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.rightEye = this.add.sprite(this.bodyX + 32, this.bodyY-8, "monsterParts", "eye_human_red.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX - 33, this.bodyY-15, "monsterParts", "eye_human_red.png");
        my.sprite.topEye = this.add.sprite(this.bodyX, this.bodyY - 60, "monsterParts", "eye_red.png");
        my.sprite.topEye.scale = .5;

        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouthE.png");

        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY + 15, "monsterParts", "nose_green.png");
        my.sprite.nose.scale = .75;

        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouthF.png");
        my.sprite.fang.visible = false;











        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.input.keyboard.on("keydown", function(event){
            if(event.code === "KeyS"){
                my.sprite.fang.visible = false;
                my.sprite.mouth.visible = true;
            }
            if(event.code === "KeyF"){
                my.sprite.fang.visible = true;
                my.sprite.mouth.visible = false;
            }
            if(event.code ==="KeyA"){
                my.sprite.rightArm.x -= 1;
                my.sprite.leftArm.x -= 1;

                my.sprite.rightLeg.x -= 1;
                my.sprite.leftLeg.x -= 1;

                my.sprite.rightAnt.x -= 1;
                my.sprite.leftAnt.x -= 1;

                my.sprite.rightEye.x -= 1;
                my.sprite.leftEye.x -= 1;
                my.sprite.topEye.x -= 1;

                my.sprite.mouth.x -= 1;
                my.sprite.fang.x -= 1;

                my.sprite.nose.x -= 1;
                
                my.sprite.body.x -=1;

            }
            if(event.code ==="KeyD"){
                my.sprite.rightArm.x += 1;
                my.sprite.leftArm.x += 1;

                my.sprite.rightLeg.x += 1;
                my.sprite.leftLeg.x += 1;

                my.sprite.rightAnt.x += 1;
                my.sprite.leftAnt.x += 1;

                my.sprite.rightEye.x += 1;
                my.sprite.leftEye.x += 1;
                my.sprite.topEye.x += 1;

                my.sprite.mouth.x += 1;
                my.sprite.fang.x += 1;

                my.sprite.nose.x += 1;
                
                my.sprite.body.x += 1;

            }
        });
       
    }

}