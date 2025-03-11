let d = '';
let s = '';
let result = '';


let score ={
    gagner : 0,
    egalité : 0,
    perdu : 0
};

function choixComputer(){
     let a= Math.random();
     let r='';

     if (a>0 && a<1/3){
       r="pierre";

     }
     else if (a>=1/3 && a<2/3){
        r="feuille";

     }
     else if (a>=2/3 && a<1){
        r="ciseau";



     }
    return r;
     }



function match(result){
    if(result==='gagné'){
        score.gagner+=1;
    }
    else if (result==='fait nul'){
        score.egalité+=1;
    }
    else if (result==='perdu'){
        score.perdu+=1;
    }
}

   function afficher(){
   
   document.querySelector('.js-match').innerHTML = `vous avez choisi <img src="images-pfc/${d}.png" class="choix"> et le PC <img src="images-pfc/${s}.png" class="choix">`;
   const l = document.querySelector('.js-resultat');
   l.innerHTML = `vous avez  ${result}`;
   document.querySelector('.js-score').innerHTML = `victoires:${score.gagner}, nuls : ${score.egalité}, defaites : ${score.perdu}`;}

   function afficherbis(){
    document.querySelector('.js-resultat').innerHTML = 'vous avez recommencer votre Partie'
    document.querySelector('.js-match').innerHTML = `victoires:${score.gagner}, nuls : ${score.egalité}, defaites : ${score.perdu}`;
    document.querySelector('.js-score').innerHTML = '';
    
   }