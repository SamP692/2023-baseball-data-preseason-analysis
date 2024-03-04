/* Type Definitions */
import { type PitcherRecord } from "./type-definitions.ts"

/* List Odd Records */
export function listOddRecords(records: PitcherRecord[]) {
    const oddRecords: PitcherRecord[] = []

    function isOddString(str: string) {
        const typeIsNotString = typeof str !== "string"
        const isTooShort = str.length < 2

        return typeIsNotString || isTooShort
    }

    function isOddNumber(num: number | null) {
        if (num === null) return false

        const typeIsNotNumber = typeof num !== "number"
        const isNaN = Number.isNaN(num)
        const isZero = num === 0

        return typeIsNotNumber || isNaN || isZero
    }

    records.forEach((record) => {
         const oddStrings = [record.fullName, ...Object.values(record.name)].filter(isOddString)

         const relevantNumericData = Object.entries(record.data)
            .filter(([k]) => k !== "gs")
            .map(([_ ,v]) => v)
         const oddNumbers = [record.savantId, record.age, ...relevantNumericData].filter(isOddNumber)

         if (oddStrings.length || oddNumbers.length) {
             oddRecords.push(record)
         }
    })

    return oddRecords
}
