const express = require('express')
const {
  lstatSync,
  readFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
  writeFile,
  unlinkSync
} = require('fs')
const {
  join
} = require('path')
const attendenceRoutes = express.Router()

//folders
const rootFolder = join(__dirname, '../../')
const dataFolder = join(rootFolder, 'data')
const usersFolder = join(dataFolder, 'users')
