/* Pitcher Record */
export interface PitcherRecord {
    fullName: string
    name: {
        first: string
        last: string
        raw: string
    }
    savantId: number
    age: number
    data: {
        recordYear: number
        pa: number
        gs: number
        xba: number
        xwoba: number
        xiso: number
        avgExitVel: number
        barrelRate: number
        zoneRate: number // Raw data needs to be inversed
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
