/* Libraries */
import { parse } from "@parse-csv"

/* Configs */
import config from ":config"

/* Behaviors */
import convertRowsToObjects from "./convert-rows-to-objects.ts"

/* Script */
const battingData = Deno.readTextFileSync(config.rawData["2023advancedBattingStats"])
const parsedBattingStats = parse(battingData)

const battingRecords = convertRowsToObjects(parsedBattingStats)
const stringifiedBattingStats = JSON.stringify(battingRecords, null, 2)
const battingStatsFilePath = `${config.manicuredPublishLocation}/advanced-batting-stats.json`

Deno.writeFileSync(battingStatsFilePath, new TextEncoder().encode(stringifiedBattingStats))

console.log("Advanced batter data conversion complete")
