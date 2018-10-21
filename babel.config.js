const presets = [
  ["@babel/env"],["@babel/preset-react"]
];

const plugins = [
  ["import",{"libraryName":"antd", "style": "css" }],
  "@babel/plugin-syntax-dynamic-import"
]

module.exports = { presets, plugins};