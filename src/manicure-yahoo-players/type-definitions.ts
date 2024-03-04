/* Raw Player Record */
export interface RawPlayerRecord {
    player_id: string
    name: {
        full: string
        first: string
        last: string
    }
    position_type: "B" | "P"
    status: string
    status_full: string
    editorial_team_abbr: string
    eligible_positions: Array<{ position: string }>
}

/* Manicured Player Record */
export interface ManicuredPlayerRecord {
    id: string
    fullName: string
    name: {
        first: string
        last: string
    }
    positionType: string
    status: {
        code: string
        full: string
    }
    team: string
    eligiblePositions: string[]
}
