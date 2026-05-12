/*
(\-H[^\']+\'([^\']+)\')+

curl[^\'\"]*\'([^\'\"]+)\'
*/
const templateFunction = ({url, headerList, outputFileName, outputFileExtension}) => {
  return `#!/bin/bash

echo "User: $(whoami) UID: $(id -u) GID: $(id -g)"

export PATH="/usr/local/bin:/usr/bin:/bin:/mingw64/bin"
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" # linux
export PATH="$PATH:$(cygpath -u $USERPROFILE)/Downloads/ffmpeg-6.0-full_build-shared/ffmpeg-6.0-full_build-shared/bin"

ffmpeg -i '${url}' \
  ${headerList.map(header => `-headers ${header} \\`)}
  -c:v libx264 -c:a aac -fps_mode vfr ${outputFileName}.${outputFileExtension} && echo "ok"

read -p "press to exit"
`;
}

