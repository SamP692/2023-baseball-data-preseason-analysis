/* Type Definitions */
import { type ManicuredPlayerRecord as YahooPlayerRecord } from ":yahoo-record-types"
import { PitcherRecord } from ":pitcher-data-types"

/* Methods */
import trimNameExtensions from "./utils/trim-name-extensions.ts"

/* Match Batting Records on Name */
function matchOnName(yahooBatterRecords: YahooPlayerRecord[], battingDataRecords: PitcherRecord[]): [Array<[PitcherRecord, YahooPlayerRecord]>, PitcherRecord[]] {
    const matchedRecords: [PitcherRecord, YahooPlayerRecord][] = []
    const unmatchedRecords: PitcherRecord[] = []

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
