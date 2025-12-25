// ===========================
// ASH Player - JavaScript
// ===========================

// Playlist Data - Multiple Categories
const playlists = {
    'recently-played': [
        { id: 17, title: "Starlight", artist: "Indie Hearts", album: "Dreamscape", duration: 223, albumArt: "assets/album1.png", audioSrc: "assets/audio1.mp3" },
        { id: 18, title: "City Nights", artist: "Urban Chill", album: "Lo-fi Collection", duration: 189, albumArt: "assets/album5.png", audioSrc: "assets/audio5.mp3" },
        { id: 1, title: "Midnight Dreams", artist: "Cosmic Beats", album: "Nightscape", duration: 234, albumArt: "assets/album1.png", audioSrc: "assets/audio1.mp3" },
        { id: 14, title: "Turn It Up", artist: "DJ Vibes", album: "Party Mode", duration: 198, albumArt: "assets/album3.png", audioSrc: "assets/audio3.mp3" },
        { id: 10, title: "Calm Thoughts", artist: "Peaceful Piano", album: "Study Time", duration: 298, albumArt: "assets/album4.png", audioSrc: "assets/audio4.mp3" }
    ],
    'liked-songs': [
        { id: 2, title: "Summer Vibes", artist: "Solar Sounds", album: "Sunshine Collection", duration: 198, albumArt: "assets/album2.png", audioSrc: "assets/audio2.mp3" },
        { id: 3, title: "Neon Lights", artist: "Retro Wave", album: "Synthwave Dreams", duration: 267, albumArt: "assets/album3.png", audioSrc: "assets/audio3.mp3" },
        { id: 13, title: "Dance All Night", artist: "Party Starters", album: "Club Hits", duration: 215, albumArt: "assets/album2.png", audioSrc: "assets/audio2.mp3" },
        { id: 11, title: "Deep Work", artist: "Lo-fi Study", album: "Productivity", duration: 256, albumArt: "assets/album5.png", audioSrc: "assets/audio5.mp3" },
        { id: 4, title: "Ocean Waves", artist: "Nature Sounds", album: "Ambient Journey", duration: 312, albumArt: "assets/album4.png", audioSrc: "assets/audio4.mp3" }
    ],
    'chill-vibes': [
        { id: 1, title: "Midnight Dreams", artist: "Cosmic Beats", album: "Nightscape", duration: 234, albumArt: "assets/album1.png", audioSrc: "assets/audio1.mp3" },
        { id: 2, title: "Summer Vibes", artist: "Solar Sounds", album: "Sunshine Collection", duration: 198, albumArt: "assets/album2.png", audioSrc: "assets/audio2.mp3" },
        { id: 3, title: "Neon Lights", artist: "Retro Wave", album: "Synthwave Dreams", duration: 267, albumArt: "assets/album3.png", audioSrc: "assets/audio3.mp3" },
        { id: 4, title: "Ocean Waves", artist: "Nature Sounds", album: "Ambient Journey", duration: 312, albumArt: "assets/album4.png", audioSrc: "assets/audio4.mp3" }
    ],
    'workout-mix': [
        { id: 5, title: "Power Up", artist: "Energy Beats", album: "Gym Motivation", duration: 198, albumArt: "assets/album4.png", audioSrc: "assets/audio4.mp3" },
        { id: 6, title: "Thunder Strike", artist: "Bass Warriors", album: "Intense Workout", duration: 210, albumArt: "assets/album5.png", audioSrc: "assets/audio5.mp3" },
        { id: 7, title: "Adrenaline Rush", artist: "Fit Beats", album: "Cardio Blast", duration: 187, albumArt: "assets/album1.png", audioSrc: "assets/audio1.mp3" },
        { id: 8, title: "Beast Mode", artist: "Workout Kings", album: "Training Hard", duration: 225, albumArt: "assets/album2.png", audioSrc: "assets/audio2.mp3" }
    ],
    'study-session': [
        { id: 9, title: "Focus Flow", artist: "Study Sounds", album: "Concentration", duration: 320, albumArt: "assets/album3.png", audioSrc: "assets/audio3.mp3" },
        { id: 10, title: "Calm Thoughts", artist: "Peaceful Piano", album: "Study Time", duration: 298, albumArt: "assets/album4.png", audioSrc: "assets/audio4.mp3" },
        { id: 11, title: "Deep Work", artist: "Lo-fi Study", album: "Productivity", duration: 256, albumArt: "assets/album5.png", audioSrc: "assets/audio5.mp3" },
        { id: 12, title: "Brain Waves", artist: "Ambient Focus", album: "Study Mix", duration: 340, albumArt: "assets/album1.png", audioSrc: "assets/audio1.mp3" }
    ],
    'party-anthems': [
        { id: 13, title: "Dance All Night", artist: "Party Starters", album: "Club Hits", duration: 215, albumArt: "assets/album2.png", audioSrc: "assets/audio2.mp3" },
        { id: 14, title: "Turn It Up", artist: "DJ Vibes", album: "Party Mode", duration: 198, albumArt: "assets/album3.png", audioSrc: "assets/audio3.mp3" },
        { id: 15, title: "Weekend Party", artist: "Club Bangers", album: "Night Out", duration: 230, albumArt: "assets/album4.png", audioSrc: "assets/audio4.mp3" },
        { id: 16, title: "Let's Go", artist: "Party People", album: "Celebration", duration: 205, albumArt: "assets/album5.png", audioSrc: "assets/audio5.mp3" }
    ]
};

// Current active playlist
let currentPlaylistName = 'chill-vibes';
let playlist = [...playlists[currentPlaylistName]];

// State Management
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: off, 1: repeat all, 2: repeat one
let currentVolume = 0.7;

// DOM Elements
const audio = document.getElementById('audio-player');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const btnVolume = document.getElementById('btn-volume');
const btnLike = document.getElementById('btn-like');

const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const progressHandle = document.getElementById('progress-handle');
const currentTimeLabel = document.getElementById('current-time');
const totalTimeLabel = document.getElementById('total-time');

const volumeSlider = document.getElementById('volume-slider');
const volumeFill = document.getElementById('volume-fill');
const volumeHandle = document.getElementById('volume-handle');

const heroAlbumArt = document.getElementById('hero-album-art');
const heroTrackTitle = document.getElementById('hero-track-title');
const heroTrackArtist = document.getElementById('hero-track-artist');

const playerAlbumArt = document.getElementById('player-album-art');
const playerTrackTitle = document.getElementById('player-track-title');
const playerTrackArtist = document.getElementById('player-track-artist');

const trackListContainer = document.getElementById('track-list');

// ===========================
// Initialization
// ===========================

function init() {
    renderTrackList();
    loadTrack(currentTrackIndex);
    setupEventListeners();
    setupPlaylistSwitching();
    audio.volume = currentVolume;
    updateVolumeUI();
}

// ===========================
// Playlist Switching
// ===========================

function setupPlaylistSwitching() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const playlistNames = ['chill-vibes', 'workout-mix', 'study-session', 'party-anthems'];
            if (index < playlistNames.length) {
                switchPlaylist(playlistNames[index]);
                playlistItems.forEach(p => p.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

    // Setup navigation menu items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const navPlaylistNames = ['home', 'recently-played', 'liked-songs'];
            const playlistName = navPlaylistNames[index];

            if (playlistName && playlists[playlistName]) {
                switchPlaylist(playlistName);
                navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');

                // Remove active from sidebar playlists
                playlistItems.forEach(p => p.classList.remove('active'));
            }
        });
    });
}

function switchPlaylist(playlistName) {
    if (playlists[playlistName]) {
        currentPlaylistName = playlistName;
        playlist = [...playlists[playlistName]];
        currentTrackIndex = 0;
        renderTrackList();
        loadTrack(0);
        if (isPlaying) {
            play();
        }
    }
}

// ===========================
// Track List Rendering
// ===========================

function renderTrackList() {
    trackListContainer.innerHTML = '';

    playlist.forEach((track, index) => {
        const trackItem = document.createElement('div');
        trackItem.className = `track-item ${index === currentTrackIndex ? 'active' : ''}`;
        trackItem.dataset.index = index;

        trackItem.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <img src="${track.albumArt}" alt="${track.title}" class="track-album-art">
            <div class="track-info">
                <div class="track-title">${track.title}</div>
                <div class="track-artist">${track.artist}</div>
            </div>
            <div class="track-duration">${formatTime(track.duration)}</div>
            <div class="track-actions">
                <button class="btn-track-action" aria-label="More options">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="5" r="1" fill="currentColor"/>
                        <circle cx="12" cy="12" r="1" fill="currentColor"/>
                        <circle cx="12" cy="19" r="1" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        `;

        trackItem.addEventListener('click', () => {
            if (currentTrackIndex === index) {
                togglePlay();
            } else {
                loadTrack(index);
                play();
            }
        });

        trackListContainer.appendChild(trackItem);
    });
}

// ===========================
// Track Loading
// ===========================

function loadTrack(index) {
    currentTrackIndex = index;
    const track = playlist[index];

    // Update audio source
    audio.src = track.audioSrc;

    // Update UI
    heroAlbumArt.src = track.albumArt;
    heroTrackTitle.textContent = track.title;
    heroTrackArtist.textContent = track.artist;

    playerAlbumArt.src = track.albumArt;
    playerTrackTitle.textContent = track.title;
    playerTrackArtist.textContent = track.artist;

    totalTimeLabel.textContent = formatTime(track.duration);

    // Update active state in track list
    updateTrackListActiveState();
}

function updateTrackListActiveState() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, index) => {
        if (index === currentTrackIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ===========================
// Playback Controls
// ===========================

function play() {
    audio.play();
    isPlaying = true;
    btnPlay.classList.add('playing');
}

function pause() {
    audio.pause();
    isPlaying = false;
    btnPlay.classList.remove('playing');
}

function togglePlay() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

function nextTrack() {
    if (isShuffle) {
        const randomIndex = Math.floor(Math.random() * playlist.length);
        loadTrack(randomIndex);
    } else {
        const nextIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(nextIndex);
    }

    if (isPlaying) {
        play();
    }
}

function prevTrack() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
    } else {
        const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(prevIndex);
        if (isPlaying) {
            play();
        }
    }
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle('active', isShuffle);
}

function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;

    if (repeatMode === 0) {
        btnRepeat.classList.remove('active');
        audio.loop = false;
    } else if (repeatMode === 1) {
        btnRepeat.classList.add('active');
        audio.loop = false;
    } else {
        btnRepeat.classList.add('active');
        audio.loop = true;
    }
}

// ===========================
// Progress Bar
// ===========================

function updateProgress() {
    const percent = (audio.currentTime / audio.duration) * 100 || 0;
    progressFill.style.width = `${percent}%`;
    progressHandle.style.left = `${percent}%`;
    currentTimeLabel.textContent = formatTime(audio.currentTime);
}

function seekTo(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * audio.duration;

    if (!isNaN(time)) {
        audio.currentTime = time;
    }
}

// ===========================
// Volume Control
// ===========================

function updateVolumeUI() {
    const percent = currentVolume * 100;
    volumeFill.style.width = `${percent}%`;
    volumeHandle.style.left = `${percent}%`;

    if (currentVolume === 0) {
        btnVolume.classList.add('muted');
    } else {
        btnVolume.classList.remove('muted');
    }
}

function setVolume(e) {
    const rect = volumeSlider.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

    currentVolume = percent;
    audio.volume = currentVolume;
    updateVolumeUI();
}

function toggleMute() {
    if (audio.volume > 0) {
        audio.volume = 0;
        currentVolume = 0;
    } else {
        audio.volume = 0.7;
        currentVolume = 0.7;
    }
    updateVolumeUI();
}

// ===========================
// Event Listeners
// ===========================

function setupEventListeners() {
    // Playback controls
    btnPlay.addEventListener('click', togglePlay);
    btnNext.addEventListener('click', nextTrack);
    btnPrev.addEventListener('click', prevTrack);
    btnShuffle.addEventListener('click', toggleShuffle);
    btnRepeat.addEventListener('click', toggleRepeat);
    btnVolume.addEventListener('click', toggleMute);

    // Audio events
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => {
        if (repeatMode === 1) {
            nextTrack();
            play();
        } else if (repeatMode !== 2) {
            // repeat mode 2 is handled by audio.loop
            pause();
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        totalTimeLabel.textContent = formatTime(audio.duration);
    });

    // Progress bar
    progressBar.addEventListener('click', seekTo);

    let isSeekingProgress = false;
    progressBar.addEventListener('mousedown', (e) => {
        isSeekingProgress = true;
        seekTo(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isSeekingProgress) {
            seekTo(e);
        }
        if (isSeekingVolume) {
            setVolume(e);
        }
    });

    document.addEventListener('mouseup', () => {
        isSeekingProgress = false;
        isSeekingVolume = false;
    });

    // Volume slider
    volumeSlider.addEventListener('click', setVolume);

    let isSeekingVolume = false;
    volumeSlider.addEventListener('mousedown', (e) => {
        isSeekingVolume = true;
        setVolume(e);
    });

    //Like button
    btnLike.addEventListener('click', () => {
        btnLike.classList.toggle('liked');
    });

    // Profile dropdown
    const userProfile = document.getElementById('user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userProfile.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userProfile.contains(e.target)) {
                userProfile.classList.remove('active');
            }
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Prevent default if not typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextTrack();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                prevTrack();
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentVolume = Math.min(1, currentVolume + 0.1);
                audio.volume = currentVolume;
                updateVolumeUI();
                break;
            case 'ArrowDown':
                e.preventDefault();
                currentVolume = Math.max(0, currentVolume - 0.1);
                audio.volume = currentVolume;
                updateVolumeUI();
                break;
        }
    });
}

// ===========================
// Utility Functions
// ===========================

function formatTime(seconds) {
    if (isNaN(seconds) || seconds === 0) {
        return '0:00';
    }

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===========================
// Start Application
// ===========================

init();
