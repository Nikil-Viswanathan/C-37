class Player{
    constructor(){

    }
getCount(){
  var playerCountRef = database.ref('playerCount')
  playerCountRef.on("value" , (data)=>{
      playerCount = data.val();
  })
    
}
update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({name:this.name , distance:this.distance});
}
 updateCount(count) {
     database.ref('playerCount').update({playerCount : count})
 }  
 static getPlayerInfo(){
    var playerInfoRef = database.ref('players')
    playerInfoRef.on("value" , (data)=>{
        allPlayers = data.val();
    })
 }
}