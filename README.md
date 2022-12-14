# @chat/monorepo

SocketIO chat application written to be cross platform first - and to try out SocketIO. 

### UI

Desktop                    |  Desktop (Dark)
:-------------------------:|:-------------------------:
![Chat web page.](./docs/images/web--light-mode.png) | ![Chat web page (dark).](./docs/images/web--dark-mode.png.png)

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
