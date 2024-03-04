/* Type Definitions */
import { type ManicuredPlayerRecord as YahooPlayerRecord } from ":yahoo-record-types"
import { BatterRecord } from ":batter-data-types"

import { MergedBatterRecord } from "./type-definitions.ts"

/* Behaviors */
/* -- Merge Individual Record */
function mergeIndividualRecord([dataRecord, yahooRecord]: [BatterRecord, YahooPlayerRecord]): MergedBatterRecord {
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
function mergeMatchingRecords(matchedRecords: Array<[BatterRecord, YahooPlayerRecord]>): MergedBatterRecord[] {
    const mergedRecords = matchedRecords.map(mergeIndividualRecord)

    return mergedRecords
}

export default mergeMatchingRecords
