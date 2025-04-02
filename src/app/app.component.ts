import { Component, OnInit, providePlatformInitializer } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDataComponent } from './components/player-data/player-data.component';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GamesComponent,PlayerListComponent, PlayerDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  gamesBsb: any = []
  playersToFollowPersonalData = []
  playerOddsB: any = []
  points: any
  position = ""
  namePlayer = ""
  title = 'ppbsb';
  constructor(
    private GamesService: GamesService,
  ){}
  ngOnInit(): void {
    this.setGamesBsbApi()
    //this.games = Object.values(games) //offline
  }
  setGamesBsbApi(){
    this.GamesService.getGames().subscribe((data)=>{
      this.gamesBsb = this.setLogo(data)
      console.log(this.gamesBsb)
    })

  }
  playersFromGames(players: any) {
    this.playersToFollowPersonalData = players
    this.playerOddsB = []
    this.namePlayer = ""
  }
  playerFromPlayer(player: string) {
    this.getOdds(player);
    console.log(this.playerOddsB)
  }
  getOdds(name: string ) {
    console.log(name)
    this.playersToFollowPersonalData.forEach((element: any) => {
      if(element.name === name){
        if(element.pitcherRival === undefined){
          this.setOddsPitcher(element, "pitcher")
        } else {
          this.setOddsHitter(element, "hitter")
        }

      }
    });
  }
  /*case 'Puntos (+/-)':
          this.playerOddsB.earnedRuns =({
            market: "Puntos",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });*/
  getStats(games: any){
    const lastFive:any = []
    if(games.game1 !== undefined){
      lastFive.strikeOuts = []
      lastFive.hitsAllowed = []
      lastFive.baseXBolas = []
      lastFive.earnedRuns = []
      lastFive.strikeOuts.game1 = games.game1.strikeOuts !== "" ? games.game1.strikeOuts : ""
      lastFive.hitsAllowed. game1 = games.game1.hitsAllowed != "" ? games.game1.hitsAllowed : ""
      lastFive.baseXBolas. game1 = games.game1.baseXBola != "" ? games.game1.baseXBola : ""
      lastFive.earnedRuns. game1 = games.game1.earnedRuns != "" ? games.game1.earnedRuns : ""
    }
    if(games.game2 !== undefined){

      lastFive.strikeOuts.game2 = games.game2.strikeOuts2 !== "" ? games.game2.strikeOuts2 : ""
      lastFive.hitsAllowed.game2 = games.game2.hitsAllowed2 != "" ? games.game2.hitsAllowed2 : ""
      lastFive.baseXBolas.game2 = games.game2.baseXBola2 != "" ? games.game2.baseXBola2 : ""
      lastFive.earnedRuns.game2 = games.game2.earnedRuns2 != "" ? games.game2.earnedRuns2 : ""
    }
    if(games.game3 !== undefined){

      lastFive.strikeOuts.game3 = games.game3.strikeOuts3 !== "" ? games.game3.strikeOuts3 : ""
      lastFive.hitsAllowed.game3 = games.game3.hitsAllowed3 != "" ? games.game3.hitsAllowed3 : ""
      lastFive.baseXBolas.game3 = games.game3.baseXBola3 != "" ? games.game3.baseXBola3 : ""
      lastFive.earnedRuns.game3 = games.game3.earnedRuns3 != "" ? games.game3.earnedRuns3 : ""
    }
    if(games.game4 !== undefined){

      lastFive.strikeOuts.game4 = games.game4.strikeOuts4 !== "" ? games.game4.strikeOuts4 : ""
      lastFive.hitsAllowed.game4 = games.game4.hitsAllowed4 != "" ? games.game4.hitsAllowed4 : ""
      lastFive.baseXBolas.game4 = games.game4.baseXBola4 != "" ? games.game4.baseXBola4 : ""
      lastFive.earnedRuns.game4 = games.game4.earnedRuns4 != "" ? games.game4.earnedRuns4 : ""
    }
    if(games.game5 !== undefined){

      lastFive.strikeOuts.game5 = games.game5.strikeOuts5 !== "" ? games.game5.strikeOuts5 : ""
      lastFive.hitsAllowed.game5 = games.game5.hitsAllowed5 != "" ? games.game5.hitsAllowed5 : ""
      lastFive.baseXBolas.game5 = games.game5.baseXBola5 != "" ? games.game5.baseXBola5 : ""
      lastFive.earnedRuns.game5 = games.game5.earnedRuns5 != "" ? games.game5.earnedRuns5 : ""
    }



    return lastFive 
  }
  getStatsHitters(games: any){
    console.log(games)
    const lastFive:any = []
    if(games.game1 !== undefined){
      lastFive.strikeOuts = []
      lastFive.hits = []
      lastFive.baseXBolas = []
      lastFive.homeRun = []
      lastFive.runsBattedIn = []
      lastFive.threeb = []
      lastFive.twoB = []
      lastFive.strikeOuts.game1 = games.game1.strikeOuts !== "" ? games.game1.strikeOuts : ""
      lastFive.hits. game1 = games.game1.hits != "" ? games.game1.hits : ""
      lastFive.baseXBolas. game1 = games.game1.baseXBola != "" ? games.game1.baseXBola : ""
      lastFive.homeRun. game1 = games.game1.homeRun != "" ? games.game1.homeRun : ""
      lastFive.runsBattedIn. game1 = games.game1.runsBattedIn != "" ? games.game1.runsBattedIn : ""
      lastFive.threeb. game1 = games.game1.threeb != "" ? games.game1.threeb : ""
      lastFive.twoB. game1 = games.game1.twoB != "" ? games.game1.twoB : ""
    }
    if(games.game2 !== undefined){
      lastFive.strikeOuts.game2 = games.game2.strikeOuts2 !== "" ? games.game2.strikeOuts2 : ""
      lastFive.hits. game2 = games.game2.hits2 != "" ? games.game2.hits2 : ""
      lastFive.baseXBolas. game2 = games.game2.baseXBola2 != "" ? games.game2.baseXBola2 : ""
      lastFive.homeRun. game2 = games.game2.homeRun2 != "" ? games.game2.homeRun2 : ""
      lastFive.runsBattedIn. game2 = games.game2.runsBattedIn2 != "" ? games.game2.runsBattedIn2 : ""
      lastFive.threeb. game2 = games.game2.threeb2 != "" ? games.game2.threeb2 : ""
      lastFive.twoB. game2 = games.game2.twoB2 != "" ? games.game2.twoB2 : ""
    }
    if(games.game3 !== undefined){
      lastFive.strikeOuts.game3 = games.game3.strikeOuts3 !== "" ? games.game3.strikeOuts3 : ""
      lastFive.hits. game3 = games.game3.hits3 != "" ? games.game3.hits : ""
      lastFive.baseXBolas. game3 = games.game3.baseXBola3 != "" ? games.game3.baseXBola3 : ""
      lastFive.homeRun. game3 = games.game3.homeRun3 != "" ? games.game3.homeRun3 : ""
      lastFive.runsBattedIn. game3 = games.game3.runsBattedIn3 != "" ? games.game3.runsBattedIn3 : ""
      lastFive.threeb. game3 = games.game3.threeb3 != "" ? games.game3.threeb3 : ""
      lastFive.twoB. game3 = games.game3.twoB3 != "" ? games.game3.twoB3 : ""
    }
    if(games.game4 !== undefined){
      lastFive.strikeOuts.game4 = games.game4.strikeOuts4 !== "" ? games.game4.strikeOuts4 : ""
      lastFive.hits. game4 = games.game4.hits4 != "" ? games.game4.hits4 : ""
      lastFive.baseXBolas. game4 = games.game4.baseXBola4 != "" ? games.game4.baseXBola4 : ""
      lastFive.homeRun. game4 = games.game4.homeRun4 != "" ? games.game4.homeRun4 : ""
      lastFive.runsBattedIn. game4 = games.game4.runsBattedIn4 != "" ? games.game4.runsBattedIn4 : ""
      lastFive.threeb. game4 = games.game4.threeb4 != "" ? games.game4.threeb4 : ""
      lastFive.twoB. game4 = games.game4.twoB4 != "" ? games.game4.twoB4 : ""
    }
    if(games.game5 !== undefined){
      lastFive.strikeOuts.game5 = games.game5.strikeOuts5 !== "" ? games.game5.strikeOuts5 : ""
      lastFive.hits. game5 = games.game5.hits5 != "" ? games.game5.hits5 : ""
      lastFive.baseXBolas. game5 = games.game5.baseXBola5 != "" ? games.game5.baseXBola5 : ""
      lastFive.homeRun. game5 = games.game5.homeRun5 != "" ? games.game5.homeRun5 : ""
      lastFive.runsBattedIn. game5 = games.game5.runsBattedIn5 != "" ? games.game5.runsBattedIn5 : ""
      lastFive.threeb. game5 = games.game5.threeb5 != "" ? games.game5.threeb5 : ""
      lastFive.twoB. game5 = games.game5.twoB5 != "" ? games.game5.twoB5 : ""
    }


console.log(lastFive)
    return lastFive 
  }
  setOddsPitcher(dataOdds: any, position:string) {
    const lastFive   :any = this.getStats(dataOdds.games)
    const lastFiveVs :any = this.getStats(dataOdds.gamesvS)

    const dataOddsB = dataOdds.odds
    this.namePlayer = dataOdds.name
    this.position = position
     this.playerOddsB = []
     for (const property in dataOddsB) {
      switch (dataOddsB[property]?.market) {
        case 'Pitcher - Ponches (+/-)':
          this.playerOddsB.strikouts =({
            market: "Strikeouts",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
            games: lastFive.strikeOuts,
            gamesVs: lastFiveVs.strikeOuts
          });
        break;
        case 'Pitcher - Hits permitidos (+/-)':
          this.playerOddsB.hitsAllowed =({
            market: "Hits permitidos",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
                        games: lastFive.hitsAllowed,
            gamesVs: lastFiveVs.hitsAllowed
           });
          break;
        case 'Pitcher - Base por bolas (+/-)':
          this.playerOddsB.baseXBolas =({
            market: "Base por bolas",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
                        games: lastFive.baseXBolas,
            gamesVs: lastFiveVs.baseXBolas
          });
          break;
        case 'Pitcher - Carreras limpias':
          this.playerOddsB.earnedRuns =({
            market: "Carreras Limpias",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
                        games: lastFive.earnedRuns,
            gamesVs: lastFiveVs.earnedRuns
          });
          break;
        default:
          //console.log('No existe esa odd');
      }
    }


  }
  setOddsHitter(dataOdds: any, position:string) {
    console.log(dataOdds)
    const lastFive   :any = this.getStatsHitters(dataOdds.lastFive)
    console.log(lastFive)
    const dataOddsB = dataOdds.odds
    this.namePlayer = dataOdds.name
    this.position = position
     this.playerOddsB = []
    for (const property in dataOddsB) {
      switch (dataOddsB[property].market) {
        case 'Home runs (+/-)':
          this.playerOddsB.homeRun =({
            market: "Home Run",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.homeRun
          });
        break;
        case 'Bateador - Base por bolas (+/-)':
          this.playerOddsB.bb =({
            market: "BB",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.baseXBola
            });
          break;
        case 'Total de bases (+/-)':
          this.playerOddsB.tb =({
            market: "Bases Totales",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.twoB,
            gamesB:lastFive.threeb
          });
          break;
        case 'Hits (+/-)':
          this.playerOddsB.hits =({
            market: "Hits",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.hits
          });
          break;
        case 'Carreras impulsadas (+/-)':
          this.playerOddsB.rbi =({
            market: "RBI",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.runsBattedIn
          });
          break;
        case 'Carreras (+/-)':
          this.playerOddsB.carreras =({
            market: "Carreras",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.runs
          });
          break;
        case 'Bases robadas (+/-)':
          this.playerOddsB.stolenBases =({
            market: "Bases robadas",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            
          });
          break;
        case 'Total - Hits, carreras y carreras impulsadas (+/-)':
          this.playerOddsB.hrr =({
            market: "HRR",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            

          });
          break;
        default:
          //console.log('No existe esa odd');
      }
    }


  }
  setLogo(data: any){
    data.forEach( (element : any) => {
      if(element.awayName === "Rockies"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Rockies.png"
      }
      if(element.awayName === "Rays"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Rays.png"
      }
      if(element.awayName === "Orioles"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Orioles.png"
      }
      if(element.awayName === "Blue Jays"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Blue jays.png"
      }
      if(element.awayName === "Red Sox"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Red%20Sox.png"
      }
      if(element.awayName === "Rangers"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Rangers.png"
      }
      if(element.awayName === "Pirates"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Pirates.png"
      }
      if(element.awayName === "Marlins"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Marlins.png"
      }
      if(element.awayName === "Mets"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Mets.png"
      }
      if(element.awayName === "Astros"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Astros.png"
      }
      if(element.awayName === "Braves"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Braves.png"
      }
      if(element.awayName === "Padres"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Padres.png"
      }
      if(element.awayName === "Cubs"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Cubs.png"
      }
      if(element.awayName === "Diamondbacks"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Diamondbacks.png"
      }
      if(element.awayName === "Athletics"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Athletics.png"
      }
      if(element.awayName === "Mariners"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Mariners.png"
      }
      if(element.awayName === "Tigers"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Tigers.png"
      }
      if(element.awayName === "Dodgers"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Dodgers.png"
      }
      if(element.homeName === "Rockies"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Rockies.png"
      }
      if(element.homeName === "Rays"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Rays.png"
      }
      if(element.homeName === "Orioles"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Orioles.png"
      }
      if(element.homeName === "Blue Jays"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Blue jays.png"
      }
      if(element.homeName === "Red Sox"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Red%20Sox.png"
      }
      if(element.homeName === "Rangers"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Rangers.png"
      }
      if(element.homeName === "Pirates"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Pirates.png"
      }
      if(element.homeName === "Marlins"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Marlins.png"
      }
      if(element.homeName === "Mets"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Mets.png"
      }
      if(element.homeName === "Astros"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Astros.png"
      }
      if(element.homeName === "Braves"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Braves.png"
      }
      if(element.homeName === "Padres"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Padres.png"
      }
      if(element.homeName === "Cubs"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Cubs.png"
      }
      if(element.homeName === "Diamondbacks"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/Logos%20mlb/Diamondbacks.png"
      }
      if(element.homeName === "Athletics"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/Logos%20mlb/Athletics.png"
      }
      if(element.homeName === "Mariners"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/Logos%20mlb/Mariners.png"
      }
      if(element.homeName === "Tigers"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/Logos%20mlb/Tigers.png"
      }
      if(element.homeName === "Dodgers"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/Logos%20mlb/Dodgers.png"
      }
    });
    return data
  }
}
