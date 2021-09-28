class historia5 extends Phaser.Scene {
  constructor() {
    super('historia5');
  }
  create(){
    this.add.image(960, 540, 'hist5');
    this.ClickSound = this.sound.add("ClickSound").setVolume(0.4);
    
    var btnsig= this.add.image(1700,1000, "btnsig")
    btnsig.setInteractive()
    btnsig.on('pointerdown', () => this.boton());
  }
  boton(){
    this.ClickSound.play()
    this.scene.start('creditos')
  } 
}