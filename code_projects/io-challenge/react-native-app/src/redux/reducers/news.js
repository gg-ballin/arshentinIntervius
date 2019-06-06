const initialState = {
    status: 'INIT',
    collection: [
        {
            id : 2320,
            title : 'Pavimentación de Av. Pastor Bauman',
            description: 'Estamos realizando obras para que la Av. Pastor Bauman quede pavimentada y transitable.',
            img : 'https://s3-sa-east-1.amazonaws.com/insideone/io-challenge/news/obra.jpg',
            createdOn : '10/02/2018 14:50 hs'
        }
    ]
}
  
export default news = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case "SET_STATUS":
      return {
          ...state,
          status : action.payload
      };
  
      default:
        return state;
    }
}
  
  

  