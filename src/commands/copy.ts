import {Command, flags} from '@oclif/command'
import {copyPassword} from '../utils/common'

export class Show extends Command {
  static description = `
  Copies the password for an account to the clipboard.

By default it will copy the Account's password to the clipboard.
WIP
  `

  static examples = [
    'pg copy Facebook',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // name: flags.string({char: 'y', description: 'Name of the account'}),
    // copy: flags.string({char: 'c', description: 'Copies username and password from another account'}),
    // confirm: flags.boolean({char: 'y', default: false}),
  }

  static args = [
    {
      name: 'Account',           // name of arg to show in help and reference with args[name]
      required: true,            // make the arg required with `required: true`
      description: 'Account to create username and password', // help description
    },
  ]

  async run() {
    const {args} = this.parse(Show)

    try {
      await copyPassword(args.Account)
      this.log(`Your ${args.Account}'s password as been copied to the clipboard`)
    } catch (error) {
      this.log(error.message)
    }
  }
}
