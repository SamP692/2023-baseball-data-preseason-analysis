/* Configs */
import config from ":config"

/* Methods */
import loadYahooBatterRecords from "./identify-matching-records/load-yahoo-batter-records.ts"
import mergeOnName from "./identify-matching-records/match-on-name.ts"

/* Type Definitions */
import { BatterRecord } from ":batter-data-types"

/* Behaviors */
/* -- Load Batting Data Records */
function loadBattingDataRecords() {
    const battingDataRecordsContent = Deno.readTextFileSync(`${config.scriptDataPublishPath}/advanced-batting-stats.json`)
    const battingDataRecords = JSON.parse(battingDataRecordsContent) as BatterRecord[]

    return battingDataRecords
}

/* Identify Matching Records */
function identifyMatchingRecords() {
    const yahooBatterRecords = loadYahooBatterRecords()
    const battingDataRecords = loadBattingDataRecords()

    const [matchedRecords, unmatchedRecords] = mergeOnName(yahooBatterRecords, battingDataRecords)

    return { matchedRecords, unmatchedRecords }
}

export default identifyMatchingRecords
