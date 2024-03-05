/* Prompt to Overwrite File */
function promptToOverwriteFile(filePath: string) {
    try {
        const fileAlreadyExists = Deno.statSync(filePath)?.isFile

        if (fileAlreadyExists) {
            const shouldReplace = prompt("A file with this name already exists, would you like to replace it? (y/N)")
        
            if (shouldReplace?.toLowerCase() !== "y") {
                console.log("Skipping file rebuild process")
                
                Deno.exit()
            }
        }
    } catch (e) {
        const fileNotFound = e.message.includes("No such file or directory")

        if (!fileNotFound) throw e
    }
}

export default promptToOverwriteFile
