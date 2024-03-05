/* Configs */
import config from ":config"

/* Methods */
import promptToOverwriteFile from ":utils/prompt-to-overwrite-file.ts"

import identifyMatchingRecords from "./identify-matching-records.ts"
import mergeMatchingRecords from "./merge-matching-records.ts"

/* Constants */
const finalPitcherRecordsFilePath = `${config.distDataPath}/pitchers.json`

/* Script */
promptToOverwriteFile(finalPitcherRecordsFilePath)

const { matchedRecords, unmatchedRecords } = identifyMatchingRecords()
const mergedRecords = mergeMatchingRecords(matchedRecords)

const mergedBatterData = {
    mergedRecords,
    unmatchedRecords
}
const stringifiedMergedBatterData = JSON.stringify(mergedBatterData, null, 4)

Deno.writeTextFileSync(finalPitcherRecordsFilePath, stringifiedMergedBatterData)

console.log("Pitcher merging complete")
