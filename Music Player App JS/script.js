// Songs array
const songs = [
    {
        id: 0,
        name: "Aathi",
        artist: 'Anirudh, Vishal',
        image: './static/images/Aathi.jpeg',
        source: './static/audio/Aathi.mp3',
        genre: 'Hip hop'
    },
    {
        id: 1,
        name: "Anbil Avan",
        artist: 'A.R.Rahman, Devan Ekambaram',
        image: './static/images/Anbil avan.jpeg',
        source: './static/audio/Anbil avan.mp3',
        genre: 'Pop'
    },
    {
        id: 2,
        name: "Aye Sinamika",
        artist: 'Karthick, A.R.Rahman',
        image: './static/images/OK Kanmani.jpeg',
        source: './static/audio/Aye Sinamika.mp3',
        genre: 'Pop'
    },
    {
        id: 3,
        name: 'Hosanna',
        artist: "A.R.Rahman, Leon D'Souza",
        image: './static/images/VTV.jpeg',
        source: './static/audio/Hosanna.mp3',
        genre: 'Pop'
    },
    {
        id: 4,
        name: 'Mannipaaya',
        artist: 'Shreya Ghoshal, A.R.Rahman',
        image: './static/images/Hosanna.jpeg',
        source: './static/audio/Mannipaaya.mp3',
        genre: 'Classical'
    },
    {
        id: 5,
        name: 'Maro Maro',
        artist: 'Karthick, A.R.Rahman',
        image: './static/images/Maro Maro.jpeg',
        source: './static/audio/Maro Maro.mp3',
        genre: 'Rock'
    },
    {
        id: 6,
        name: 'Marudhani',
        artist: 'Madhushree, A.R.Rahman',
        image: './static/images/Marudhani.jpeg',
        source: './static/audio/Marudhani.mp3',
        genre: 'Classical'
    },
    {
        id: 7,
        name: 'Nallai Allai',
        artist: 'Sathyaprkash, A.R.Rahman',
        image: './static/images/Nallai Allai.jpeg',
        source: './static/audio/Nallai Allai.mp3',
        genre: 'Classical'
    },
    {
        id: 8,
        name: 'New York nagaram',
        artist: 'A.R.Rahman',
        image: './static/images/New York nagaram.jpeg',
        source: './static/audio/New York nagaram.mp3',
        genre: 'Hip hop'
    },
    {
        id: 9,
        name: 'Ding Dong',
        artist: 'Arunraja Kamaraj, Santhosh Narayanan',
        image: './static/images/Ding Dong.jpeg',
        source: './static/audio/Ding Dong.mp3',
        genre: 'Rock'
    },
    {
        id: 10,
        name: 'Un Vizhigalil',
        artist: 'Harini, G.V.Prakash',
        image: './static/images/Un Vizhigalil.jpeg',
        source: './static/audio/Un Vizhigalil.mp3',
        genre: 'Classical'
    },
    {
        id: 11,
        name: 'Aila Aila',
        artist: 'Natalie Di Luccio, Aditya Rao, A. R. Rahman',
        image: './static/images/Aila Aila.jpeg',
        source: './static/audio/Aila Aila.mp3',
        genre: 'Hip hop'
    },
    {
        id: 12,
        name: 'Vilambara Idaiveli',
        artist: 'Hiphop Tamizha, Srinisha Jayaseelan',
        image: './static/images/Vilambara Idaiveli.jpeg',
        source: './static/audio/Vilambara Idaiveli.mp3',
        genre: 'Hip hop'
    },
    {
        id: 13,
        name: 'Mental Manathil',
        artist: 'Jonita Gandhi, A. R. Rahman',
        image: './static/images/Mental Manathil.jpeg',
        source: './static/audio/Mental Manathil.mp3',
        genre: 'Hip hop'
    }
]


// Theme toggling
const toggleEle = document.querySelector('#toggle-btn');
toggleEle.addEventListener('change', toggleTheme);
const themeText = toggleEle.nextElementSibling;
function toggleTheme() {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
    if (targetTheme === 'dark') {
        themeText.textContent = 'Dark';
        toggleEle.style.backgroundColor = '#1ed760';
    } else {
        themeText.textContent = 'Light';
        toggleEle.style.backgroundColor = 'white';
    }
}

// Filtering and listing songs
const dropdownEle = document.querySelector('select');
const allSongsEle = document.querySelector('#all-songs');
dropdownEle.addEventListener('change', function () {
    let filter = this.value;
    showSongs(filter);
});

const defaultFilter = 'All';
showSongs(defaultFilter);
function showSongs(filter) {
    allSongsEle.innerHTML = '';
    songs.forEach((song) => {
        if (song.genre === filter) {
            const btn = document.createElement('button');
            btn.textContent = song.name;
            btn.type = 'button';
            btn.classList.add('btn', 'btn-dark');
            songBtnEvent(btn);
            allSongsEle.appendChild(btn);
        } else if (filter === 'All') {
            const btn = document.createElement('button');
            btn.textContent = song.name;
            btn.type = 'button';
            btn.classList.add('btn', 'btn-dark');
            songBtnEvent(btn);
            allSongsEle.appendChild(btn);
        }
    });
}

// Displaying the selected song in the card
const songBtnEle = document.querySelectorAll('#all-songs button');
const cardImgEle = document.querySelector('.card img');
const cardBodyEle = document.querySelectorAll('.card-body div');
const audioEle = document.querySelector('#audio-controls audio');
function songBtnEvent(btn) {
    btn.addEventListener('click', function () {
        displaySong(btn.textContent);
    });
}

function displaySong(songName) {
    const song = songs.find((song) => song.name === songName);
    if (song) {
        cardImgEle.src = song.image;
        cardBodyEle[0].textContent = song.name;
        cardBodyEle[1].textContent = song.artist;
        audioEle.src = song.source;
    }
}

// Next and previous song functionalities
const prevBtnEle = document.querySelector('#prev');
const nextBtnEle = document.querySelector('#next');

nextBtnEle.addEventListener('click', () => {
    let currentSongName = cardBodyEle[0].textContent;
    let currentSongID = songs.find((song) => song.name === currentSongName).id;
    nextSong(currentSongID);
});

prevBtnEle.addEventListener('click', () => {
    let currentSongName = cardBodyEle[0].textContent;
    let currentSongID = songs.find((song) => song.name === currentSongName).id;
    prevSong(currentSongID);
});

function nextSong(currentSongID) {
    let nextIndex = currentSongID + 1;
    if (currentSongID === songs.length - 1) {
        nextIndex = 0;
    }
    displaySong(songs[nextIndex].name);
}

function prevSong(currentSongID) {
    let prevIndex = currentSongID - 1;
    if (currentSongID === 0) {
        prevIndex = songs.length - 1;
    }
    displaySong(songs[prevIndex].name);
}

// Playlist section
// Creating new playlist
const playlists = [];
const createInputEle = document.querySelector('#createInput');
const createBtnEle = document.querySelector('#createBtn');
const playlistsEle = document.querySelector('#playlists');
let currentPlaylist;
createBtnEle.addEventListener('click', createNewPlaylist);
function createNewPlaylist() {
    if (playlists.length == 0) {
        playlistsEle.innerHTML = '';
    }
    let playlistName = createInputEle.value;
    if (nameAlreadyExists(playlistName)) {
        window.alert("Playlist name already exists, enter a different name");
        return;
    }
    // new playlist object
    const newPlaylist = {
        name: playlistName,
        songs: []
    };
    playlists.push(newPlaylist);
    createInputEle.value = '';
    // Displaying created playlist
    const playlistBtn = document.createElement('button');
    playlistBtn.classList.add('btn', 'btn-dark');
    playlistBtn.textContent = playlistName;
    playlistsEle.appendChild(playlistBtn);
    playlistBtn.addEventListener('click', () => {
        currentPlaylist = playlistBtn.textContent;
        displayPlaylistSongs();
    });
}

// Check if the playlist name already exists
function nameAlreadyExists(playlistName) {
    let isPresent = playlists.find(playlist => playlist.name === playlistName);
    if (isPresent) {
        return true;
    } else {
        return false;
    }
}

// Adding songs to the playlist
const addToPlaylistBtnEle = document.querySelector('#addToPlaylist');
addToPlaylistBtnEle.addEventListener('click', addSongToPlaylist);
function addSongToPlaylist() {
    if(currentPlaylist===undefined){
        window.alert('Create and select a playlist before adding a song');
    }
    const playlistObj = playlists.find((playlist) => playlist.name === currentPlaylist);
    let currentSong = cardBodyEle[0].textContent;
    if(playlistObj){
        if (songAlreadyPresent(currentSong, playlistObj)) {
            window.alert("Relax! Song already added in this playlist");
            return;
        } else {
            const songObj = songs.find(song => song.name === currentSong);
            playlistObj.songs.push(songObj);
            window.alert(`Song added to ${currentPlaylist}`);
            displayPlaylistSongs();
        }
    }
}

function songAlreadyPresent(currentSong, playlistObj) {
    let isPresent = playlistObj.songs.find(song => song.name === currentSong);
    if (isPresent) {
        return true;
    } else {
        return false;
    }
}

// Display songs of current playlist
const playlistSongsEle = document.querySelector('#playlist-songs');
const currenPlaylistHeading = document.querySelector('#current-playlist-heading');
function displayPlaylistSongs() {
    currenPlaylistHeading.textContent = `Songs in ${currentPlaylist}`;
    playlistSongsEle.innerHTML = '';
    const playlistObj = playlists.find((playlist) => playlist.name === currentPlaylist);
    const playlistSongs = playlistObj.songs;
    playlistSongs.forEach(song => {
        const divEle = document.createElement('div'); 
        const btn = document.createElement('button');
        const removeBtn = document.createElement('button');
        btn.classList.add('btn-size', 'btn', 'btn-dark');
        removeBtn.classList.add('btn', 'btn-dark');
        btn.textContent = song.name;
        removeBtn.innerHTML='<i class="fa-solid fa-minus" data-toggle="tooltip" data-placement="top" title="Remove song"></i>';
        divEle.append(btn, removeBtn);
        playlistSongsEle.appendChild(divEle);
        btn.addEventListener('click', () => {
            displaySong(btn.textContent);
        });
        removeBtn.addEventListener('click', () => {
            removeSong(btn.textContent);
        });
    });
}

// Remove song from playlist
function removeSong(songName){
    const playlist = playlists.find(playlist => playlist.name === currentPlaylist);
    let index=0;
    for(let song of playlist.songs){
        if(song.name === songName){
            break;
        } else {
            index++;
        }
    }
    playlist.songs.splice(index, 1);
    displayPlaylistSongs();
}

// Search song
const searchBtnEle = document.querySelector('#search-song');
const searchInputEle = document.querySelector('#search-input');
searchBtnEle.addEventListener('click', ()=>{
    let songName = searchInputEle.value;
    const song = songs.find(song => song.name===songName);
    if(song){
        displaySong(songName);
    } else {
        window.alert('Song does not exist/Enter correct song name');
    }
    searchInputEle.value = '';
});
