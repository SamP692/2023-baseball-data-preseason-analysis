/* Type Definitions */
import { type ManicuredPlayerRecord as YahooPlayerRecord } from ":yahoo-record-types"
import { PitcherRecord } from ":pitcher-data-types"

import { MergedPitcherRecord } from "./type-definitions.ts"

/* Behaviors */
/* -- Merge Individual Record */
function mergeIndividualRecord([dataRecord, yahooRecord]: [PitcherRecord, YahooPlayerRecord]): MergedPitcherRecord {
    const mergedRecord = {
        fullName: dataRecord.fullName,
        savantName: dataRecord.name,
        yahooName: yahooRecord.name,
        savantId: dataRecord.savantId,
        yahooId: parseInt(yahooRecord.id),
        age: dataRecord.age,
        positions: yahooRecord.eligiblePositions,
        data: dataRecord.data
    }

    return mergedRecord
}

/* Merge Matching Records */
function mergeMatchingRecords(matchedRecords: Array<[PitcherRecord, YahooPlayerRecord]>): MergedPitcherRecord[] {
    const mergedRecords = matchedRecords.map(mergeIndividualRecord)

    return mergedRecords
}

export default mergeMatchingRecords
