import browserslist from "browserslist"
import path from "path"

/**
 * @type { import("../src") }
 */
const browserslistConfig = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

it("Should return a proper version list for given browserslist query", () => {
  const result = browserslist(browserslistConfig)
  expect(Array.isArray(result)).toBeTruthy()
  expect(result.filter(version => version.startsWith("node")).length > 5).toBeTruthy()
  expect(result.find(version => version.startsWith("chrome"))).toBeTruthy()
  expect(result.find(version => version.startsWith("and_chr"))).toBeTruthy()
  expect(result.find(version => version.startsWith("firefox"))).toBeTruthy()
  expect(result.find(version => version.startsWith("edge"))).toBeFalsy() // Don't specifically support Edge
})