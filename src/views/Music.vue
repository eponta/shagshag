<template>
    <div class="music single-view">
        <div class="flex-container-column section-overlay-blk">
            <div class="main-section section-latest flex-container-column justify-center">
                <div class="section-title flex-container-column align-center justify-center">
                    <h2>
                        Découvrez nos derniers morceaux
                    </h2>
                </div>
                <div class="section-chansons flex-container-row align-start justify-center">
                    <SongPlayerMini
                        v-for="song in latestSongs"
                        :key="song.index"
                        v-bind:index="song.index"
                        v-bind:songUrl="song.songUrl"
                        v-bind:songTitle="song.songTitle"
                        v-bind:coverUrl="song.coverUrl"
                        v-bind:playingMini="playingMini"
                        v-on:playMini="playMini"
                    />
                </div>
            </div>
            <div class="main-section section-bibliotheque flex-container-column justify-center">
                <div class="section-title flex-container-column align-center justify-center">
                    <h2>
                        Bibliothèque
                    </h2>
                </div>
                <div class="section-playlist">
                    <SongPlayer
                        v-bind:albums="allAlbums"
                        v-bind:pauseBib="pauseBib"
                        v-on:playBib="playBib"
                    />
                </div>
            </div>
            <div class="main-section section-youtube flex-container-column justify-center">
                <div class="section-title flex-container-column align-center justify-center">
                    <h2>
                        Rocktails
                    </h2>
                </div>
                <div class="section-video flex-container-row">
                    <div class="video-container flex-1 align-center justify-center">
                        <iframe 
                            width="854" 
                            height="480" 
                            src="https://www.youtube.com/embed/videoseries?list=PL589rzD4HvmoAY59KENhhjtTVdtWiejec"
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
            <!--<div class="section-spotify-embed flex-container-row justify-center">
                <iframe src="https://open.spotify.com/embed/artist/5J0xJnBTbPsdmwhZQ2pC8t" 
                    width="300" 
                    height="380" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
                </iframe>
            </div>-->
        </div>
    </div>
</template>

<script>
import SongPlayer from '../components/SongPlayer'
import SongPlayerMini from '../components/SongPlayerMini'
import {AllAlbums, LatestSongs} from '../assets/params/songlist.js'
export default {
    name: 'Music',
    components: {
        SongPlayer,
        SongPlayerMini
    },
    data: function () {
        return {
            allAlbums: [],
            latestSongs: [],
            playingMini: null,
            pauseBib: false,
        }
    },
    methods: {
        loadAlbums(destArray, srcArray) {
            srcArray.forEach(album => {
                destArray.push({
                    index: album.index,
                    albumTitle: album.albumTitle,
                    albumYear: album.albumYear,
                    tracklist: album.tracklist
                });
            });
        },
        loadSongs(destArray, srcArray) {
            srcArray.forEach(song => {
                destArray.push({
                    index: song.index,
                    songUrl: song.songUrl,
                    songTitle: song.songTitle,
                    songAlbum: song.songAlbum ? song.songAlbum : '',
                    songLength: song.songLength ? song.songLength : '',
                    coverUrl: song.coverUrl ? song.coverUrl : ''
                });
            });
        },
        playMini(index) {
            this.pauseBib = true;
            this.playingMini = index;
        },
        playBib() {
            this.pauseBib = false;
            this.playingMini = null;
        }
    },
    mounted() {
        this.loadAlbums(this.allAlbums, AllAlbums);
        this.loadSongs(this.latestSongs, LatestSongs);
    }
}
</script>

<style scoped>
.music {
    background-color: #C850C0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.main-section {
    min-height: 100vh;
}

.section-overlay-blk {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.section-overlay-blk:before {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: transparent;
    background: -moz-linear-gradient(bottom, rgba(0,47,75,0.5) 0%, rgba(0, 0, 0, 0) 100%); /* FF3.6+ */
    background: -webkit-linear-gradient(bottom, rgba(0,47,75,0.5) 0%,rgba(0, 0, 0, 0) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(bottom, rgba(0,47,75,0.5) 0%,rgba(0, 0, 0, 0) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(bottom, rgba(0,47,75,0.5) 0%,rgba(0, 606, 0, 0) 100%); /* IE10+ */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 40%, rgba(0, 0, 0, 0.65) 100%); /* W3C */
}

.section-title > h2 {
    color: aquamarine;
    background: transparent;
    background-image: linear-gradient(127deg, #D9AFD9 0%, #97D9E1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: max-content;
}

.section-chansons {
    padding-top: 7vh;
    padding-left: calc(17vw - 120px);
    padding-right: calc(17vw - 120px);
    padding-bottom: 150px;
    z-index: 50;
}

.section-chansons > div {
    flex: 1;
}

.section-playlist {
    z-index: 50px;
    padding-top: 7vh;
    padding-left: calc(17vw - 120px);
    padding-right: calc(17vw - 120px);
    padding-bottom: 150px;
}

.section-video {
    padding-top: 2vh;
    background-color: transparent;
    z-index: 50;
    padding-bottom: 50px;
}

.video-container {
    padding: 20px;
}

.video-container h2 {
    color: white;
    margin-bottom: 20px;
}

.video-container iframe {
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.507);
}

@media (max-width: 1200px){
}

@media (max-width: 1024px){
    .section-video .video-container iframe {
        width: 560px;
        height: 315px;
    }
}

@media (max-width: 768px){
    .section-chansons {
        flex-direction: column;
        align-items: center;
        padding: 0px;
    }

    .section-playlist {
        padding: 0px;
    }

    .section-video .video-container iframe {
        width: 300px;
        height: 155px;
    }
}
</style>