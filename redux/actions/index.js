import firebase from '../../app/firebase';

export let getImagesfromFirebase = fb_key => (dispatch) => {
  firebase.database().ref(`${fb_key}`).on('value', function (snapshot) {
    let images = snapshot.val()
    // console.log(images)
    dispatch(getImageArray(images))
  })
} 

// sending object through actions
const getImageArray = images => {
  return { type: 'GET_IMAGE_ARRAY', images }
}

export let createPicObj = () => (dispatch) => {
  firebase.database().ref('/').on('value', function (snapshot) {
    let k = []

    // loops four times and populates the dictionary but does not create a new one each time, how idk....
    snapshot.forEach(function(val) {
      let img_dict = {} 
      let image = val.val()[0]    
      img_dict['date'] = val.key;
      img_dict['image'] = image;
      img_dict['length'] = val.val().length;
      k.push(img_dict) 
    })
    dispatch(getPicObj(k))
  })
} 

const getPicObj = (objectArray) => {
  return { type: 'GET_PIC_OBJ', pic_objs: objectArray }
}


