<<<<<<< HEAD
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
=======
var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = obj
>>>>>>> 91a1fc33143da19e5ec462d9d4b7b335687b6bf6
  newObj[key] = value
  return newObj
}

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object) 
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
>>>>>>> 91a1fc33143da19e5ec462d9d4b7b335687b6bf6
