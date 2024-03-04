/* Configs */
import config from ":config"

/* Type Definitions */
import { ManicuredPlayerRecord } from './type-definitions.ts'

/* Behaviors */
import manicurePlayer from './manicure-player.ts'

/* Script */
const rawYahooPlayerData = Deno.readTextFileSync(config.rawData.yahooPlayerList)
const rawYahooPlayerDataJson = JSON.parse(rawYahooPlayerData)

const rawPlayerList = rawYahooPlayerDataJson.fantasy_content.leagues[0].league.players
const manicuredPlayerList: ManicuredPlayerRecord[] = rawPlayerList.map(manicurePlayer)
const stringifiedManicuredPlayers = JSON.stringify(manicuredPlayerList, null, 2)

const manicuredPlayersFilePath = `${config.manicuredPublishLocation}/yahoo-players.json`

Deno.writeFileSync(manicuredPlayersFilePath, new TextEncoder().encode(stringifiedManicuredPlayers))

console.log("Yahoo player conversion complete")
