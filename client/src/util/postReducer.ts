type State = {
  val: string;
  progress: number;
  cover: any;
  img: any;
  video: any;
};

type Action =
  | { type: "SET_VAL"; payload: string }
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_COVER"; payload: any }
  | { type: "SET_IMG"; payload: any }
  | { type: "SET_VIDEO"; payload: any };



function postReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_VAL":
      return { ...state, val: action.payload };

    case "SET_PROGRESS":
      return { ...state, progress: action.payload };

    case "SET_COVER":
      return { ...state, cover: action.payload };

    case "SET_IMG":
      return {
        ...state,
        img: action.payload,
        val: state.val + `<p><img src="${action.payload.url}" /></p>`,
      };

    case "SET_VIDEO":
      return {
        ...state,
        video: action.payload,
        val:
          state.val +
          `<p><iframe class="ql-video" src="${action.payload.url}"/></p>`,
      };

    default:
      return state;
  }
}


export default postReducer;
