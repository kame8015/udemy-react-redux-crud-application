import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT } from '../actions'

export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENTS:
			return _.mapKeys(action.response.data, 'id')
		case DELETE_EVENT:
			delete events[action.id]  // ここでevents情報からaction.idが削除される
			return { ...events }  // ここで更新後のeventsが返される
		default:
			return events
	}
}
