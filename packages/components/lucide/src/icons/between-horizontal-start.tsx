import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { BetweenHorizontalStart as OriginalBetweenHorizontalStart } from "lucide-react"

/**
 * `BetweenHorizontalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalStartIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalBetweenHorizontalStart}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `BetweenHorizontalStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BetweenHorizontalStartIcon` instead.
 */
export const BetweenHorizontalStart = BetweenHorizontalStartIcon
