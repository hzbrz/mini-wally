const initialState = {
  images: [],
  pic_obj_arr: []
}


const images = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGE_ARRAY':
      return { ...state, images: action.images }
    case 'GET_PIC_OBJ':
      return { ...state, pic_obj_arr: action.pic_objs }
    default:
      return state
  }
}

export default images;