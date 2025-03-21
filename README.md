# Package library instructions

See [GitHub docs](https://docs.github.com/en/packages/quickstart) for more info

## Usage
1. Create a new Token with read permission for packages [[docs]](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

2. Add a new file `~/.npmrc` to root folder of repository or create a new one [[docs]](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
```
@<scope-name>:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<TOKEN>
```

3. Use created token in 

## Local development

1. run `npm link` in the root folder of your local copy of this package
2. run `npm link package-lib` in the root folder of your project that uses this package


## Useful notes

Use `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]` when you want manually update package version