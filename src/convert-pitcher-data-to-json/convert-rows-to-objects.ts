/* Type Definitions */
import { type PitcherRecord } from "./type-definitions.ts"

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

/* To Float or Null */
function toFloatOrNull(str: string) {
    const num = parseFloat(str)

    if (Number.isNaN(num)) {
        return null
    }

    return num
}

/* Convert Row to Object */
function convertRowToObject(record: string[]): PitcherRecord {
    const rawPlayerName = record[0]
    const savantId = parseInt(record[1])
    const recordYear = parseInt(record[2])
    const age = parseInt(record[3])
    const pa = parseInt(record[4])
    const gs = parseInt(record[5])
    const xba = parseFloat(record[6])
    const xwoba = parseFloat(record[7])
    const xiso = parseFloat(record[8])
    const avgExitVel = parseFloat(record[9])
    const barrelRate = parseFloat(record[10])
    const chaseRate = parseFloat(record[11])
    const zoneRate = 100 - parseFloat(record[12])
    const whiffRate = parseFloat(record[13])
    const fbRate = toFloatOrNull(record[14])
    const fbSpin = toFloatOrNull(record[15])
    const bbRate = toFloatOrNull(record[16])
    const bbSpin = toFloatOrNull(record[17])
    const osRate = toFloatOrNull(record[18])
    const osSpin = toFloatOrNull(record[19])

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
        gs,
        xba,
        xwoba,
        xiso,
        avgExitVel,
        barrelRate,
        zoneRate,
        chaseRate,
        whiffRate,
        fbRate,
        fbSpin,
        bbRate,
        bbSpin,
        osRate,
        osSpin,
    }

    return {
        fullName,
        name,
        savantId,
        age,
        data
    }
}

/* Convert Rows to Object */
function convertRowsToObjects([_headers, ...records]: Array<string[]>) {
    const recordsAsObjects = records.map(convertRowToObject)

    return recordsAsObjects
}

export default convertRowsToObjects
