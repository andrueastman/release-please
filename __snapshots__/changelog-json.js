exports['changelog.json adds latest release to front of list 1'] = `
{
  "repository": "foo/bar",
  "entries": [
    {
      "changes": [
        {
          "type": "feat",
          "sha": "81228f3507ad6f742242474628ff58b2",
          "message": "some feature"
        },
        {
          "type": "fix",
          "sha": "26fff5655027c8e7b799cb450acca568",
          "message": "some bugfix"
        },
        {
          "type": "docs",
          "sha": "abbf5480ac552b33404be825a817df2a",
          "message": "some documentation"
        }
      ],
      "version": "14.0.0",
      "language": "JAVA",
      "artifactName": "foo-artifact",
      "id": "abc-123-efd-qwerty",
      "createTime": "2023-01-05T16:42:33.446Z"
    },
    {},
    {}
  ],
  "updateTime": "2023-01-05T16:42:33.446Z"
}
`

exports['changelog.json appends new release to empty changelog 1'] = `
{
  "repository": "foo/bar",
  "entries": [
    {
      "changes": [
        {
          "type": "feat",
          "sha": "81228f3507ad6f742242474628ff58b2",
          "message": "some feature"
        },
        {
          "type": "fix",
          "sha": "05670cf2e850beffe53bb2691f8701c7",
          "message": "some bugfix",
          "breakingChangeNote": "some bugfix"
        },
        {
          "type": "docs",
          "sha": "e0a7c3eb307bdca5f9d4c991c82338da",
          "message": "some documentation",
          "scope": "perf",
          "breakingChangeNote": "some documentation"
        }
      ],
      "version": "14.0.0",
      "language": "JAVA",
      "artifactName": "foo-artifact",
      "id": "abc-123-efd-qwerty",
      "createTime": "2023-01-05T16:42:33.446Z"
    }
  ],
  "updateTime": "2023-01-05T16:42:33.446Z"
}
`

exports['changelog.json ignores non-breaking chores 1'] = `
{
  "repository": "foo/bar",
  "entries": [
    {
      "changes": [
        {
          "type": "feat",
          "sha": "81228f3507ad6f742242474628ff58b2",
          "message": "some feature"
        },
        {
          "type": "docs",
          "sha": "abbf5480ac552b33404be825a817df2a",
          "message": "some documentation"
        }
      ],
      "version": "14.0.0",
      "language": "JAVA",
      "artifactName": "foo-artifact",
      "id": "abc-123-efd-qwerty",
      "createTime": "2023-01-05T16:42:33.446Z"
    },
    {},
    {}
  ],
  "updateTime": "2023-01-05T16:42:33.446Z"
}
`

exports['changelog.json includes breaking chores 1'] = `
{
  "repository": "foo/bar",
  "entries": [
    {
      "changes": [
        {
          "type": "feat",
          "sha": "81228f3507ad6f742242474628ff58b2",
          "message": "some feature"
        },
        {
          "type": "chore",
          "sha": "7ae69f55cbe8af92adc431391eadea77",
          "message": "some breaking dep update",
          "breakingChangeNote": "some breaking dep update"
        },
        {
          "type": "docs",
          "sha": "abbf5480ac552b33404be825a817df2a",
          "message": "some documentation"
        }
      ],
      "version": "14.0.0",
      "language": "JAVA",
      "artifactName": "foo-artifact",
      "id": "abc-123-efd-qwerty",
      "createTime": "2023-01-05T16:42:33.446Z"
    },
    {},
    {}
  ],
  "updateTime": "2023-01-05T16:42:33.446Z"
}
`
