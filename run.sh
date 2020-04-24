#!/bin/bash
for d in ./*; do
  if [[ -d $d ]] && [ "$d" != "BootAngularApp" ]; then
    cd "$d" || exit;
    mvn clean package -DskipTests;
    cd ..;
  fi;
done;