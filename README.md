# Vanguard Remover

## What It Does
This Pengu Loader plugin removes **VAN errors** from the League Client. It's a JavaScript plugin that disables client-side Vanguard enforcement.

**Important:** This plugin *will not* allow you to play without Vanguard installed. If you attempt to, you will likely be kicked from the match or, in some cases, permanently banned. *[Source: Reddit Comment](https://www.reddit.com/r/riotgames/comments/1f1z3ca/comment/lk3bqxd)*

---

### Optional Workaround: Prevent Riot Client from Prompting Vanguard Installation
*If you want to prevent the Riot Client from repeatedly prompting you to install Vanguard, you can:*

- Create a shortcut for `riotclientservices.exe` and add one of the following arguments:
    - `--disable-patching`
    - `--allow-multiple-clients`
    
Alternatively, you can use the standalone version of this project: [League Patch Collection](https://github.com/Cat1Bot/league-patch-collection).

![Example](https://github.com/user-attachments/assets/5b723eb6-9523-42c8-b308-68aedb35959f)

---

## Installation

1. Ensure you have **Pengu Loader** installed. Pengu Loader is a JavaScript plugin loader for the League Client frontend (similar to BetterDiscord or Vencord).
2. Open Pengu Loader (you may need to accept the UAC prompt), then navigate to the **Plugins** tab.
3. Click "Open folder" and paste **van-remover.js** into the folder.
4. To initialize the plugin, either restart the client or press `Ctrl+R` to refresh the client.

---

## Friendly Reminder About Vanguard
Vanguard has been highly controversial due to several issues:
- **Kernel-level operation**: Vanguard runs 24/7 at the kernel level, which gives it deep access to your system. This means it can monitor and potentially interfere with a wide range of processes, raising concerns about security and privacy.
- **Privacy concerns**: Many users consider it invasive spyware, as it operates at a low level on your system and can monitor your activities.
- **System stability**: There are numerous reports of Vanguard causing systems to crash or, in severe cases, brick entirely. Users have experienced unexpected errors and system malfunctions attributed to Vanguard.
- **False positives**: Vanguard has been known to flag legitimate software and activities, resulting in unfair bans for innocent users.
- **Impact on performance**: Some players report that Vanguard can slow down their systems and affect game performance.
- **Community feedback**: The gaming community has expressed significant dissatisfaction with Vanguard, leading to debates on its necessity and implementation.

Using this plugin will not get you banned as long as you're only using the client itself and not trying to get into game. However, if you insist on getting some ranked matches in, **you are playing with fire**. If you're concerned about the risks posed by Vanguard, this plugin is for you. Just keep this in mind if you use it on your *main account*.

![Image](https://github.com/user-attachments/assets/cba8e72d-0130-4aea-b8e7-1bd8009ae12c)


