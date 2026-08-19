/* @ds-bundle: {"format":4,"namespace":"CaiAraDesignSystem_096654","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"WaterlineRule","sourcePath":"components/core/WaterlineRule.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CTAPanel","sourcePath":"components/marketing/CTAPanel.jsx"},{"name":"PhotoHero","sourcePath":"components/marketing/PhotoHero.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"721040dfce5c","components/core/Button.jsx":"b382537b39e9","components/core/Card.jsx":"769886ffeb12","components/core/IconButton.jsx":"1713a3a02fa3","components/core/Logo.jsx":"72f8a2b43c6e","components/core/Tag.jsx":"9108eca4fd0b","components/core/WaterlineRule.jsx":"0861ea7608f6","components/feedback/Dialog.jsx":"22a70709325d","components/feedback/EmptyState.jsx":"8474a9466d9b","components/feedback/Toast.jsx":"e7e1401a60bd","components/feedback/Tooltip.jsx":"e48d87e51eab","components/forms/Checkbox.jsx":"530e8618b262","components/forms/Input.jsx":"432fdf8034f1","components/forms/Radio.jsx":"30f2989999dc","components/forms/Select.jsx":"9476876b3ab9","components/forms/Switch.jsx":"544bf3922039","components/forms/Textarea.jsx":"37505a0c6c1b","components/marketing/CTAPanel.jsx":"a39337476ab9","components/marketing/PhotoHero.jsx":"103bad9e23fd","components/marketing/SectionHeading.jsx":"12cd7d5a0502","components/marketing/ServiceCard.jsx":"cba0b4b48805","components/marketing/StatBlock.jsx":"d719d7e04221","components/marketing/TestimonialCard.jsx":"ede6d3413f17","components/navigation/Breadcrumb.jsx":"9bd100dcb5e9","components/navigation/NavBar.jsx":"5f5d83ddc88b","components/navigation/Tabs.jsx":"3bbfc799ef8b","ui_kits/portal_caicara/Automacoes.jsx":"16af3fd89eb2","ui_kits/portal_caicara/Conversas.jsx":"4de72a2ed558","ui_kits/portal_caicara/Dashboard.jsx":"2bd717294237","ui_kits/portal_caicara/Shell.jsx":"37386fdf1802","ui_kits/site_institucional/Cases.jsx":"2ff813f36b28","ui_kits/site_institucional/Contato.jsx":"e4d72c2d5509","ui_kits/site_institucional/Footer.jsx":"3c14df5a8592","ui_kits/site_institucional/Home.jsx":"2157382b9e46","ui_kits/site_institucional/Icons.jsx":"78db08863f66","ui_kits/site_institucional/Metodo.jsx":"7351108e9a19","ui_kits/site_institucional/Servicos.jsx":"75131312583a","ui_kits/social_kit/Templates.jsx":"8ea854cd075b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CaiAraDesignSystem_096654 = window.CaiAraDesignSystem_096654 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--sand-200)",
    color: "var(--neutral-700)"
  },
  magenta: {
    background: "var(--surface-accent-soft)",
    color: "var(--magenta-700)"
  },
  cyan: {
    background: "var(--surface-cyan-soft)",
    color: "var(--cyan-700)"
  },
  violet: {
    background: "var(--surface-violet-soft)",
    color: "var(--violet-700)"
  },
  deep: {
    background: "var(--deep-500)",
    color: "var(--sand-500)"
  },
  success: {
    background: "var(--status-success-bg)",
    color: "var(--status-success-fg)"
  },
  warning: {
    background: "var(--status-warning-bg)",
    color: "var(--status-warning-fg)"
  },
  danger: {
    background: "var(--status-danger-bg)",
    color: "var(--status-danger-fg)"
  },
  solid: {
    background: "var(--magenta-500)",
    color: "var(--white)"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot = false,
  count,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  if (typeof count === "number") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-caption)",
        minWidth: 20,
        height: 20,
        padding: "0 6px",
        borderRadius: "var(--radius-pill)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...tones.solid,
        ...style
      }
    }, rest), count);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-caption)",
      lineHeight: 1,
      letterSpacing: "var(--ls-wide)",
      padding: "5px var(--space-3)",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      display: "block"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-semibold)",
  letterSpacing: "var(--ls-tight)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
};
const sizes = {
  sm: {
    height: "var(--field-height-sm)",
    padding: "0 var(--space-4)",
    fontSize: "var(--fs-sm)"
  },
  md: {
    height: "var(--field-height)",
    padding: "0 var(--space-6)",
    fontSize: "var(--fs-sm)"
  },
  lg: {
    height: "var(--field-height-lg)",
    padding: "0 var(--space-8)",
    fontSize: "var(--fs-base)"
  }
};
const variants = {
  primary: {
    rest: {
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)"
    },
    hover: {
      background: "var(--action-primary-bg-hover)",
      boxShadow: "var(--shadow-magenta)",
      transform: "translateY(var(--hover-lift))"
    },
    active: {
      background: "var(--action-primary-bg-active)",
      boxShadow: "none",
      transform: "scale(var(--press-scale))"
    }
  },
  secondary: {
    rest: {
      background: "var(--action-secondary-bg)",
      color: "var(--action-secondary-fg)"
    },
    hover: {
      background: "var(--action-secondary-bg-hover)",
      transform: "translateY(var(--hover-lift))"
    },
    active: {
      background: "var(--action-secondary-bg-active)",
      transform: "scale(var(--press-scale))"
    }
  },
  outline: {
    rest: {
      background: "transparent",
      color: "var(--action-outline-fg)",
      borderColor: "var(--action-outline-border)"
    },
    hover: {
      background: "var(--action-outline-bg-hover)",
      transform: "translateY(var(--hover-lift))"
    },
    active: {
      background: "var(--action-outline-bg-hover)",
      transform: "scale(var(--press-scale))"
    }
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--action-ghost-fg)"
    },
    hover: {
      background: "var(--action-ghost-bg-hover)"
    },
    active: {
      background: "var(--action-ghost-bg-hover)",
      transform: "scale(var(--press-scale))"
    }
  },
  cyan: {
    rest: {
      background: "var(--cyan-500)",
      color: "var(--white)"
    },
    hover: {
      background: "var(--cyan-600)",
      boxShadow: "var(--shadow-cyan)",
      transform: "translateY(var(--hover-lift))"
    },
    active: {
      background: "var(--cyan-700)",
      boxShadow: "none",
      transform: "scale(var(--press-scale))"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  shape = "pill",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const Tag = as;
  const s = {
    ...base,
    ...sizes[size],
    borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-sm)",
    width: fullWidth ? "100%" : undefined,
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.active : null),
    ...(disabled ? {
      opacity: "var(--disabled-opacity)",
      cursor: "not-allowed",
      boxShadow: "none",
      transform: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "institutional",
  interactive = false,
  padding,
  sailCorner,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shells = {
    institutional: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: padding || "var(--space-6)"
    },
    portal: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "none",
      padding: padding || "var(--space-5)"
    },
    deep: {
      background: "var(--gradient-deep)",
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: padding || "var(--space-6)",
      color: "var(--text-inverse)"
    },
    quiet: {
      background: "var(--surface-card-muted)",
      border: "1px solid transparent",
      borderRadius: "var(--radius-lg)",
      boxShadow: "none",
      padding: padding || "var(--space-6)"
    }
  };
  const sail = sailCorner ? {
    [`borderTop${sailCorner === "tr" ? "Right" : sailCorner === "tl" ? "Left" : ""}Radius`]: sailCorner === "tr" || sailCorner === "tl" ? "var(--radius-sail)" : undefined,
    [`borderBottom${sailCorner === "br" ? "Right" : sailCorner === "bl" ? "Left" : ""}Radius`]: sailCorner === "br" || sailCorner === "bl" ? "var(--radius-sail)" : undefined
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-sans)",
      color: variant === "deep" ? "var(--text-inverse)" : "var(--text-body)",
      transition: "var(--transition-base)",
      ...shells[variant],
      ...sail,
      ...(interactive ? {
        cursor: "pointer"
      } : null),
      ...(interactive && hover ? {
        transform: "translateY(-2px)",
        boxShadow: "var(--shadow-lg)",
        borderColor: "var(--border-default)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  children,
  label,
  size = "md",
  variant = "ghost",
  active = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size] || sizes.md;
  const tones = {
    ghost: {
      background: active ? "var(--action-ghost-bg-hover)" : "transparent",
      color: "var(--action-ghost-fg)"
    },
    solid: {
      background: "var(--action-primary-bg)",
      color: "var(--white)"
    },
    soft: {
      background: "var(--surface-accent-soft)",
      color: "var(--text-accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--action-outline-fg)",
      border: "1px solid var(--action-outline-border)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      minWidth: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: "1px solid transparent",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-color)",
      ...tones[variant],
      ...(hover && !disabled ? {
        filter: "brightness(0.94)",
        background: variant === "ghost" ? "var(--action-ghost-bg-hover)" : undefined
      } : null),
      ...(disabled ? {
        opacity: "var(--disabled-opacity)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  "horizontal-dark": "assets/logo/caicara-horizontal-preto.png",
  "horizontal-light": "assets/logo/caicara-horizontal-branco.png",
  "horizontal-mono-dark": "assets/logo/caicara-horizontal-preto-mono.png",
  "horizontal-mono-light": "assets/logo/caicara-horizontal-branco-mono.png",
  symbol: "assets/logo/caicara-simbolo-1024.png",
  "symbol-round": "assets/logo/caicara-simbolo-redondo.png",
  seal: "assets/logo/caicara-selo-onda.png"
};
function Logo({
  variant = "horizontal-dark",
  height = 40,
  base = "",
  style,
  ...rest
}) {
  const src = (base ? base.replace(/\/$/, "") + "/" : "") + FILES[variant];
  const isSymbol = variant.startsWith("symbol") || variant === "seal";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Cai\xE7ara Marketing Digital Estrat\xE9gico",
    style: {
      height,
      width: isSymbol ? height : "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  accent = "magenta",
  style,
  ...rest
}) {
  const color = accent === "cyan" ? "var(--cyan-600)" : accent === "violet" ? "var(--violet-600)" : "var(--magenta-600)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      color: "var(--neutral-700)",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      padding: "4px var(--space-2) 4px var(--space-3)",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 3,
      height: 12,
      borderRadius: 2,
      background: color,
      display: "block"
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remover",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 14,
      lineHeight: 1,
      padding: "0 2px",
      fontFamily: "var(--font-sans)"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/WaterlineRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WaterlineRule({
  thickness = 3,
  direction = "horizontal",
  reverse = false,
  inset = 0,
  style,
  ...rest
}) {
  const grad = reverse ? "var(--gradient-brand-reverse)" : direction === "vertical" ? "var(--gradient-brand-vertical)" : "var(--gradient-brand)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      background: grad,
      borderRadius: thickness > 2 ? "var(--radius-pill)" : 0,
      ...(direction === "vertical" ? {
        width: thickness,
        height: "100%",
        marginTop: inset,
        marginBottom: inset
      } : {
        height: thickness,
        width: "100%",
        marginLeft: inset,
        marginRight: inset
      }),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { WaterlineRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WaterlineRule.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(2px)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)",
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-xl)",
      fontFamily: "var(--font-sans)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: "var(--gradient-brand)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--fs-xl)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)",
      letterSpacing: "var(--ls-tight)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Fechar",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, footer))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon,
  title,
  message,
  action,
  imageSrc,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-4)",
      padding: "var(--space-16) var(--space-6)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      width: 120,
      height: 120,
      objectFit: "cover",
      borderRadius: "50%",
      opacity: 0.9
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--surface-cyan-soft)",
      color: "var(--cyan-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-2xl)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)"
    }
  }, title), message && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) auto 0",
      maxWidth: 380,
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, message)), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  success: {
    fg: "var(--status-success-fg)",
    bg: "var(--status-success-bg)"
  },
  info: {
    fg: "var(--status-info-fg)",
    bg: "var(--status-info-bg)"
  },
  warning: {
    fg: "var(--status-warning-fg)",
    bg: "var(--status-warning-bg)"
  },
  danger: {
    fg: "var(--status-danger-fg)",
    bg: "var(--status-danger-bg)"
  }
};
function Toast({
  tone = "success",
  title,
  message,
  onDismiss,
  icon,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-4)",
      minWidth: 300,
      maxWidth: 420,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: "0 0 26px",
      borderRadius: "50%",
      background: t.bg,
      color: t.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon || /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "currentColor",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-body)",
      marginTop: 2
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Fechar",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 60,
      background: "var(--deep-500)",
      color: "var(--sand-500)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      padding: "6px var(--space-3)",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      marginTop: description ? 2 : 0,
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (on ? "var(--magenta-500)" : "var(--field-border)"),
      background: on ? "var(--magenta-500)" : "var(--field-bg)",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) var(--focus-ring-color)" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-color)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("i", {
    style: {
      width: 9,
      height: 2,
      background: "var(--white)",
      borderRadius: 1,
      display: "block"
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: description ? "var(--fw-medium)" : "var(--fw-regular)",
      color: "var(--text-heading)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-muted)",
      fontSize: "var(--fs-caption)",
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  size = "md",
  iconLeft,
  invalid = false,
  disabled = false,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const rid = id || React.useId();
  const bad = invalid || !!error;
  const h = size === "sm" ? "var(--field-height-sm)" : size === "lg" ? "var(--field-height-lg)" : "var(--field-height)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)",
      letterSpacing: "var(--ls-tight)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      display: "flex",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: size === "lg" ? "var(--fs-base)" : "var(--fs-sm)",
      color: "var(--field-fg)",
      height: h,
      padding: iconLeft ? "0 var(--space-3) 0 34px" : "0 var(--space-3)",
      background: disabled ? "var(--field-bg-disabled)" : "var(--field-bg)",
      border: "1px solid " + (bad ? "var(--status-danger-fg)" : focus ? "var(--field-border-focus)" : hover ? "var(--field-border-hover)" : "var(--field-border)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) var(--focus-ring-color)" : "none",
      transition: "var(--transition-color), box-shadow var(--dur-fast) var(--ease-out)",
      width: "100%",
      boxSizing: "border-box",
      opacity: disabled ? 0.7 : 1,
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--status-danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      marginTop: description ? 2 : 0,
      borderRadius: "50%",
      border: "1px solid " + (checked ? "var(--magenta-500)" : "var(--field-border)"),
      background: "var(--field-bg)",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) var(--focus-ring-color)" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-color)"
    }
  }, checked && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--magenta-500)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: description ? "var(--fw-medium)" : "var(--fw-regular)",
      color: "var(--text-heading)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-muted)",
      fontSize: "var(--fs-caption)",
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  size = "md",
  invalid = false,
  disabled = false,
  placeholder,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const rid = id || React.useId();
  const bad = invalid || !!error;
  const h = size === "sm" ? "var(--field-height-sm)" : size === "lg" ? "var(--field-height-lg)" : "var(--field-height)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--field-fg)",
      height: h,
      padding: "0 34px 0 var(--space-3)",
      background: disabled ? "var(--field-bg-disabled)" : "var(--field-bg)",
      border: "1px solid " + (bad ? "var(--status-danger-fg)" : focus ? "var(--field-border-focus)" : hover ? "var(--field-border-hover)" : "var(--field-border)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) var(--focus-ring-color)" : "none",
      transition: "var(--transition-color), box-shadow var(--dur-fast) var(--ease-out)",
      width: "100%",
      boxSizing: "border-box",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: "var(--space-3)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--status-danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  disabled = false,
  onChange,
  size = "md",
  id,
  style,
  ...rest
}) {
  const rid = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  const w = size === "sm" ? 34 : 44;
  const h = size === "sm" ? 20 : 24;
  const knob = h - 6;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-heading)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: w,
      height: h,
      flex: "0 0 " + w + "px",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--magenta-500)" : "var(--sand-300)",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) var(--focus-ring-color)" : "none",
      position: "relative",
      transition: "background-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      display: "block",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  invalid = false,
  disabled = false,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const rid = id || React.useId();
  const bad = invalid || !!error;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: rid,
    rows: rows,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--field-fg)",
      padding: "var(--space-3)",
      resize: "vertical",
      background: disabled ? "var(--field-bg-disabled)" : "var(--field-bg)",
      border: "1px solid " + (bad ? "var(--status-danger-fg)" : focus ? "var(--field-border-focus)" : hover ? "var(--field-border-hover)" : "var(--field-border)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) var(--focus-ring-color)" : "none",
      transition: "var(--transition-color), box-shadow var(--dur-fast) var(--ease-out)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--status-danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTAPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTAPanel({
  overline,
  title,
  lead,
  primary,
  secondary,
  imageSrc,
  sailCorner = "tr",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "on-deep",
    style: {
      position: "relative",
      overflow: "hidden",
      background: imageSrc ? undefined : "var(--gradient-deep)",
      borderRadius: "var(--radius-lg)",
      borderTopRightRadius: sailCorner === "tr" ? "var(--radius-sail)" : undefined,
      borderBottomLeftRadius: sailCorner === "bl" ? "var(--radius-sail)" : undefined,
      padding: "var(--space-16) var(--space-12)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), imageSrc && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-full)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "var(--gradient-brand)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 620,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, overline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-overline)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--cyan-300)"
    }
  }, overline), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-5xl)",
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-tighter)",
      color: "var(--sand-500)",
      textWrap: "balance"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-lg)",
      lineHeight: "var(--lh-body)",
      color: "rgba(253,248,242,.8)",
      textWrap: "pretty"
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-2)"
    }
  }, primary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: primary.onClick
  }, primary.label), secondary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "lg",
    onClick: secondary.onClick
  }, secondary.label))));
}
Object.assign(__ds_scope, { CTAPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTAPanel.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PhotoHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoHero({
  imageSrc,
  overline,
  title,
  emphasis,
  lead,
  actions,
  height = 560,
  align = "left",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "on-deep",
    style: {
      position: "relative",
      minHeight: height,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--container-gutter)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align
    }
  }, overline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-overline)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--cyan-300)"
    }
  }, overline), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: 860,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-7xl)",
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-tighter)",
      color: "var(--sand-500)",
      textWrap: "balance"
    }
  }, title, emphasis && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--gradient-text)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent"
    }
  }, emphasis))), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontSize: "var(--fs-lg)",
      lineHeight: "var(--lh-body)",
      color: "rgba(253,248,242,.84)",
      textWrap: "pretty"
    }
  }, lead), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-2)"
    }
  }, actions), children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
      background: "var(--gradient-brand)"
    }
  }));
}
Object.assign(__ds_scope, { PhotoHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PhotoHero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  overline,
  title,
  emphasis,
  lead,
  align = "left",
  size = "lg",
  rule = true,
  tone = "light",
  style,
  ...rest
}) {
  const sizes = {
    md: "var(--fs-4xl)",
    lg: "var(--fs-5xl)",
    xl: "var(--fs-6xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
      textAlign: align,
      maxWidth: align === "center" ? 720 : 640,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), overline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-overline)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: tone === "dark" ? "var(--cyan-300)" : "var(--text-accent)"
    }
  }, overline), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: sizes[size],
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-tighter)",
      color: tone === "dark" ? "var(--sand-500)" : "var(--text-heading)",
      textWrap: "balance"
    }
  }, title, emphasis && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--gradient-text)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent"
    }
  }, emphasis))), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: 72,
      borderRadius: "var(--radius-pill)",
      background: "var(--gradient-brand)"
    }
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-lg)",
      lineHeight: "var(--lh-body)",
      color: tone === "dark" ? "rgba(253,248,242,.78)" : "var(--text-body)",
      textWrap: "pretty",
      maxWidth: 620
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  icon,
  iconSrc,
  title,
  description,
  meta,
  accent = "magenta",
  imageSrc,
  onClick,
  style,
  ...rest
}) {
  const color = accent === "cyan" ? "var(--cyan-600)" : accent === "violet" ? "var(--violet-600)" : "var(--magenta-600)";
  const soft = accent === "cyan" ? "var(--surface-cyan-soft)" : accent === "violet" ? "var(--surface-violet-soft)" : "var(--surface-accent-soft)";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!onClick,
    onClick: onClick,
    padding: "0",
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), imageSrc && /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      width: "100%",
      height: 160,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: soft,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 44px"
    }
  }, iconSrc ? /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: 24,
      height: 24
    }
  }) : icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-xl)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)",
      letterSpacing: "var(--ls-tight)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      textWrap: "pretty",
      flex: 1
    }
  }, description), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-caption)",
      color
    }
  }, meta)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  note,
  accent = "magenta",
  size = "lg",
  tone = "light",
  style,
  ...rest
}) {
  const color = accent === "cyan" ? "var(--cyan-500)" : accent === "violet" ? "var(--violet-500)" : "var(--magenta-500)";
  const sizes = {
    md: "var(--fs-5xl)",
    lg: "var(--fs-6xl)",
    xl: "var(--fs-7xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: sizes[size],
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-tighter)",
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: tone === "dark" ? "var(--sand-500)" : "var(--text-heading)",
      letterSpacing: "var(--ls-tight)"
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: tone === "dark" ? "rgba(253,248,242,.6)" : "var(--text-muted)"
    }
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  variant = "light",
  align = "left",
  style,
  ...rest
}) {
  const dark = variant === "deep";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      position: "relative",
      overflow: "hidden",
      background: dark ? "var(--violet-600)" : "var(--surface-card)",
      border: dark ? "none" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      borderTopRightRadius: dark ? "var(--radius-sail)" : "var(--radius-lg)",
      boxShadow: dark ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      textAlign: align,
      alignItems: align === "right" ? "flex-end" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 0.7,
      color: dark ? "rgba(253,248,242,.5)" : "var(--magenta-200)",
      display: "block",
      height: 30
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: "var(--fs-xl)",
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-tight)",
      color: dark ? "var(--sand-500)" : "var(--text-heading)",
      textWrap: "pretty",
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexDirection: align === "right" ? "row-reverse" : "row"
    }
  }, avatarSrc && /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: dark ? "var(--sand-500)" : "var(--text-heading)"
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      color: dark ? "rgba(253,248,242,.66)" : "var(--text-muted)"
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Trilha",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = it.label ?? it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-heading)",
        fontWeight: "var(--fw-semibold)"
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.value ?? label);
      },
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, label), !last && /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--sand-400)",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  links = [],
  active,
  onNavigate,
  cta,
  glass = false,
  base = "",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      padding: "0 var(--space-6)",
      boxSizing: "border-box",
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: glass ? "var(--glass-bg)" : "var(--surface-page)",
      backdropFilter: glass ? "var(--glass-blur)" : "none",
      WebkitBackdropFilter: glass ? "var(--glass-blur)" : "none",
      borderBottom: "1px solid " + (glass ? "rgba(253,248,242,.18)" : "var(--border-subtle)"),
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0] && (links[0].value ?? links[0]));
    },
    style: {
      display: "flex",
      alignItems: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: glass ? "horizontal-light" : "horizontal-dark",
    height: 34,
    base: base
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, links.map(l => {
    const v = l.value ?? l;
    const label = l.label ?? l;
    const on = v === active;
    const hv = hover === v;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: "#" + v,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(v);
      },
      onMouseEnter: () => setHover(v),
      onMouseLeave: () => setHover(null),
      style: {
        fontSize: "var(--fs-sm)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        textDecoration: "none",
        letterSpacing: "var(--ls-tight)",
        color: glass ? on ? "var(--sand-500)" : hv ? "var(--sand-500)" : "rgba(253,248,242,.72)" : on ? "var(--text-accent)" : hv ? "var(--text-heading)" : "var(--text-body)",
        paddingBottom: 2,
        borderBottom: "2px solid " + (on ? "var(--magenta-500)" : "transparent"),
        transition: "var(--transition-color)"
      }
    }, label);
  }), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: cta.onClick
  }, cta.label)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  const fs = size === "sm" ? "var(--fs-caption)" : "var(--fs-sm)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "center",
      gap: variant === "pill" ? "var(--space-1)" : "var(--space-6)",
      borderBottom: variant === "underline" ? "1px solid var(--border-subtle)" : "none",
      background: variant === "pill" ? "var(--surface-sunken)" : "transparent",
      borderRadius: variant === "pill" ? "var(--radius-pill)" : 0,
      padding: variant === "pill" ? "var(--space-1)" : 0,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value ?? it;
    const label = it.label ?? it;
    const on = v === active;
    const hv = hover === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      onMouseEnter: () => setHover(v),
      onMouseLeave: () => setHover(null),
      style: {
        border: 0,
        background: variant === "pill" ? on ? "var(--white)" : "transparent" : "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: fs,
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        color: on ? variant === "pill" ? "var(--text-heading)" : "var(--text-accent)" : hv ? "var(--text-heading)" : "var(--text-muted)",
        padding: variant === "pill" ? "6px var(--space-4)" : "0 0 var(--space-3)",
        borderRadius: variant === "pill" ? "var(--radius-pill)" : 0,
        boxShadow: variant === "pill" && on ? "var(--shadow-xs)" : "none",
        borderBottom: variant === "underline" ? "2px solid " + (on ? "var(--magenta-500)" : "transparent") : "none",
        marginBottom: variant === "underline" ? -1 : 0,
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        transition: "var(--transition-color)"
      }
    }, label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-overline)",
        fontFamily: "var(--font-mono)",
        color: on ? "var(--text-accent)" : "var(--text-muted)"
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_caicara/Automacoes.jsx
try { (() => {
(() => {
  const {
    Card,
    Button,
    Badge,
    Tabs,
    Switch,
    Breadcrumb,
    IconButton
  } = window.CaiAraDesignSystem_096654;
  const NODES = [{
    id: "trigger",
    x: 0,
    y: 0,
    kind: "trigger",
    t: "Trigger",
    s: "Facebook Lead Form Submitted",
    icon: "clipboard-list",
    color: "var(--success-500)"
  }, {
    id: "email",
    x: 0,
    y: 1,
    kind: "action",
    t: "Conversational Email",
    icon: "mail",
    color: "var(--success-500)"
  }, {
    id: "sms",
    x: 0,
    y: 2,
    kind: "action",
    t: "Conversational SMS",
    icon: "message-square",
    color: "var(--cyan-600)"
  }, {
    id: "wait",
    x: 0,
    y: 3,
    kind: "action",
    t: "Wait for reply (or 2 mins)",
    icon: "clock",
    color: "var(--violet-500)"
  }, {
    id: "cond",
    x: 0,
    y: 4,
    kind: "action",
    t: "Did the contact reply?",
    icon: "braces",
    color: "var(--deep-400)"
  }];
  const BRANCHES = [{
    t: "Contact replied",
    s: 'If "Contact replied" is "True"'
  }, {
    t: "Contact didn't reply",
    s: 'If "Contact replied" is "False"'
  }, {
    t: "None",
    s: "When none of the conditions are met"
  }];
  const LEAVES = [["Was the reply positive or negative?", "braces"], ["Call Connect", "phone"], ["END", null]];
  function Node({
    n,
    active,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        width: 240,
        background: "var(--white)",
        border: "1px solid " + (active ? "var(--magenta-500)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-sm)",
        boxShadow: active ? "var(--shadow-md)" : "var(--shadow-xs)",
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 5,
        background: "var(--sand-100)",
        color: n.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 24px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 14,
      stroke: 1.8
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, n.s && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 10,
        color: "var(--text-muted)"
      }
    }, n.t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-medium)",
        color: "var(--text-heading)",
        lineHeight: 1.3
      }
    }, n.s || n.t)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: "var(--sand-400)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ellipsis",
      size: 14
    })));
  }
  const Connector = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: 34,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      flex: 1,
      background: "var(--sand-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: "1px solid var(--sand-300)",
      background: "var(--white)",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 10,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      flex: 1,
      background: "var(--sand-300)"
    }
  }));
  function Automacoes({
    onBack
  }) {
    const [tab, setTab] = React.useState("Construtor");
    const [live, setLive] = React.useState(false);
    const [sel, setSel] = React.useState("trigger");
    const [zoom, setZoom] = React.useState(58);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-4) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        border: 0,
        background: "transparent",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-base)",
        color: "var(--text-heading)",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 18
    }), " Voltar para Fluxos de trabalho"), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-3xl)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, "Recipe \xB7 Fast 5 Lite"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 15
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/matheus-caicara.webp",
      alt: "",
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "history",
      size: 18
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      shape: "square",
      size: "sm"
    }, "Arquivar"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        padding: "0 var(--space-6)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: ["Construtor", "Configurações", "Histórico de inscrições", "Registros de execução"],
      value: tab,
      onChange: setTab,
      style: {
        border: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)",
        paddingBottom: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      shape: "square",
      size: "sm"
    }, "Fluxo de trabalho de teste"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        fontSize: "var(--fs-sm)",
        color: "var(--text-body)"
      }
    }, "Rascunhar ", /*#__PURE__*/React.createElement(Switch, {
      size: "sm",
      checked: live,
      onChange: e => setLive(e.target.checked)
    }), " Publicar"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        position: "relative",
        overflow: "auto",
        background: "var(--sand-100)",
        backgroundImage: "var(--texture-dotgrid)",
        backgroundSize: "var(--texture-dotgrid-size)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "40px 0 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Node, {
      n: NODES[0],
      active: sel === "trigger",
      onClick: () => setSel("trigger")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        border: "1px dashed var(--cyan-300)",
        background: "var(--surface-cyan-soft)",
        borderRadius: "var(--radius-sm)",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--text-link)",
        fontSize: "var(--fs-caption)",
        fontWeight: 500,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " Add New Trigger")), NODES.slice(1).map(n => /*#__PURE__*/React.createElement(React.Fragment, {
      key: n.id
    }, /*#__PURE__*/React.createElement(Connector, null), /*#__PURE__*/React.createElement(Node, {
      n: n,
      active: sel === n.id,
      onClick: () => setSel(n.id)
    }))), /*#__PURE__*/React.createElement(Connector, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 24,
        alignItems: "flex-start"
      }
    }, BRANCHES.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.t,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 210,
        background: "var(--white)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-xs)",
        border: "1px solid var(--border-subtle)",
        borderBottom: "3px solid var(--violet-500)",
        padding: "10px 12px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--violet-600)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "git-branch",
      size: 12
    }), " ", b.t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 10,
        color: "var(--text-muted)",
        marginTop: 3
      }
    }, b.s)), /*#__PURE__*/React.createElement(Connector, null), LEAVES[i][1] ? /*#__PURE__*/React.createElement(Node, {
      n: {
        t: LEAVES[i][0],
        icon: LEAVES[i][1],
        color: "var(--deep-400)"
      },
      active: false,
      onClick: () => {}
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        background: "var(--sand-200)",
        color: "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "3px 12px"
      }
    }, "END"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 16,
        top: 16,
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        padding: 6,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, ["chart-pie", "message-circle", "sticky-note"].map(ic => /*#__PURE__*/React.createElement("span", {
      key: ic,
      style: {
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 16,
        bottom: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setZoom(Math.min(200, zoom + 10)),
      style: {
        border: 0,
        background: "transparent",
        padding: 8,
        cursor: "pointer",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        color: "var(--text-body)",
        padding: "2px 0"
      }
    }, zoom, "%"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setZoom(Math.max(20, zoom - 10)),
      style: {
        border: 0,
        background: "transparent",
        padding: 8,
        cursor: "pointer",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 16
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        padding: 9,
        color: "var(--text-body)",
        display: "flex",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "maximize",
      size: 16
    }))), /*#__PURE__*/React.createElement("button", {
      style: {
        position: "absolute",
        left: 76,
        bottom: 16,
        border: 0,
        cursor: "pointer",
        background: "var(--gradient-brand-diagonal)",
        color: "#fff",
        borderRadius: "var(--radius-pill)",
        height: 44,
        padding: "0 22px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-semibold)",
        boxShadow: "var(--shadow-magenta)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18
    }), " Workflow AI")));
  }
  Object.assign(window, {
    Automacoes
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_caicara/Automacoes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_caicara/Conversas.jsx
try { (() => {
(() => {
  const {
    Card,
    Button,
    Badge,
    Tabs,
    Input,
    Switch,
    IconButton,
    Tooltip
  } = window.CaiAraDesignSystem_096654;
  const THREADS = [{
    id: "carla-santos",
    nome: "Carla Santos Arquitetura & Interiores",
    curto: "Carla Santos Arquitet…",
    data: "Jul 29",
    n: 2,
    canal: "instagram",
    avatar: "../../assets/imagery/camila-caicara.png",
    previa: "",
    msgs: [{
      tipo: "story",
      hora: "16:21",
      pagina: "Lumen Iluminação"
    }, {
      tipo: "story",
      hora: "16:21",
      pagina: "Lumen Iluminação"
    }]
  }, {
    id: "carla-felippi",
    nome: "Carla Felippi Arquiteta",
    curto: "Carla Felippi Arquite…",
    data: "Jul 28",
    n: 4,
    canal: "instagram",
    avatar: "../../assets/imagery/camila-caicara.png",
    previa: "Olá, carlafelippi_arquiteta ! A Lume…",
    msgs: [{
      tipo: "out",
      hora: "09:12",
      texto: "Olá, carlafelippi_arquiteta! A Lumen Iluminação agradece a menção. Podemos te enviar o catálogo de luminárias?"
    }, {
      tipo: "in",
      hora: "09:40",
      texto: "Pode sim! Estou especificando um projeto na Riviera."
    }]
  }, {
    id: "club-design",
    nome: "Club Design Litoral Paulista",
    curto: "Club Design Litoral P…",
    data: "Jul 25",
    n: 1,
    canal: "instagram",
    avatar: "../../assets/photography/santos-jardins-da-orla.webp",
    previa: "",
    msgs: [{
      tipo: "in",
      hora: "14:02",
      texto: "Vocês atendem projeto comercial em Guarujá?"
    }]
  }, {
    id: "silvia",
    nome: "Silvia Brandao",
    curto: "Silvia Brandao",
    data: "Jul 23",
    n: 1,
    canal: "instagram",
    avatar: null,
    iniciais: "SB",
    previa: "Tenho certeza!",
    msgs: [{
      tipo: "in",
      hora: "11:30",
      texto: "Tenho certeza!"
    }]
  }];
  function Avatar({
    t,
    size = 34
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        flex: "0 0 " + size + "px",
        width: size,
        height: size
      }
    }, t.avatar ? /*#__PURE__*/React.createElement("img", {
      src: t.avatar,
      alt: "",
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--violet-500)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 600
      }
    }, t.iniciais), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: -2,
        left: -2,
        width: 15,
        height: 15,
        borderRadius: 4,
        background: "linear-gradient(45deg,#F9A03F,#E3286C 55%,#7A5EB3)",
        border: "2px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "instagram",
      size: 8,
      stroke: 2.6
    })));
  }
  function Conversas() {
    const [tab, setTab] = React.useState("Conversas");
    const [filtro, setFiltro] = React.useState("unread");
    const [sel, setSel] = React.useState(THREADS[0].id);
    const [draft, setDraft] = React.useState("");
    const [enviadas, setEnviadas] = React.useState({});
    const t = THREADS.find(x => x.id === sel);
    const extra = enviadas[sel] || [];
    const send = () => {
      if (!draft.trim()) return;
      setEnviadas({
        ...enviadas,
        [sel]: [...extra, {
          tipo: "out",
          hora: "agora",
          texto: draft
        }]
      });
      setDraft("");
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-8)",
        padding: "var(--space-5) var(--space-6) 0"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-3xl)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, "Conversas"), /*#__PURE__*/React.createElement(Tabs, {
      items: ["Conversas", "Ações manuais", "Trechos", "Links de acionamento"],
      value: tab,
      onChange: setTab,
      style: {
        border: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "300px 1fr 300px",
        flex: 1,
        minHeight: 0,
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        borderRight: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      size: "sm",
      value: filtro,
      onChange: setFiltro,
      items: [{
        value: "unread",
        label: "Unread"
      }, {
        value: "recents",
        label: "Recents"
      }, {
        value: "starred",
        label: "Starred"
      }, {
        value: "all",
        label: "All"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      placeholder: "Search",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 14
      }),
      wrapperStyle: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      label: "Filtrar",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "filter",
      size: 15
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Nova conversa",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "square-pen",
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--fs-overline)",
        letterSpacing: "var(--ls-wide)",
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, "4 RESULTS"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 3
      }
    }, "Latest-All ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 12
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        borderTop: "1px solid var(--border-subtle)"
      }
    }, THREADS.map(th => {
      const on = th.id === sel;
      return /*#__PURE__*/React.createElement("button", {
        key: th.id,
        onClick: () => setSel(th.id),
        style: {
          width: "100%",
          textAlign: "left",
          border: 0,
          cursor: "pointer",
          borderBottom: "1px solid var(--border-subtle)",
          borderLeft: "3px solid " + (on ? "var(--magenta-500)" : "transparent"),
          background: on ? "var(--surface-accent-soft)" : "var(--white)",
          padding: "var(--space-4)",
          display: "flex",
          gap: "var(--space-3)",
          alignItems: "flex-start",
          fontFamily: "var(--font-sans)",
          transition: "var(--transition-color)"
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        t: th
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "var(--fs-sm)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-heading)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, th.curto), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--text-muted)",
          whiteSpace: "nowrap"
        }
      }, th.data)), th.previa && /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          fontSize: "var(--fs-caption)",
          color: "var(--text-muted)",
          marginTop: 3,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, th.previa)), /*#__PURE__*/React.createElement(Badge, {
        count: th.n
      }));
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        background: "var(--white)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-4) var(--space-6)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: "var(--fs-lg)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, t.nome), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: "var(--space-1)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Favoritar",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 15
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Marcar como lida",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail-open",
      size: 15
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Excluir",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      size: 15
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Filtrar",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "list-filter",
      size: 15
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: "var(--space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "center",
        background: "var(--sand-100)",
        borderRadius: "var(--radius-pill)",
        padding: "4px 14px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)"
      }
    }, "29 jul 2026"), [...t.msgs, ...extra].map((m, i) => {
      if (m.tipo === "story") return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          gap: "var(--space-3)",
          alignItems: "flex-start",
          maxWidth: 620
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        t: t,
        size: 30
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "var(--fs-sm)",
          fontWeight: "var(--fw-medium)",
          color: "var(--text-heading)",
          marginBottom: 6
        }
      }, "Story Mention"), /*#__PURE__*/React.createElement("div", {
        style: {
          background: "var(--sand-100)",
          borderRadius: "var(--radius-sm)",
          padding: "var(--space-5) var(--space-4)"
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: "var(--fs-base)",
          fontWeight: "var(--fw-medium)",
          textDecoration: "none"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 16
      }), " Download file")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "var(--fs-caption)",
          color: "var(--text-muted)",
          marginTop: 6
        }
      }, m.hora, " | Instagram page: ", m.pagina)));
      const out = m.tipo === "out";
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: out ? "flex-end" : "flex-start",
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          padding: "var(--space-3) var(--space-4)",
          borderRadius: "var(--radius-md)",
          background: out ? "var(--violet-500)" : "var(--sand-100)",
          color: out ? "var(--sand-500)" : "var(--neutral-800)",
          fontSize: "var(--fs-sm)",
          lineHeight: "var(--lh-body)"
        }
      }, m.texto), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--text-muted)"
        }
      }, m.hora));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-4) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-6)",
        borderBottom: "1px solid var(--border-subtle)",
        paddingBottom: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-sm)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-accent)",
        borderBottom: "2px solid var(--magenta-500)",
        paddingBottom: "var(--space-3)",
        marginBottom: -13
      }
    }, "IG Messenger DM"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-sm)",
        color: "var(--text-muted)"
      }
    }, "Internal Comment"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minimize-2",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        padding: "var(--space-3) 0",
        fontSize: "var(--fs-sm)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-body)",
        fontWeight: "var(--fw-medium)"
      }
    }, "Page:"), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--sand-100)",
        borderRadius: "var(--radius-sm)",
        padding: "3px 10px",
        color: "var(--text-body)"
      }
    }, "Lumen Ilumina\xE7\xE3o")), /*#__PURE__*/React.createElement("textarea", {
      value: draft,
      onChange: e => setDraft(e.target.value),
      placeholder: "Type a message",
      rows: 2,
      style: {
        width: "100%",
        border: 0,
        outline: "none",
        resize: "none",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-sm)",
        lineHeight: "var(--lh-body)",
        color: "var(--field-fg)",
        background: "transparent",
        padding: "var(--space-2) 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, ["file-text", "paperclip", "smile", "dollar-sign", "plus"].map(ic => /*#__PURE__*/React.createElement("span", {
      key: ic,
      style: {
        color: "var(--text-muted)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      shape: "square",
      size: "sm",
      onClick: () => setDraft("")
    }, "Clear"), /*#__PURE__*/React.createElement(Button, {
      variant: "cyan",
      shape: "square",
      size: "sm",
      onClick: send
    }, "Send"))))), /*#__PURE__*/React.createElement("aside", {
      style: {
        borderLeft: "1px solid var(--border-subtle)",
        overflowY: "auto",
        background: "var(--white)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-3)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      t: t,
      size: 54
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)",
        textAlign: "center"
      }
    }, t.nome.length > 22 ? t.nome.slice(0, 22) + "…" : t.nome, /*#__PURE__*/React.createElement(Icon, {
      name: "external-link",
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        background: "var(--sand-100)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-2) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    })))), [["Contact", [["mail", "Email"], ["phone", "Phone"], ["user", "Owner (Assigned to)"], ["users", "Followers"]]], ["Tags", null], ["Active Automations", null]].map(([sec, rows]) => /*#__PURE__*/React.createElement("div", {
      key: sec,
      style: {
        padding: "var(--space-4) var(--space-5)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, sec, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 15
    }))), rows && rows.map(([ic, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-3) 0",
        borderBottom: "1px solid var(--border-subtle)",
        fontSize: "var(--fs-sm)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 15
    })), l, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: "var(--text-link)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4) var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)",
        marginBottom: "var(--space-3)"
      }
    }, "DND ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)"
      }
    }, "OFF")), [["bell-off", "DND All"], ["phone-off", "DND Calls & Voicemails"], ["message-square-off", "DND Text Messages"], ["mail-x", "DND Emails"]].map(([ic, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-2) 0",
        fontSize: "var(--fs-sm)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 15
    })), l, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      size: "sm",
      checked: false,
      onChange: () => {}
    }))))))));
  }
  Object.assign(window, {
    Conversas
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_caicara/Conversas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_caicara/Dashboard.jsx
try { (() => {
(() => {
  const {
    Card,
    Button,
    Badge,
    Tabs,
    Select
  } = window.CaiAraDesignSystem_096654;
  const KPI = [{
    t: "Opportunities",
    v: "5",
    rows: [["Closed", "1", "var(--success-500)"], ["Open", "4", "var(--warning-500)"], ["Lost", "0", "var(--danger-500)"]]
  }, {
    t: "Pipeline Value",
    v: "R$ 30,00",
    rows: [["Closed", "R$ 10,00", "var(--success-500)"], ["Open", "R$ 20,00", "var(--warning-500)"], ["Lost", "R$ 0,00", "var(--danger-500)"]]
  }, {
    t: "Conversion Rate",
    v: "20,00%",
    rows: [["Won", "1 de 5", "var(--success-500)"], ["Média 90d", "17,4%", "var(--text-muted)"], ["Meta", "25%", "var(--cyan-600)"]]
  }];
  const FUNNEL = [{
    l: "Novo lead",
    v: 48,
    c: "var(--data-2)"
  }, {
    l: "Contato feito",
    v: 31,
    c: "var(--data-3)"
  }, {
    l: "Proposta enviada",
    v: 14,
    c: "var(--data-1)"
  }, {
    l: "Fechado",
    v: 5,
    c: "var(--data-4)"
  }];
  const STAGES = [{
    l: "Facebook Leads",
    v: 34,
    c: "var(--data-1)"
  }, {
    l: "Instagram DM",
    v: 26,
    c: "var(--data-2)"
  }, {
    l: "Busca local",
    v: 21,
    c: "var(--data-3)"
  }, {
    l: "Indicação",
    v: 19,
    c: "var(--data-4)"
  }];
  function Donut({
    items
  }) {
    let acc = 0;
    const total = items.reduce((s, i) => s + i.v, 0);
    const stops = items.map(i => {
      const from = acc / total * 360;
      acc += i.v;
      return i.c + " " + from.toFixed(1) + "deg " + (acc / total * 360).toFixed(1) + "deg";
    }).join(", ");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150,
        height: 150,
        borderRadius: "50%",
        background: "conic-gradient(" + stops + ")",
        position: "relative",
        flex: "0 0 150px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 34,
        borderRadius: "50%",
        background: "var(--white)",
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-lg)",
        color: "var(--text-heading)"
      }
    }, total))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, items.map(i => /*#__PURE__*/React.createElement("div", {
      key: i.l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        fontSize: "var(--fs-sm)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 3,
        background: i.c,
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-body)"
      }
    }, i.l), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)"
      }
    }, i.v, "%")))));
  }
  function Dashboard() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-6) var(--space-8) 0"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "cyan",
      shape: "square",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 14
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layout-panel-left",
      size: 15
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-4xl)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)",
        letterSpacing: "var(--ls-tight)"
      }
    }, "Dashboard"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        height: "var(--field-height)",
        padding: "0 var(--space-4)",
        border: "1px solid var(--field-border)",
        borderRadius: "var(--radius-sm)",
        background: "var(--white)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        color: "var(--text-body)",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", null, "2026-08-01"), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 13
    }), /*#__PURE__*/React.createElement("span", null, "2026-08-31"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 14
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      shape: "square",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 15
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      shape: "square",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ellipsis-vertical",
      size: 15
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-3) var(--space-8) 0"
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        border: 0,
        background: "transparent",
        cursor: "pointer",
        color: "var(--text-link)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-sm)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), " Filtros r\xE1pidos")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-6) var(--space-8)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-6)"
      }
    }, KPI.map(k => /*#__PURE__*/React.createElement(Card, {
      key: k.t,
      variant: "portal",
      padding: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4) var(--space-5)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-medium)",
        color: "var(--text-heading)"
      }
    }, k.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-caption)",
        color: "var(--text-link)",
        fontFamily: "var(--font-mono)"
      }
    }, "ago 2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-8) var(--space-5) var(--space-5)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 44,
        fontWeight: "var(--fw-light)",
        color: "var(--text-heading)",
        lineHeight: 1,
        letterSpacing: "var(--ls-tight)"
      }
    }, k.v)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 var(--space-5) var(--space-5)",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, k.rows.map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--fs-sm)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: c
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--text-body)"
      }
    }, v))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "portal",
      padding: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4) var(--space-5)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-medium)",
        color: "var(--text-heading)"
      }
    }, "Funnel"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-sm)",
        color: "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, "Facebook Leads (5) ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 13
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-6) var(--space-5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      }
    }, FUNNEL.map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: f.l,
      style: {
        width: 100 - i * 18 + "%",
        background: f.c,
        color: "#fff",
        padding: "10px 0",
        textAlign: "center",
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-medium)",
        clipPath: "polygon(0 0, 100% 0, " + (100 - 5) + "% 100%, 5% 100%)"
      }
    }, f.l, " \xB7 ", f.v)))), /*#__PURE__*/React.createElement(Card, {
      variant: "portal",
      padding: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-4) var(--space-5)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-medium)",
        color: "var(--text-heading)"
      }
    }, "Stages Distribution"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-sm)",
        color: "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, "Origem do lead ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 13
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-6) var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Donut, {
      items: STAGES
    }))))));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_caicara/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_caicara/Shell.jsx
try { (() => {
(() => {
  const {
    Logo,
    Badge,
    IconButton,
    Tooltip
  } = window.CaiAraDesignSystem_096654;
  const RAIL = [{
    id: "launchpad",
    icon: "layout-dashboard",
    label: "Launchpad"
  }, {
    id: "busca",
    icon: "search",
    label: "Busca"
  }, {
    id: "ia",
    icon: "zap",
    label: "IA"
  }, {
    id: "dashboard",
    icon: "gauge",
    label: "Dashboard"
  }, {
    id: "conversas",
    icon: "message-circle",
    label: "Conversas"
  }, {
    id: "calendario",
    icon: "calendar",
    label: "Calendários"
  }, {
    id: "contatos",
    icon: "users",
    label: "Contatos"
  }, {
    id: "oportunidades",
    icon: "kanban",
    label: "Oportunidades"
  }, {
    id: "pagamentos",
    icon: "credit-card",
    label: "Pagamentos"
  }, {
    id: "automacoes",
    icon: "workflow",
    label: "Fluxos de trabalho"
  }, {
    id: "sites",
    icon: "layout-template",
    label: "Sites"
  }, {
    id: "midia",
    icon: "image",
    label: "Mídia"
  }, {
    id: "reputacao",
    icon: "star",
    label: "Reputação"
  }, {
    id: "relatorios",
    icon: "trending-up",
    label: "Relatórios"
  }, {
    id: "apps",
    icon: "grid-3x3",
    label: "Aplicativos"
  }];
  function Rail({
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        width: "var(--rail-width)",
        flex: "0 0 var(--rail-width)",
        background: "var(--deep-500)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "10px 0",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/caicara-horizontal-branco.png",
      alt: "Cai\xE7ara",
      style: {
        width: 40,
        marginBottom: 10,
        opacity: .95
      }
    }), RAIL.map(r => {
      const on = active === r.id;
      return /*#__PURE__*/React.createElement(Tooltip, {
        key: r.id,
        label: r.label,
        placement: "right"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => onNavigate(r.id),
        "aria-label": r.label,
        style: {
          width: 36,
          height: 32,
          border: 0,
          cursor: "pointer",
          borderRadius: "var(--radius-md)",
          background: on ? "var(--magenta-500)" : "transparent",
          color: on ? "#fff" : "rgba(253,248,242,.62)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "var(--transition-color)"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: r.icon,
        size: 17,
        stroke: 1.6
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        color: "rgba(253,248,242,.5)",
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 17,
      stroke: 1.6
    })));
  }
  function TopBar({
    children
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: "var(--topbar-height)",
        flex: "0 0 var(--topbar-height)",
        background: "var(--white)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "0 var(--space-5)"
      }
    }, children, /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)"
      }
    }, [["phone", "var(--success-500)"], ["sparkles", "var(--cyan-500)"], ["megaphone", "var(--violet-500)"], ["bell", "var(--warning-500)"], ["circle-help", "var(--cyan-600)"]].map(([ic, bg]) => /*#__PURE__*/React.createElement("span", {
      key: ic,
      style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: bg,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 15,
      stroke: 2
    }))), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/matheus-caicara.webp",
      alt: "",
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: 4
      }
    })));
  }
  Object.assign(window, {
    Rail,
    TopBar,
    RAIL
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_caicara/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Cases.jsx
try { (() => {
(() => {
  const {
    SectionHeading,
    Card,
    Badge,
    StatBlock,
    Button,
    Tabs,
    TestimonialCard
  } = window.CaiAraDesignSystem_096654;
  const CASES = [{
    cliente: "Lumen Iluminação",
    setor: "Varejo",
    img: "../../assets/photography/veleiros-oceano-azul.webp",
    titulo: "De um porto sem movimento a uma agenda cheia",
    resumo: "Reposicionamento da marca, gestão de Instagram e automação de WhatsApp para captar orçamentos direto do DM.",
    stats: [["+30%", "em vendas", "magenta"], ["3", "meses", "cyan"]],
    tags: ["Branding", "Mídias sociais", "Automações"]
  }, {
    cliente: "Food & Health",
    setor: "Alimentação funcional",
    img: "../../assets/photography/mar-na-praia.webp",
    titulo: "1.000 leads qualificados em uma campanha",
    resumo: "Meta Ads com criativos testados em ciclos semanais e formulário integrado ao Portal Caiçara.",
    stats: [["1.000+", "leads", "cyan"], ["-42%", "custo por lead", "magenta"]],
    tags: ["Meta Ads", "Landing page"]
  }, {
    cliente: "Pérola Azul",
    setor: "Locação · Riviera",
    img: "../../assets/photography/embarcacoes-marina.webp",
    titulo: "Ocupação alta fora da temporada",
    resumo: "SEO local, Perfil no Google otimizado e sequência de e-mails para hóspedes recorrentes.",
    stats: [["1º", "lugar na busca local", "violet"], ["+18%", "ocupação", "cyan"]],
    tags: ["SEO", "Perfil no Google"]
  }, {
    cliente: "Alinah Prol Nutricionista",
    setor: "Saúde",
    img: "../../assets/photography/santos-jardins-da-orla.webp",
    titulo: "Autoridade construída com conteúdo de resposta",
    resumo: "Linha editorial Caiçara Responde adaptada: cada dúvida de consulta virou pauta de post e artigo.",
    stats: [["+3x", "alcance orgânico", "magenta"], ["12", "pautas/mês", "cyan"]],
    tags: ["Conteúdo", "BOT Criativo"]
  }];
  function Cases() {
    const [f, setF] = React.useState("Todos");
    const shown = f === "Todos" ? CASES : CASES.filter(c => c.tags.includes(f));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-20) var(--container-gutter) var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "Hist\xF3rias \xE0 beira-mar",
      title: "Resultado \xE9 o que",
      emphasis: "sustenta a conversa",
      lead: "N\xFAmeros reais de clientes reais. Quando a Cai\xE7ara assume o tim\xE3o, a rota fica vis\xEDvel no painel."
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter) var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      items: ["Todos", "Branding", "Meta Ads", "SEO", "Conteúdo", "Automações"],
      value: f,
      onChange: setF
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        marginTop: "var(--space-8)"
      }
    }, shown.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.cliente,
      padding: "0",
      interactive: true,
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        minHeight: 220,
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-8)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-overline)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, c.cliente), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)"
      }
    }, "\xB7 ", c.setor)), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-3xl)",
        fontWeight: "var(--fw-bold)",
        lineHeight: "var(--lh-snug)",
        letterSpacing: "var(--ls-tight)",
        color: "var(--text-heading)"
      }
    }, c.titulo), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--fs-sm)",
        lineHeight: "var(--lh-body)",
        color: "var(--text-body)",
        maxWidth: 560
      }
    }, c.resumo), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-10)",
        marginTop: "var(--space-3)"
      }
    }, c.stats.map(([v, l, a]) => /*#__PURE__*/React.createElement(StatBlock, {
      key: l,
      size: "md",
      accent: a,
      value: v,
      label: l
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        marginTop: "var(--space-4)",
        flexWrap: "wrap"
      }
    }, c.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      tone: "neutral"
    }, t))))))))));
  }
  Object.assign(window, {
    Cases
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Contato.jsx
try { (() => {
(() => {
  const {
    SectionHeading,
    Card,
    Button,
    Input,
    Textarea,
    Select,
    Checkbox,
    Toast,
    WaterlineRule
  } = window.CaiAraDesignSystem_096654;
  function Contato() {
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({
      nome: "",
      email: "",
      whats: "",
      servico: "",
      msg: "",
      ok: true
    });
    const set = k => e => setForm({
      ...form,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    });
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-20) var(--container-gutter) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: "var(--space-16)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "Contato",
      title: "Vamos conversar sobre",
      emphasis: "a sua rota",
      lead: "Conte onde voc\xEA est\xE1 e onde quer chegar. A gente responde em at\xE9 um dia \xFAtil \u2014 sempre uma pessoa, nunca um rob\xF4."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        marginTop: "var(--space-10)"
      }
    }, [["message-circle", "WhatsApp", "(13) 97806-2772"], ["mail", "E-mail", "contato@caicaramarketing.com.br"], ["map-pin", "Onde estamos", "Santos · São Paulo · Brasil"], ["instagram", "Instagram", "@caicaramarketing"]].map(([ic, t, v]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "var(--surface-cyan-soft)",
        color: "var(--cyan-600)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 40px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-medium)",
        color: "var(--text-heading)"
      }
    }, v))))), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photography/santos-mureta.webp",
      alt: "Muretas de Santos",
      style: {
        width: "100%",
        height: 200,
        objectFit: "cover",
        borderRadius: "var(--radius-lg)",
        borderBottomRightRadius: "var(--radius-sail)",
        marginTop: "var(--space-10)",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "0",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(WaterlineRule, null), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-8)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      title: "Mensagem enviada",
      message: "A tripula\xE7\xE3o responde em at\xE9 um dia \xFAtil. Enquanto isso, d\xE1 uma olhada nos cases.",
      style: {
        boxShadow: "none",
        border: "1px solid var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setSent(false)
    }, "Enviar outra mensagem")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-3xl)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)",
        letterSpacing: "var(--ls-tight)"
      }
    }, "Tra\xE7ar a rota"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "var(--space-2) 0 0",
        fontSize: "var(--fs-sm)",
        color: "var(--text-body)"
      }
    }, "Leva dois minutos. Sem campo obrigat\xF3rio in\xFAtil.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Seu nome",
      placeholder: "Como podemos te chamar?",
      value: form.nome,
      onChange: set("nome")
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Empresa",
      placeholder: "Nome do neg\xF3cio"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "E-mail",
      placeholder: "voce@empresa.com.br",
      value: form.email,
      onChange: set("email")
    }), /*#__PURE__*/React.createElement(Input, {
      label: "WhatsApp",
      placeholder: "(13) 90000-0000",
      value: form.whats,
      onChange: set("whats")
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Servi\xE7o de interesse",
      placeholder: "Escolha uma rota",
      value: form.servico,
      onChange: set("servico"),
      options: ["Gestão de mídias sociais", "Google Ads e Meta Ads", "Branding e identidade", "Automações e mensageria", "Perfil no Google", "BOT Criativo", "Ainda não sei"]
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Onde voc\xEA quer chegar?",
      rows: 4,
      placeholder: "Conte o que est\xE1 travando o crescimento hoje.",
      value: form.msg,
      onChange: set("msg")
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Quero receber a Mar\xE9 Digital",
      description: "Uma newsletter por m\xEAs com tend\xEAncias do mercado. Sem enrola\xE7\xE3o.",
      checked: form.ok,
      onChange: set("ok")
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: () => setSent(true)
    }, "Enviar mensagem"))))));
  }
  Object.assign(window, {
    Contato
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Contato.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Footer.jsx
try { (() => {
(() => {
  const {
    Logo,
    WaterlineRule
  } = window.CaiAraDesignSystem_096654;
  const COLS = [{
    title: "Serviços",
    links: ["Gestão de mídias sociais", "Google Ads e Meta Ads", "Branding e identidade", "Automações e mensageria", "Perfil no Google"]
  }, {
    title: "A Caiçara",
    links: ["Quem somos", "Método PEMD", "BOT Criativo", "Cases", "Maré Digital"]
  }, {
    title: "Conteúdo",
    links: ["Caiçara Responde", "Dicas do Capitão", "Histórias à Beira-Mar", "Por Dentro da Caiçara"]
  }];
  function Footer({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      className: "on-deep",
      style: {
        background: "var(--gradient-deep)",
        position: "relative",
        marginTop: "var(--space-24)"
      }
    }, /*#__PURE__*/React.createElement(WaterlineRule, null), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-16) var(--container-gutter) var(--space-8)",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: "var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-light",
      height: 32,
      base: "../.."
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--fs-sm)",
        lineHeight: "var(--lh-body)",
        color: "rgba(253,248,242,.7)",
        maxWidth: 300
      }
    }, "Seu porto seguro no marketing digital. Estrat\xE9gia, cria\xE7\xE3o e automa\xE7\xE3o para PMEs de Santos e do litoral de S\xE3o Paulo."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        marginTop: "var(--space-2)"
      }
    }, ["instagram", "linkedin", "youtube", "facebook"].map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => e.preventDefault(),
      "aria-label": n,
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "1px solid rgba(253,248,242,.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(253,248,242,.8)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 16
    }))))), COLS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.title,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-overline)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--cyan-300)"
      }
    }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("servicos");
      },
      style: {
        fontSize: "var(--fs-sm)",
        color: "rgba(253,248,242,.72)",
        textDecoration: "none"
      }
    }, l))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-6) var(--container-gutter)",
        borderTop: "1px solid rgba(253,248,242,.12)",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "var(--space-4)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        color: "rgba(253,248,242,.55)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "caicaramarketing.com.br \xB7 (13) 97806-2772 \xB7 Santos, SP"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Cai\xE7ara Marketing Digital Estrat\xE9gico")));
  }
  Object.assign(window, {
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Home.jsx
try { (() => {
(() => {
  const {
    PhotoHero,
    SectionHeading,
    ServiceCard,
    StatBlock,
    TestimonialCard,
    CTAPanel,
    Button,
    Card,
    Badge,
    WaterlineRule
  } = window.CaiAraDesignSystem_096654;
  const SERVICES = [{
    icon: "trending-up",
    title: "Google Ads e Meta Ads",
    desc: "Campanhas otimizadas para reduzir o custo por lead e levar o anúncio certo para a pessoa certa.",
    meta: "Relatório mensal · KPIs claros",
    accent: "magenta"
  }, {
    icon: "instagram",
    title: "Gestão de mídias sociais",
    desc: "Conteúdo com foco em engajamento e construção de comunidade, no seu tom de voz.",
    meta: "Calendário editorial · 5 linhas",
    accent: "cyan"
  }, {
    icon: "compass",
    title: "Branding e identidade",
    desc: "Posicionamento, identidade visual e narrativa — a marca que sustenta a performance.",
    meta: "Bússola de posicionamento",
    accent: "violet"
  }, {
    icon: "workflow",
    title: "Automações e mensageria",
    desc: "WhatsApp, Instagram DM, e-mail e SMS conversando no mesmo painel, sem lead esquecido.",
    meta: "Portal Caiçara",
    accent: "cyan"
  }, {
    icon: "map-pin",
    title: "Perfil no Google",
    desc: "Otimização do Perfil da Empresa para quem busca serviço perto de casa, em Santos e região.",
    meta: "Busca local · avaliações",
    accent: "magenta"
  }, {
    icon: "sparkles",
    title: "BOT Criativo",
    desc: "Um assistente de IA configurado com o Guia Estratégico da sua marca: produz no seu tom, em escala.",
    meta: "5 pilares · setup em 2 etapas",
    accent: "violet"
  }];
  function Home({
    onNavigate,
    onOpenDialog
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PhotoHero, {
      imageSrc: "../../assets/photography/farol-ao-por-do-sol.webp",
      overline: "Santos \xB7 SP \xB7 Brasil",
      title: "Seu porto seguro no",
      emphasis: "marketing digital",
      lead: "Estrat\xE9gias personalizadas e amparadas em IA para PMEs que querem crescer no litoral \u2014 e al\xE9m. Branding e performance no mesmo plano.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        onClick: onOpenDialog
      }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        variant: "outline",
        onClick: () => onNavigate("cases")
      }, "Ver cases"))
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-16) var(--container-gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-12)",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: "+30%",
      label: "em vendas",
      note: "em 3 meses \xB7 varejo local"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      accent: "cyan",
      value: "1.000+",
      label: "leads qualificados",
      note: "em uma \xFAnica campanha"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      accent: "violet",
      value: "4",
      label: "etapas do m\xE9todo PEMD",
      note: "do diagn\xF3stico ao destino"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "13",
      label: "DDD de origem",
      note: "nascida em Santos, atende o Brasil"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "Servi\xE7os",
      title: "Tudo que o seu neg\xF3cio precisa para",
      emphasis: "navegar longe",
      lead: "Marca sem resultado \xE9 enfeite. Resultado sem marca n\xE3o se sustenta. Aqui os dois andam juntos."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-6)",
        marginTop: "var(--space-12)"
      }
    }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
      key: s.title,
      accent: s.accent,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: s.icon,
        size: 22
      }),
      title: s.title,
      description: s.desc,
      meta: s.meta,
      onClick: () => onNavigate("servicos")
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--section-y) var(--container-gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: "var(--space-16)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photography/bussola.webp",
      alt: "B\xFAssola sobre carta n\xE1utica",
      style: {
        width: "100%",
        height: 420,
        objectFit: "cover",
        borderRadius: "var(--radius-lg)",
        borderTopLeftRadius: "var(--radius-sail)",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "M\xE9todo PEMD",
      title: "Do diagn\xF3stico ao destino, em quatro etapas",
      lead: "Nada de pacote gen\xE9rico. Antes de propor qualquer coisa, a gente mergulha fundo para entender onde voc\xEA est\xE1."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        marginTop: "var(--space-8)"
      }
    }, [["Setup", "Acessos, ferramentas e medição no lugar. Sem dado, não há rota."], ["Onde estamos", "Diagnóstico honesto de marca, presença e funil."], ["Para onde vamos", "Metas, personas e a definição do que é sucesso."], ["Como vamos chegar lá", "O plano de 90 dias, com responsáveis e prazos."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 32px",
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: i === 0 ? "var(--magenta-500)" : "var(--surface-accent-soft)",
        color: i === 0 ? "#fff" : "var(--magenta-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        fontWeight: 500
      }
    }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-sm)",
        color: "var(--text-body)",
        lineHeight: "var(--lh-body)",
        marginTop: 2
      }
    }, d))))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        marginTop: "var(--space-8)"
      },
      onClick: () => onNavigate("metodo")
    }, "Conhecer o m\xE9todo")))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "Hist\xF3rias \xE0 beira-mar",
      title: "Quem j\xE1 i\xE7ou as velas com a gente",
      align: "center"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-6)",
        marginTop: "var(--space-12)",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(TestimonialCard, {
      quote: "Est\xE1vamos navegando em \xE1guas turbulentas. Em tr\xEAs meses, a agenda encheu.",
      author: "Camila Prol",
      role: "Lumen Ilumina\xE7\xE3o",
      avatarSrc: "../../assets/imagery/camila-caicara.png"
    }), /*#__PURE__*/React.createElement(TestimonialCard, {
      variant: "deep",
      align: "right",
      quote: "O trabalho em equipe \xE9 a chave para alcan\xE7ar grandes conquistas.",
      author: "Equipe Cai\xE7ara"
    }), /*#__PURE__*/React.createElement(TestimonialCard, {
      quote: "Pela primeira vez eu sei exatamente para onde vai cada real investido.",
      author: "Matheus Prol",
      role: "Food & Health",
      avatarSrc: "../../assets/imagery/matheus-caicara.webp"
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--section-y) var(--container-gutter) 0"
      }
    }, /*#__PURE__*/React.createElement(CTAPanel, {
      overline: "Vamos navegar",
      title: "Pronto para i\xE7ar as velas?",
      lead: "Um diagn\xF3stico de 30 minutos e voc\xEA sai com a rota dos pr\xF3ximos 90 dias. Sem compromisso, sem jarg\xE3o.",
      primary: {
        label: "Agendar diagnóstico",
        onClick: onOpenDialog
      },
      secondary: {
        label: "Falar no WhatsApp"
      },
      imageSrc: "../../assets/photography/farol-aceso-ceu-estrelado.webp"
    })));
  }
  Object.assign(window, {
    Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Icons.jsx
try { (() => {
// Ícones Lucide (substituição sinalizada — ver readme.md §6).
// Nada é desenhado à mão: os paths vêm do pacote lucide carregado por CDN.
(() => {
  function Icon({
    name,
    size = 20,
    stroke = 1.75,
    color,
    style
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const L = window.lucide;
      const host = ref.current;
      if (!L || !host) return;
      const key = name.split("-").map(p => p[0].toUpperCase() + p.slice(1)).join("");
      host.innerHTML = "";
      const node = L.icons && (L.icons[key] || L.icons[name]);
      if (node && L.createElement) {
        const el = L.createElement(node);
        el.setAttribute("width", size);
        el.setAttribute("height", size);
        el.setAttribute("stroke-width", stroke);
        host.appendChild(el);
      } else {
        const ph = document.createElement("i");
        ph.setAttribute("data-lucide", name);
        ph.setAttribute("width", size);
        ph.setAttribute("height", size);
        host.appendChild(ph);
        L.createIcons && L.createIcons({
          attrs: {
            width: size,
            height: size,
            "stroke-width": stroke
          }
        });
      }
    }, [name, size, stroke]);
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      style: {
        display: "inline-flex",
        lineHeight: 0,
        color: color || "currentColor",
        ...style
      }
    });
  }
  Object.assign(window, {
    Icon
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Metodo.jsx
try { (() => {
(() => {
  const {
    SectionHeading,
    Card,
    Button,
    Badge,
    StatBlock,
    CTAPanel,
    WaterlineRule
  } = window.CaiAraDesignSystem_096654;
  const STEPS = [{
    n: "01",
    t: "Setup",
    d: "Acessos, ferramentas e medição no lugar. Instalamos o que falta e ligamos o painel — sem dado confiável não existe rota.",
    out: "Painel de métricas ativo",
    img: "../../assets/photography/ancora-na-proa.webp"
  }, {
    n: "02",
    t: "Onde estamos",
    d: "Diagnóstico honesto de marca, presença digital e funil. Mergulhamos fundo, inclusive no que não está funcionando.",
    out: "Diagnóstico + benchmark",
    img: "../../assets/photography/bussola.webp"
  }, {
    n: "03",
    t: "Para onde vamos",
    d: "Metas, personas e a definição clara do que é sucesso nos próximos 90 dias. Você aprova antes de a gente executar.",
    out: "Bússola de posicionamento",
    img: "../../assets/photography/mapa-navegacao-estilizado.webp"
  }, {
    n: "04",
    t: "Como vamos chegar lá",
    d: "O plano com responsáveis, prazos e orçamento. Depois é execução, medição e ajuste de vela conforme o vento.",
    out: "Plano de 90 dias",
    img: "../../assets/photography/veleiro-vela-vermelha.webp"
  }];
  const PERSONAS = [{
    t: "O Empreendedor Visionário",
    q: "Tem uma ideia brilhante, mas precisa de um mapa para navegar até o tesouro.",
    icon: "rocket",
    accent: "magenta"
  }, {
    t: "O Comerciante Local",
    q: "Quer atrair mais clientes para a loja, mas se sente preso em um porto sem movimento.",
    icon: "store",
    accent: "cyan"
  }, {
    t: "O Prestador de Serviços",
    q: "Oferece um serviço de qualidade, mas precisa de um farol para ser visto em meio à multidão.",
    icon: "lightbulb",
    accent: "violet"
  }];
  function Metodo({
    onOpenDialog
  }) {
    const [open, setOpen] = React.useState("01");
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-20) var(--container-gutter) var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "M\xE9todo PEMD",
      title: "Do diagn\xF3stico ao destino:",
      emphasis: "um mapa completo",
      lead: "O PEMD \xE9 o jeito Cai\xE7ara de trabalhar. Quatro etapas, na ordem, sempre \u2014 porque plano sem diagn\xF3stico \xE9 chute com apresenta\xE7\xE3o bonita."
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter) var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, STEPS.map(s => {
      const on = open === s.n;
      return /*#__PURE__*/React.createElement(Card, {
        key: s.n,
        padding: "0",
        interactive: true,
        onClick: () => setOpen(s.n),
        style: {
          overflow: "hidden",
          borderColor: on ? "var(--magenta-200)" : undefined
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "stretch"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 96px",
          background: on ? "var(--gradient-deep)" : "var(--surface-card-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fs-2xl)",
          color: on ? "var(--sand-500)" : "var(--text-muted)"
        }
      }, s.n), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          padding: "var(--space-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "var(--space-4)"
        }
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          margin: 0,
          fontSize: "var(--fs-xl)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-heading)",
          letterSpacing: "var(--ls-tight)"
        }
      }, s.t), /*#__PURE__*/React.createElement(Badge, {
        tone: on ? "magenta" : "neutral"
      }, s.out), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: "auto",
          color: "var(--text-muted)",
          transform: on ? "rotate(180deg)" : "none",
          transition: "transform var(--dur-base) var(--ease-out)"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 18
      }))), on && /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: "var(--fs-base)",
          lineHeight: "var(--lh-body)",
          color: "var(--text-body)",
          maxWidth: 680
        }
      }, s.d)), on && /*#__PURE__*/React.createElement("img", {
        src: s.img,
        alt: "",
        style: {
          flex: "0 0 200px",
          width: 200,
          objectFit: "cover",
          display: "block"
        }
      })));
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "Para quem",
      title: "Tr\xEAs tripula\xE7\xF5es, um litoral",
      lead: "A Cai\xE7ara nasceu para PMEs de Santos e da Baixada. Se voc\xEA se reconhece em uma destas descri\xE7\xF5es, a conversa vai render."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-6)",
        marginTop: "var(--space-12)"
      }
    }, PERSONAS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.t,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "var(--radius-md)",
        background: p.accent === "cyan" ? "var(--surface-cyan-soft)" : p.accent === "violet" ? "var(--surface-violet-soft)" : "var(--surface-accent-soft)",
        color: p.accent === "cyan" ? "var(--cyan-600)" : p.accent === "violet" ? "var(--violet-600)" : "var(--magenta-600)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: "var(--fs-lg)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, p.t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-lg)",
        fontStyle: "italic",
        lineHeight: "var(--lh-heading)",
        color: "var(--violet-600)"
      }
    }, "\u201C", p.q, "\u201D")))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--section-y) var(--container-gutter) 0"
      }
    }, /*#__PURE__*/React.createElement(CTAPanel, {
      overline: "Setup",
      title: "A primeira etapa \xE9 uma conversa",
      lead: "30 minutos para entender onde voc\xEA est\xE1. Se n\xE3o fizer sentido, a gente diz na hora.",
      primary: {
        label: "Agendar diagnóstico",
        onClick: onOpenDialog
      },
      sailCorner: "bl",
      imageSrc: "../../assets/photography/capitao-e-tripulante.webp"
    })));
  }
  Object.assign(window, {
    Metodo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Metodo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_institucional/Servicos.jsx
try { (() => {
(() => {
  const {
    SectionHeading,
    ServiceCard,
    Card,
    Button,
    Badge,
    Tabs,
    WaterlineRule
  } = window.CaiAraDesignSystem_096654;
  const PACKS = [{
    name: "Farol",
    tag: "Presença",
    price: "a partir de R$ 1.490/mês",
    items: ["Gestão de 2 redes sociais", "12 peças por mês", "Perfil no Google otimizado", "Relatório mensal"],
    accent: "cyan"
  }, {
    name: "Bússola",
    tag: "Presença + Performance",
    price: "a partir de R$ 2.890/mês",
    items: ["Tudo do Farol", "Google Ads e Meta Ads", "Landing page de captação", "Automação de WhatsApp", "Reunião estratégica quinzenal"],
    accent: "magenta",
    featured: true
  }, {
    name: "Leme",
    tag: "Operação completa",
    price: "sob consulta",
    items: ["Tudo da Bússola", "BOT Criativo configurado", "Portal Caiçara com mensageria", "Branding e identidade visual", "Squad dedicado"],
    accent: "violet"
  }];
  function Servicos({
    onOpenDialog
  }) {
    const [tab, setTab] = React.useState("Todos");
    const all = [{
      icon: "trending-up",
      cat: "Performance",
      title: "Google Ads e Meta Ads",
      desc: "Estruturação de campanha, criativos e otimização semanal para reduzir o custo por lead.",
      meta: "Performance",
      accent: "magenta"
    }, {
      icon: "instagram",
      cat: "Conteúdo",
      title: "Gestão de mídias sociais",
      desc: "Linha editorial, calendário e produção. As 5 linhas da Caiçara adaptadas ao seu negócio.",
      meta: "Conteúdo",
      accent: "cyan"
    }, {
      icon: "compass",
      cat: "Marca",
      title: "Branding e identidade",
      desc: "Bússola de posicionamento, arquétipos, tom de voz e identidade visual completa.",
      meta: "Marca",
      accent: "violet"
    }, {
      icon: "workflow",
      cat: "Automação",
      title: "Automações e mensageria",
      desc: "Fluxos de resposta, distribuição de leads e follow-up automático em todos os canais.",
      meta: "Automação",
      accent: "cyan"
    }, {
      icon: "map-pin",
      cat: "Performance",
      title: "Perfil no Google",
      desc: "Ficha completa, fotos, categorias e gestão de avaliações para busca local.",
      meta: "Performance",
      accent: "magenta"
    }, {
      icon: "sparkles",
      cat: "Automação",
      title: "BOT Criativo",
      desc: "Assistente de IA treinado no Guia Estratégico da sua marca — conteúdo em escala, no seu tom.",
      meta: "Automação",
      accent: "violet"
    }, {
      icon: "search",
      cat: "Performance",
      title: "SEO e conteúdo de blog",
      desc: "Pauta baseada nas dúvidas reais do seu cliente. They Ask, You Answer aplicado.",
      meta: "Performance",
      accent: "cyan"
    }, {
      icon: "presentation",
      cat: "Marca",
      title: "Consultoria estratégica",
      desc: "Método PEMD aplicado ao seu negócio, com plano de 90 dias e acompanhamento.",
      meta: "Marca",
      accent: "magenta"
    }];
    const shown = tab === "Todos" ? all : all.filter(s => s.cat === tab);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-20) var(--container-gutter) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      overline: "Servi\xE7os",
      title: "Escolha a rota. A gente",
      emphasis: "assume o tim\xE3o",
      lead: "Cada servi\xE7o existe para resolver uma dor concreta que ouvimos de comerciantes, prestadores e empreendedores do litoral."
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter) var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: ["Todos", "Performance", "Conteúdo", "Marca", "Automação"],
      value: tab,
      onChange: setTab
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-6)",
        marginTop: "var(--space-8)"
      }
    }, shown.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
      key: s.title,
      accent: s.accent,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: s.icon,
        size: 22
      }),
      title: s.title,
      description: s.desc,
      meta: s.meta
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page-alt)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "center",
      overline: "Pacotes",
      title: "Tr\xEAs embarca\xE7\xF5es, o mesmo destino",
      lead: "Comece pelo que cabe agora. Trocar de pacote \xE9 conversa, n\xE3o contrato novo."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-6)",
        marginTop: "var(--space-12)",
        alignItems: "stretch"
      }
    }, PACKS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.name,
      padding: "0",
      style: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: p.featured ? "2px solid var(--magenta-500)" : undefined,
        boxShadow: p.featured ? "var(--shadow-lg)" : undefined
      }
    }, p.featured && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: "var(--gradient-brand)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-8)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-3xl)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, p.name), /*#__PURE__*/React.createElement(Badge, {
      tone: p.accent
    }, p.tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-sm)",
        color: "var(--text-accent)"
      }
    }, p.price), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        flex: 1,
        marginTop: "var(--space-2)"
      }
    }, p.items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        fontSize: "var(--fs-sm)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cyan-500)",
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    })), it))), /*#__PURE__*/React.createElement(Button, {
      variant: p.featured ? "primary" : "outline",
      fullWidth: true,
      onClick: onOpenDialog,
      style: {
        marginTop: "var(--space-4)"
      }
    }, p.featured ? "Começar pela Bússola" : "Falar sobre o " + p.name))))))));
  }
  Object.assign(window, {
    Servicos
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_institucional/Servicos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social_kit/Templates.jsx
try { (() => {
(() => {
  const {
    Logo,
    Badge,
    WaterlineRule
  } = window.CaiAraDesignSystem_096654;
  const HANDLE = "@caicaramarketing";

  // 1 · Citação — o template real publicado no feed (violeta cheio, canto vela,
  //     Poppins 700 alinhado à direita).
  function QuoteCard({
    text = "O trabalho em equipe é a chave para alcançar grandes conquistas.",
    size = 420
  }) {
    const r = size * 0.22;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        background: "var(--white)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        right: "6%",
        bottom: "13%",
        background: "var(--violet-600)",
        borderTopRightRadius: r,
        borderBottomLeftRadius: r
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        right: "6%",
        bottom: "13%",
        padding: size * 0.08 + "px " + size * 0.075 + "px",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: size * 0.16,
        lineHeight: 0.62,
        color: "rgba(253,248,242,.42)"
      }
    }, "\u201C"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "auto 0 0",
        fontSize: size * 0.074,
        fontWeight: 700,
        lineHeight: 1.18,
        letterSpacing: "-0.015em",
        color: "var(--sand-500)",
        textAlign: "right",
        textWrap: "pretty"
      }
    }, text), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: size * 0.16,
        lineHeight: 0.62,
        color: "rgba(253,248,242,.42)",
        alignSelf: "flex-end",
        marginTop: size * 0.05
      }
    }, "\u201D")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "13%",
        padding: "0 " + size * 0.06 + "px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.032,
        fontWeight: 600,
        color: "var(--violet-600)"
      }
    }, HANDLE), /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-dark",
      height: size * 0.062,
      base: "../.."
    })));
  }

  // 2 · Foto com véu — herói de post, foto náutica real + scrim.
  function PhotoPost({
    img = "../../assets/photography/farol-ao-por-do-sol.webp",
    overline = "Dicas do Capitão",
    title = "Sem farol, o cliente não te encontra.",
    size = 420
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        position: "relative",
        overflow: "hidden",
        background: "var(--deep-500)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--scrim-bottom)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "100%",
        padding: "8%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: size * 0.03
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--cyan-300)"
      }
    }, overline), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: size * 0.088,
        fontWeight: 700,
        lineHeight: 1.08,
        letterSpacing: "-0.03em",
        color: "var(--sand-500)",
        textWrap: "balance"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: size * 0.02
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        color: "rgba(253,248,242,.72)"
      }
    }, HANDLE), /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-light",
      height: size * 0.058,
      base: "../.."
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 4,
        background: "var(--gradient-brand)"
      }
    }));
  }

  // 3 · Capa de carrossel — areia, textura de pixel, número grande.
  function CarouselCover({
    n = "05",
    overline = "Caiçara Responde",
    title = "erros de anúncio que queimam o seu orçamento",
    size = 420
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        background: "var(--surface-page)",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "var(--texture-pixel)",
        backgroundSize: "var(--texture-pixel-size)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        background: "var(--gradient-brand)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8%",
        height: "calc(100% - 4px)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: size * 0.02
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--text-accent)"
      }
    }, overline), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: size * 0.32,
        fontWeight: 700,
        lineHeight: 0.85,
        letterSpacing: "-0.04em",
        background: "var(--gradient-text)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, n), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: size * 0.062,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.015em",
        color: "var(--text-heading)",
        textWrap: "pretty"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        color: "var(--text-muted)"
      }
    }, "arraste \u2192"), /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-dark",
      height: size * 0.058,
      base: "../.."
    }))));
  }

  // 4 · Card de resultado — prova em número, fundo deep.
  function ResultCard({
    value = "+30%",
    label = "em vendas",
    note = "em 3 meses · varejo local em Santos",
    size = 420
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "on-deep",
      style: {
        width: size,
        height: size,
        background: "var(--gradient-deep)",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "var(--texture-pixel-on-deep)",
        backgroundSize: "var(--texture-pixel-size)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--gradient-deep)",
        opacity: .92
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "100%",
        padding: "9%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: size * 0.015
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--cyan-300)"
      }
    }, "Hist\xF3rias \xE0 beira-mar"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: size * 0.26,
        fontWeight: 700,
        lineHeight: 0.9,
        letterSpacing: "-0.04em",
        color: "var(--magenta-400)"
      }
    }, value), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.072,
        fontWeight: 600,
        color: "var(--sand-500)",
        letterSpacing: "-0.015em"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: size * 0.03,
        color: "rgba(253,248,242,.6)"
      }
    }, note), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        color: "rgba(253,248,242,.7)"
      }
    }, HANDLE), /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-light",
      height: size * 0.058,
      base: "../.."
    }))));
  }

  // 5 · Card de serviço — branco, ícone próprio da marca.
  function ServicePost({
    iconSrc = "../../assets/icons/compass.svg",
    title = "Consultoria estratégica",
    bullets = ["Diagnóstico honesto", "Bússola de posicionamento", "Plano de 90 dias"],
    size = 420
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        background: "var(--white)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8% 8% 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: size * 0.035
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: iconSrc,
      alt: "",
      style: {
        width: size * 0.16,
        height: size * 0.16
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: size * 0.1,
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "var(--text-heading)"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: size * 0.022
      }
    }, bullets.map(b => /*#__PURE__*/React.createElement("span", {
      key: b,
      style: {
        display: "flex",
        gap: size * 0.022,
        alignItems: "center",
        fontSize: size * 0.042,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: size * 0.016,
        height: size * 0.016,
        borderRadius: "50%",
        background: "var(--cyan-500)",
        display: "block",
        flex: "0 0 auto"
      }
    }), b)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8% 8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: size * 0.028,
        fontWeight: 600,
        color: "var(--text-muted)"
      }
    }, HANDLE), /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-dark",
      height: size * 0.058,
      base: "../.."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        background: "var(--gradient-brand)"
      }
    }));
  }

  // 6 · Story 9:16
  function StoryCard({
    img = "../../assets/photography/veleiro-vela-vermelha.webp",
    title = "Vamos içar as velas do seu negócio?",
    w = 260
  }) {
    const h = w * 16 / 9;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: w,
        height: h,
        position: "relative",
        overflow: "hidden",
        background: "var(--deep-500)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--scrim-full)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "100%",
        padding: "10% 8%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-light",
      height: w * 0.1,
      base: "../.."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: w * 0.04
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: w * 0.045,
        fontWeight: 600,
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--cyan-300)"
      }
    }, "Tend\xEAncias da Mar\xE9"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: w * 0.135,
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "var(--sand-500)"
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-start",
        background: "var(--magenta-500)",
        color: "#fff",
        borderRadius: "var(--radius-pill)",
        padding: w * 0.035 + "px " + w * 0.075 + "px",
        fontSize: w * 0.05,
        fontWeight: 600
      }
    }, "Arraste para cima"))));
  }

  // 7 · Capa de vídeo / YouTube 16:9
  function VideoCover({
    img = "../../assets/photography/farol-resistindo-ondas.webp",
    title = "Como sobreviver ao algoritmo",
    ep = "EP 04",
    w = 480
  }) {
    const h = w * 9 / 16;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: w,
        height: h,
        position: "relative",
        overflow: "hidden",
        background: "var(--deep-500)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(19,10,37,.94) 0%, rgba(19,10,37,.72) 46%, rgba(19,10,37,0) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "100%",
        padding: "6%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: w * 0.02,
        maxWidth: "62%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: w * 0.026,
        color: "var(--cyan-300)"
      }
    }, ep, " \xB7 Dicas do Capit\xE3o"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: w * 0.088,
        fontWeight: 700,
        lineHeight: 1.02,
        letterSpacing: "-0.035em",
        color: "var(--sand-500)"
      }
    }, title), /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal-light",
      height: w * 0.05,
      base: "../..",
      style: {
        marginTop: w * 0.02
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 4,
        background: "var(--gradient-brand)"
      }
    }));
  }
  Object.assign(window, {
    QuoteCard,
    PhotoPost,
    CarouselCover,
    ResultCard,
    ServicePost,
    StoryCard,
    VideoCover
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social_kit/Templates.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.WaterlineRule = __ds_scope.WaterlineRule;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CTAPanel = __ds_scope.CTAPanel;

__ds_ns.PhotoHero = __ds_scope.PhotoHero;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
