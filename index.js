// Add your functions here
const map = (sourceArray, callBack) => {
    let newArray = [] 
    for (let i = 0; i < sourceArray.length; i++) {
        let theElement = sourceArray[i]
        newArray.push(callBack(theElement))
      }
    
      return newArray;
    }

    const reduce = (sourceArray, callBack, startingPoint) => {

        let newArray = (!!startingPoint) ? startingPoint : sourceArray[0]
        let i = (!!startingPoint) ? 0 : 1
      
        for (; i < sourceArray.length; i++) {
          newArray = callBack(sourceArray[i], newArray)
        }
      
        return newArray;
    }
