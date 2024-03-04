/* Batter Record */
export interface BatterRecord {
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
