/* Configs */
import config from ":config"

/* Type Definitions */
import { type ManicuredPlayerRecord as YahooPlayerRecord } from ":yahoo-record-types"

/* Behaviors */
/* -- Load All Batter Records */
function loadAllYahooRecords() {
    const yahooPlayerRecordContent = Deno.readTextFileSync(`${config.scriptDataPublishPath}/yahoo-players.json`)
    const yahooPlayerRecords = JSON.parse(yahooPlayerRecordContent) as YahooPlayerRecord[]

    return yahooPlayerRecords
}

/* -- Record is Batter */
function recordIsBatter(record: YahooPlayerRecord) {
    const positionTypeIsBatter = record.positionType.toLowerCase() === "b"

    return positionTypeIsBatter
}

/* Load Yahoo Batter Records */
function loadYahooBatterRecords(): YahooPlayerRecord[] {
    const allYahooRecords = loadAllYahooRecords()
    const yahooBatterRecords = allYahooRecords.filter(recordIsBatter)

    return yahooBatterRecords
}

export default loadYahooBatterRecords
