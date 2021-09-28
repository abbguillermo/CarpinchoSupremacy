class nivel1 extends Phaser.Scene {

    constructor() {
      super('nivel1');
    }

    create () {       
        //  Fondo
        background = this.add.image(3840, 1080,"fondo")
        
        
        this.ClickSound =this.sound.add("ClickSound").setVolume(0.4);
        this.grito1 = this.sound.add("grito1").setVolume(0.4);
        this.grito2 = this.sound.add("grito2").setVolume(0.4);
        this.grito3 = this.sound.add("grito3").setVolume(0.4);
        this.tirararmasfx = this.sound.add("tirararma").setVolume(0.2);
        this.escopetasfx = this.sound.add("escopeta").setVolume(0.2);
        this.powerup = this.sound.add("powerup").setVolume(1);
        this.alerta = this.sound.add("alerta", {loop: false}).setDetune(-500);
        
        powerup1 = 1;

        this.add.image(445, 400,"casa1.2")
        this.add.image(445, 800,"casa3")
        this.add.image(445, 1200,"casa3")
        this.add.image(445, 1584,"casa3")

        this.add.image(1500, 950,"casa3")
        this.add.image(1500, 1466,"casa2")
        
        this.add.image(2300, 600,"casa1.2")
        this.add.image(2300, 1318,"casa1")

        this.add.image(3000, 900,"casa1.2")
        this.add.image(3200, 1466,"casa2")

        this.add.image(4992, 670,"casa1.2")
        this.add.image(5200, 1360,"casa4")

        this.add.image(5950, 1150,"casa1.2")
        this.add.image(6100, 1584,"casa3")

        this.add.image(7100, 1466,"casa2")

        //Arbusto
        this.add.image(2040, 1730,"arbusto1")
        this.add.image(5600, 1770,"arbusto2")

        var arbusto2 = this.physics.add.staticGroup() 
        arbusto2.create(6500, 1770,"arbusto2").setSize(200,30)
        arbusto2.create(2600, 1740,"hidrante").setScale(0.85).setSize(100,30)

        //telefono
        this.add.image(2090, 1650,"telefono")
        this.add.image(5600, 1650,"telefono")

        //Instrucciones
        this.add.image(900, 1680,"espacio").setScale(1.2)

        powertext=this.add.text(2015, 1820, "Presiona 9 para ADMIN MODE", { fontFamily: 'MinimalFont5x7',fontSize: '13px', fill: '#ffffff' })
        

        // creacion plataformas
        //PLATAFORM naranjas
        plataformas = this.physics.add.staticGroup()
        plataformas.create(3000, 680,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(2300, 380,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(2300, 840,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(2300, 1300,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)

        plataformas.create(5000, 450,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(5000, 930,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(5400, 1360,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)

        plataformas.create(5950, 930,"plataforma1").setScale(0.65).setSize(500,30).setOffset(130, 15)
        //PLATAFORM azules
        plataformas.create(1240, 1140,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(1760, 1140,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(1500, 1500,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)

        plataformas.create(3000, 1140,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(3460, 1140,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(3200, 1500,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)

        plataformas.create(6840, 1140,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(7360, 1140,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        plataformas.create(7100, 1500,"plataforma2").setScale(0.65).setSize(500,30).setOffset(130, 15)
        
        //PLATAFORM rosa
        plataformas.create(450, 600,"plataforma3").setScale(1).setSize(800,30).setOffset(-30, 15)
        plataformas.create(450, 1000,"plataforma3").setScale(1).setSize(800,30).setOffset(-30, 15) 
        plataformas.create(450, 1390,"plataforma3").setScale(1).setSize(800,30).setOffset(-30, 15)

        plataformas.create(1500, 750,"plataforma3").setScale(1).setSize(800,30).setOffset(-30, 15)

        plataformas.create(6100, 1390,"plataforma3").setScale(1).setSize(800,30).setOffset(-30, 15)

        // PLAYER-------------------------------------------------------------------------------------------------------------------------
        player = this.physics.add.sprite(100, 1900, 'pj').setScale(0.6).setSize(180,327);

        velx_r = 500;
        velx_l = -500;


        //final
        this.add.image(7410, 2090,"pedazo")
        this.add.image(3840, 2100,"plantas")

        cono = this.add.image(7445, 1915, "cono")
        this.physics.add.staticGroup(cono);

        adv = this.add.image(7465, 1650, "advertencia").setScale(0.5)
        this.physics.add.staticGroup(adv);

        this.physics.add.collider(player,plataformas);

        elevador1 = this.physics.add.sprite(4300, 1000, 'grua(1)').setScale(1).setSize(750,10).setOffset(0, 1590)
        elevador1.setImmovable(true);
        elevador1.body.allowGravity = false;
        elevador1.setVelocityY(100);
        this.physics.add.collider(player, elevador1);


        //Ganzo
        movingPlatform = this.physics.add.sprite(6000, 750, "ganzo").setScale(1.4).setSize(180,30);
        movingPlatform.setImmovable(true);
        movingPlatform.body.allowGravity = false;
        movingPlatform.setVelocityX(300);

        //Colisión player y plataformas
        this.physics.add.collider(player, movingPlatform);
           
        var Bordermap_down= this.add.rectangle(3312, 2023, 8000, 30);
        this.physics.add.staticGroup(Bordermap_down);
        var Bordermap_l= this.add.rectangle(1, 1080, 30, 3000);
        this.physics.add.staticGroup(Bordermap_l);
        var Bordermap_r= this.add.rectangle(7570, 1080, 30, 3000);
        this.physics.add.staticGroup(Bordermap_r);
        var Bordermap_fin= this.add.rectangle(7270, 2200, 10, 300);
        this.physics.add.staticGroup(Bordermap_fin);

        //Final
        var Bordermap_final= this.add.rectangle(7270, 2300, 1000, 30);
        this.physics.add.staticGroup(Bordermap_final);

        //colider suelo arbusto2
        this.physics.add.collider(player, arbusto2);
        this.physics.add.collider(player, Bordermap_down);
        this.physics.add.collider(player, Bordermap_l);
        this.physics.add.collider(player, Bordermap_r);
        this.physics.add.collider(player, Bordermap_fin);
        this.physics.add.collider(player, Bordermap_final, this.final, null, this);

        this.physics.add.collider(player, cono)
        this.physics.add.collider(player, adv)

        //  eventos
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
            spaceBar= this.input.keyboard.addKey("Space");
            fiveKey = this.input.keyboard.addKey("Five");
            QKey = this.input.keyboard.addKey("Nine");
        }
            
        
        // cámara
        this.cameras.main.setBounds(0,0, background.displayWidth, background.displayHeight);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(0.9);
        
        // enemigos
        enemigos = this.physics.add.group({
            key: 'enemigo',
            repeat: v,
            setXY: { x: 500, y: eg, stepX:Phaser.Math.Between(250,300)},
            
        });
  
        enemigos.children.iterate(function (child) {
            child.setCollideWorldBounds(false);
            child.allowGravity = true;
            child.setScale(1,1);
            child.setVelocityX(-25)
            child.anims.play('walkenemy', true)
            child.setSize(100,180)
            
        });

        this.physics.add.collider(enemigos, Bordermap_down)
        this.physics.add.collider(enemigos, plataformas)
        this.physics.add.collider(enemigos, cono)

        enemigos4 = this.physics.add.group({
            key: 'enemigo',
            repeat: v1,
            setXY: { x: 800, y: eg, stepX:576},
            
        });
  
        enemigos4.children.iterate(function (child) {
            child.setCollideWorldBounds(false);
            child.allowGravity = true;
            child.setScale(1,1);
            child.setVelocityX(90)
            child.anims.play('walkenemy2', true)
            child.setSize(100,180)
            
        });

        this.physics.add.collider(enemigos4, Bordermap_down)
        this.physics.add.collider(enemigos4, plataformas)
        this.physics.add.collider(enemigos4, cono)
        this.physics.add.collider(enemigos4,Bordermap_r)

        enemigos3 = this.physics.add.group({
            key: 'enemigo',
            repeat: v2,
            setXY: { x: 500, y: eg, stepX:300},
            
        });
  
        enemigos3.children.iterate(function (child) {
            child.setCollideWorldBounds(false);
            child.allowGravity = true;
            child.setScale(1,1);
            child.setVelocityX(-25)
            child.anims.play('walkenemy1', true)
            child.setSize(100,180)
            
        });

        this.physics.add.collider(enemigos3, Bordermap_down)
        this.physics.add.collider(enemigos3, plataformas)
        this.physics.add.collider(enemigos3, cono)
       
        
        enemigos5 = this.physics.add.group({
            key: 'enemigo',
            repeat: v3,
            setXY: { x: 1000, y: eg, stepX:200},
            
        });
  
        enemigos5.children.iterate(function (child) {
            child.setCollideWorldBounds(false);
            child.allowGravity = true;
            child.setScale(1,1);
            child.setVelocityX(-10)
            child.anims.play('walkenemy', true)
            child.setSize(100,180)
            
        });

        this.physics.add.collider(enemigos5, Bordermap_down)
        this.physics.add.collider(enemigos5, plataformas)
        this.physics.add.collider(enemigos5, cono)

        enemigos2 = this.physics.add.group({
            key: 'enemigo',
            repeat: v4,
            setXY: { x: 200, y: eg1, stepX:Phaser.Math.Between(320,450)},
            
        });
  
        enemigos2.children.iterate(function (child) {
            child.setCollideWorldBounds(false);
            child.allowGravity = true;
            child.setScale(1,1);
            child.setVelocityX(Vel)
            child.anims.play('walkenemy', true)
            child.setSize(100,180)
            
        });

        this.physics.add.collider(enemigos2, Bordermap_down)
        this.physics.add.collider(enemigos2, plataformas)
        this.physics.add.collider(enemigos2, cono)
      
        // colaider mapa 
        this.physics.add.collider(enemigos2,Bordermap_l)
        this.physics.add.collider(enemigos3,Bordermap_l)
        this.physics.add.collider(enemigos4,Bordermap_l)
        this.physics.add.collider(enemigos5,Bordermap_l)
        this.physics.add.collider(enemigos,Bordermap_l)
          
        Etext=this.add.text(-900, 20, "Enemigos Muertos:"+ enemi +"/"+ (general), { fontFamily: 'MinimalFont5x7',fontSize: '30px', fill: '#EBED24' })
        Etext.scrollFactorX= 0;
        Etext.scrollFactorY=0; 

        //armas derecha player
        Arma1 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Arma1 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'escopeta');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x + 1100);
              this.setVelocityY(player.body.velocity.y - 25)
              this.anims.play('escopeta1', true)
              this.setActive(true);
              this.setVisible(true);
              this.setSize(100,30)
              this.setOffset(0, 45)
            },
      
        });
          
        //conjunto de armas
        armas = this.add.group({
      
            classType: Arma1,
            runChildUpdate: true
        
        });
           
        //armas izquierda player
        Arma2 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Arma2 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'escopeta');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x - 1100);
              this.setVelocityY(player.body.velocity.y - 25)
              this.flipX = true;
              this.anims.play('escopeta1', true)
              this.setActive(true);
              this.setVisible(true);
              this.setSize(100,30)
              this.setOffset(0, 45)
            },
      
        });
         
        //conjunto de armas
        armas2 = this.add.group({
      
            classType: Arma2,
            runChildUpdate: true
      
        });

        Pistola1 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Pistola1 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'pistola');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x + 1600);
              this.setVelocityY(player.body.velocity.y - 25)
              this.setScale(0.57)
              this.anims.play('pistola1', true)
              this.setActive(true);
              this.setVisible(true);
              this.setSize(100,30)
              this.setOffset(0, 75)
            },
      
        });

        pistolas = this.add.group({
      
            classType: Pistola1,
            runChildUpdate: true,
        
        });

        Pistola2 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Pistola2 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'pistola');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x - 1600);
              this.setVelocityY(player.body.velocity.y - 25)
              this.flipX = true;
              this.setScale(0.57)
              this.anims.play('pistola1', true)
              this.setActive(true);
              this.setVisible(true);
              this.setSize(100,30)
              this.setOffset(0, 75)
            },
      
        });

        pistolas2 = this.add.group({
      
            classType: Pistola2,
            runChildUpdate: true
      
        });

        Ametralladora1 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Ametralladora1 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'ametralladora');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x + 1350);
              this.setVelocityY(player.body.velocity.y - 25)
              this.setScale(0.65)
              this.anims.play('ametralladora1', true)
              this.setActive(true);
              this.setVisible(true);
              this.setSize(100,30)
              this.setOffset(0, 95)
            },
      
        });
          
        ametralladoras = this.add.group({
    
            classType: Ametralladora1,
            runChildUpdate: true
        
        });

        Ametralladora2 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Ametralladora2 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'ametralladora');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x - 1350);
              this.setVelocityY(player.body.velocity.y - 25)
              this.flipX = true;
              this.setScale(0.65)
              this.anims.play('ametralladora1', true)
              this.setActive(true);
              this.setVisible(true);
              this.setSize(100,30)
              this.setOffset(0, 95)
            },
      
        });
         
        ametralladoras2 = this.add.group({
      
            classType: Ametralladora2,
            runChildUpdate: true
      
        });

        //arma desaparece al tocar plataformas, drop al piso
        this.physics.add.collider(armas, plataformas, this.destruirArma, null, this);
        this.physics.add.collider(armas, Bordermap_down, this.destruirarmapiso, null, this);
        this.physics.add.collider(armas2, plataformas, this.destruirArma2, null, this);
        this.physics.add.collider(armas2, Bordermap_down, this.destruirarma2piso, null, this);
        this.physics.add.collider(pistolas, plataformas, this.destruirPistola1, null, this);
        this.physics.add.collider(pistolas, Bordermap_down, this.destruirpistolapiso, null, this);
        this.physics.add.collider(pistolas2, plataformas, this.destruirPistola2, null, this);
        this.physics.add.collider(pistolas2, Bordermap_down, this.destruirpistola2piso, null, this);
        this.physics.add.collider(ametralladoras, plataformas, this.destruirAmetralladora1, null, this);
        this.physics.add.collider(ametralladoras, Bordermap_down, this.destruirametralladorapiso, null, this);
        this.physics.add.collider(ametralladoras2, plataformas, this.destruirAmetralladora2, null, this);
        this.physics.add.collider(ametralladoras2, Bordermap_down, this.destruirametralladora2piso, null, this);


        //enemigo muere
        this.physics.add.overlap(enemigos, armas, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos, armas2, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos2, armas, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos2, armas2, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos3, armas, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos3, armas2, this.matarenemigo, null, this);   
        this.physics.add.overlap(enemigos4, armas, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos4, armas2, this.matarenemigo, null, this);   
        this.physics.add.overlap(enemigos5, armas, this.matarenemigo, null, this);
        this.physics.add.overlap(enemigos5, armas2, this.matarenemigo, null, this);   

    }

    update (time, delta) {

        if (spaceBar.isDown){
            selecarm = Phaser.Math.Between(1, 3);
            console.log(selecarm)
        }
    
        if (cursors.left.isDown)
        {
            player.flipX = true;
            player.setVelocityX(velx_l);         
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(velx_r);
            player.flipX = false;
        }
        else  
        {
            player.setVelocityX(0);
            player.anims.play('turn');

            if (!(player.body.touching.down))
            {
                player.anims.play("jump", true)
                
            }
        }
        
        if(cursors.left.isDown && player.body.touching.down){
            player.flipX = true;
            player.anims.play('walk', true);
        }
        else if(cursors.right.isDown && player.body.touching.down){
            player.flipX = false;
            player.anims.play('walk', true);
        }

        if (cursors.up.isDown && player.body.touching.down){
            player.setVelocityY(-1050);                                              
        } 
        
        //  disparo
        if (selecarm == 1) {
            if (cursors.right.isDown || cursors.right.isUp && cursors.left.isUp){
                if (spaceBar.isDown && time > lastFired)
                {
                    this.tirararmasfx.play();
                    this.escopetasfx.play();
                    var gun = armas.get();
            
                    if (gun)
                    {
                        gun.disparo(player.x, player.y - 4);
                        lastFired = time + 300;
                    }
                }
            }
            
            if (cursors.left.isDown && cursors.right.isUp){
                if (spaceBar.isDown && time > lastFired2)
                {
                    this.tirararmasfx.play();
                    this.escopetasfx.play();
                    var gun2 = armas2.get();
            
                    if (gun2)
                    {
                        gun2.disparo(player.x, player.y - 4);
                        lastFired2 = time + 300;
                    }
                }
            }
        }
        if (selecarm == 2) {
            if (cursors.right.isDown || cursors.right.isUp && cursors.left.isUp){
                if (spaceBar.isDown && time > lastFired3)
                {
                    this.tirararmasfx.play();
                    this.escopetasfx.play();
                    var pist = pistolas.get();
            
                    if (pist)
                    {
                        pist.disparo(player.x, player.y - 4);
                        lastFired3 = time + 300;
                    }
                }
            }
            

            if (cursors.left.isDown && cursors.right.isUp){
                if (spaceBar.isDown && time > lastFired4)
                {
                    this.tirararmasfx.play();
                    this.escopetasfx.play();
                    var pist2 = pistolas2.get();
            
                    if (pist2)
                    {
                        pist2.disparo(player.x, player.y - 4);
                        lastFired4 = time + 300;
                    }
                }
            }
        }
        if (selecarm == 3) {
            if (cursors.right.isDown || cursors.right.isUp && cursors.left.isUp){
                if (spaceBar.isDown && time > lastFired5)
                {
                    this.tirararmasfx.play();
                    this.escopetasfx.play();
                    var amet = ametralladoras.get();
            
                    if (amet)
                    {
                        amet.disparo(player.x, player.y - 4);
                        lastFired5 = time + 300;
                    }
                }
            }
            

            if (cursors.left.isDown && cursors.right.isUp){
                if (spaceBar.isDown && time > lastFired6)
                {
                    this.tirararmasfx.play();
                    this.escopetasfx.play();
                    var amet2 = ametralladoras2.get();
            
                    if (amet2)
                    {
                        amet2.disparo(player.x, player.y - 4);
                        lastFired6 = time + 300;
                    }
                }
            }
        }
        // Animacion Inicial GANZO Salto
        if (movingPlatform.x >= 6000)
        {
            movingPlatform.setVelocityX(-300);
            movingPlatform.flipX = false;
            movingPlatform.anims.play('ganzo1', true);
        }
        
        else if (movingPlatform.x <= 3000)
        {
            movingPlatform.anims.play("ganzo1", true)
            movingPlatform.flipX = true;
            movingPlatform.setVelocityX(300);
        }

        //Grua
        if (elevador1.y >= 900)
        {
            elevador1.setVelocityY(-250);
        }
        else if (elevador1.y <= -200)
        {
            elevador1.setVelocityY(250);
        }
     
        //Sonidos de enemySFX
        if(SFX === 1){
            setTimeout(()=> {
                gritoV = Phaser.Math.Between(0,3);

            }, 500);
            
        }
        

        if(enemi>=(general) || (fiveKey.isDown)){
            this.gameWin()
        }
        //PowerUp
        if((QKey.isDown)){

            if(powerup1 === 1){
                this.powerup.play();
                powerup1 += 1;
            }
            velx_r = 1500;
            velx_l = -1500;
        } 

    }
 
    
    destruirArma(arma1, plataformas){
        arma1.setVelocityX(0);
    }

    destruirArma2(arma2, plataformas){
        arma2.setVelocityX(0);
    }

    destruirPistola1(pistola1, plataformas)
    {
        pistola1.setVelocityX(0);
    }

    destruirPistola2(pistola2, plataformas)
    {
        pistola2.setVelocityX(0);
    }

    destruirAmetralladora1(ametralladora1, plataformas)
    {
        ametralladora1.setVelocityX(0);
    }

    destruirAmetralladora2(ametralladora2, plataformas)
    {
        ametralladora2.setVelocityX(0);
    }

    destruirarmapiso(arma1, Bordermap_down){
        arma1.setVelocityX(0);
    }

    destruirarma2piso(arma2, Bordermap_down){
        arma2.setVelocityX(0);
    }

    destruirpistolapiso(pistola1, Bordermap_down)
    {
        pistola1.setVelocityX(0);
    }

    destruirpistola2piso(pistola2, Bordermap_down)
    {
        pistola2.setVelocityX(0);
    }

    destruirametralladorapiso(ametralladora1, Bordermap_down)
    {
        ametralladora1.setVelocityX(0);
    }

    destruirametralladora2piso(ametralladora2, Bordermap_down)
    {
        ametralladora2.setVelocityX(0);
    }

    matarenemigo(armas,enemigos){
        console.log(enemi)
        
        if(gritoV===  3){
            this.grito3.play();
        }
        if(gritoV=== 2){
            this.grito2.play();
        }
        if(gritoV=== 1){
            this.grito1.play();
        }

        enemigos.disableBody(true,true);
        enemigos.destroy();
        enemi+=1
        Etext.setText("Enemigos Muertos:"+ enemi +"/"+ (general))
    }

    matarenemigo2(armas2,enemigos){
        console.log(enemi)
        if(gritoV===  3){
            this.grito3.play();
        }
        if(gritoV=== 2){
            this.grito2.play();
        }
        if(gritoV=== 1){
            this.grito1.play();
        }
        
        enemigos.disableBody(true,true);
        enemigos.destroy();
        enemi+=1
        Etext.setText("Enemigos Muertos:"+ enemi +"/"+ (general))
    }

    /* musicaysfx(){
        musica = this.sound.add("musican1", {volume: 0.5, loop: true});
        musica.play();
        sfxmed = this.sound.add("sonidomedalla", {volume: 0.3});
        sfxinfo = this.sound.add("sonidoinformacion", {volume: 0.3});
        sfxvida = this.sound.add("sonidovidanueva", {volume: 0.3});
        sfxdaño = this.sound.add("sonidodaño", {volume: 0.3});
        sfxdisp = this.sound.add("sonidodisparo", {volume: 0.3});
        sfxmuerten = this.sound.add("sonidomuertego", {volume: 0.5});
    } */

    
    gameWin(){
        cono.destroy();
        adv.destroy();
        
    }
    final(){
        this.scene.start('historia5')
    }
}
