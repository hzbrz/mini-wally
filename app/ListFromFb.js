import firebase from './firebase';


export const db_value = () => {
    firebase.database().ref('/').on('value', snap => {
        console.log(snap.val())
    })
}

export const db_images_value = () => {
    firebase.database().ref('/images').on('value', snap => {
        let img = {}
        let image_list = []
        for (let i=0; i<snap.val().length; i++) {
            console.log(image_list + [img[i] = snap.val()[i]])
        }
    })
}
