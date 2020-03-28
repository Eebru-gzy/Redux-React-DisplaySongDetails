import { combineReducers } from 'redux'


const songReducer = () => {
  return [
    {title: 'Only me', duration: '3:12', artist: '2Face', yearOfRelease: '2011'},
    {title: 'Heavens Open', duration: '5:12', artist: 'Hillsong Worship', yearOfRelease: 'Not Available'},
    {title: 'Mama Child', duration: '2:12', artist: 'Brymo', yearOfRelease: '2014'},
    {title: 'Oceans', duration: '6:12', artist: 'Hillsong United', yearOfRelease: '2011'},
    {title: 'Baby', duration: '3:12', artist: 'Joeboy', yearOfRelease: '2019'},
    {title: 'Thoughts', duration: '5:43', artist: 'Tory Lanes ft. Lil Wayne', yearOfRelease: '2017'},
    {title: 'Ungrateful Eyes', duration: '5:07', artist: 'Jon Bellion', yearOfRelease: '2010'}
  ]
}

const selectSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}



export default combineReducers({
  songs: songReducer,
  selectedSong: selectSongReducer
});