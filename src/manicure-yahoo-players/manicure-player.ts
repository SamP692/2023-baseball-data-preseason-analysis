/* Type Definitions */
import { RawPlayerRecord, ManicuredPlayerRecord } from './type-definitions.ts'

/* Consts */
const positionsToIgnore = [
    "NA",
    "UTIL",
    "P"
]

/* Additional Behaviors */
function positionIsRelevant(position: string): boolean {
    const positionIsNotRelevant = positionsToIgnore.includes(position.toUpperCase())

    return !positionIsNotRelevant
}

function setEligiblePositions(positionList: Array<{ position: string }>, positionType: "B" | "P"): string[] {
    const rawPositions = positionList.map(p => p.position)
    const relevantPositions = rawPositions.filter(positionIsRelevant)

    const noRelevantPositions = relevantPositions.length === 0
    if (noRelevantPositions) {
        const placeholderPosition = positionType === "B" ? "UTIL" : "P"

        return [placeholderPosition]
    }

    return relevantPositions
}

/* Manicure Player */
function manicurePlayer(rawPlayerRecord: { player: RawPlayerRecord }): ManicuredPlayerRecord {
    const rawPlayer = rawPlayerRecord.player

    const manicuredPlayer = {
        id: rawPlayer.player_id,
        fullName: rawPlayer.name.full,
        name: {
            first: rawPlayer.name.first,
            last: rawPlayer.name.last
        },
        positionType: rawPlayer.position_type,
        status: {
            code: rawPlayer.status,
            full: rawPlayer.status_full
        },
        team: rawPlayer.editorial_team_abbr,
        eligiblePositions: setEligiblePositions(rawPlayer.eligible_positions, rawPlayer.position_type)
    }

    return manicuredPlayer
}

export default manicurePlayer
