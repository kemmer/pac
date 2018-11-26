# pac
Arch Linux `pacman` &amp; `yay` mnemonic helpers for ease everyday use of common tasks

## Available commands
```
pacs            Search packages
paci            Install packages or groups
pacu            Update package databases
pacup           Update package databases and upgrade packages
pacr            Remove packages
pacrc           Remove packages, cascading dependencies
pacd            Description of a package
pacdl           Description of a package, local database
pacl            List installed packages and versions
paclf           List installed packages and corresponding files
paclg           List installed packages in groups
paclgg          List groups or packages in groups
pacla           List installed packages and versions from AUR (foreign packages)
paclc           List commands provided by installed packages
pacls           List installed packages and sizes

pacas           Search packages in AUR
pacai           Install packages from AUR
pacaup          Update package databases and upgrade packages from AUR
pacad           Description of an AUR package
pacal           List installed packages and versions from AUR (foreign packages)
```

## Highlights
- Easy installation and no third-party code dependencies
- Small commands
- Use of mnemonic approach for fast memorizing and intuitive usage
- Most commands taken from reliable sources (Arch Linux forums and wiki)
- `pacman` and `yay` commands exposed in help docs

## Installation
- Install yay (https://github.com/Jguer/yay) if you pretend to use AUR
- Clone this repo in some folder in your homedir and source it in your `.bashrc` or `.zshrc`

### Example for bash
```
git clone https://github.com/kemmer/pac.git ~/.archlinux-pac
echo "source ~/.archlinux-pac/pac" >> ~/.bashrc
```

## Usage
Every command prefix with `pac`. Documentation is available with `pac help`. For
specific help and detailed description, use `pac explain <command>`.


