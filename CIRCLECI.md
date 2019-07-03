# CircleCI

## Deploying

Deploy by signing into [circleci.com](http://circleci.com/) with github. Add and set up your project.

You can add your github token by clicking on a projects `settings` icon and going to `Environment Variables` and adding: 

### `GH_TOKEN
`
[create a personal access token for a public github here](https://github.com/settings/tokens/new?scopes=public_repo). 

When creating the token, the minimum required scopes are:

- repo for a private repository
- public_repo for a public repository

## HOLD

Once set up properly it will be building a `workflow` that puts your `release` job `ON HOLD` until manually approved. This lets you batch up fixes and features into 1 release and still have the convenience of a 1 button deploy.
