/* Configs */
import config from ":config"

/* Methods */
import loadYahooPitcherRecords from "./identify-matching-records/load-yahoo-pitcher-records.ts"
import mergeOnName from "./identify-matching-records/match-on-name.ts"

/* Type Definitions */
import { PitcherRecord } from ":pitcher-data-types"

/* Behaviors */
/* -- Load Pitching Data Records */
function loadPitchingDataRecords() {
    const battingDataRecordsContent = Deno.readTextFileSync(`${config.manicuredPublishLocation}/advanced-pitching-stats.json`)
    const battingDataRecords = JSON.parse(battingDataRecordsContent) as PitcherRecord[]

    return battingDataRecords
}

/* Identify Matching Records */
function identifyMatchingRecords() {
    const yahooBatterRecords = loadYahooPitcherRecords()
    const battingDataRecords = loadPitchingDataRecords()

    const [matchedRecords, unmatchedRecords] = mergeOnName(yahooBatterRecords, battingDataRecords)

    return { matchedRecords, unmatchedRecords }
}

export default identifyMatchingRecords
