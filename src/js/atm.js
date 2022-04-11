
const g = (str) => { 
  for(let i = 0; i < moneyFilter.length; i++){
    if(moneyFilter[i][0] == str){
     return moneyFilter[i][1]; 
    }
  }
  return false; 
}

const gs = (t, val1,  item, e) => {
  if(t >= 0) {
        item[1] = parseInt(val1) * item[2];
        change -= (item[2] * parseInt(val1)); 
        return item; 
  }
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;

  let moneyFilter = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ].filter(i => i[1] < change);

  if(change === cid.reduce((sum, i) => sum + i[1], 0))  {
    return {status: "CLOSED", change: cid}
  }

  let resultado = cid.reduce((obj, value) => {
    obj.push(value.concat(g(value[0]))); 
    return obj; 
  },  [])
  .filter(i => i[2] != false)
  .sort((a, b) => {
    return a[2] == b[2] ?  0 : a[2] < b[2] ? 1 : -1
  }).reduce((obj, item) => {
      if(change >= 1){
        let entero = parseInt(change);  
        let div1 = entero / item[2]; 
        let div2 = item[1] / item[2]; 
        if(div2 <= div1){
          let t =(div1 - div2); 
          obj.push(gs(t, div2, item, entero));
        }else if(div2 > div1){
          let t =(div2 - div1); 
          obj.push(gs(t, div1, item, entero));
        }
      }else if(change < 1 && change > 0){
      
        let div1 = change / item[2]; 
        let div2 = item[1] / item[2]; 
        
        let t = parseInt(div2) - parseInt(div1); 
        if(t >= 0 ) {
          item[1] = parseInt(div1) * item[2]; 
          change -= parseInt(div1) * item[2]; 
          obj.push(item);
        }
      }
      change = Number(Math.round(change+'e2')+'e-2');
      return obj; 
  },[]).filter(f => f[1] != 0).map(m =>  [m[0], m[1]])
  ; 
  let text = (change == 0)? "OPEN": "INSUFFICIENT_FUNDS"; 
  return {status: text, change: resultado}; 
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));