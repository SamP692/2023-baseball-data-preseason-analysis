/* Type Definitions */
import { type BatterRecord } from "./type-definitions.ts"

/* Convert Name to Readable Name */
function manicureNameDetails(name: string) {
    const nameSegments = name.split(",")

    const lastName = nameSegments[0].trim()
    const firstName = nameSegments[1].trim()

    const readableName = `${firstName} ${lastName}`

    return {
        firstName,
        lastName,
        readableName
    }
}

/* Convert Row to Object */
function convertRowToObject(record: string[]): BatterRecord {
    const rawPlayerName = record[0]
    const savantId = parseInt(record[1])
    const recordYear = parseInt(record[2])
    const age = parseInt(record[3])
    const pa = parseInt(record[4])
    const xba = parseFloat(record[5])
    const xwoba = parseFloat(record[6])
    const xiso = parseFloat(record[7])
    const avgExitVel = parseFloat(record[8])
    const barrelRate = parseFloat(record[9])
    const chaseRate = parseFloat(record[10])
    const whiffRate = parseFloat(record[11])
    const speed = parseFloat(record[12])

    const nameDetails = manicureNameDetails(rawPlayerName)

    const fullName = nameDetails.readableName
    const name = {
        first: nameDetails.firstName,
        last: nameDetails.lastName,
        raw: rawPlayerName
    }
    const data = {
        recordYear,
        pa,
        xba,
        xwoba,
        xiso,
        avgExitVel,
        barrelRate,
        chaseRate,
        whiffRate,
        speed
    }

    return {
        fullName,
        name,
        savantId,
        age,
        data
    }
}

/* Convert Rows to Objects */
function convertRowsToObjects([_headers, ...records]: Array<string[]>) {
    const recordsAsObjects = records.map(convertRowToObject)

    return recordsAsObjects
}

export default convertRowsToObjects
