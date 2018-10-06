const presets = [
  ["@babel/env"],["@babel/preset-react"]
];

const plugins = [
  ["import",{"libraryName":"antd", "style": "css" }]
]

module.exports = { presets, plugins};