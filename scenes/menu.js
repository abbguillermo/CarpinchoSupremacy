class menu extends Phaser.Scene {
  constructor() {
    super('menu');
  }
  create(){
    this.add.image(960, 540,"menufondo");
    this.ClickSound = this.sound.add("ClickSound").setVolume(0.4);
    
    var creditosbutton = this.add.image(1400, 750, "play")
    creditosbutton.setInteractive()
    creditosbutton.on('pointerdown', () => this.boton())
  }
  boton(){
    this.ClickSound.play()
    this.scene.start('nivel1')
  }
}