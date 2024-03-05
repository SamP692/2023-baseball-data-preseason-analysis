/* Merged Record */
export interface MergedBatterRecord {
    fullName: string
    team: string
    savantName: {
        first: string
        last: string
        raw: string
    }
    yahooName: {
        first: string
        last: string
    }
    savantId: number
    yahooId: number
    age: number
    positions: string[]
    data: {
        recordYear: number
        pa: number
        xba: number
        xwoba: number
        xiso: number
        avgExitVel: number
        barrelRate: number
        chaseRate: number
        whiffRate: number
        speed: number
    }
}
