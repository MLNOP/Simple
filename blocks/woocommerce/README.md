# Woocommerce Blocks

- Place the files for overriding Woocommerce native blocks here
  1. Create a **block-to-override/** folder containing assets to be compiled

## Assets

### File Structure

- 📂 wc-upsells
  - 📂 scss
    - \_block.scss
    - \_editor.scss
  - 📂 js

### Enqueue

- The scss assets are automatically called using the sass glob method
  - [front.scss](../../src/styles/front.scss)
  - [editor.scss](../../src/styles/editor.scss)
- The js assets are automatically called using the vite.js glob method
  - [front.js](../../src/scripts/front.js)
  - [editor.js](../../src/scripts/editor.js)

### Compilation

- see [package.json](../../package.json)
