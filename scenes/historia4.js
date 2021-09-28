class historia4 extends Phaser.Scene {
  constructor() {
    super('historia4');
  }
  create(){
    this.add.image(960, 540, 'hist4');
    this.ClickSound = this.sound.add("ClickSound").setVolume(0.4);
    
    var btnsig= this.add.image(1700,1000, "btnsig")
    btnsig.setInteractive()
    btnsig.on('pointerdown', () => this. boton());
  } 
  boton(){
    this.ClickSound.play()
    this.scene.start('menu')
  }
}