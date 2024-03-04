/* Trim Name Extensions */
function trimNameExtensions(name: string) {
    const possibleExtensions = [
        "Jr.",
        "Jr",
        "Sr.",
        "Sr",
        "II",
        "III"
    ]

    const nameParts = name.split(" ")
    const finalPart = nameParts[nameParts.length - 1]
    
    const nameHasExtension = possibleExtensions.includes(finalPart)

    if (nameHasExtension) {
        const acceptedNameParts = nameParts.slice(0, -1)
        const acceptedName = acceptedNameParts.join(" ")

        return acceptedName
    }

    return name
}

export default trimNameExtensions
