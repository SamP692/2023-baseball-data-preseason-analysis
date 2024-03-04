/* Libraries */
import { parse } from "@parse-csv"

/* Configs */
import config from ":config"

/* Behaviors */
import convertRowsToObjects from "./convert-rows-to-objects.ts"

/* Script */
const pitchingData = Deno.readTextFileSync(config.rawData["2023advancedPitchingStats"])
const parsedPitchingStats = parse(pitchingData)

const pitchingRecords = convertRowsToObjects(parsedPitchingStats)
const stringifiedPitchingStats = JSON.stringify(pitchingRecords, null, 2)
const pitchingStatsFilePath = `${config.manicuredPublishLocation}/advanced-pitching-stats.json`

Deno.writeFileSync(pitchingStatsFilePath, new TextEncoder().encode(stringifiedPitchingStats))

console.log("Advanced batter data conversion complete")
