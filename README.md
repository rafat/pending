# REST APIs - Read An Account's Pending Payouts

<img src="https://github.com/rafat/pending/blob/main/img/pending.png" />

**Step 1 : Run a Local Kusuma Node**

Install Polkadot node locally. Run local Kusuma chain.

<img src="https://github.com/rafat/pending/blob/main/img/kusuma_local_node.png" />

**Step 2 : Install substrate-api-sidecar**

```
git clone https://github.com/paritytech/substrate-api-sidecar.git
yarn
```

Edit config/types.json

```
{
  "CUSTOM_TYPES": {
    "Address": "AccountId",
    "LookupSource": "AccountId"
  }
}
```

Run it locally 

```
NODE_ENV=local yarn start
```

where .env.local file is

```
# Connect to a local node.
#
# For more information on how to use .env files and environment variables
# consult the Configuration section in the README.

SAS_SUBSTRATE_WS_URL=ws://127.0.0.1:9944
```

<img src="https://github.com/rafat/pending/blob/main/img/sidecar.png" />
