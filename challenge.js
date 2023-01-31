function marsExploration(s) {
  // Write your code here
  let arr = s.split('')
  let len = arr.length, count = 0;
  
  for(let i = 0; i < len; i++){
      if((i%3==0 || i%3==2)&& arr[i]!=='S'){
          count++;
      }else if(i%3==1 && arr[i]!=='O'){
          count++;
      }
  }
  return count;
}