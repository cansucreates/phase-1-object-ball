function gameObject(){
    return object = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    }
  }
  
  console.log(gameObject());

  function numPointsScored(playerName) {
    const teams = Object.values(gameObject()); 
    let points = null;
   
    teams.forEach(team => {
      Object.entries(team.players).forEach(([key, value]) => {
        if (key === playerName) {
          points = value.points;
        }
      });
    });
  
    return points; 
  }
  
  function shoeSize(playerName) {
    const teams = Object.values(gameObject());
    let shoeSize = null; 
  
    
    teams.forEach(team => {
      Object.entries(team.players).forEach(([key, value]) => {
        if (key === playerName) {
          shoeSize = value.shoe;
        }
      });
    });
  
    return shoeSize;
  }
  
  function teamColors(teamName) {
    const teams = Object.values(gameObject()); 
    let colors = null; 
  
    
    teams.forEach(team => {
      if (team.teamName === teamName) {
        colors = team.colors.split(", ");
      }
    });
  
    return colors; 
  }
  
  function teamNames() {
    const teams = Object.values(gameObject()); 
    return teams.map(team => team.teamName); 
  }
  

  function playerNumbers(teamName) {
    const team = findTeam(teamName);
    return team.players.map(player => player.number);
  }
  
  function findTeam(teamName) {
    return game.teams.find(team => team.name === teamName);
  }

  function playerStats(playerName) {
    for (let team in game) {
      for (let i = 0; i < game[team].players.length; i++) {
        let player = game[team].players[i];
        if (player.name === playerName) {
          return player;
        }
      }
    }
  }

  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoeSize;
  
    for (let team in game) {
      for (let i = 0; i < game[team].players.length; i++) {
        let player = game[team].players[i];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoeSize = player;
        }
      }
    }
  
    return playerWithLargestShoeSize.rebounds;
  }

  function mostPointsScored() {
    let mostPoints = 0;
    let playerWithMostPoints = '';
    for (const team in game) {
      const players = game[team]['players'];
      for (const player of players) {
        if (player['points'] > mostPoints) {
          mostPoints = player['points'];
          playerWithMostPoints = player['playerName'];
        }
      }
    }
    return playerWithMostPoints;
  }
  
  function winningTeam() {
    let teamPoints = {
      'Brooklyn Nets': 0,
      'Charlotte Hornets': 0
    };
    for (const team in game) {
      const players = game[team]['players'];
      for (const player of players) {
        teamPoints[team] += player['points'];
      }
    }
    return teamPoints['Brooklyn Nets'] > teamPoints['Charlotte Hornets'] ? 'Brooklyn Nets' : 'Charlotte Hornets';
  }
  
  function playerWithLongestName() {
    let longestName = '';
    for (const team in game) {
      const players = game[team]['players'];
      for (const player of players) {
        if (player['playerName'].length > longestName.length) {
          longestName = player['playerName'];
        }
      }
    }
    return longestName;
  }

  function doesLongNameStealATon() {
    let playerWithLongestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals;
  
    for (let player in game["players"]) {
      if (game["players"][player]["steals"] > mostSteals) {
        mostSteals = game["players"][player]["steals"];
        playerWithMostSteals = player;
      }
    }
  
    return playerWithMostSteals === playerWithLongestName;
  }
  
  