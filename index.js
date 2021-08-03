
function receivesAFunction(callback){
    callback()
  }

function returnsANamedFunction(){
    return function receivesAFunction(){
      console.log("function created")
    }
}

function returnsAnAnonymousFunction(){
  return function(){
      return "i am string"}
  }