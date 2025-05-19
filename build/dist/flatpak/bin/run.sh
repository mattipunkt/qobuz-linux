#!/bin/sh

set -oue pipefail

WL_DISPLAY="${WAYLAND_DISPLAY:-"wayland-0"}"

if [[ -e "${XDG_RUNTIME_DIR}/${WL_DISPLAY}" || -e "/${WL_DISPLAY}" ]]; then
    echo "Debug: Enabling Wayland backend"
    
    set -- $@ \
        --ozone-platform-hint=auto \
	--enable-features=WaylandWindowDecorations \
	--enable-wayland-ime \
	--wayland-text-input-version=3
fi

zypak-wrapper.sh /app/main/qobuz-linux "$@"
