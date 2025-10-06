---
# You can also start simply with 'default'
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# Global CSS file
# css: style.css
# Alternative: inline global styles
# css: |
#   body { font-family: 'Inter', sans-serif; }
#   h1 { color: #2d3748; font-weight: 700; }
# some information about your slides (markdown enabled)
title: Construire un système de plugins basé sur le WebAssembly Component Model
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev

---

# WebAssembly Component Model 🧩

<p class="flex justify-center"  >
<img src="./WebAssembly_Logo.svg" class="w-60" />
</p>

## [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments)

## Christophe Rosset - [@topheman](https://topheman.github.io/me/)

<!--

Bonsoir,

Aujourd'hui, je vais vous parler de WebAssembly Component Model.

Ceci au travers de mon dernier projet en rust.

Je suis Christophe Rosset, je travaille dans le développement Web depuis un peu plus de 20ans.

Il y a 7 ans, je me suis mis à Rust pour faire du WebAssembly. Puis, j'ai creusé un peu plus le langage, ce qui m'a fait découvrir des choses que je ne faisais pas côté web.

Ce soir je vais vous parler de WebAssembly Component Model, le dernier standard introduit dans WebAssembly.

-->

---
layout: center
class: text-center
---

# 🎯 Pourquoi ce projet ?

Exemples de projets avec WebAssembly Component Model **trop simples** ou **trop complexes**

**But**: Montrer une application concrète

---
layout: center
class: text-center
transition: fade
---

# 🚀 Ce que nous allons couvrir

1. **Introduction au WebAssembly Component Model**
2. **Démo du projet**
3. **Architecture du projet**

---
layout: center
class: text-center
---

# ⚔️ Ce que nous n'allons pas couvrir

- **Détails d'implémentation de chaque langage**
- **Tooling spécifique à chaque langage**

[📖 Article complet](https://dev.to/topheman/webassembly-component-model-building-a-plugin-system-58o0)

---
transition: fade
---

# 🔄 L'évolution de WebAssembly

## WebAssembly → WASI → Component Model

- **WASM** : WebAssembly Modules
  - **Format binaire portable** - exécutable sur toutes les plateformes
  - **Sécurité native** - sandboxing par défaut, pas d'accès direct au système
  - **Performance proche du natif** - compilation optimisée pour différents processeurs
  - **Versions** :
    - v1.0: 2015
    - v2.0: 2022
    - [v3.0](https://webassembly.org/news/2025-09-17-wasm-3.0/): 2025-09-17 - 64bits, GC, JS Strings ...

---

# 🔄 L'évolution de WebAssembly

## WebAssembly → WASI → Component Model

- **WASI** : WebAssembly System Interface
  - **Interface système standardisée** - APIs pour filesystem, réseau, variables d'environnement
  - **Sécurité granulaire** - contrôle précis des permissions par l'host
  - **Cross-platform** - même interface sur tous les environnements (CLI, serveur, edge)
- **Component Model** : Composition, interfaces haut niveau

---
layout: center
class: text-center
transition: fade
---

# 🎬 Démo :

- REPL (Read-Eval-Print Loop)
- Chaque commande est un composant WebAssembly

---
layout: center
class: text-center
---

# 🎬 Démo :

- REPL (Read-Eval-Print Loop)
- Chaque commande est un composant WebAssembly
- Cross-platform:
  - 🛠️ Version CLI
  - 🌐 Version navigateur

---

# 🔍 Vue d'ensemble

- 🏠 **Host Runtime**
  - 🔧 CLI (`pluginlab` rust + wasmtime)
  - 🌐 Web (TypeScript + `jco` tranpilation of the components + browser runtime)
- 🧩 **Composants Wasm**
  - REPL Logic
  - Plugins

---
transition: fade
---

# 🏠 Host Runtime : CLI 🔧

![compile-cli](./compile-cli.png)

---

# 🏠 Host Runtime : CLI 🔧

<img src="./schema-cli.png" width="90%" />

<v-switch>
<template #1>
<div class="host-runtime-description computer">
  <p>CLI Host est lancé dans un terminal.</p>
  <p>Il fait tourner un REPL une fois lancé.</p>
</div>
<div class="rect" style="left: 290px;width: 140px;height: 38px;top: 130px;" data-label="terminal"></div>
</template>
<template #2>
<div class="host-runtime-description rust">
  <p>Le CLI est compilé depuis rust vers du natif.</p>
  <p>C'est le binaire <code>pluginlab</code>.</p>
</div>
<div class="rect" style="left: 80px;width: 185px;height: 38px;top: 165px;" data-label="host-cli"></div>
</template>
<template #3>
<div class="host-runtime-description rust">
  <p><code>tokio</code> est utilisé pour le runtime async.</p>
  <p style="font-size: 90%;">Il est instancié à la racine pour être partagé entre</p>
  <ul>
    <li><code>reqwest</code> pour le HTTP client</li>
    <li><code>wasmtime</code> pour le runtime WebAssembly</li>
  </ul>
</div>
<div class="rect" style="left: 105px;width: 205px;height: 38px;top: 205px;" data-label="asyncruntime-tokio"></div>
</template>
<template #4>
<div class="host-runtime-description rust">
  <p><code>wasmtime</code></p>
  <p>Instance de runtime WebAssembly.</p>
  <p>Qui est responsable de l'instanciation et l'exécution des composants WebAssembly.</p>
</div>
<div class="rect" style="left: 135px;width: 318px;height: 38px;top: 285px;" data-label="wasmtime"></div>
</template>
<template #5>
<div class="host-runtime-description rust">
  <p><code>wasmtime</code></p>
  <p>Configuration du sandboxing filesystem.</p>
  <p><a href="https://github.com/topheman/webassembly-component-model-experiments/blob/master/crates/pluginlab/src/engine.rs#L115" target="_blank"><code>WasiCtxBuilder::preopened_dir</code></a></p>
  <p>Contrôlé par les flags passés au CLI:</p>
  <pre><code>    --allow-read
    --allow-write
    --allow-all</code></pre>
</div>
<div class="rect" style="left: 135px;width: 318px;height: 38px;top: 285px;" data-label="wasmtime"></div>
<div class="rect" style="left: 471px;width: 188px;height: 70px;top: 372px;" data-label="wasmtime-fs-sandbox"></div>
</template>
<template #6>
<div class="host-runtime-description wasm" style="font-size: 70%; width: 290px;">
  <p><code>repl-logic-guest.wasm</code></p>
  <p><strong>Rôle:</strong> Orchestrer l'entrée utilisateur et le dispatch de plugins</p>
  <p><strong>Responsabilités:</strong></p>
  <ul>
    <li>Variable expansion (<code>export VAR=value</code>)</li>
    <li>Commandes réservées (<code>help</code>, <code>man</code>, <code>export</code>)</li>
    <li>Dispatch de plugins</li>
  </ul>
  <p>Réutilisation du code entre CLI et navigateur (cohérence du minishell entre les plateformes).</p>
</div>
<div class="rect" style="left: 155px;width: 211px;height: 38px;top: 318px;" data-label="repl-logic"></div>
</template>
<template #7>
<div class="host-runtime-description wasm" style="font-size: 70%; width: 290px;">
  <p><code>plugin*.wasm</code></p>
  <p>Chaque commande (<code>echo</code>, <code>ls</code>, <code>cat</code>, <code>tee</code> ...) est un plugin.</p>
  <p>Chaque plugin est un composant WebAssembly.</p>
  <p>Compilé depuis Rust, C, Go, TypeScript.</p>
  <p>Tous les plugins respectent la même interface WIT.</p>
</div>
<div class="rect" style="left: 155px;width: 141px;height: 128px;top: 357px;" data-label="plugins"></div>
</template>
<template #8>
<div class="host-runtime-description wasm" style="font-size: 70%; width: 290px;">
  <p><code>plugin*.wasm</code> 📁</p>
  <p>Les appels <code>std::fs::*</code> sont routés par l'instance de <code>wasmtime</code> vers le filesystem de l'hôte en respectant les contraintes de sécurité configurées au démarrage.</p>
  <p><strong>#WASI</strong></p>
</div>
<div class="rect" style="left: 155px;width: 141px;height: 128px;top: 357px;" data-label="plugins"></div>
<Arrow x1="440" y1="407" x2="700" y2="407" color="#900000" data-label="arrow-fs" width="4"/>
<div class="rect" style="left: 471px;width: 188px;height: 70px;top: 372px;" data-label="wasmtime-fs-sandbox"></div>
</template>
<template #9>
<div class="host-runtime-description wasm" style="font-size: 70%; width: 290px;">
  <p><code>plugin*.wasm</code> 🌐</p>
  <p>Une interface HTTP client est exposée via WIT.</p>
  <p>Les plugins passent par cette interface pour effectuer des requêtes HTTP.</p>
  <p>L'implémentation est basée sur <code>reqwest</code>.</p>
  <p>C'est à ce moment qu'est fait le filtrage des permissions réseau par rapport à <code>--allow-net</code>.</p>
</div>
<div class="rect" style="left: 155px;width: 141px;height: 128px;top: 357px;" data-label="plugins"></div>
<div class="rect" style="left: 135px;width: 195px;height: 38px;top: 242px;" data-label="http-client-reqwest"></div>
<div class="rect" style="left: 471px;width: 188px;height: 70px;top: 216px;" data-label="network-permissions"></div>
<Arrow x1="330" y1="260" x2="700" y2="260" color="#900000" data-label="arrow-network" width="4" />
</template>
<template #10></template>
</v-switch>

---
transition: fade
---

# 🏠 Host Runtime : Web 🌐

![compile-web](./compile-web.png)

---

# 🏠 Host Runtime : Web 🌐

<img src="./schema-web.png" width="90%" />

<v-switch>
<template #1>
<div class="host-runtime-description computer" style="width: 330px;">
  <p>La version web est lancée dans un navigateur.</p>
</div>
<div class="rect" style="left: 80px;width: 540px;height: 44px;top: 138px;" data-label="browser"></div>
</template>
<template #2>
<div class="host-runtime-description typescript" style="width: 330px;">
  <p>Le Web Host est une application TypeScript compilée vers JavaScript.</p>
  <p><code>*.html</code> + <code>*.css</code> + <code>*.js</code></p>
</div>
<div class="rect" style="left: 93px;width: 302px;height: 43px;top: 182px;" data-label="host-web"></div>
</template>
<template #3>
<div class="host-runtime-description wasm" style="width: 330px;">
  <p>Les <strong>composants WebAssembly</strong> issus de la compilation du code source des plugins en Rust, C, Go.</p>
  <p>Sont transpilés avec <code>jco transpile</code> en :</p>
  <ul>
    <li><strong>WebAssembly Modules</strong> (WASM)</li>
    <li><strong>Glue code</strong> (JS)</li>
  </ul>
  <p>Le navigateur ne supporte pas nativement les composants WebAssembly.</p>
</div>
<div class="rect" style="left: 125px;width: 275px;height: 254px;top: 262px;border-radius: 35px;" data-label="wasm-files"></div>
</template>
<template #4>
<div class="host-runtime-description wasm" style="font-size: 70%; width: 290px;">
  <p><code>repl-logic-guest.wasm</code></p>
  <p><strong>IDENTIQUE</strong> à la version CLI</p>
  <p><strong>Rôle:</strong> Orchestrer l'entrée utilisateur et le dispatch de plugins</p>
  <p><strong>Responsabilités:</strong></p>
  <ul>
    <li>Variable expansion (<code>export VAR=value</code>)</li>
    <li>Commandes réservées (<code>help</code>, <code>man</code>, <code>export</code>)</li>
    <li>Dispatch de plugins</li>
  </ul>
  <p>Réutilisation du code entre CLI et navigateur (cohérence du minishell entre les plateformes).</p>
</div>
<div class="rect" style="left: 140px;width: 250px;height: 40px;top: 280px;" data-label="repl-logic"></div>
</template>
<template #5>
<div class="host-runtime-description wasm" style="font-size: 70%; width: 290px;">
  <p><code>plugin*.wasm</code> - <strong>IDENTIQUE</strong> à la version CLI</p>
  <p>Chaque commande (<code>echo</code>, <code>ls</code>, <code>cat</code>, <code>tee</code> ...) est un plugin.</p>
  <p>Chaque plugin est un composant WebAssembly.</p>
  <p>Compilé depuis Rust, C, Go, TypeScript.</p>
  <p>Tous les plugins respectent la même interface WIT.</p>
</div>
<div class="rect" style="left: 142px;width: 152px;height: 157px;top: 323px;" data-label="plugins"></div>
</template>
<template #6>
<div class="host-runtime-description typescript" style="font-size: 80%">
  <p>Les navigateurs n'ont pas accès au filesystem.</p>
  <p>→ Filesystem virtuel en mémoire.</p>
</div>
<div class="rect" style="left: 431px;width: 148px;height: 99px;top: 413px;" data-label="filesystem-virtual"></div>
</template>
<template #7>
<div class="host-runtime-description typescript" style="font-size: 80%">
  <p><a href="https://github.com/topheman/webassembly-component-model-experiments/blob/master/packages/web-host/src/wasm/virtualFs.ts" target="_blank">virtualFs.ts</a></p>
  <p>Fichier généré exposant la fonction <code>makeVirtualFs()</code>.</p>
  <p>Qui sera fourni au shim de <code>wasi:filesystem</code>.</p>
</div>
<div class="rect" style="left: 431px;width: 148px;height: 99px;top: 413px;" data-label="filesystem-virtual"></div>
</template>
<template #8>
<div class="host-runtime-description typescript" style="font-size: 80%;">
  <p><a href="https://github.com/topheman/webassembly-component-model-experiments/blob/master/packages/web-host/overrides/%40bytecodealliance/preview2-shim/lib/browser/filesystem.js" target="_blank">@bytecodealliance/preview2-shim/filesystem</a></p>
  <p>Shim WASI preview2 Filesystem.</p>
  <p><code>_setFileData(makeVirtualFs())</code></p>
</div>
<div class="rect" style="left: 468px;width: 74px;height: 33px;top: 332px;" data-label="shim"></div>
<Arrow x1="506" y1="362" x2="506" y2="422" color="#900000" width="4" data-label="arrow-fs-2" />
<div class="rect" style="left: 431px;width: 148px;height: 99px;top: 413px;" data-label="filesystem-virtual"></div>
</template>
<template #9>
<div class="host-runtime-description wasm" style="font-size: 75%;">
  <p><code>plugin*.wasm</code> 📁</p>
  <p>Les calls natifs <code>std::fs::*</code> dans les plugins sont interceptés par le shim de <code>wasi:filesystem</code>.</p>
  <p><code>std::fs::{read_dir, File, read_to_string}</code> marchent de façon transparente.</p>
  <p><strong>#WASI</strong></p>
</div>
<div class="rect" style="left: 142px;width: 152px;height: 157px;top: 323px;" data-label="plugins"></div>
<div class="rect" style="left: 468px;width: 74px;height: 33px;top: 332px;" data-label="shim"></div>
<Arrow x1="318" y1="350" x2="460" y2="350" color="#900000" width="4" data-label="arrow-fs-1" />
<Arrow x1="506" y1="362" x2="506" y2="422" color="#900000" width="4" data-label="arrow-fs-2" />
<div class="rect" style="left: 431px;width: 148px;height: 99px;top: 413px;" data-label="filesystem-virtual"></div>
</template>
<template #10>
<div class="host-runtime-description wasm" style="font-size: 75%;">
  <p><code>plugin*.wasm</code> 📁</p>
  <p><a href="https://github.com/topheman/webassembly-component-model-experiments/pull/15" target="_blank">Support WRITE operations</a> pour plugin <code>tee</code></p>
  <p><strong>#WASI</strong></p>
</div>
<div class="rect" style="left: 142px;width: 152px;height: 157px;top: 323px;" data-label="plugins"></div>
<div class="rect" style="left: 468px;width: 74px;height: 33px;top: 332px;" data-label="shim"></div>
<Arrow x1="318" y1="350" x2="460" y2="350" color="#900000" width="4" data-label="arrow-fs-1" />
<Arrow x1="506" y1="362" x2="506" y2="422" color="#900000" width="4" data-label="arrow-fs-2" />
<div class="rect" style="left: 431px;width: 148px;height: 99px;top: 413px;" data-label="filesystem-virtual"></div>
</template>
<template #11>
<div class="host-runtime-description wasm" style="font-size: 80%;">
  <p><code>plugin*.wasm</code> 🌐</p>
  <p>Même interface HTTP client via WIT.</p>
  <p>Implémentation basée sur <code>XMLHttpRequest</code>.</p>
  <p><code>jco</code> ne supportant pas encore les calls asynchrones.</p>
</div>
<Arrow x1="475" y1="246" x2="680" y2="246" color="#900000" width="4" data-label="arrow-network" />
<div class="rect" style="left: 135px;width: 341px;height: 38px;top: 224px;" data-label="http-client-xmlhttprequest"></div>
<div class="rect" style="left: 142px;width: 152px;height: 157px;top: 323px;" data-label="plugins"></div>
</template>
<template #12></template>
</v-switch>

---

# 🧩 Host + Guest

- **Host**: CLI ou Web
  - instancie les composants WebAssembly
  - expose un environnement sécurisé (filesystem, réseau)
- **Composants WebAssembly**:
  - **REPL Logic**:
    - gère le parsing du mini shell
    - gère le dispatch des plugins / commandes réservées
  - **Plugins**: s'exécutent dans l'environnement sandboxé

<v-click>
Echanges possibles grâces à WIT →
</v-click>

---

# 🎭 WIT : WebAssembly Interface Types

IDL (Interface Definition Language) permettant de décrire des interfaces de haut niveau pour les composants WebAssembly.

---
layout: two-cols
---

# 🎭 WIT

```wit
package repl:api;

interface plugin {
  enum repl-status { success, error }

  record plugin-response {
    status: repl-status,
    stdout: option<string>,
    stderr: option<string>,
  }

  name: func() -> string;
  man: func() -> string;
  run: func(payload: string) -> result<plugin-response>;
}
```

[`plugin-api.wit`](https://github.com/topheman/webassembly-component-model-experiments/blob/master/crates/pluginlab/wit/plugin-api.wit)

::right::

```wit
interface http-client {
  record http-header { name: string, value: string }

  record http-response {
    status: u16,
    ok: bool,
    headers: list<http-header>,
    body: string,
  }

  get: func(
    url: string,
    headers: list<http-header>
  ) -> result<http-response, string>;
}

world plugin-api {
  import http-client;
  export plugin;
}
```

---

# 🦀 [Implémentation d'un plugin](https://github.com/topheman/webassembly-component-model-experiments/blob/master/crates/plugin-echo/src/lib.rs)

```rust
mod bindings;
use crate::bindings::exports::repl::api::plugin::{Guest, PluginResponse, ReplStatus};

struct Component;

impl Guest for Component {
  fn name() -> String { "echo".to_string() }
  fn man() -> String { "Some man page".to_string() }
  fn run(payload: String) -> Result<PluginResponse, ()> {
    Ok(PluginResponse {
      status: ReplStatus::Success,
      stdout: Some(payload),
      stderr: None,
    })
  }
}

bindings::export!(Component with_types_in bindings);
```

[Autres langages](https://dev.to/topheman/webassembly-component-model-writing-components-in-c-with-wasi-sdk-5b5o)

---

# 🔄 Workflow

Pour des questions de sécurité, un composant WebAssembly ne peut accèder qu'à sa mémoire :

- un plugin ne peut pas échanger directement avec un autre
- un plugin ne peut pas échanger directement avec la repl-logic

Il est nécessaire de passer par l'hôte.

---

# 🔄 Workflow

## Deux workflows différents en fonction du type de commande

- **Commandes réservées** (`help`, `man`, `export`, ...)
  - REPL Logic gère directement (implémentation dans la repl-logic)
- **Commandes de plugins** (`echo`, `greet`, `ls`, `cat`, `tee`, `weather`, ...)
  - REPL Logic dispatch vers les plugins (implémentation dans chaque plugin)

---

# 🔄 Flux des commandes réservées

## Comment fonctionne la commande `help`

```mermaid
sequenceDiagram
  participant User
  participant Host
  participant repl-logic-guest.wasm

  User->>Host: Input: `help`
  Host->>repl-logic-guest.wasm: readline("help")
  repl-logic-guest.wasm-->>Host: Ready(PluginResponse { status, stdout, stderr })
  Host-->>User: Output from PluginResponse (e.g. help text)
```

<v-switch>
<template #1>
<div class="rect" style="left: 170px;width: 290px;height: 30px;top: 223px;" data-label="input-help"></div>
</template>
<template #2>
<div class="rect" style="left: 485px;width: 310px;height: 30px;top: 266px;" data-label="readline-help"></div>
</template>
<template #3>
<div class="rect" style="left: 485px;width: 310px;height: 30px;top: 309px;" data-label="ready-plugin-response"></div>
</template>
<template #4>
<div class="rect" style="left: 170px;width: 290px;height: 30px;top: 351px;" data-label="output"></div>
</template>
<template #5></template>
</v-switch>

**Exécution directe** : REPL logic gère les commandes réservées en interne

---

# 🔄 Flux des commandes de plugins

## Comment fonctionne la commande `echo Hello`

```mermaid
sequenceDiagram
  participant User
  participant Host
  participant repl-logic-guest.wasm

  User->>Host: Input: `echo Hello`
  Host->>repl-logic-guest.wasm: readline("echo Hello")
  repl-logic-guest.wasm-->>Host: ToRun({ command: "echo", payload: "Hello" })
  Host->>Plugin: plugins["echo"].run("Hello")
  Plugin-->>Host: PluginResponse { status, stdout, stderr }
  Host-->>User: Output: "Hello"
```

<v-switch>
<template #1>
<div class="rect" style="left: 170px;width: 136px;height: 30px;top: 223px;" data-label="input-echo"></div>
</template>
<template #2>
<div class="rect" style="left: 400px;width: 162px;height: 30px;top: 266px;" data-label="readline-echo"></div>
</template>
<template #3>
<div class="rect" style="left: 340px;width: 290px;height: 30px;top: 308px;" data-label="to-run"></div>
</template>
<template #4>
<div class="rect" style="left: 470px;width: 200px;height: 30px;top: 351px;" data-label="plugins-echo-run-hello"></div>
</template>
<template #5>
<div class="rect" style="left: 442px;width: 260px;height: 30px;top: 393px;"></div>
</template>
<template #6>
<div class="rect" style="left: 170px;width: 136px;height: 30px;top: 435px;" data-label="output"></div>
</template>
<template #7></template>
</v-switch>

**Dispatch de plugins** : REPL logic route vers le plugin approprié pour l'exécution

---

# 🌍 Support multi-langages pour les plugins

Toolchains à disposition sur le projet:

| Langage | Taille | Notes |
|---------|--------|-------|
| **C** | 56K | WASI SDK, runtime minimal |
| **Rust** | 72K | cargo-component, sécurité |
| **Go** | 332K | TinyGo, runtime plus large |
| **TypeScript** | 12M | Moteur JavaScript intégré |

**Même interface, implémentations différentes !**

---

# 📋 Récapitulatif

<v-clicks>

- **🧩 Composants WebAssembly** : Unités de code portables et sécurisées, composables entre elles
- **🎭 WIT (WebAssembly Interface Types)** : IDL (Interface Definition Language) standardisé pour définir des interfaces de haut niveau entre composants
- **🔄 Composition** : Les composants peuvent importer/exporter des interfaces pour créer des systèmes modulaires
- **🛡️ Sandboxing natif** : Isolation complète par défaut, pas d'accès direct au système
- **🌐 Cross-platform** : Mêmes composants fonctionnent sur CLI / Web
- **🔌 Interopérabilité** : Composants écrits dans différents langages (Rust, C, Go, TypeScript) communiquent via WIT

</v-clicks>

---

# 🔍 Autres

- monorepo multi-langages
- testing e2e
  - cli `rexepect`
  - web `playwright`
- CI / CD - pipeline multi-langages

---

# 🚀 Prochaines étapes ?

## Ce projet comme fondation
- **Playground** pour tester de nouvelles fonctionnalités de WebAssembly Component Model
- **Plateforme** pour expérimenter avec d'autres langages
- **Fondation** pour des projets plus complexes

## Futures fonctionnalités WebAssembly Component Model
- **WASI Preview 3** : Async, streaming
- **Meilleurs outils** et support de langages / runtimes

---
layout: center
class: text-center
---

Merci ! 🎉 Questions ?

# WebAssembly Component Model 🧩

<div class="flex justify-center mb-10">
  <!-- <QRCode
    :width="400"
    :height="400"
    type="svg"
    data="https://github.com/topheman/webassembly-component-model-experiments"
    :margin="10"
    :imageOptions="{ margin: 10 }"
    :dotsOptions="{ color: '#6c63ff' }"
    image="/WebAssembly_Logo.svg"
/> -->
  <img src="./qrcode.png" width="200" height="200" />
</div>

## [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments)

### [Christophe Rosset (topheman)](https://topheman.github.io/me/)
