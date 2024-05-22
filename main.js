const containEyes = [':', ';']
const containNose = ['-', '~']
const containSmile = [')', 'D']

function countSmileys(arr) {
  return arr.reduce((sum, smile) => {
    if (!containSmile.includes(smile[2]) && !containSmile.includes(smile[1]))
      {
        return sum
      }
    else if (containSmile.includes(smile[2]) && !containNose.includes(smile[1]))
      {
        return sum
      }
    else if (!containEyes.includes(smile[0]))
      {
        return sum
      }
    else{
      return ++sum
    }
  }, 0)
}