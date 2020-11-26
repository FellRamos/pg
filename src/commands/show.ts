import {Command, flags} from '@oclif/command'
import {showCredentials} from '../utils/common'

export class Show extends Command {
  static description = `
  Shows the username or password of a particular account.

By default it will show the username of the account. You can use the argument "password" to see the password,
but it will prompt to confirm this action. This confirmation can be set with the additional flag -y
  `

  static examples = [
    'pg show Facebook',
    'pg show Facebook password',
    'pg show Facebook password -y',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // name: flags.string({char: 'y', description: 'Name of the account'}),
    // copy: flags.string({char: 'c', description: 'Copies username and password from another account'}),
    confirm: flags.boolean({char: 'y', default: false}),
  }

  static args = [
    {
      name: 'Account',           // name of arg to show in help and reference with args[name]
      required: true,            // make the arg required with `required: true`
      description: 'Account to create username and password', // help description
    },
    {
      name: 'Password',           // name of arg to show in help and reference with args[name]
      required: false,            // make the arg required with `required: true`
      description: 'Account to create username and password', // help description
    },
  ]

  async run() {
    const {args, flags} = this.parse(Show)

    try {
      const value = await showCredentials({args, flags})
      const field = args.Password ? 'password' : 'username'
      this.log(`Your ${args.Account}'s ${field} is ${value}`)
    } catch (error) {
      this.log(error.message)
    }
  }
}
