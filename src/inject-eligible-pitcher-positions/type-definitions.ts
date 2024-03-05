/* Merged Record */
export interface MergedPitcherRecord {
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
        gs: number
        xba: number
        xwoba: number
        xiso: number
        avgExitVel: number
        barrelRate: number
        zoneRate: number
        chaseRate: number
        whiffRate: number
        fbRate: number | null
        fbSpin: number | null
        bbRate: number | null
        bbSpin: number | null
        osRate: number | null
        osSpin: number | null
    }
}
