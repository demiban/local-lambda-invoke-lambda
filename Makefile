SHELL := /bin/bash

start:
	sam local start-lambda --region us-east1 --docker-network host

invoke-s1:
	sam local invoke \
	--no-event Service1

invoke-s2:
	aws lambda invoke \
	--function-name "Service2" \
	--endpoint-url "http://127.0.0.1:3001" \
	--no-verify-ssl