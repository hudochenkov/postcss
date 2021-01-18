import Container, { ContainerProps } from './container.js'
import { ProcessOptions } from './postcss.js'
import Result from './result.js'

export type DocumentProps = ContainerProps

/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * ```js
 * const root = postcss.parse('a{color:black} b{z-index:2}')
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 * ```
 */
export default class Document extends Container {
  type: 'document'
  parent: undefined

  constructor (defaults?: DocumentProps)

  /**
   * Returns a `Result` instance representing the root’s CSS.
   *
   * ```js
   * const root1 = postcss.parse(css1, { from: 'a.css' })
   * const root2 = postcss.parse(css2, { from: 'b.css' })
   * root1.append(root2)
   * const result = root1.toResult({ to: 'all.css', map: true })
   * ```
   *
   * @param opts Options.
   * @return Result with current root’s CSS.
   */
  toResult (options?: ProcessOptions): Result
}
