
import { isBaseSupportBrowser, isModernBrowser } from "../src/detect/isMordenBrowser";

console.group("Mordern Browser Feature Test")
isModernBrowser()
console.groupEnd()

console.group("Base Browser Feature Test")
isBaseSupportBrowser()
console.groupEnd()