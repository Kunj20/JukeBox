var playButton = document.querySelector("#play")
var pauseButton= document.querySelector("#pause")
var nextButton= document.querySelector("#nextsong")
var prevButton= document.querySelector("#prevsong")
var a= document.querySelector("#audio")
var i= document.getElementById("artowork")
var n= document.querySelector("#songName")

function Jukebox() {
  this.list= [];
  this.imgList= [];
  this.nameList= [];
}
Jukebox.prototype.addSong = function(song, art, name) {
  this.list.push(song);
  this.imgList.push(art);
  this.nameList.push(name);
}

var i= 0;
Jukebox.prototype.play = function () {
    a.src= this.list[i];
    document.getElementById("artwork").src= this.imgList[i];
    document.getElementById("songName").innerHTML= this.nameList[i];
    a.play();
}

Jukebox.prototype.pause= function () {
  a.pause();
}
Jukebox.prototype.next= function(){
  i++;
  if(i<this.list.length){
    a.pause();
    a.src= this.list[i];
    document.getElementById("artwork").src= this.imgList[i];
    document.getElementById("songName").innerHTML= this.nameList[i];
    a.play();
  }
  else{
    i= 0;
    a.pause();
    a.src= this.list[i];
    document.getElementById("artwork").src= this.imgList[i];
    document.getElementById("songName").innerHTML= this.nameList[i];
    a.play();
  }
}
Jukebox.prototype.prev= function(){
  i--;
  if(i>=0){
  a.pause();
  a.src= this.list[i];
  document.getElementById("artwork").src= this.imgList[i];
  document.getElementById("songName").innerHTML= this.nameList[i];
  a.play();
  }
  else{
    i= this.list.length-1;
    a.pause();
    a.src= this.list[i];
    document.getElementById("artwork").src= this.imgList[i];
    document.getElementById("songName").innerHTML= this.nameList[i];
    a.play();
  }
}

var jukebox = new Jukebox();
jukebox.addSong("song1.mp3", "surfartwork.png", "Wanna Be Cool by Chance");
jukebox.addSong("song2.mp3", "surfartwork.png", "Sunday Candy by Chance");
jukebox.addSong("song3.mp3", "surfartwork.png", "Familiar by Chance");

playButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.play()
})
pauseButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.pause();
})
nextButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.next();
})
prevButton.addEventListener("click", function(event){
  event.preventDefault();
  jukebox.prev();
})
