# Local lambda invoke lambda

Example project to test locally a lambda that invokes a child lambda

## Prerequisites

### Install

- [Docker](https://docs.docker.com/engine/install/)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Make:
  - [MAC](https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)
  - [Linux](https://www.osetc.com/en/how-to-install-build-essential-on-ubuntu-16-04-18-04-linux.html#install-build-essential)

#### Windows

- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## Steps

- Start lambda server: `$ make start`
- Call `$ make invoke-s2` lambda to test the lambda child
- Call `$ make invoke-s1` lambda to test the full call.
