
export function removeDuplicatesFromArray<T>(array: Array<T>, key: string): Array<T> {
     var arrThree = array

     function filterArray(inputArr: any) {
          var found: any = {};
          var out = inputArr.filter(function (element: any) {
               return found.hasOwnProperty(element[key]) ? false : (found[element[key]] = true)
          });
          return out
     }

     const outputArray = filterArray(arrThree)
     return outputArray
}


export function getTiposSangre(): Array<string> {
     return ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
}