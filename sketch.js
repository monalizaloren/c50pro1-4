var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
  //Carregue as imagens e animações
}

function setup(){

//imagem de fundo
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3

  //criar o solo superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //Agora tente você criar um sprite,adicionar animação e definir tamanho do balão     

}

function draw() {
  
  background("black");
        
          //faça o balão de ar quente pular
          

          //adicione gravidade
           
   
        drawSprites();
        
}
