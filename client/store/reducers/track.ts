import { TrackAction, TrackActionTypes, TrackState } from '../../types/track'

const initialState: TrackState = {
	tracks: [],
	error: ''
}

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
	switch (action.type) {
		case TrackActionTypes.GET_TRACKS:
			return { error: '', tracks: action.payload }

		case TrackActionTypes.GET_TRACKS_ERROR:
			return { error: action.payload, tracks: [] }

		default:
			return state
	}
}