/* Configs */
import config from ":config"

/* Type Definitions */
import { type ManicuredPlayerRecord as YahooPlayerRecord } from ":yahoo-record-types"

/* Behaviors */
/* -- Load All Batter Records */
function loadAllYahooRecords() {
    const yahooPlayerRecordContent = Deno.readTextFileSync(`${config.manicuredPublishLocation}/yahoo-players.json`)
    const yahooPlayerRecords = JSON.parse(yahooPlayerRecordContent) as YahooPlayerRecord[]

    return yahooPlayerRecords
}

/* -- Record is Pitcher */
function recordIsPitcher(record: YahooPlayerRecord) {
    const positionTypeIsBatter = record.positionType.toLowerCase() === "p"

    return positionTypeIsBatter
}

/* Load Yahoo Pitcher Records */
function loadYahooPitcherRecords(): YahooPlayerRecord[] {
    const allYahooRecords = loadAllYahooRecords()
    const yahooBatterRecords = allYahooRecords.filter(recordIsPitcher)

    return yahooBatterRecords
}

export default loadYahooPitcherRecords
