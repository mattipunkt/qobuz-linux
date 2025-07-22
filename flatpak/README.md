# Building the Flatpak locally

To build the Flatpak for this application locally, you need to have `flatpak` and `flatpak-builder` installed. You also need `flatpak-node-generator`, which can be installed with `pipx`:

```bash
pipx install flatpak-node-generator
```

Before building, you need to generate the sources for the node modules. Run this command from the root of the repository:

```bash
flatpak-node-generator npm package-lock.json
```

This will create a `generated-sources.json` file and a `flatpak-node` directory in the root of the repository.

Now you can build the Flatpak. To build for your native architecture, run this command from the root of the repository:

```bash
flatpak-builder --verbose --user --disable-rofiles-fuse --install-deps-from=flathub --force-clean --repo=repo _build flatpak/dev.mukkematti.qobuz-linux.yml
```

To build for a specific architecture, use the `--arch` flag:

```bash
# For x86_64
flatpak-builder --arch=x86_64 --verbose --user --disable-rofiles-fuse --install-deps-from=flathub --force-clean --repo=repo _build flatpak/dev.mukkematti.qobuz-linux.yml

# For aarch64
flatpak-builder --arch=aarch64 --verbose --user --disable-rofiles-fuse --install-deps-from=flathub --force-clean --repo=repo _build flatpak/dev.mukkematti.qobuz-linux.yml
```
