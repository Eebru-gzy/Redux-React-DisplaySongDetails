import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({song}) => {
  console.log(song);
  if (!song) {
    return <div>Select a Song</div>
  }
  return (
   <div>
    <h3>Deatils For:</h3>
    <p>Title: {song.title}</p>
    <p>Duration: {song.duration}</p>
    <p>Artist: {song.artist}</p>
    <p>Release Year: {song.yearOfRelease}</p>
   </div>
  );
}


const mapStateToProp = (state) => {
  return {song: state.selectedSong}
}


export default connect(mapStateToProp)(SongDetail);