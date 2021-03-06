const files = [
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "79d57a",
    "name": ".gitignore",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "2f3ca9",
    "name": "API.md",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "ddfd03",
    "name": "README.md",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "040000",
    "fileType": "dir",
    "lastCommit": "0fb9f0",
    "name": "README",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "3f287e",
    "name": "images.d.ts",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "1c360e",
    "name": "package.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "040000",
    "fileType": "dir",
    "lastCommit": "461e8d",
    "name": "public",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "040000",
    "fileType": "dir",
    "lastCommit": "e34870",
    "name": "src",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "7d74db",
    "name": "tsconfig.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "414421",
    "name": "tsconfig.prod.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "65ffdd",
    "name": "tsconfig.test.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "206b22",
    "name": "tslint.json",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  },
  {
    "num": "100644",
    "fileType": "file",
    "lastCommit": "74373a",
    "name": "yarn.lock",
    "commitMessage": "[vcs] move http to arc",
    "committer": "noxoomo",
    "updated": "4 s ago"
  }
]

const file = `port os
import sys
import platform
import json

URLS = ['https://proxy.sandbox.yandex-team.ru/453818264' , 'http://storage-int.mds.yandex.net/get-sandbox/110738/by_platform.json.453815347']
MD5 = '7f5a85f9c28d35c3a76d8cea7af51106'

RETRIES = 5
HASH_PREFIX = 10

HOME_DIR = os.path.expanduser('~')
`;

export const getDataTest = (url) => {
  return new Promise((resolve, reject) => {

    const data = ~url
      .slice(0, -1)
      .split('/')
      .pop()
      .indexOf('.')
      ? file
      : files;
    setTimeout(() => resolve(data), 1000)
  })
}