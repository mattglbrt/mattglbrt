import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getFriendFullPath(fileName) {
  return path.join('./src/content/friends', `${fileName}.yaml`)
}

const fileName = await input({
  message: 'Please enter the file name',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return 'The file name can only contain letters, numbers and hyphens'
    }
    const fullPath = getFriendFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} already exists`
    }
    return true
  },
})

const title = await input({
  message: 'Please enter a title',
})
const description = await input({
  message: 'Please enter a description',
})
const link = await input({
  message: 'Please enter address',
})
const avatar = await input({
  message: 'Please enter the avatar address',
})

const content = `title: ${title}
description: ${description}
link: ${link}
avatar: ${avatar}
`

const fullPath = getFriendFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} created successfully`)
