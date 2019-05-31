module.exports = function main(inputs) {
    // write your code here...
    let distance = inputs.distance;
    let parkTimeSum = inputs.parkTime*0.25;
  /*  let price =0;*/
    let summary;
    if (distance<=2){
        summary = 6+ parkTimeSum;
    }else if(distance >= 8) {
        summary = 6 + 6*0.8 + (distance-8)*0.8*(1+0.5) + parkTimeSum;
    }else{
        summary = 6 + (distance-2)*0.8 +  parkTimeSum;
    }
    //summary = summary.toFixed(0);
    return Math.round(summary);
  //  return "price";
};