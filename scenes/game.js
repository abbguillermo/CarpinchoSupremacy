let game;

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    }, 

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    
    scene: [preload, creditos, menu, nivel1, historia, historia2, historia3, historia4, historia5, ganado, endgame]
};



game = new Phaser.Game(config);

var carpincho = 0;

var velx_r = 500;
var velx_l = -500;


var SFX = 1;
var powerup1 = 1;
var ClickSound;
var grito1;
var grito2;
var grito3;
var gritoV;
var tirararmasfx;
var escopetasfx;
var menusong;
var powerup;

var plataformas;
var elevador1;
var movingPlatform;
var piso;
var player;
var cursors;
var fiveKey;
var QKey;


var bombs1;
var bombs2;
var bombs3;
var bombs;
var BombTime;
var bomb;



var background;
var WorldWalls;
var enemigos;
var enemigos2;
var enemigos3;
var enemigos4;
var enemigos5;


var tiempoEvent;
var tiempoini;
var tiempoText;
var tiemposeg;
var scoreText;
var infotext;
var Etext;
var powertext;

var score;

var cono;
var adv;

var spaceBar;
var armas;
var lastFired= 0;
var Arma1;
var enemi=0;

var Vel=(30)
var v=10
var v1=10
var v2=10
var v3=10
var v4=10
var general= (v+v1+v2+v3+v4)

var eg= Phaser.Math.Between(0,50)
var eg1=Phaser.Math.Between(900,1100)
var eg2=Phaser.Math.Between(1600,1800)
var armas2;
var lastFired2= 0;
var Arma2;

var pistolas;
var lastFired3= 0;
var Pistola1;

var pistolas2;
var lastFired4= 0;
var Pistola2;

var ametralladoras;
var lastFired5= 0;
var Ametralladora1;

var ametralladoras2;
var lastFired6= 0;
var Ametralladora2;

var selecarm;

var globo1;



