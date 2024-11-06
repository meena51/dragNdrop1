const editor = grapesjs.init({
  container: "#editor",
  fromElement: true,
  width: "auto",
  storageManager: false,

  blockManager: {
    appendTo: "#blocks",
  },
  layerManager: {
    appendTo: "#layer-container",
  },
  styleManager: {
    appendTo: "#style-view",
    sectors: [
      {
        name:"Dimensions",
        open: false,
        buildProps: ["width","min-height","padding"],
        properties: [
          {
            type: "integer",
            name: " The Width",
            property: "width",
            units:["px","%","rem"],
            defaults: "auto",
            min: 0,
          }
        ]
      }
    ]
  },
  traitManager:{
appendTo:"#trait-container",
  },
  selectorManager:{
appendTo:"#style-view"
  },
  panels: {
    defaults: [
      {
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: [
          {
            id: "visibility",
            active: true,
            className: "btn-toggle-borders",
            label: "<i class='fa fa-clone'></i>",
            command: "sw-visibility",
          },
        ],
      },
      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            label: "<i class='fa fa-television'></i>",
            command: "set-device-desktop",
            active: true,
            toggleable: false,
          },
          {
            id: "device-mobile",
            label: "<i class='fa fa-mobile'></i>",
            command: "set-device-mobile",
            active: false,
            toggleable: false,
          },
        ],
      },
    ],
  },
  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: "100%",
      },
      {
        name: "Mobile",
        width: "320px",
        widthMedia: "480px",
      },
    ],
  },
  plugins: ["gjs-blocks-basic"],
  pluginsOpts: {
    "gjs-blocks-basic": {},
  },
});
/* Adding commands to make the device desktop and mobile work. Using this we ca
n make the canvas responsive*/


editor.Commands.add('set-device-mobile',{
  run: (editor) => editor.setDevice("Mobile"),
});
editor.Commands.add('set-device-desktop',{
  run: (editor) => editor.setDevice("Desktop"),
});

