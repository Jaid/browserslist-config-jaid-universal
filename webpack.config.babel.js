import configure from "webpack-config-jaid"

export default configure({
  documentation: true,
  publishimo: {fetchGithub: true},
  nodeExternals: false,
  output: {
    libraryTarget: "commonjs2",
  },
})