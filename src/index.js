/** @module browserslist-config-jaid-universal */

import browserslistConfigJaidNode from "browserslist-config-jaid-node"
import browserslistConfigJaidWeb from "browserslist-config-jaid-web"

const mergedQuery = [
  ...browserslistConfigJaidNode,
  ...browserslistConfigJaidWeb,
].filter(version => version !== "not dead")

/**
 * Exports a Browserslist query
 * @type {string[]}
 */
module.exports = [
  ...mergedQuery,
  "not dead",
]