//initialState;
export const initialState = [
  {
    id: 1,
    name: "Maahir",
    phone: 344343,
    email: "maahir123@gmail.com",
    FAV_CONTACT: false,
  },

  {
    id: 2,
    name: "Maahir",
    phone: 344343,
    email: "maahir123@gmail.com",
    FAV_CONTACT: false,
  },
];

//reducer function;
export const reducer = (state, action) => {
  //switch statement
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];

    case "DELETE_CONTACT":
      return state.filter((remove) => remove.id !== action.payload);

    case "EDIT_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? { ...contact, ...action.payload }
          : contact,
      );

    case "FAV_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? { ...contact, FAV_CONTACT: !contact.FAV_CONTACT }
          : contact,
      );

    default:
      return state;
  }

  //end
};
