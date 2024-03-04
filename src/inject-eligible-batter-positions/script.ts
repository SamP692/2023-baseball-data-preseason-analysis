/* Configs */
import config from ":config"

/* Methods */
import identifyMatchingRecords from "./identify-matching-records.ts"
import mergeMatchingRecords from "./merge-matching-records.ts"

/* Script */
const { matchedRecords, unmatchedRecords } = identifyMatchingRecords()
const mergedRecords = mergeMatchingRecords(matchedRecords)

const mergedBatterData = {
    mergedRecords,
    unmatchedRecords
}
const stringifiedMergedBatterData = JSON.stringify(mergedBatterData, null, 4)

const mergedBatterDataFilePath = `${config.manicuredPublishLocation}/merged-batters.json`

Deno.writeTextFileSync(mergedBatterDataFilePath, stringifiedMergedBatterData)

console.log("Batter merging complete")
