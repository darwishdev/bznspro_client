#!/bin/bash



npm run build

scp -r dist/spa melon:apps/clients



