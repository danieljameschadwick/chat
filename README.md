# @chat/monorepo

To reuse this monorepo, replace `chat` and run yarn on the root project.

### UI

Desktop                    |  Desktop (Dark)
:-------------------------:|:-------------------------:
![App web page.](./docs/images/web--light-mode.png) | ![App web page (dark).](./docs/images/web--dark-mode.png)

Mobile                     |  Mobile (Dark)
:-------------------------:|:-------------------------:
![Mobile screen.](./docs/images/app--light-mode.png) | ![Mobile screen (dark).](./docs/images/app--dark-mode.png)

Mobile Settings (Dark)     |
:-------------------------:|
![Mobile Setting screen (dark).](./docs/images/app__settings--dark-mode.png) |

## Setup:

```
yarn
```

Then setup the monorepo:

```
lerna bootstrap
```

### Services:

To run an individual service use:

```
yarn run api:start:dev
yarn run web:start:dev
```

### Assistance

To add a new package, from the root directory:

```
lerna add <package> --scope=<service/package> [--scope=c --scope=d]
```

E.g.

```
lerna add @chat/ui --scope=@chat/web --dev
```

Or try:

```
yarn workspace @chat/expo add react-devtools@4.22.0 --dev
```

To remove an existing package:

1. Remove it from the local package/service
2. Run the below

```
lerna bootstrap --scope=<service/package> --no-ci --force-local
```

## Documentation

To generate the dependency graph seen above, run:

```
npx graph
```
