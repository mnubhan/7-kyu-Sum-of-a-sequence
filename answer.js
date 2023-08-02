const sequenceSum = (begin,end,step) =>{
  let result = 0
  if(begin>end){
    result
  }else{
    for(i=begin;i<end+1;i+=step){
      result+=i
    }
  }
  return result
}

const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for(var i=begin;i<=end;i+=step)
  {
    sum += i;
  }
  return sum;
};
