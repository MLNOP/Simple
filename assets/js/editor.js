import '../scss/editor.scss' // mandatory for the Hot Module Reload

const { __ } = wp.i18n

// // Ajout d'une icone à côté du nom de la catégorie des blocks simples (sans doute qu'il y aura une autre mnière de faire plus tard ¯\_(ツ)_/¯)
// const svgIcon = wp.element.createElement(
//   'svg',
//   {
//     width: 1024,
//     height: 1024,
//     viewBox: '0 0 1024 1024',
//     version: '1.1',
//     xmlns: 'http://www.w3.org/2000/svg',
//     style: {
//       width: '24px',
//       height: '24px',
//       fill: '#e73331'
//     }
//   },
//   wp.element.createElement('path', {
//     d: 'M570.466 448.418c0-43.906 32.144-80.228 74.11-87.008 5.574-66.904-20.656-163.040-74.11-254.378-53.446 91.336-79.65 187.474-74.076 254.37 41.994 6.782 74.076 43.11 74.076 87.016zM381.544 421.904c34.488-24.902 82.866-21.89 113.908 9.154-31.044-31.044-33.996-79.454-9.112-113.928-43.378-51.248-129.898-100.68-232.284-127.468 26.798 102.38 76.242 188.886 127.488 232.244zM620.384 399.81c24.894 34.51 21.9 82.884-9.158 113.936 31.056-31.052 79.462-34.004 113.944-9.138 51.226-43.366 100.664-129.89 127.466-232.268-102.39 26.79-188.904 76.238-232.252 127.468zM680.904 514.664c-6.8 42.002-43.13 74.086-87.040 74.086 43.912 0 80.224 32.148 87.028 74.114 66.888 5.554 163.028-20.674 254.364-74.114-91.336-53.446-187.474-79.656-254.35-74.086zM343.118 545.904c6.782-42.002 43.118-74.082 87.020-74.082-43.902 0-80.224-32.144-87.012-74.11-66.904-5.57-163.040 20.66-254.378 74.11 91.344 53.442 187.474 79.652 254.37 74.082zM642.48 638.668c-34.508 24.894-82.884 21.898-113.928-9.154 31.044 31.052 33.996 79.458 9.118 113.938 43.376 51.23 129.896 100.668 232.274 127.454-26.794-102.378-76.238-188.89-127.466-232.24zM453.534 612.15c0 43.91-32.144 80.222-74.108 87.012-5.562 66.904 20.672 163.042 74.108 254.38 53.454-91.336 79.664-187.474 74.092-254.362-42.004-6.788-74.092-43.118-74.092-87.028zM403.628 660.75c-24.902-34.496-21.902-82.874 9.146-113.924-31.048 31.052-79.454 34.004-113.932 9.126-51.248 43.378-100.68 129.902-127.466 232.28 102.384-26.798 188.884-76.24 232.254-127.48z'
//   })
// )
// wp.blocks.updateCategory('simple-blocks', { icon: svgIcon })

// Register a variation for the block "group"
wp.blocks.registerBlockVariation('core/group', {
  name: 'simple/group-shadow',
  title: __('Group with a shadow', 'simple'),
  description: __('A variation of the group block with a drop shadow', 'simple'),
  attributes: {
    className: 'group-shadow'
  }
})

// Register a variation for the block "media-text"
wp.blocks.registerBlockVariation('core/media-text', {
  name: 'simple/group-media-stretched',
  title: __('Group with a stretched media', 'simple'),
  attributes: {
    className: 'group-media-stretched'
  }
})

wp.blocks.registerBlockVariation('core/search', {
  name: 'simple/testimony-search',
  title: __('Testimony search', 'simple'),
  attributes: {
    query: {
      post_type: 'testimony'
    }
  }
})

wp.blocks.registerBlockVariation('core/table', {
  name: 'simple/table-paginate',
  title: __('Table with pagination', 'simple'),
  attributes: {
    className: 'table-paginate'
  }
})

// Gutenberg ready
if (document.querySelector('.block-editor__container')) {
  let blocksLoaded = false
  const blocksLoadedInterval = setInterval(function () {
    const editorWrapper = document.querySelector('.editor-styles-wrapper')
    if (editorWrapper) {
      blocksLoaded = true

      // DO code here
    }

    if (blocksLoaded) {
      clearInterval(blocksLoadedInterval)
    }
  }, 500)
}
