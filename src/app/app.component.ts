import { Component, OnInit } from '@angular/core';
import { GamesComponent } from './components/games/games.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDataComponent } from './components/player-data/player-data.component';
import { GamesService } from './services/games.service';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { SelectPositionComponent } from "./components/select-position/select-position.component";

@Component({
  selector: 'app-root',
  imports: [GamesComponent, PlayerListComponent, PlayerDataComponent, SelectPositionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mobile: boolean = false
  showSelect = false
  team : string =""
  vs: any
  oddData = []
  hitter = "hitter"
  pitcher = "pitcher"
  gamesBsb: any = []
  playersToFollowPersonalData: any = []
  players : any = []
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
    console.log(this.players)
    //this.games = Object.values(games) //offline
  }
  setGamesBsbApi(){
    this.GamesService.getGames().subscribe((data)=>{
      this.gamesBsb = this.setLogo(data)
    })
    if(window.screen.width<415){
      this.mobile =  true
    }
    console.log(this.mobile)
  }

  playersFromGames(players: any) {
    this.showSelect = true
    this.players = players
    this.playerOddsB = []
    this.playersToFollowPersonalData =[]
    this.namePlayer = ""
  }
  playerFromPlayer(player: any) {
    this.position = player.position
    this.getOdds(player.name);

  }
  playersToShow(position: string){
    console.log(this.players)
    console.log(position)
    this.position = position
    if (position === "pitcher"){
      this.playersToFollowPersonalData = this.players.pitchers

    } else {
      this.playersToFollowPersonalData = this.players.hitters
    }
    console.log(this.playersToFollowPersonalData)
    console.log(this.position)
  }
  getOdds(name: string) {
    this.namePlayer = name
    if(this.position === "pitcher"){
      this.playersToFollowPersonalData.forEach((element: any) => {
        if(element.name === name){
            this.setOddsPitcher(element)
        }
      });
    } else {
      this.playersToFollowPersonalData.forEach((element: any) => {
        if(element.name === name){
            this.setOddsHitter(element)
        }

      });
    }


    console.log(this.playerOddsB, this.playerOddsB.length)
  }
  getStats(games: any){
    const lastFive:any = []
    if(games.game1 !== undefined){
      lastFive.strikeOuts = []
      lastFive.hitsAllowed = []
      lastFive.baseXBolas = []
      lastFive.earnedRuns = []
      lastFive.strikeOuts.game1 = games.game1.strikeOuts !== "" ? games.game1.strikeOuts : ""
      lastFive.hitsAllowed. game1 = games.game1.hitsAllowed !== "" ? games.game1.hitsAllowed : ""
      lastFive.baseXBolas. game1 = games.game1.baseXBola !== "" ? games.game1.baseXBola : ""
      lastFive.earnedRuns. game1 = games.game1.earnedRuns !== "" ? games.game1.earnedRuns : ""
    }
    if(games.game2 !== undefined){

      lastFive.strikeOuts.game2 = games.game2.strikeOuts2 !== "" ? games.game2.strikeOuts2 : ""
      lastFive.hitsAllowed.game2 = games.game2.hitsAllowed2 !== "" ? games.game2.hitsAllowed2 : ""
      lastFive.baseXBolas.game2 = games.game2.baseXBola2 !== "" ? games.game2.baseXBola2 : ""
      lastFive.earnedRuns.game2 = games.game2.earnedRuns2 !== "" ? games.game2.earnedRuns2 : ""
    }
    if(games.game3 !== undefined){

      lastFive.strikeOuts.game3 = games.game3.strikeOuts3 !== "" ? games.game3.strikeOuts3 : ""
      lastFive.hitsAllowed.game3 = games.game3.hitsAllowed3 !== "" ? games.game3.hitsAllowed3 : ""
      lastFive.baseXBolas.game3 = games.game3.baseXBola3 !== "" ? games.game3.baseXBola3 : ""
      lastFive.earnedRuns.game3 = games.game3.earnedRuns3 !== "" ? games.game3.earnedRuns3 : ""
    }
    if(games.game4 !== undefined){

      lastFive.strikeOuts.game4 = games.game4.strikeOuts4 !== "" ? games.game4.strikeOuts4 : ""
      lastFive.hitsAllowed.game4 = games.game4.hitsAllowed4 !== "" ? games.game4.hitsAllowed4 : ""
      lastFive.baseXBolas.game4 = games.game4.baseXBola4 !== "" ? games.game4.baseXBola4 : ""
      lastFive.earnedRuns.game4 = games.game4.earnedRuns4 !== "" ? games.game4.earnedRuns4 : ""
    }
    if(games.game5 !== undefined){

      lastFive.strikeOuts.game5 = games.game5.strikeOuts5 !== "" ? games.game5.strikeOuts5 : ""
      lastFive.hitsAllowed.game5 = games.game5.hitsAllowed5 !== "" ? games.game5.hitsAllowed5 : ""
      lastFive.baseXBolas.game5 = games.game5.baseXBola5 !== "" ? games.game5.baseXBola5 : ""
      lastFive.earnedRuns.game5 = games.game5.earnedRuns5 !== "" ? games.game5.earnedRuns5 : ""
    }



    return lastFive
  }
  getStatsHitters(games: any){
    console.log(games.game3)
    console.log(games.game3.runs3)
    const lastFive:any = []
    if(games.game1 !== undefined){
      lastFive.strikeOuts = []
      lastFive.hits = []
      lastFive.baseXBolas = []
      lastFive.homeRun = []
      lastFive.runsBattedIn = []
      lastFive.threeb = []
      lastFive.twoB = []
      lastFive.runs = []
      lastFive.hrr = []
      lastFive.strikeOuts.game1 = games.game1.strikeOuts !== "" ? games.game1.strikeOuts : ""
      lastFive.hits. game1 = games.game1.hits !== "" ? games.game1.hits : ""
      lastFive.baseXBolas. game1 = games.game1.baseXBola !== "" ? games.game1.baseXBola : ""
      lastFive.homeRun. game1 = games.game1.homeRun !== "" ? games.game1.homeRun : ""
      lastFive.runsBattedIn. game1 = games.game1.runsBattedIn !== "" ? games.game1.runsBattedIn : ""
      lastFive.threeb. game1 = games.game1.threeb !== "" ? games.game1.threeb : ""
      lastFive.twoB. game1 = games.game1.twoB !== "" ? games.game1.twoB : ""
      lastFive.runs. game1 = games.game1.runs !== "" ? games.game1.runs : ""
      const hrr = parseInt(games.game1.runs, 10) + parseInt(games.game1.hits, 10)  + parseInt(games.game1.runsBattedIn, 10)
      lastFive.hrr.game1 = hrr !== undefined ? hrr : ""
    }
    if(games.game2 !== undefined){
      lastFive.strikeOuts.game2 = games.game2.strikeOuts2 !== "" ? games.game2.strikeOuts2 : ""
      lastFive.hits. game2 = games.game2.hits2 !== "" ? games.game2.hits2 : ""
      lastFive.baseXBolas. game2 = games.game2.baseXBola2 !== "" ? games.game2.baseXBola2 : ""
      lastFive.homeRun. game2 = games.game2.homeRun2 !== "" ? games.game2.homeRun2 : ""
      lastFive.runsBattedIn. game2 = games.game2.runsBattedIn2 !== "" ? games.game2.runsBattedIn2 : ""
      lastFive.threeb. game2 = games.game2.threeb2 !== "" ? games.game2.threeb2 : ""
      lastFive.twoB. game2 = games.game2.twoB2 !== "" ? games.game2.twoB2 : ""
      lastFive.runs. game2 = games.game2.runs2 !== "" ? games.game2.runs2 : ""
      const hrr2 = parseInt(games.game2.runs2, 10) + parseInt(games.game2.hits2, 10)  + parseInt(games.game2.runsBattedIn2, 10)
      lastFive.hrr.game2 = hrr2 !== undefined ? hrr2 : ""
    }
    if(games.game3 !== undefined){
      lastFive.hits. game3 = games.game3.hits3 !== "" ? games.game3.hits3 : ""
      lastFive.strikeOuts.game3 = games.game3.strikeOuts3 !== "" ? games.game3.strikeOuts3 : ""
      lastFive.baseXBolas. game3 = games.game3.baseXBola3 !== "" ? games.game3.baseXBola3 : ""
      lastFive.homeRun. game3 = games.game3.homeRun3 !== "" ? games.game3.homeRun3 : ""
      lastFive.runsBattedIn. game3 = games.game3.runsBattedIn3 !== "" ? games.game3.runsBattedIn3 : ""
      lastFive.threeb. game3 = games.game3.threeb3 !== "" ? games.game3.threeb3 : ""
      lastFive.twoB. game3 = games.game3.twoB3 !== "" ? games.game3.twoB3 : ""
      lastFive.runs.game3 = games.game3.runs3 !== "" ? games.game3.runs3 : ""
      const hrr3 = parseInt(games.game3.runs3, 10) + parseInt(games.game3.hits3, 10)  + parseInt(games.game3.runsBattedIn3, 10)
      lastFive.hrr.game3 = hrr3 !== undefined ? hrr3 : ""
    }
    if(games.game4 !== undefined){
      lastFive.strikeOuts.game4 = games.game4.strikeOuts4 !== "" ? games.game4.strikeOuts4 : ""
      lastFive.hits. game4 = games.game4.hits4 !== "" ? games.game4.hits4 : ""
      lastFive.baseXBolas. game4 = games.game4.baseXBola4 !== "" ? games.game4.baseXBola4 : ""
      lastFive.homeRun. game4 = games.game4.homeRun4 !== "" ? games.game4.homeRun4 : ""
      lastFive.runsBattedIn. game4 = games.game4.runsBattedIn4 !== "" ? games.game4.runsBattedIn4 : ""
      lastFive.threeb.game4 = games.game4.threeb4 !== "" ? games.game4.threeb4 : ""
      lastFive.twoB.game4 = games.game4.twoB4 !== "" ? games.game4.twoB4 : ""
      lastFive.runs.game4 = games.game4.runs4 !== "" ? games.game4.runs4 : ""
      const hrr4 = parseInt(games.game4.runs4, 10) + parseInt(games.game4.hits4, 10)  + parseInt(games.game4.runsBattedIn4, 10)
      lastFive.hrr.game4 = hrr4 !== undefined ? hrr4 : ""
    }
    if(games.game5 !== undefined){
      lastFive.strikeOuts.game5 = games.game5.strikeOuts5 !== "" ? games.game5.strikeOuts5 : ""
      lastFive.hits. game5 = games.game5.hits5 !== "" ? games.game5.hits5 : ""
      lastFive.baseXBolas. game5 = games.game5.baseXBola5 !== "" ? games.game5.baseXBola5 : ""
      lastFive.homeRun. game5 = games.game5.homeRun5 !== "" ? games.game5.homeRun5 : ""
      lastFive.runsBattedIn. game5 = games.game5.runsBattedIn5 !== "" ? games.game5.runsBattedIn5 : ""
      lastFive.threeb. game5 = games.game5.threeb5 !== "" ? games.game5.threeb5 : ""
      lastFive.twoB. game5 = games.game5.twoB5 !== "" ? games.game5.twoB5 : ""
      lastFive.runs. game5 = games.game5.runs5 !== "" ? games.game5.runs5 : ""
      const hrr5 = parseInt(games.game5.runs5, 10) + parseInt(games.game5.hits5, 10)  + parseInt(games.game5.runsBattedIn5, 10)
      lastFive.hrr.game5 = hrr5 !== undefined ? hrr5 : ""

    }
    console.log(lastFive)
    return lastFive
  }

  setOddsPitcher(dataOdds: any) {
    this.team = dataOdds.team
    const lastFive   :any = this.getStats(dataOdds.games)
    const lastFiveVs :any = this.getStats(dataOdds.gamesvS)

    const dataOddsB = dataOdds.odds
    this.namePlayer = dataOdds.name

     this.playerOddsB = []
     for (const property in dataOddsB) {
      switch (dataOddsB[property]?.market) {
        case 'Pitcher - Ponches (+/-)':
          this.playerOddsB.strikeOuts =({
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
  getStatsHittersOneLine(games: any){
    const vsP:any = []
      vsP.strikeOuts = []
      vsP.hits = []
      vsP.baseXBolas = []
      vsP.homeRun = []
      vsP.runsBattedIn = []
      vsP.threeb = []
      vsP.twoB = []
      vsP.runs = []
      vsP.hits          = games.Hits !== ""        ? games.Hits : ""
      vsP.atBat = []
      vsP.atBat         = games.atBat !== ""        ? games.atBat : ""
      vsP.avg = []
      vsP.avg         = games.avg !== ""        ? games.avg : ""
      vsP.baseXBola    = games.baseXBola !== ""   ? games.baseXBola : ""
      vsP.games = []
      vsP.games         = games.games !== ""        ? games.games : ""
      vsP.homeRun       = games.homeRun !== ""     ? games.homeRun : ""
      vsP.runsBattedIn  = games.runsBattedIn !== "" ? games.runsBattedIn : ""
      vsP.strikeOuts    = games.strikeOut !== "" ? games.strikeOut : ""

      vsP.threeb        = games.threeb !== ""      ? games.threeb : ""
      vsP.twoB          = games.twoB !== ""        ? games.twoB : ""
      console.log(vsP)
    return vsP
  }
  setOddsHitter(dataOdds: any) {

    console.log(dataOdds)
    this.vs = {"rival" :dataOdds.pitcherRival, "throw": dataOdds.pitcherRivalThrow}
    this.team = dataOdds.team
    const vsPitcher =this.getStatsHittersOneLine(dataOdds.vsPitcher)
    const lastFive   :any = this.getStatsHitters(dataOdds.lastFive.games)
    const vsPitcherThrow =this.getStatsHittersOneLine(dataOdds.vsPitcherThrow)
    const dataOddsB = dataOdds.odds
    this.namePlayer = dataOdds.name
     this.playerOddsB = []
    for (const property in dataOddsB) {
      switch (dataOddsB[property].market) {
        case 'Home runs (+/-)':
          this.playerOddsB.homeRun =({
            market: "HR",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.homeRun,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.homeRun},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.homeRun}
          });
        break;
        case 'Bateador - Base por bolas (+/-)':
          this.playerOddsB.bb =({
            market: "BB",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.baseXBolas,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.baseXBola},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.baseXBola}
            });
          break;
        case 'Total de bases (+/-)':
          this.playerOddsB.tb =({
            market: "Bases Totales",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.twoB,
            gamesB:lastFive.threeb,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.hits},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.hits}
          });
          break;
        case 'Hits (+/-)':
          this.playerOddsB.hits =({
            market: "Hits",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.hits,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.hits},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.hits}
          });
          break;
        case 'Carreras impulsadas (+/-)':
          this.playerOddsB.rbi =({
            market: "RBI",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.runsBattedIn,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.runsBattedIn},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.runsBattedIn}
          });
          break;
        case 'Carreras (+/-)':
          this.playerOddsB.carreras =({
            market: "Carreras",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            games: lastFive.runs,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.hits},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.hits}
          });
          break;
        case 'Bases robadas (+/-)':
          this.playerOddsB.stolenBases =({
            market: "Bases robadas",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.hits},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.hits}

          });
          break;
        case 'Total - Hits, carreras y carreras impulsadas (+/-)':
          this.playerOddsB.hrr =({
            market: "HRR",
            line: dataOddsB[property].line,
            overOdd: dataOddsB[property].overOdd,
            underOdd: dataOddsB[property].underOdd,
            vsPitcher: {games:vsPitcher.games, stats: vsPitcher.hits},
            vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.hits},
            games: lastFive.hrr
          });
          break;
            case 'Bateador - Ponches (+/-)':
              this.playerOddsB.sohitter =({
                market: "StrikeOut",
                line: dataOddsB[property].line,
                overOdd: dataOddsB[property].overOdd,
                underOdd: dataOddsB[property].underOdd,
                games: lastFive.strikeOuts,
                vsPitcher: {games:vsPitcher.games, stats: vsPitcher.strikeOuts},
                vsPitcherThrow:  {games:vsPitcherThrow.games, stats: vsPitcherThrow.strikeOuts}
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
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Blue_Jays.png"
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
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Diamonbacks.png"
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
      if(element.homeName === "Dodgers"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Dodgers.png"
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
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Blue_Jays.png"
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
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Diamondbacks.png"
      }
      if(element.homeName === "Athletics"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Athletics.png"
      }
      if(element.homeName === "Mariners"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Mariners.png"
      }
      if(element.homeName === "Tigers"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Tigers.png"
      }
      if(element.awayName === "Dodgers"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Dodgers.png"
      }
      if(element.awayName === "Phillies"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Phillies.png"
      }
      if(element.homeName === "Phillies"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Phillies.png"
      }
      if(element.homeName === "Reds"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Reds.png"
      }
      if(element.homeName === "Royals"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Royals.png"
      }
      if(element.homeName === "Brewers"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Brewers.png"
      }
      if(element.homeName === "Angels"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Angels.png"
      }
      if(element.homeName === "Cardinals"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Cardinals.png"
      }
      if(element.homeName === "Twins"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Twins.png"
      }
      if(element.awayName === "Reds"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Reds.png"
      }
      if(element.awayName === "Royals"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Royals.png"
      }
      if(element.awayName === "Brewers"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Brewers.png"
      }
      if(element.awayName === "Angels"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Angels.png"
      }
      if(element.awayName === "Cardinals"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Cardinals.png"
      }
      if(element.awayName === "Twins"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Twins.png"
      }
      if(element.awayName === "White Sox"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/White_Sox.png"
      }
      if(element.homeName === "White Sox"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/White_Sox.png"
      }
      if(element.awayName === "Giants"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Giants.png"
      }
      if(element.homeName === "Giants"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Giants.png"
      }
      if(element.awayName === "Guardians"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Guardians.png"
      }
      if(element.homeName === "Guardians"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Guardians.png"
      }
      if(element.awayName === "Yankees"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Yankees.png"
      }
      if(element.homeName === "Yankees"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Yankees.png"
      }
      if(element.awayName === "Nationals"){
        element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Nationals.png"
      }
      if(element.homeName === "Nationals"){
        element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/Nationals.png"
      }
    });
    return data
  }
}
