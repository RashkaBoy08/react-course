import { useReducer } from "react";

const initialFormData = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "RESET_FORM":
      return initialFormData;
    default:
      return state;
  }
}

export function StepForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormData);

  let content;

  if (state.step === 1) {
    content = (
      <>
        <h2>Profile</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "firstName",
              value: e.target.value,
            })
          }
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "lastName",
              value: e.target.value,
            })
          }
        />

        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
      </>
    );
  } else if (state.step === 2) {
    content = (
      <>
        <h2>Contact</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "email",
              value: e.target.value,
            })
          }
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone"
          value={state.phone}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "phone",
              value: e.target.value,
            })
          }
        />

        <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
      </>
    );
  } else if (state.step === 3) {
    content = (
      <>
        <h2>Review</h2>
        <p>First Name: {state.firstName}</p>
        <p>Last Name: {state.lastName}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p>

        <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset</button>
      </>
    );
  }

  return <div>{content}</div>;
}
