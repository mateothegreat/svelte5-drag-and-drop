# Svelte 5 Drag & Drop

Drop dead simple drag & drop for Svelte 5.
> Live demo: <https://svelte5-router.vercel.app>

## Features

- Drag. Drop. Party. 🚀!
- One action to rule them all.

## Installation

```bash
npm install @mateothegreat/svelte5-drag-and-drop
```

## Usage

```svelte
<script lang="ts">
  import { draggable } from "@mateothegreat/svelte5-drag-and-drop";
  import Row from "./row.svelte";
</script>

{#snippet children()}
  <div><Row name="a" /></div>
  <div><Row name="b" /></div>
  <div><Row name="c" /></div>
{/snippet}

<div class="absolute flex h-full w-full flex-col items-center gap-4 bg-black">
  <div class="flex w-full items-center justify-between p-6">
    <h1 class="text-center font-mono text-lg text-indigo-500">Svelte 5 Drag and Drop</h1>
  </div>
  <div class="flex gap-3 bg-zinc-900 text-xs text-white"></div>
  <div use:draggable class=" h-96 w-96 rounded-xl border-2 border-dashed border-pink-500 bg-fuchsia-900/50 p-6">
    {@render children()}
  </div>
</div>
````
