import { combineReducers } from 'redux';

const songListReducer = () => {
    return [
        {title: 'No scrubs', duration: '5 mins'},
        {title: 'Macarena', duration: '4 mins'},
        {title: 'Brazil', duration: '6 mins'},
        {title: 'Dirty dance', duration: '5 mins'},
        {title: 'Last christmas', duration: '4 mins'},
        {title: 'Real slim shady', duration: '7 mins'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
})