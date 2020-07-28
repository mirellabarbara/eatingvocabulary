// variáveis para tela menu
var x = 3;
var y = 175;
// variáveis do retangulo (balão de pergunta) da fase 1
var x1 = 5;
var y1 = 170;
// Variáveis do retangulo para definir espaço onde ocorrerá o jogo
var x2 = 170;
var y2 = 325;
// variáveis para as fotos dos créditos
let img;
let img2;
// variável para imagem do menu
let img3;
//variável para imagem da fase1
let img4;
// variável p/ nível
var nivel=1;
var palavrasN1X=[];
var palavrasN1Y=[];


var tela = 4;
var opcao = 1;
var tempo = 0;

//Váriáveis da posição da cobrinha
var Xa = 200;
var Ya = 250;
var sentido="direita";
//var da lagura e altura da cobrinha
var A=20;
var B=20;


//preload pre carregar um arquivo
function preload() {
  
  img = loadImage('WhatsApp Image 2020-07-17 at 15.29.47.jpeg');
  img2 = loadImage('WhatsApp Image 2020-07-17 at 15.26.22.jpeg');
  img3 =loadImage ('balões de conversa - ingles.jpg');
  img4 = loadImage ('controle game.jpg');
}

// setup executa apenas uma vez

function setup() {
  createCanvas(600, 400);
    for (var i=0; i<9 ; i++){ 
      palavrasN1X[i] = parseInt(random (15, 40));
      palavrasN1Y[i] = parseInt(random (110, 385));
    }
}

//laço infinito
function draw() {
  colorMode(HSB);
  background(180, 200, 80);


  if (tela == 0){
    image (img3, 0, 0, 600, 400);
    Menu();
  }

  if (tela == 1){
    image (img4, -25, 65, 650, 250);
    fase1();
  }

  if (tela == 2){
    instrucoes();
  }
  if (tela == 3) {
    image(img, 410, 50, 160, 120);
    image(img2, 410, 200, 160, 120);
    creditos()
  }
  if (tela == 4) {
    teladojogo();
    
    //CONDIÇÕES PARA O GAME OVER (TOCAR AS PAREDES OU COMER AS FRASES ERRADAS
    
    //paredes
    
    if(Xa>=573 || Xa<=8 || Ya<=85 || Ya>=372){
      fimdejogo();
    }
    //palavras erradas nivel 1
    
    if(Xa>=palavrasN1X[0]-10 && Xa<=palavrasN1X[0]+20 && Ya>=palavrasN1Y[0]-25 && Ya<=palavrasN1Y[0]+15){
      fimdejogo();
  }
    if(Xa>=palavrasN1X[2]-30 && Xa<=palavrasN1X[2]+210 && Ya>=palavrasN1Y[2]-10 && Ya<=palavrasN1Y[2]+10){
      fimdejogo();
  }
    //palavras erradas nivel 2
    
    if(Xa>=palavrasN1X[5]-30 && Xa<=palavrasN1X[5]+135 && Ya>=palavrasN1Y[5]-20 && Ya<=palavrasN1Y[5]+20){
      fimdejogo();
  }
    if(Xa>=palavrasN1X[4]-30 && Xa<=palavrasN1X[4]+135 && Ya>=palavrasN1Y[4]-20 && Ya<=palavrasN1Y[4]+20){
      fimdejogo();
  }
    //palavras erradas nivel 3
    if(Xa>=palavrasN1X[6]-30 && Xa<=palavrasN1X[6]+30 && Ya>=palavrasN1Y[6]-30 && Ya<=palavrasN1Y[6]+30){
      fimdejogo();
  }
    if(Xa>=palavrasN1X[7]-30 && Xa<=palavrasN1X[7]+135 && Ya>=palavrasN1Y[7]-20 && Ya<=palavrasN1Y[7]+20){
      fimdejogo();
  }
    //chamar tela de fase 2
    
    if(nivel==4){
      fase2();
    }
    
  }
  
  if (tela == 5){
    fimdejogo();
  }

}

function Menu() {
  //area de seleção
  fill(1000)
  strokeWeight(3)
  rect(x, y, 190, 35, 15);

  //tamanho da fonte das palavras abaixo:
  
  fill(1000)
  textSize(35);
  strokeWeight(2) 
  rect (85,68, 395, 40, 0)
  fill(0)
  text('EATING VOCABULARY', 90, 100);
  textStyle(BOLD);
  textSize(20);
  text('START', 60, 200);
  text('INSTRUCTIONS', 223, 200);
  text('CREDITS', 450, 200);

}

function fase1() {
  fill(1000)
  rect(x2, y2, 260, 30, 15);
  fill(0)
  ellipse(508, 138, 30, 25);

  fill(1000)
  textSize(35);
  text('First Phase ', 210, 50);
  textStyle(BOLD);
  fill(0)
  textSize(16);
  text('  Você deve responder corretamente\n'+ '  às perguntas que serão feitas ao \n'+ '              início de cada fase!', 158, 155);
  fill (1000)
  textSize(15)
  text('UP', 498, 143)
  
  fill(0)
  textSize(20)
  text('PRESS THE "UP ARROW"', 175, 346);

  if (key == "ArrowUp") {
    tela = 4
  }

}

function teladojogo() {
  background(0);
  textSize(25);
  fill(1000);
  text("EATING VOCABULARY, GO!", 120, 40);
  fill('red')
  textSize(15)
  text('Nível: '+nivel, 15, 80);

  
  fill(250)
  rect(10,89,580,300)
 
  //Comandos Do quadrado (Cobrinha)
  fill('red')
  rect(Xa, Ya, A, B, 0)
 
  if(sentido==="direita" && Xa<573){
    Xa = Xa + 1;
    
  }
 
  if(sentido==="esquerda" && Xa>8){
    Xa = Xa - 1;
  }
  
  if(sentido==="cima" && Ya> 85){
    Ya = Ya - 1;
  }
  
  if(sentido==="baixo" && Ya<372){
    Ya = Ya + 1;
  }
  
  if (keyIsDown(37)) {
    sentido="esquerda";
  } 
  

  if (keyIsDown(39) ) {
    sentido="direita"
  }

  if (keyIsDown(38) ) {
    sentido="cima";
  }
  if (keyIsDown(40)) {
    sentido="baixo";
  }


   if(nivel==1){
     
   textSize(16)
   text('I am fine', palavrasN1X[0], palavrasN1Y[0]);
   text ('My Name is...(name)', palavrasN1X[1], palavrasN1Y[1]);
   text ('I am from (City, State, country)', palavrasN1X[2], palavrasN1Y[2]);
     //pergunta de cada nível
  fill(1000)
  textSize(16)
  text('QUESTION: "What is your name?"', 180, 80);

   
      // my name is ... (MIRELLA)
    
     // frase CERTA
       if(Xa>=palavrasN1X[1]-30 && Xa<=palavrasN1X[1]+135 && Ya>=palavrasN1Y[1]-20 && Ya<=palavrasN1Y[1]+20){
         
         nivel++;
        
       }
       
    }
    
    if(nivel==2){
      textSize(16)
   text('I am (age) years old"', palavrasN1X[3], palavrasN1Y[3]);
   text ('I live in Brasil', palavrasN1X[4], palavrasN1Y[4]);
   text ('I like here', palavrasN1X[5], palavrasN1Y[5]);
      
      fill(1000)
  textSize(16)
  text('QUESTION: "How old are you?"', 180, 80);
      
      //frase correta é:
      if(Xa>=palavrasN1X[3]-30 && Xa<=palavrasN1X[3]+135 && Ya>=palavrasN1Y[3]-20 && Ya<=palavrasN1Y[3]+20){
         
         nivel++;
        
       }
    }
      
      if (nivel==3){
  textSize(16)
   text('I am (idade) years old"', palavrasN1X[6], palavrasN1Y[6]);
   text ('I am... (nationality)', palavrasN1X[7], palavrasN1Y[7]);
   text ('I am from.. (City, State, Country)', palavrasN1X[8], palavrasN1Y[8]);
      
      fill(1000)
  textSize(16)
  text('QUESTION: "Where are you from?"', 180, 80);
      
      //frase correta é:
      if(Xa>=palavrasN1X[8]-30 && Xa<=palavrasN1X[8]+135 && Ya>=palavrasN1Y[8]-20 && Ya<=palavrasN1Y[8]+20){
        nivel++;
      }
      
      }
}  

function fase2(){
    background(0);
  textSize(50);
  fill(1000);
  text("Phase Two!", 180, 180);
   
   }    

function fimdejogo() {
  background(0);
  textSize(50);
  fill(1000);
  text("GAME OVER", 160, 185);

}



function instrucoes() {
  background(1000)
  textSize(35);
  fill(0)
  text('Instructions:', 15, 50);
  textSize(17);
  text('  Ano: 6º Ano do Ensino Fundamental', 15, 90);
  textSize(16);
  text('  Língua Inglesa: (EF06LI02) Coletar informações do grupo, perguntando\n' + 'e respondendo sobre a família, os amigos, a escola e a comunidade.', 15, 125);

  textSize(18);
  text('  Resumo do Jogo:', 15, 190);

  textSize(17);
  text('  O jogo a ser desenvolvido tem como inspiração o Jogo da Cobrinha.\n' + '  Porém, ao invés de comer um objeto (Como a maça, por ex.), a \n' + 'a cobrinha come palavras.\n' + '  Essas palavras formarão uma frase (na cobra ou na parte superior da\n' + 'tela), respondendo uma determinada pergunta em Inglês que será feita\n' + 'no início de cada fase do jogo.', 15, 240);

}

function creditos() {
  
  textSize(32);
  text('Credits:', 200, 50);

  //Dados dos envolvidos na criação do jogo
  textSize(18);
  text('    Mirella Bárbara Cardoso Vieira\n' + '(Programadora e Idealizadora do Game).', 40, 110);

  textSize(18);
  text('    Marinalva Cardoso Moreno Vieira\n' +'(Educadora - Formada em Língua Inglesa\n'+'pela Universidade Estadual do Rio Grande\n'+'do Norte e Pós-graduada em Didática do\n'+'ensino pela Universidade Potiguar (UNP).', 40, 220);

}

function keyPressed() {
  console.log(key)
  //seta para esquerda
  if (tela == 0) {
    if (key == "ArrowLeft" && x > 170) {
      x = x - 200;
      opcao = opcao - 1;
    }
    //seta para direita
    if (key == "ArrowRight" && x < 320) {
      x = x + 200;
      opcao = opcao + 1
      console.log(key);
    }
  }
  if (key == "Enter") {
    tela = opcao;
  }
  if (key == "Escape") {
    tela = 0;
  }

}
      


// VIDEOS-RESPOSTA À UNIDADE 2!!!!

// https://youtu.be/7_9osFjP4qM (EXPLICAÇÇÃO DE COMO SURGIU A IDEIA DO JOGO).
//https://youtu.be/oM3wwoL3Etg (PARTE 1 - Explicação do código inicial p/criação do menu.
//https://youtu.be/GMMAMOAQpsM (Criando minhas funções para a composição do Menu.
// https://youtu.be/WeY-hQ6cJ4s (Criando telas e mvimentando retangulo de seleção do menu)
// https://youtu.be/mx8cyliuTrE (desenvolvendo botão que leve p/ tela de ação do jogo.
//https://youtu.be/Axud6koY-j4 (TELA DE AÇÃO DO JOGO E MOVIMENTAÇÃO DA BOLINHA)
//https://youtu.be/AWKs89WkD78 (CONSIDERAÇÕES FINAIS)