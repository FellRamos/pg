import {Command, flags} from '@oclif/command'
import {createCredentials} from '../utils/common'

export class Create extends Command {
  static description = `
  Create a new entry for a particular account.

Add the account name you want to store your crednetials after the command "create". You will be prompted to
insert a Username and a Password. The password can be inserted by you, or generated automatically.
  `

  static examples = [
    '$ pg create Facebook',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'Name of the account'}),
    copy: flags.string({char: 'c', description: 'Copies username and password from another account'}),
  }

  static args = [
    {
      name: 'Account',           // name of arg to show in help and reference with args[name]
      required: true,            // make the arg required with `required: true`
      description: 'Account to create username and password', // help description
    },
  ]

  async run() {
    const {args, flags} = this.parse(Create)

    try {
      const {username, password} = await createCredentials(args.Account)
      this.log(`Your username is ${username} and your new password is ${password}`)
    } catch (error) {
      this.log(error.message)
    }

  }
}
