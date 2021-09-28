class creditos extends Phaser.Scene {
  constructor() {
    super('creditos');
  }
  create(){
    this.BombTime = 1900;
    this.ClickSound = this.sound.add("ClickSound").setVolume(0.4);

    bombs = this.physics.add.group({repeat:0, setXY: {stepX: 1}});
    
    var Bordermap_down1= this.add.rectangle(3312, 1103, 16000, 30);
    this.physics.add.staticGroup(Bordermap_down1);
    
   
    this.physics.add.collider(bombs,Bordermap_down1, this.hitBomb, null, this); 

    var backbutton= this.add.image(960,540, "creditosimg")
    backbutton.setInteractive()
    backbutton.on('pointerdown', () => this.boton());
  }
  update(){
    if ((this.BombTime == 1900)){ 
      this.lluvia()
    }
  }
  boton(){
    this.ClickSound.play()
    this.scene.start('menu')
  } 

  lluvia(){
    var posx = Phaser.Math.Between(-300, 4800);
    

    var bombs1 = bombs.create(posx, -200, 'escopeta12').setScale(0.3);
    
    bombs1.setVelocity(Phaser.Math.Between(-40, 300), 200);
    bombs1.allowGravity = true;
    bombs1.setGravityY(-600)

    var bombs2= bombs.create(posx, -200, 'metralleta12').setScale(0.3);
    
    bombs2.setVelocity(Phaser.Math.Between(-400, 400), 200);
    bombs2.allowGravity = true;
    bombs2.setGravityY(-610)

    var bombs3= bombs.create(posx, -200, 'pistola12').setScale(0.3);
    
    bombs3.setVelocity(Phaser.Math.Between(-100, 300), 200);
    bombs3.allowGravity = true;
    bombs3.setGravityY(-650)

    
  }
  hitBomb(Bordermap_down1,bombs){
    bombs.destroy();
  }

}
