# Generate TOTP

This is used to convert a OTP secret into a 6 digit code.

## Inputs

| Name         | Description                                                   | Default     | Examples                                     |
| ------------ | ------------------------------------------------------------- | ----------- | -------------------------------------------- |
| `otp-url`    | OTP URL, usually in the format of `otpauth://totp/`           | `undefined` | `otpauth://totp/ACME:AzureDiamond?issuer...` |
| `otp-window` | If under this window (in seconds), wait to generate fresh OTP | `5`         | `5, 10, 15`                                  |

## Outputs

| Name        | Description                                          |
| ----------- | ---------------------------------------------------- |
| `otp-token` | The 6 digit auth token generated based on passed URL |
