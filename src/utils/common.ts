import * as crypto from 'crypto'
import * as inquirer from 'inquirer'
import * as cb from 'clipboardy'

const Accounts = [{
  name: 'facebook',
  username: 'John',
  password: 'qwe123',
}]

export const createCredentials = async (account: string) => {
  const accountRequested = Accounts.find(acc => acc.name === account.toLowerCase())

  if (accountRequested !== undefined) {
    const {confirm} = await inquirer.prompt([{
      name: 'confirm',
      message: `Attention! Credentials already exist for the account ${account}. Do you want to override them?`,
      description: 'Overrides the current credentials for that particular account.',
      type: 'confirm',
      default: false,
    }])

    if (confirm === false) {
      throw new Error('Aborted')
    }
  }

  // eslint-disable-next-line prefer-const
  const {username, passwordType} = await inquirer.prompt([{
    name: 'username',
    message: 'Input your username',
    type: 'input',
  }, {
    name: 'passwordType',
    type: 'list',
    choices: [{name: 'Generate automatically'}, {name: 'Input my own password'}],
  }])

  let password

  if (passwordType === 'Generate automatically') {
    password = crypto.randomBytes(4).toString('hex')
  } else {
    const {newPassword, confirmPassword} = await inquirer.prompt([{
      name: 'newPassword',
      message: 'Input your password',
      type: 'password',
    }, {
      name: 'confirmPassword',
      message: 'Confirm your password',
      type: 'password',
    }])

    if (newPassword !== confirmPassword) {
      throw new Error('The passwords are not matching, please create again')
    }
    password = newPassword
  }

  Accounts.push({
    name: account,
    username,
    password})

  return {
    username,
    password,
  }
}

export const showCredentials = async ({args, flags}) => {
  const accountRequested = Accounts.find(acc => acc.name === args.Account.toLowerCase())

  if (accountRequested === undefined) {
    throw new Error(`No credentials found for the account ${args.Account}`)
  }

  if (args.Password) {
    if (flags.confirm) {
      return accountRequested.password
    }
    const {confirm} = await inquirer.prompt([{
      name: 'confirm',
      message: 'Attention! This will output the password in the terminal. Proceed?',
      description: 'Outputs the password in the terminal.',
      type: 'confirm',
      default: false,
    }])
    if (confirm === true) {
      return accountRequested.password
    }
    throw new Error('Aborted')
  } else {
    return accountRequested.username
  }
}

export const copyPassword = async (account: string) => {
  const accountRequested = Accounts.find(acc => acc.name === account.toLowerCase())

  if (accountRequested === undefined) {
    throw new Error(`No credentials found for the account ${account}`)
  }

  return cb.writeSync(accountRequested.password)
}
