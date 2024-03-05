/* Configs */
import config from ":config"

/* Methods */
import promptToOverwriteFile from ":utils/prompt-to-overwrite-file.ts"

import identifyMatchingRecords from "./identify-matching-records.ts"
import mergeMatchingRecords from "./merge-matching-records.ts"

/* Constants */
const finalBatterRecordsFilePath = `${config.distDataPath}/batters.json`

/* Script */
promptToOverwriteFile(finalBatterRecordsFilePath)

const { matchedRecords, unmatchedRecords } = identifyMatchingRecords()
const mergedRecords = mergeMatchingRecords(matchedRecords)

const mergedBatterData = {
    mergedRecords,
    unmatchedRecords

}
const stringifiedMergedBatterData = JSON.stringify(mergedBatterData, null, 4)


Deno.writeTextFileSync(finalBatterRecordsFilePath, stringifiedMergedBatterData)

console.log("Batter merging complete")
