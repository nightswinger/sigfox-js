# Sigfox API Client for Node.js

## Installation

```bash
npm install @nightswinger/sigfox-js
```

## Usage

```js
const { Sigfox } = require('@nightswinger/sigfox-js')

const client = new Sigfox({
  username: SIGFOX_USERNAME,
  password: SIGFOX_PASSWORD
})

// Retrieve a list of devices.
const { data } = await client.devices()

// Update a given device.
client.updateDevice('123456', { name: 'sigfox-device' })
```