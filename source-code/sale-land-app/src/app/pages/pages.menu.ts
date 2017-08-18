export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          }
        }
      },
      {
        path: 'sales',
        data: {
          menu: {
            title: 'general.menu.sales',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
            hidden: false,
          }
        },
        children: [
          {
            path: 'invoice',
            data: {
              menu: {
                title: 'general.menu.invoice',
                hidden: false,
              }
            }
          }
        ]
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
            hidden: true,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
                hidden: true,
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
            hidden: true,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
                hidden: true,
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
            hidden: true,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
                hidden: true,
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
            hidden: true,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
                hidden: true,
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
                hidden: true,
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
                hidden: true,
              }
            }
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
                hidden: true,
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
                hidden: true,
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
            hidden: true,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
                hidden: true,
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
                hidden: true,
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
            hidden: true,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
                hidden: true,
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
                hidden: true,
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
                hidden: true,
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
                 hidden: true,
               }
             }
           }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
            hidden: true,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
                hidden: true,
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
                hidden: true,
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
                hidden: true,
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
                hidden: true,
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
            hidden: true,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login',
                hidden: true,
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register',
                hidden: true,
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
            hidden: true,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#',
                hidden: true,
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#',
                hidden: true,
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#',
                    hidden: true,
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank',
            hidden: true,
          }
        }
      },
      {
        path: 'projects',
        data: {
          menu: {
            title: 'general.menu.projects',
            icon: 'ion-document',
          }
        }
      },
      {
        path: 'layouts',
        data: {
          menu: {
            title: 'general.menu.layouts',
            icon: 'ion-ios-crop-strong',
          }
        }
      },
      {
        path: 'myprofile',
        data: {
          menu: {
            title: 'general.menu.my_profile',
            hidden: true
          }
        }
      },
      {
        path: 'sellers',
        data: {
          menu: {
            title: 'general.menu.sellers',
            icon: 'ion-android-cart'

          }
        }
      },
      {
        path: 'customers',
        data: {
          menu: {
            title: 'general.menu.customers',
            icon: 'ion-android-people'
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'general.menu.users',
            icon: 'ion-android-people'
          }
        }
      }
    ]
  }
];
