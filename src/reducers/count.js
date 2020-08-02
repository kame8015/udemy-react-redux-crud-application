import { INCREMENT, DECREMENT } from '../actions'

// state(状態)の初期値を定義
const initialState = { value: 0 }

// count_reducerを定義
export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { value: state.value + 1 }
		case DECREMENT:
			return { value: state.value - 1 }
		default:
			return state
	}
}
