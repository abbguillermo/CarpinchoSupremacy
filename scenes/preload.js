class preload extends Phaser.Scene {
  constructor() {
    super('preload');
  }
  preload ()
  {
    //Menú
    this.load.image("menufondo", "./assets/imagenes/menu_background.png");
    this.load.image("carpinchomenu", "./assets/imagenes/carpincho_menu.png");
    this.load.image("fondo", "./assets/imagenes/backround.png");
    this.load.image("titulo", "./assets/imagenes/titulo.png");
    this.load.image("play", "./assets/imagenes/play.png");
    this.load.image("pistola12", "./assets/imagenes/pistola_blur.png");
    this.load.image("escopeta12", "./assets/imagenes/escopeta_blur.png");
    this.load.image("metralleta12", "./assets/imagenes/ametralladora_blur.png");

    //Sonidos
    this.load.audio('ClickSound', './assets/audio/ClickSound.mp3');
    this.load.audio('grito1', './assets/audio/grito1.mp3');
    this.load.audio('grito2', './assets/audio/grito2.mp3');
    this.load.audio('grito3', './assets/audio/grito3.mp3');
    this.load.audio('escopeta', './assets/audio/escopeta.mp3');
    this.load.audio('tirararma', './assets/audio/tirararma.mp3');
    this.load.audio('menusong', './assets/audio/menusong.mp3');
    this.load.audio('powerup', './assets/audio/powerup.mp3');
    this.load.audio('alerta', './assets/audio/alerta.mp3');
    
    //btn menú
    this.load.image("btnvolver", "./assets/imagenes/btnvolver.png");
    this.load.image("btnjugar", "./assets/imagenes/btnjugar.png");
    this.load.image("btncreditos", "./assets/imagenes/btncreditos.png");

    //gameplay
    this.load.image("pedazo", "./assets/imagenes/pedazo.png");
    this.load.image("cono", "./assets/imagenes/cono.png");
    this.load.image("hidrante", "./assets/imagenes/hidrante.png");
    this.load.image("espacio", "./assets/imagenes/espacio.png");
    this.load.image("arbusto1", "./assets/imagenes/arbusto1.png");
    this.load.image("arbusto2", "./assets/imagenes/arbusto2.png");
    this.load.image("telefono", "./assets/imagenes/telefono.png");
    this.load.image("advertencia", "./assets/imagenes/advertencia.png")

    //casas
    this.load.image("casa1", "./assets/imagenes/casa1.png");
    this.load.image("casa1.1", "./assets/imagenes/casa1.1.png");
    this.load.image("casa1.2", "./assets/imagenes/casa1.2.png");
    this.load.image("casa2", "./assets/imagenes/casa2.png");
    this.load.image("casa3", "./assets/imagenes/casa3.png");
    this.load.image("casa4", "./assets/imagenes/casa4.png");

    //plataformas
    this.load.image("plataforma1", "./assets/imagenes/plataforma1.png");
    this.load.image("plataforma2", "./assets/imagenes/plataforma2.png");
    this.load.image("plataforma3", "./assets/imagenes/plataforma3.png");
    //etc
    this.load.image("plantas", "./assets/imagenes/plantas.png");
    this.load.image("grua(1)", "./assets/imagenes/Grua (1).png");

    //creditos
    this.load.image("creditosimg", "./assets/imagenes/creditos.png");

    //historia
    this.load.image("hist", "./assets/imagenes/historia1.png");
    this.load.image("hist2", "./assets/imagenes/historia2.png");
    this.load.image("hist3", "./assets/imagenes/historia3.png");
    this.load.image("hist4", "./assets/imagenes/historia4.png");
    this.load.image("hist5", "./assets/imagenes/historia5.png");
    
    //btn sig
    this.load.image("btnsig", "./assets/imagenes/siguiente.png");

    this.load.spritesheet('pj', './assets/imagenes/carpincho_spritesheet.png', { frameWidth: 310, frameHeight: 334 });

    this.load.spritesheet('ganzo', './assets/imagenes/ganzo.png', { frameWidth: 286.2, frameHeight: 269 });

    this.load.spritesheet('globo', './assets/imagenes/saltar.png', { frameWidth: 243.6, frameHeight: 755 });

    this.load.spritesheet("enemigo", "./assets/imagenes/enemigo_spritesheet.png",{frameWidth: 200, frameHeight: 199});

    this.load.spritesheet('escopeta', "./assets/imagenes/escopeta_spritesheet.png", {frameWidth: 309, frameHeight: 140});

    this.load.spritesheet('pistola', "./assets/imagenes/pistola_spritesheet.png", {frameWidth: 200, frameHeight: 199});

    this.load.spritesheet('ametralladora', "./assets/imagenes/ametralladora_spritesheet.png", {frameWidth: 250.14, frameHeight: 249});
  }

  create() {

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'pj', frame: 0 } ],
      frameRate: 20,
    });

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('pj', { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: [{key: 'pj', frame: 8}],
      frameRate: 1,
    });

    this.anims.create({
      key: 'turnenemy',
      frames: [ { key: 'enemigo', frame: 0 } ],
      frameRate: 20,
    });

    this.anims.create({
      key: 'walkenemy',
      frames: this.anims.generateFrameNumbers('enemigo', { start: 0, end: 8 }),
      frameRate: 16,
      repeat: -1,
    });

    this.anims.create({
      key: 'walkenemy1',
      frames: this.anims.generateFrameNumbers('enemigo', { start: 0, end: 8 }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'walkenemy2',
      frames: this.anims.generateFrameNumbers('enemigo', { start: 0, end: 8 }),
      frameRate: 40,
      repeat: -1,
    });

    //no tocar
    this.anims.create({
      key: 'ganzo1',
      frames: this.anims.generateFrameNumbers('ganzo', { start: 0, end: 7 }),
      frameRate: 15,
      repeat: -1,
      
    });

    this.anims.create({
      key: 'globo1',
      frames: this.anims.generateFrameNumbers('globo', { start: 0, end: 4 }),
      frameRate: 9,
      repeat: -1,
      
    });

    this.anims.create({
      key: 'escopeta1',
      frames: this.anims.generateFrameNumbers('escopeta', { start: 0, end: 3 }),
      frameRate: 12,
    });

    this.anims.create({
      key: 'pistola1',
      frames: this.anims.generateFrameNumbers('pistola', { start: 0, end: 6 }),
      frameRate: 12,
    });

    this.anims.create({
      key: 'ametralladora1',
      frames: this.anims.generateFrameNumbers('ametralladora', { start: 0, end: 6 }),
      frameRate: 12,
    });


    this.scene.start('historia');

  }

}
