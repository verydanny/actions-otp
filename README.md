# Generate TOTP

This is used to convert a OTP secret into a 6 digit code.

## Inputs

| Name             | Description                                                                  | Default     | Examples                           |
| ---------------- | ---------------------------------------------------------------------------- | ----------- | ---------------------------------- |
| `otp-secret`     | OTP `secret`, usually in the `otpauth//` URL as `(?|&)secret={otp-secret}`   | `undefined` | `EXAMPLEREELHNPNHVPEXAMPLEEXAMPLE` |
| `period`         | Length of time, in seconds, before the OTP is invalid                        | `30`        |                                    |
| `algorithm`      | The algorithm used for calculating the HMAC                                  | `sha1`      |                                    |
| `is-google-auth` | True if generated with Google Authenticator, which uses a different encoding | `false`     |                                    |

