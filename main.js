let canv = document.getElementById('gc');
let ctx = canv.getContext('2d');

document.addEventListener('keydown', keyPush);

setInterval(game, 1000/10);

let xv=0;// x velocity
let yv=0;// y velocity

let px=10;// player position x
let py=10;// player position y

//grid size
let gs=20;
//tail count
let tc=20;

let ax=15;//apple x
let ay=15;//apple x

let trail=[];
let tail= 5;

function game(){
  px+=xv;
  py+=yv;

  if(px < 0){px = tc-1;}

  if(px > tc-1){px = 0;}

  if(py < 0){py = tc-1;}

  if(py > tc-1){py = 0;}

  ctx.fillStyle = "black";
  ctx.fillRect(0 ,0 ,canv.width, canv.height);

  ctx.fillStyle = "lime";
  for(let i=0; i<trail.length;i++){
    ctx.fillRect(trail[i].x*gs ,trail[i].y*gs ,gs-2, gs-2);
    if(trail[i].x == px && trail[i].y == py){
      tail = 5;
    }
  }
  trail.push({x:px, y:py});
  while(trail.length > tail){
    trail.shift();
  }

  if(ax == px && ay ==py){
    tail++;
    ax=Math.floor(Math.random()*tc);
    ay=Math.floor(Math.random()*tc);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(ax*gs ,ay*gs ,gs-2, gs-2);
}

function keyPush(e) {
  switch(e.keyCode){
    case 37:
      xv=-1;yv=0;
      break;
    case 38:
      xv=0;yv=-1;
      break;
    case 39:
      xv=1;yv=0;
      break;
    case 40:
      xv=0;yv=1;
      break;
  }
}
