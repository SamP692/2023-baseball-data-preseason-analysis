/* Type Definitions */
import { type BatterRecord } from "./type-definitions.ts"

/* List Odd Records */
function listOddRecords(records: BatterRecord[]) {
    const oddRecords: BatterRecord[] = []

    function isOddString(str: string) {
        const typeIsNotString = typeof str !== "string"
        const isTooShort = str.length < 2

        return typeIsNotString || isTooShort
    }

    function isOddNumber(num: number) {
        const typeIsNotNumber = typeof num !== "number"
        const isNaN = Number.isNaN(num)
        const isZero = num === 0

        return typeIsNotNumber || isNaN || isZero
    }

    records.forEach((record) => {
         const oddStrings = [record.fullName, ...Object.values(record.name)].filter(isOddString)
         const oddNumbers = [record.savantId, record.age, ...Object.values(record.data)].filter(isOddNumber)

         if (oddStrings.length || oddNumbers.length) {
             oddRecords.push(record)
         }
    })

    return oddRecords
}

export default { listOddRecords }
