export default function (currentPath: string, childPath: string) {
    const cleanedCurrentPath = currentPath.replace(/^\/+|\/+$/g, '')
    return `/${cleanedCurrentPath}/${childPath}`
}