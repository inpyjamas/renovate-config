# @inpyjamas/renovate-config

sharable renovate config for all my projects.

## Usage

Enable renovete-bot for your repo and add the following to `renovate.json`

```json
{
  "extends": ["github>inpyjamas/renovate-config"]
}
```

or

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>inpyjamas/renovate-config"],
  "baseBranches": ["staging"]
}
```
