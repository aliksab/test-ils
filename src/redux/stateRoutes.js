const INITIAL_STATE =  [
    {
      id: 1,
      routes: [
        {
            point: 1,
            geocode: [59.84660399, 30.29496392]
        },
        {
            point: 2,
            geocode: [59.82934196, 30.42423701]
        },
        {
            point: 3,
            geocode: [59.83567701, 30.38064206]
        },
      ],
      checked: true
    },
    {
        id: 2,
        routes: [
          {
            point: 1,
            geocode: [59.82934196, 30.42423701]
          },
          {
            point: 2,
            geocode: [59.82761295, 30.41705607]
          },
          {
            point: 3,
            geocode: [59.84660399, 30.29496392]
          },
        ],
        checked: false
    },
    {
        id: 3,
        routes: [
          {
            point: 1,
            geocode: [59.83567701, 30.38064206]
          },
          {
            point: 2,
            geocode: [59.84660399, 30.29496392]
          },
          {
            point: 3,
            geocode: [59.82761295, 30.41705607]
          },
        ],
        checked: false
    }    
]
export default function Toggle (state=INITIAL_STATE, action) {
  let checkRoute = state.findIndex(el => el.checked === true);
  switch (action.type) {
    case "toggle/route":
      const newArr = [...state];
      const newRoute = newArr.findIndex(el => el.id === action.payload.id)
      if ( checkRoute !== newRoute) {
        newArr[checkRoute].checked = false;
        newArr[newRoute].checked = true;
      }
      return newArr;
    default:
      return state
  }
}