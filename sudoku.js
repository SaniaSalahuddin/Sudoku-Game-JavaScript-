var numSelected=null;
var tileSelected=null;

let error=0;
var board=[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];
var solution=[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];
window.onload=()=>{
    startGame();
}
function startGame(){
    for(let i=1;i<=9;i++){
        let number=document.createElement("div");
        number.id=i;
        number.innerText=i;
        number.addEventListener("click",selectNumber);
        number.classList.add('number');
        document.getElementById('digit').appendChild(number);

    }
    //board creation 
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let tile=document.createElement('div');
            tile.id=r.toString()+'-'+c.toString();
          if(board[r][c]!=='-'){
            tile.innerText=board[r][c];
            tile.classList.add('color');
          }
          if(r==2||r==5){
            tile.classList.add('horizontal');
          }
          if(c==2 || c==5){
            tile.classList.add('vertical');
          }
          tile.addEventListener("click",selectTile);
          tile.classList.add('tile');
          document.getElementById('board').append(tile);

        }
    }
    
}
function selectNumber(){
    if(numSelected!==null){
       numSelected.classList.remove('select'); 
    }
    numSelected=this;
    numSelected.classList.add('select');

}
function selectTile(){
    if(numSelected){
        if(this.innerText!==""){
            return;
        }
       
    }
    tileSelected=this;
    let coords=tileSelected.id.split('-');
    let r=parseInt(coords[0]);
    let c=parseInt(coords[1]);
   if(solution[r][c]===numSelected.id){
    tileSelected.innerText=numSelected.id;
   }
   else{
    error++;
    document.getElementById('error').innerText=error;
   }

}