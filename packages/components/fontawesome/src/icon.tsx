import type {
  IconDefinition,
  IconProp,
} from "@fortawesome/fontawesome-svg-core"
import type { IconProps as UIIconProps } from "@yamada-ui/icon"
import { FontAwesomeIcon as OriginalFontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef } from "@yamada-ui/core"
import { Icon as UIIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"

interface FontAwesomeIconOptions {
  /**
   * The icon of the [Font Awesome](https://fontawesome.com).
   * Check the docs to see the icon of possible modifiers you can pass.
   *
   * @see Docs https://fontawesome.com/v5/docs/web/use-with/react
   */
  icon: IconDefinition | IconProp
}

export interface FontAwesomeIconProps
  extends UIIconProps,
    FontAwesomeIconOptions {}

/**
 * `Icon` is a useful component for using [Font Awesome](https://fontawesome.com).
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/fontawesome
 */
export const FontAwesomeIcon = forwardRef<FontAwesomeIconProps, "svg">(
  ({ className, fontSize, icon, __css, ...rest }, ref) => {
    const css = useMemo(
      () => ({
        color: "currentcolor",
        display: "inline-block",
        flexShrink: 0,
        fontSize,
        ...__css,
      }),
      [__css, fontSize],
    )

    return (
      <UIIcon
        ref={ref}
        as={OriginalFontAwesomeIcon}
        className={cx("ui-fontawesome-icon", className)}
        icon={icon}
        __css={css}
        {...rest}
      />
    )
  },
)

FontAwesomeIcon.displayName = "FontAwesomeIcon"
FontAwesomeIcon.__ui__ = "FontAwesomeIcon"

/**
 * @deprecated Use `FontAwesomeIconProps` instead.
 */
export interface IconProps extends FontAwesomeIconProps {}

/**
 * `Icon` is a useful component for using [Font Awesome](https://fontawesome.com).
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/fontawesome
 *
 * @deprecated  Use `FontAwesomeIcon` instead.
 */
export const Icon = FontAwesomeIcon
