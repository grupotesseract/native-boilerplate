const mapping = {
  strict: {
    "text-font-family": "System",
    "text-heading-1-font-family": "jaapokki",
  },
  components: {
    Button: {
      meta: {},
      appearances: {
        filled: {
          mapping: {},
          variantGroups: {
            status: {
              primary: {
                iconTintColor: "text-basic-color",
              },
            },
          },
        },
        outline: {
          mapping: {},
          variantGroups: {
            status: {
              primary: {
                textColor: "text-basic-color",
                borderColor: "text-basic-color",
              },
              basic: {
                textColor: "text-basic-color",
                borderColor: "text-basic-color",
              },
            },
          },
        },
        ghost: {
          mapping: {},
          variantGroups: {
            status: {
              primary: {
                textColor: "text-basic-color",
              },
            },
          },
        },
      },
      variantGroups: {},
    },
    Spinner: {
      appearances: {
        default: {
          mapping: {},
          variantGroups: {
            status: {
              primary: {
                borderColor: "text-basic-color",
              },
            },
          },
        },
      },
    },
  },
};

export default mapping;