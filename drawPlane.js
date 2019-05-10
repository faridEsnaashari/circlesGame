function drawPlane(){
    var circlesSizez=[];
    
    for(i=0; i<30; i++){

        randRadios=Math.floor(Math.random()*40)+41;
        randCx=Math.floor(Math.random()*(window.innerWidth-((randRadios+30)*2)))+randRadios;
        randCy=Math.floor(Math.random()*(window.innerHeight-((randRadios+30)*2)))+randRadios;
        randColor=Math.floor(Math.random()*3);


        if(checkArea(circlesSizez,randRadios,randCx,randCy)){
            circlesSizez.push(drawCircle(randRadios,randCx,randCy,i,colors[randColor]));
        }
        else{
            i--;
        }
    }
}
function checkArea(circlesSizez,currentRadios,currentCx,currentCy){
    for(i=0;i<circlesSizez.length;i++){
        if(!checkArea2(circlesSizez[i][0],circlesSizez[i][1],circlesSizez[i][2],currentRadios,currentCx,currentCy)){
            return false;
        }
    }
    return true;
}
function checkArea2(obj1Radios,obj1Cx,obj1Cy,obj2Radios,obj2Cx,obj2Cy){
    pointsDistance=Math.sqrt((Math.pow(obj1Cx-obj2Cx,2))+(Math.pow(obj1Cy-obj2Cy,2)));
    radiosSize=obj1Radios+obj2Radios;
    if(pointsDistance>=radiosSize){
        return true;
    }
    else{
        return false;
    }
}
function drawCircle(radios,cx,cy,id,color){
    svg=d3.select('svg');

    svg.append('circle')
    .attr('cx',cx)
    .attr('cy',cy)
    .attr('r',radios)
    .attr('id',"circle"+id)
    .style('fill',color);

    return [radios,cx,cy,id];
}
