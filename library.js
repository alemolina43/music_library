const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
  // prints a list of all playlists, in the form:
  //p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for (let playlist in this.playlists) {
      let playlistId = this.playlists[playlist];
      console.log(`${playlistId.id}: ${playlistId.name} - ${playlistId.tracks.length} tracks`);
    }
  },
  //Prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    for (let track in this.tracks) {
      let trackNum = this.tracks[track];
      console.log(`${trackNum.id}: ${trackNum.name} by ${trackNum.artist} (${trackNum.album})`);
    }
  },
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    for (let playlist in this.playlists) {
      if (this.playlists[playlist].id === playlistId) {
        console.log(`${this.playlists[playlist].id}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
     
        for (let i = 0; i < this.playlists[playlist].tracks.length; i++) {
          const trackId = this.playlists[playlist].tracks[i];
             
          for (let track in this.tracks) {
            if (this.tracks[track].id === this.playlists[playlist].tracks[i]) {
              console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
            }
          }
        }
      }
    }
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    for (let track in this.tracks) {
      if (this.tracks[track].id === trackId) {
        for (let playlist in this.playlists) {
          if (this.playlists[playlist].id === playlistId) {
            this.playlists[playlist].tracks.push(this.tracks[track].id);
          }
        }
      }
    }
  },
  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  // adds a track to the library
  addTrack: function(name, artist, album) {
    let newId = "t" + this.generateUid();
    if (this.tracks.id !== newId) {
      this.tracks[newId] = {id: newId, name: name, artist: artist, album: album};
    }
  },
  // adds a playlist to the library
  addPlaylist: function(name) {
    let newPlayListId = "p" + this.generateUid();
    if (this.playlists.id !== newPlayListId) {
      this.playlists[newPlayListId] = {id: newPlayListId, name: name};
    }
  },

};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////
     
library.printPlaylists();

library.printTracks();

library.printPlaylist("p01");

library.addTrackToPlaylist("t03", "p01");

library.addTrack("No more", "Adele", "Crazy");

library.addPlaylist("Music to my ears");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }