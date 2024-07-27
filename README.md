# Qobuz for Linux
![Qobuz-for-Linux-logo](https://raw.githubusercontent.com/mattipunkt/qobuz-linux/a1c4e8fddd63a4b899955c36aa9c55c75020d73c/build/icons/128x128.png)

This is an UNOFFICIAL wrapper around the Qobuz Webplayer. Since it uses Electron, playing HiRes through widevine is also possible.
I built this app, because my main browser Firefox is only playing MP3-quality streams, even if I enable DRM-features in settings.

### TO-DO
- [ ] Implementing MPRIS Support
- [ ] Build .deb and .rpm
- [ ] push to flathub
- [ ] push to Snap Store
- [ ] Maybe more ;)

## Installation
Go to [releases](https://github.com/mukkematti/qobuz-linux/releases) and download the implementation you like.
I recommend installing as a flatpak. Download the `.flatpak`-file and run the following command:
```bash
flatpak install qobuz-linux_1.0.0-x86_64.flatpak
```
You may be prompted to enter a root password.

**Install as snap**
On the releases-page, download the `.snap`-file. Install snap with the following command:
```bash
snap install qobuz-linux_1.0.0_amd64.snap --dangerous
```



## Acknowladgements
- The Icon was made by me. It used the following graphics:
    - `cd-symbolic`-icon from Adwaita icon package (Creative Commons Zero v1.0 Universell)
    - The letter Q from Cantarell font family


## DISCLAIMER
This is an unofficial project. I am not associated with Qobuz in any way and this project has not been endorsed by Qobuz (yet).
Use on your own risk.