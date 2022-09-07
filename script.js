let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))


let songs = [
    { songName: "Akhiayaan", filePath: "songs/1.mp3", coverPath: "img/1.jpg", timestamp :"04:06" },
    { songName: "Bewafa x Aaja We Mahiya", filePath: "songs/2.mp3", coverPath: "img/2.jpg" , timestamp :"03:05"},
    { songName: "Chan vekhya", filePath: "songs/3.mp3", coverPath: "img/3.jpg" , timestamp :"03:32" },
    { songName: "Hymn For The Weekend ", filePath: "songs/4.mp3", coverPath: "img/4.jpg" , timestamp :"04:21"},
    { songName: "Aankhon Se Batana", filePath: "songs/5.mp3", coverPath: "img/5.jpg" , timestamp :"04:00" },
    { songName: "Kesariya ", filePath: "songs/2.mp3", coverPath: "img/6.jpg" , timestamp :"02:52"},
    { songName: "kooch na karin", filePath: "songs/2.mp3", coverPath: "img/7.jpg" , timestamp :"04:20"},
    { songName: "Levels", filePath: "songs/2.mp3", coverPath: "img/8.jpg" , timestamp :"03:51" },
    { songName: "Night changes", filePath: "songs/2.mp3", coverPath: "img/9.jpg" , timestamp :"04:00" },
    { songName: "Top notch gabru ", filePath: "songs/4.mp3", coverPath: "img/10.jpg" , timestamp :"02:43"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
   })

// handleplay pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// update seekbar
audioElement.addEventListener('timeupdate', () => {
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
            myProgressBar.value = progress;
        });
        myProgressBar.addEventListener('change', () => {
            audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
        })

        const makeAllPlays = () => {
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
            })
        };
        const playedpause = () => {
            songItemPlay.forEach((element) => {
                if (audioElement.played || audioElement.currentTime >= 0) {
                    audioElement.pause();
                }

            })
        }
        songItemPlay.forEach((element) => {
            element.addEventListener('click', (e) => {
                makeAllPlays();
                if (audioElement.paused || audioElement.currentTime <= 0) {
                    songIndex = parseInt(e.target.id)
                    e.target.classList.remove('fa-play-circle');
                    e.target.classList.add('fa-pause-circle');
                    audioElement.src = `songs/${songIndex + 1}.mp3`
                    masterSongName.innerText = songs[songIndex].songName;
                    audioElement.currentTime = 0;
                    audioElement.play();
                    gif.style.opacity = 1;
                    masterplay.classList.remove('fa-play-circle');
                    masterplay.classList.add('fa-pause-circle');
                }
                else{
                    songIndex = parseInt(e.target.id)
                    e.target.classList.remove('fa-pause-circle');
                    e.target.classList.add('fa-play-circle');
                    audioElement.src = `songs/${songIndex + 1}.mp3`
                    audioElement.currentTime = 0;
                    audioElement.pause();
                    // playedpause();
                    gif.style.opacity = 0;
                    masterplay.classList.remove('fa-pasue-circle');
                    masterplay.classList.add('fa-play-circle');
                    
                }
            })
        });

        document.getElementById('next').addEventListener('click', () => {
            if (songIndex >= 9) {
                songIndex = 0;
            }
            else {
                songIndex += 1;
            }
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        })
        document.getElementById('previous').addEventListener('click', () => {
            if (songIndex <= 0) {
                songIndex = 0;
            }
            else {
                songIndex -= 1;
            }
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        })