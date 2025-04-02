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
    console.log(games)
    const lastFive:any = {}
    const strikeOuts :any = {}
    const hitsAllowed :any = {}
    const baseXBolas :any = {}
    const earnedRuns :any = {}
    if(games.game1 !== undefined){
      lastFive.strikeOuts = {}
      lastFive.strikeOuts.game1 = games.game1.strikeOuts
    }






    return {lastFive }
  }
  setOddsPitcher(dataOdds: any, position:string) {
    console.log(dataOdds)
    const lastFive   :any = this.getStats(dataOdds.games)
    const lastFiveVs :any = this.getStats(dataOdds.gamesvS)
    console.log(lastFive.strikeOuts)
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
          });
        break;
        case 'Pitcher - Hits permitidos (+/-)':
          this.playerOddsB.hitsAllowed =({
            market: "Hits permitidos",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
           });
          break;
        case 'Pitcher - Base por bolas (+/-)':
          this.playerOddsB.baseXBolas =({
            market: "Base por bolas",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
          });
          break;
        case 'Pitcher - Carreras limpias':
          this.playerOddsB.earnedRuns =({
            market: "Carreras Limpias",
            line: dataOddsB[property]?.line,
            overOdd: dataOddsB[property]?.overOdd,
            underOdd: dataOddsB[property]?.underOdd,
          });
          break;
        default:
          //console.log('No existe esa odd');
      }
    }


  }
  setOddsHitter(dataOdds: any, position:string) {
    const dataOddsB = dataOdds
    console.log(dataOddsB, position)
     this.playerOddsB = []
    for (const property in dataOddsB) {
      this.namePlayer = dataOdds[property].finalName
      console.log(dataOdds[property])
     // this.nameTeam =
      switch (dataOdds[property].market) {
        case 'Puntos (+/-)':
          this.playerOddsB.earnedRuns =({
            market: "Puntos",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
        break;
          break;
        case 'Asistencias (+/-)':
          this.playerOddsB.assist =({
            market: "Asistencias",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
            });
          break;
        case 'Rebotes (+/-)':
          this.playerOddsB.rebound =({
            market: "Rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Triples (+/-)':
          this.playerOddsB.triples =({
            market: "Triples",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Puntos, asistencias y rebotes (+/-)':
          this.playerOddsB.pra =({
            market: "Puntos, asistencias y rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Asistencias y rebotes (+/-)':
          this.playerOddsB.ar =({
            market: "Asistencias y rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Puntos y rebotes (+/-)':
          this.playerOddsB.pr =({
            market: "Puntos y rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Puntos y asistencias (+/-)':
          this.playerOddsB.pa =({
            market: "Puntos y asistencias",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
                        stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
          case 'Mayor cantidad de puntos':
            this.playerOddsB.mayorPts =({
              market: "Mayor cantidad de puntos",
              line: dataOdds[property].line,
              overOdd: dataOdds[property].overOdd,
              underOdd: dataOdds[property].underOdd,
                          stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
            });
            break;
            case 'Menor cantidad de puntos':
              this.playerOddsB.menorPts =({
                market : 'Menor cantidad de puntos',
                line: dataOdds[property].line,
                overOdd: dataOdds[property].overOdd,
                underOdd: dataOdds[property].underOdd,
                            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
              });
              break;
        default:
          console.log('No existe esa odd');
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
