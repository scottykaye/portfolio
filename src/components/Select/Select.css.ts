import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  gap: "20px",
});

export const select = style({
  // borderRadius: '8px',

  padding: "10px",
  minHeight: "42px",
  textAlign: "left",
  cursor: "pointer",
  // color: theme.colors.normal,
  outline: "0",
  transition: "all 0.2s ease",
  "::after": {
    zIndex: "1",
    position: "absolute",
    inset: "-2px",
    content: '""',
    display: "block",
    // borderRadius: '8px',
    border: `2px solid ${theme.colors.normal}`,
  },
});

export const isFocused = style({
  "::after": {
    outline: "2px solid #555",
    outlineOffset: "2px",
    border: "2px solid transparent",
    borderImage: `linear-gradient(to bottom right, ${theme.colors.gradient}) 1`,
  },
});

export const isActive = style({
  "::after": {
    clipPath: `polygon(
        10px 0,
        0 0,
        0% 100%,
        100% 100%,
        100% 0%,
        95% 0,
        95% 10%,
        10px 10%
      )`,
  },
});

export const wrapper = style({
  position: "relative",
  width: "100%",
});

export const labels = styleVariants(
  {
    placeholder: {
      // color: theme.colors.normal,
    },
    label: {
      // color: theme.colors.normal,
    },
  },
  (styles) => ({
    ...styles,

    position: "absolute",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    insetInlineStart: "20px",
    insetInlineEnd: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "all 0.2s ease",
  })
);

export const optionsContainer = style({
  position: "absolute",
  top: "100%",
  insetInlineStart: "0",
  display: "flex",
  flexDirection: "column",
  /* Control overflow to support border radius consistency on state events */
  /* overflow:' hidden' */
  // borderRadius: ' 8px',
  zIndex: "100",
  width: "100%",
  // backgroundColor: theme.colors.background,
  border: "2px solid transparent",
  borderImage: `linear-gradient(to bottom right, ${theme.colors.gradient}) 1`,
});

export const labelAndActive = style({
  top: "-12px",
  transform: "none",
  fontSize: "12px",
});

export const icons = styleVariants(
  {
    down: {
      transform: "translateY(-50%)",
    },
    up: {
      transform: "translateY(-50%) rotate(180deg)",
    },
  },
  (transform) => [
    transform,
    {
      display: "flex",
      position: "absolute",
      insetInlineEnd: "20px",
      top: "50%",
      width: "14px",
      height: "14px",
      transition: "all 0.2s ease",
    },
  ]
);

export const option = style({
  cursor: "pointer",
  padding: "20px",
  background: theme.colors.background,
  selectors: {
    "&:not(:last-child)": {
      borderBottom: `2px solid ${theme.colors.gray}`,
    },
    // [`&:hover:not()`]: {
    //   backgroundColor: theme.colors.secondary,
    //   outline: `2px solid ${theme.colors.gray}`,
    //   outlineOffset: '-2px',
    //   color: theme.colors.inverse,
    // },
  },
});

export const optionIsFocused = style({
  backgroundColor: theme.colors.secondary,
  outline: `2px solid ${theme.colors.gray}`,
  outlineOffset: "-2px",
});

export const optionsIsSelected = style({
  backgroundColor: theme.colors.primary,
  color: theme.colors.inverse,
});

// export const checkbox = style({
//   accentColor: 'red',
// });

// export const chip = style({
//   borderRadius: '8px',

//   background: '#000',
//   color: '#fff',
//   display: 'inline-block',
//   padding: '4px 8px',
//   fontSize: '12px',
//   selectors: {
//     '&:not(:last-child)': {
//       insetInlineEnd: '5px',
//     },
//   },
// });

// export const close = style({
//   width: '8px',
//   height: '8px',
//   insetInlineStart: '5px',
//   fill: '#fff',
// });
