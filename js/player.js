class Player {
    constructor(){
        this.index = null
        this.name = null
        this.distance = 0
        this.rank=null
    };
    getCount(){
        var countNode = database.ref("playerCount");
        countNode.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance

        })
    }
    static getPlayerInfo(){
        database.ref("players").on("value",function(data){
          allPlayers=data.val();  
        })
    }
    getRank(){
        var rankNode = database.ref("playerRank");
        rankNode.on("value",function(data){
            playerRank = data.val();
        })
    }
    updateRank(rank){
        database.ref('/').update({
            playerRank:rank
        })
    }
}