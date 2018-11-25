#!/bin/bash

# pac - Arch Linux PACMAN & YAY aliases for ease everyday use of common tasks
#
#
## PRINCIPLES
# This helpers strive to follow the Arch Linux principles
#
## Simplicity
# Not addressing any modifications in your system, just providing high-level aliases
# for common operations. Not trying to replace pacman, only highlighting common operations.
# Descriptions will be as short and direct as possible, focusing
# on the relevant information and keywords, not trying to tell you a story
#
## Modernity
# This will be upgraded to adapt to newer scenarios as they become relevant
#
## Pragmatism
# Don't care how or what you use this commands for. They just need to perform well and help
# the user
#
## User centrality
# You are free to customize or extend any of these commands. Transparency is also provided in the
# documentation, as it shows the commands or describes what is being done
#
## Versatility
# The content provided here tries not to be intromissive and to perform a set of well-described
# tasks for each command
#
#
## GUIDELINES
#
# - This script is provided in bash-only syntax, limited 100 chars per line (excluding descriptions)
#
# - The provided commands are a high-level abstraction for pacman and yay
#
# - All commands should start with 'pac'
#
# - yay-related commands will also start with 'pac', as the intention is to provide interoperability
#   between Arch Linux official repositories and AUR repositories
#
# - The commands try to perform common operations, extracted from ArchWiki, foruns, discussions and
#   the mind of its developers
#
# - You can use either alias or functions to provide new commands
#
# - Description must be provided for every command in short and detailed forms
#

function pac()
{
  if [[ $1 == "explain" ]]; then
    pacexplain $2
    return
  elif [[ $1 == "help" ]]; then
    help $2
    return
  elif [[ ! $1 ]]; then
    help
    return
  else
    echo "pac - Arch Linux PACMAN & YAY aliases for ease everyday use of common tasks"
    echo
    echo "Not understood. Please type pac help for description"
  fi
}

function help()
{
  if [[ $1 != "quiet" ]]; then
    echo "pac - Arch Linux PACMAN & YAY aliases for ease everyday use of common tasks"
    echo
    echo "Available commands"
  fi

  short_descriptions=(
    "pacs      ;Search packages                                                           ;pacman -Ss"
    "paci      ;Install packages or groups                                                ;sudo pacman -S"
    "pacu      ;Update package databases                                                  ;sudo pacman -Syy"
    "pacup     ;Update package databases and upgrade packages                             ;sudo pacman -Syyu"
    "pacr      ;Remove packages                                                           ;sudo pacman -Rns"
    "pacrc     ;Remove packages, cascading dependencies                                   ;sudo pacman -Rnsc"
    "pacd      ;Description of a package                                                  ;pacman -Si"
    "pacdl     ;Description of a package, local database                                  ;pacman -Qi"
    "pacl      ;List installed packages and versions                                      ;pacman -Q"
    "paclf     ;List installed packages and corresponding files                           ;pacman -Ql"
    "paclg     ;List installed packages in groups                                         ;pacman -Qg"
    "paclgg    ;List groups or packages in groups                                         ;pacman -Sg"
    "pacla     ;List installed packages and versions from AUR (foreign packages)          ;pacman -Qem"
    "paclc     ;List commands provided by installed packages                              ;pacman -Ql <packages> | grep -E 'bin/.+'"
    "pacls     ;List installed packages and sizes                                         ;See detailed description"
    ";;"
    "pacas     ;Search packages in AUR                                                    ;yay --aur -Ss"
    "pacai     ;Install packages from AUR                                                 ;yay --aur -S"
    "pacaup    ;Update package databases and upgrade packages from AUR                    ;yay --aur --timeupdate -Syyu"
    "pacad     ;Description of an AUR package                                             ;yay --aur -Si"
    "pacal     ;List installed packages and versions from AUR (foreign packages)          ;Same as pacla"
  )

  for l in "${short_descriptions[@]}"; do
    line=(${l//;/ })
    cmd="${line[0]}"
    desc="${line[1]}"
    orig="${line[2]}"
    printf "    %s %s %s\n" $cmd $desc $orig
  done
}

function pacexplain()
{
  echo "pac - Arch Linux pacman & yay aliases for ease everyday use of common tasks"

  if [[ $1 == "pacls" ]]; then
    cat <<EOT
Details for: pacls

Description
    List all (or specific) packages' size used in the system. The list is sorted by size.

Command
    pacman -Qi [packages] | awk '/^Name/{name=$3} /^Installed Size/{print $4$5, name}' | sort -h
EOT
  return
  fi

  echo "Details not found for: $1"
}

alias pacs="pacman -Ss"
alias paci="sudo pacman -S"
alias pacu="sudo pacman -Syy"
alias pacup="sudo pacman -Syyu"
alias pacr="sudo pacman -Rns"
alias pacrc="sudo pacman -Rnsc"
alias pacd="pacman -Si"
alias pacdl="pacman -Qi"
alias pacl="pacman -Q"
alias paclf="pacman -Ql"
alias paclg="pacman -Qg"
alias paclgg="pacman -Sg"
alias pacla="pacman -Qem"

function paclc()
{
  pacman -Ql $@ | grep -E 'bin/.+'
}

function pacls()
{
  pacman -Qi $@ | awk '/^Name/{name=$3} /^Installed Size/{print $4$5, name}' | sort -h
}

alias pacas="yay --aur -Ss"
alias pacai="yay -S"
alias pacaup="yay --aur --timeupdate -Syyu"
alias pacad="yay --aur -Si"
alias pacal="pacman -Qem"
