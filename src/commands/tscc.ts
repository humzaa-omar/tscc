import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'tscc',
  description: 'TypeScript Cross-Compiler',
  run: async (toolbox) => {
    const { print } = toolbox

    print.printHelp(toolbox)
  },
}

module.exports = command
