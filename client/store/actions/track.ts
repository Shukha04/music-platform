import axios from 'axios'
import { Dispatch } from 'react'
import { TrackAction, TrackActionTypes } from '../../types/track'

export const getTracks = () => {
	return async (dispatch: Dispatch<TrackAction>) => {
		try {
			const response = await axios.get('http://localhost:3001/track')
			dispatch({ type: TrackActionTypes.GET_TRACKS, payload: response.data })
		} catch (err) {
			dispatch({ type: TrackActionTypes.GET_TRACKS_ERROR, payload: 'There are some errors' })
		}
	}
}