class historia extends Phaser.Scene {
  constructor() {
    super('historia');
  }
  create(){
    this.add.image(960, 540, 'hist');
    this.ClickSound = this.sound.add("ClickSound").setVolume(0.4);
    this.menusong= this.sound.add("menusong", {loop:true}).setVolume(0.1);
    this.menusong.play()


    var btnsig= this.add.image(1700,1000, "btnsig")
    btnsig.setInteractive()
    btnsig.on('pointerdown', () => this.boton());
  }
  boton(){
    this.ClickSound.play()
    this.scene.start('historia2')
  } 
}