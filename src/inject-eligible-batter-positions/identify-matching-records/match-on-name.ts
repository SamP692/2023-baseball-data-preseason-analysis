/* Type Definitions */
import { type ManicuredPlayerRecord as YahooPlayerRecord } from ":yahoo-record-types"
import { BatterRecord } from ":batter-data-types"

/* Methods */
import trimNameExtensions from "./utils/trim-name-extensions.ts"

/* Match Batting Records on Name */
function matchOnName(yahooBatterRecords: YahooPlayerRecord[], battingDataRecords: BatterRecord[]): [Array<[BatterRecord, YahooPlayerRecord]>, BatterRecord[]] {
    const matchedRecords: [BatterRecord, YahooPlayerRecord][] = []
    const unmatchedRecords: BatterRecord[] = []

    battingDataRecords.forEach((battingDataRecord) => {
        const standardizedDataRecordName = trimNameExtensions(battingDataRecord.fullName).toLowerCase()

        const matchingYahooRecord = yahooBatterRecords.find((yahooRecord) => {
            const standardizedYahooRecordName = trimNameExtensions(yahooRecord.fullName).toLowerCase()
            
            return standardizedYahooRecordName === standardizedDataRecordName
        })

        if (matchingYahooRecord) {
            matchedRecords.push([battingDataRecord, matchingYahooRecord])
        } else {
            unmatchedRecords.push(battingDataRecord)
        }
    })

    return [matchedRecords, unmatchedRecords]
}

export default matchOnName
