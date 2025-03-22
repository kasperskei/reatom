// interface JsxElementAria {
//   aria-activedescendant
//   ariaAtomic:
//   ariaAutoComplete:
//   ariaBrailleLabel:
//   ariaBrailleRoleDescription:
//   ariaBusy:
//   ariaChecked:
//   ariaColCount:
//   ariaColIndex:
//   ariaColIndexText:
//   ariaColSpan:
//   ariaCurrent:
//   ariaDescription:
//   ariaDisabled:
//   ariaExpanded:
//   ariaHasPopup:
//   ariaHidden:
//   ariaInvalid:
//   ariaKeyShortcuts:
//   ariaLabel:
//   ariaLevel:
//   ariaLive:
//   ariaModal:
//   ariaMultiLine:
//   ariaMultiSelectable:
//   ariaOrientation:
//   ariaPlaceholder:
//   ariaPosInSet:
//   ariaPressed:
//   ariaReadOnly:
//   ariaRequired:
//   ariaRoleDescription:
//   ariaRowCount:
//   ariaRowIndex:
//   ariaRowIndexText:
//   ariaRowSpan:
//   ariaSelected:
//   ariaSetSize:
//   ariaSort:
//   ariaValueMax:
//   ariaValueMin:
//   ariaValueNow:
//   ariaValueText:
// }

type AriaBoolean = boolean | 'true' | 'false'

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant': string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic': AriaBoolean
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete': 'none' | 'inline' | 'list' | 'both'
  /**
   * Defines a string value that labels the current element, which is intended to be converted into Braille.
   * @see aria-label.
   */
  'aria-braillelabel': string
  /**
   * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
   * @see aria-roledescription.
   */
  'aria-brailleroledescription': string
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy': AriaBoolean
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed
   * @see aria-selected.
   */
  'aria-checked': AriaBoolean | 'mixed'
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount': number
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount
   * @see aria-colspan.
   */
  'aria-colindex': number
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  'aria-colindextext': string
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex
   * @see aria-rowspan.
   */
  'aria-colspan': number
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls': string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current': AriaBoolean | 'page' | 'step' | 'location' | 'date' | 'time'
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby': string
  /**
   * Defines a string value that describes or annotates the current element.
   * @see related aria-describedby.
   */
  'aria-description': string
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details': string
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden
   * @see aria-readonly.
   */
  'aria-disabled': AriaBoolean
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect': 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid
   * @see aria-describedby.
   */
  'aria-errormessage': string
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded': AriaBoolean
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto': string
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed': AriaBoolean
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup': AriaBoolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden': AriaBoolean
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid': AriaBoolean | 'grammar' | 'spelling'
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts': string
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label': string
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby': string
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level': number
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live': 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal': AriaBoolean
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline': AriaBoolean
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable': AriaBoolean
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation': 'horizontal' | 'vertical'
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns': string
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder': string
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset': number
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked
   * @see aria-selected.
   */
  'aria-pressed': AriaBoolean | 'mixed'
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly': AriaBoolean
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant':
    | 'additions'
    | 'additions removals'
    | 'additions text'
    | 'all'
    | 'removals'
    | 'removals additions'
    | 'removals text'
    | 'text'
    | 'text additions'
    | 'text removals'

  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required': AriaBoolean
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription': string
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount': number
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount
   * @see aria-rowspan.
   */
  'aria-rowindex': number
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  'aria-rowindextext': string
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex
   * @see aria-colspan.
   */
  'aria-rowspan': number
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked
   * @see aria-pressed.
   */
  'aria-selected': AriaBoolean
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize': number
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort': 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax': number
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin': number
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow': number
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext': string
}

interface JsxElementProps {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent) */
  textContent: string
  /**
   * Returns the value of element's class content attribute. Can be set to change it.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)
   */
  class: string
  /**
   * Returns the value of element's class content attribute. Can be set to change it.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)
   */
  className: string
  id: string
  innerHTML: string
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML) */
  outerHTML: string
  role:
  scrollLeft:
  scrollTop:
  slot:
}
type HTMLElementTypes =
| 'accessKey'
| 'autocapitalize'
| 'autofocus'
| 'contentEditable'
| 'dir'
| 'draggable'
| 'enterKeyHint'
| 'hidden'
| 'inert'
| 'innerText'
| 'inputMode'
| 'lang'
| 'nonce'
| 'outerText'
| 'popover'
| 'spellcheck'
| 'tabIndex'
| 'title'
| 'translate'
| 'writingSuggestions'

interface JsxHtmlElement {}

interface JsxHtmlElementMap {
  a: Pick<
    HTMLAnchorElement,
    | 'charset'
    | 'coords'
    | 'download'
    | 'hash'
    | 'host'
    | 'hostname'
    | 'href'
    | 'hreflang'
    | 'name'
    | 'password'
    | 'pathname'
    | 'ping'
    | 'port'
    | 'protocol'
    | 'referrerPolicy'
    | 'rel'
    | 'rev'
    | 'search'
    | 'shape'
    | 'target'
    | 'text'
    | 'type'
    | 'username'
  >
  abbr: JsxHtmlElement
  address: JsxHtmlElement
  area: Pick<
    HTMLAreaElement,
    | 'alt'
    | 'coords'
    | 'download'
    | 'hash'
    | 'host'
    | 'hostname'
    | 'href'
    | 'noHref'
    | 'password'
    | 'pathname'
    | 'ping'
    | 'port'
    | 'protocol'
    | 'referrerPolicy'
    | 'rel'
    | 'search'
    | 'shape'
    | 'target'
    | 'username'
  >
  article: JsxHtmlElement
  aside: JsxHtmlElement
  audio: Pick<
    HTMLAudioElement,
    | 'autoplay'
    | 'controls'
    | 'crossOrigin'
    | 'currentTime'
    | 'defaultMuted'
    | 'defaultPlaybackRate'
    | 'disableRemotePlayback'
    | 'loop'
    | 'muted'
    | 'playbackRate'
    | 'preload'
    | 'preservesPitch'
    | 'src'
    | 'volume'
  >
  b: JsxHtmlElement
  base: Pick<
    HTMLBaseElement,
    | 'href'
    | 'target'
  >
  bdi: JsxHtmlElement
  bdo: JsxHtmlElement
  blockquote: Pick<HTMLQuoteElement, 'cite'>
  body: Pick<
    HTMLBodyElement,
    | 'aLink'
    | 'background'
    | 'bgColor'
    | 'link'
    | 'text'
    | 'vLink'
  >
  br: Pick<HTMLBRElement, 'clear'>
  button: Pick<
    HTMLButtonElement,
    | 'disabled'
    | 'formAction'
    | 'formEnctype'
    | 'formMethod'
    | 'formNoValidate'
    | 'formTarget'
    | 'name'
    | 'popoverTargetAction'
    | 'type'
    | 'value'
  >
  canvas: Pick<HTMLCanvasElement, 'height' | 'width'>
  caption: Pick<HTMLTableCaptionElement, 'align'>
  cite: JsxHtmlElement
  code: JsxHtmlElement
  col: Pick<
    HTMLTableColElement,
    | 'align'
    | 'ch'
    | 'chOff'
    | 'span'
    | 'vAlign'
    | 'width'
  >
  colgroup: Pick<
    HTMLTableColElement,
    | 'align'
    | 'ch'
    | 'chOff'
    | 'span'
    | 'vAlign'
    | 'width'
  >
  data: Pick<HTMLDataElement, 'value'>
  datalist: Pick<HTMLDataListElement, never>
  dd: JsxHtmlElement
  del: Pick<HTMLModElement, 'cite' | 'dateTime'>
  details: Pick<HTMLDetailsElement, 'name' | 'open'>
  dfn: JsxHtmlElement
  dialog: Pick<HTMLDialogElement, 'open' | 'returnValue'>
  div: Pick<HTMLDivElement, 'align'>
  dl: Pick<HTMLDListElement, 'compact'>
  dt: JsxHtmlElement
  em: JsxHtmlElement
  embed: Pick<
    HTMLEmbedElement,
    | 'align'
    | 'height'
    | 'name'
    | 'src'
    | 'type'
    | 'width'
  >
  fieldset: Pick<HTMLFieldSetElement, 'name' | 'disabled'>
  figcaption: JsxHtmlElement
  figure: JsxHtmlElement
  footer: JsxHtmlElement
  form: Pick<HTMLFormElement, string | number>
  h1: Pick<HTMLHeadingElement, 'align'>
  h2: Pick<HTMLHeadingElement, 'align'>
  h3: Pick<HTMLHeadingElement, 'align'>
  h4: Pick<HTMLHeadingElement, 'align'>
  h5: Pick<HTMLHeadingElement, 'align'>
  h6: Pick<HTMLHeadingElement, 'align'>
  head: Pick<HTMLHeadElement, never>
  header: JsxHtmlElement
  hgroup: JsxHtmlElement
  hr: Pick<HTMLHRElement, 'width' | 'align' | 'color' | 'noShade' | 'size'>
  html: Pick<HTMLHtmlElement, 'version'>
  i: JsxHtmlElement
  iframe: Pick<
    HTMLIFrameElement,
    | 'align'
    | 'allow'
    | 'allowFullscreen'
    | 'frameBorder'
    | 'height'
    | 'loading'
    | 'longDesc'
    | 'marginHeight'
    | 'marginWidth'
    | 'name'
    | 'referrerPolicy'
    | 'scrolling'
    | 'src'
    | 'srcdoc'
    | 'width'
  >
  img: Pick<
    HTMLImageElement,
    | 'align'
    | 'alt'
    | 'border'
    | 'crossOrigin'
    | 'decoding'
    | 'fetchPriority'
    | 'height'
    | 'hspace'
    | 'isMap'
    | 'loading'
    | 'longDesc'
    | 'lowsrc'
    | 'name'
    | 'referrerPolicy'
    | 'sizes'
    | 'src'
    | 'srcset'
    | 'useMap'
    | 'vspace'
    | 'width'
  >
  input: Pick<
    HTMLInputElement,
    | 'accept'
    | 'align'
    | 'alt'
    | 'autocomplete'
    | 'capture'
    | 'checked'
    | 'defaultChecked'
    | 'defaultValue'
    | 'dirName'
    | 'disabled'
    | 'formAction'
    | 'formEnctype'
    | 'formMethod'
    | 'formNoValidate'
    | 'formTarget'
    | 'height'
    | 'indeterminate'
    | 'max'
    | 'maxLength'
    | 'min'
    | 'minLength'
    | 'multiple'
    | 'name'
    | 'pattern'
    | 'placeholder'
    | 'popoverTargetAction'
    | 'readOnly'
    | 'required'
    | 'selectionDirection'
    | 'selectionEnd'
    | 'selectionStart'
    | 'size'
    | 'src'
    | 'step'
    | 'type'
    | 'useMap'
    | 'value'
    | 'valueAsNumber'
    | 'webkitdirectory'
    | 'width'
  >
  ins: Pick<HTMLModElement, 'cite' | 'dateTime'>
  kbd: JsxHtmlElement
  label: Pick<HTMLLabelElement, 'htmlFor'>
  legend: Pick<HTMLLegendElement, 'align'>
  li: Pick<HTMLLIElement, 'type' | 'value'>
  link: Pick<
    HTMLLinkElement,
    | 'as'
    | 'charset'
    | 'crossOrigin'
    | 'disabled'
    | 'fetchPriority'
    | 'href'
    | 'hreflang'
    | 'imageSizes'
    | 'imageSrcset'
    | 'integrity'
    | 'media'
    | 'referrerPolicy'
    | 'rel'
    | 'rev'
    | 'target'
    | 'type'
  >
  main: JsxHtmlElement
  map: Pick<HTMLMapElement, 'name'>
  mark: JsxHtmlElement
  menu: Pick<HTMLMenuElement, 'compact'>
  meta: Pick<
    HTMLMetaElement,
    | 'content'
    | 'httpEquiv'
    | 'media'
    | 'name'
    | 'scheme'
  >
  meter: Pick<
    HTMLMeterElement,
    | 'high'
    | 'low'
    | 'max'
    | 'min'
    | 'optimum'
    | 'value'
  >
  nav: JsxHtmlElement
  noscript: JsxHtmlElement
  object: Pick<
    HTMLObjectElement,
    | 'align'
    | 'archive'
    | 'border'
    | 'code'
    | 'codeBase'
    | 'codeType'
    | 'data'
    | 'declare'
    | 'height'
    | 'hspace'
    | 'name'
    | 'standby'
    | 'type'
    | 'useMap'
    | 'vspace'
    | 'width'
  >
  ol: Pick<
    HTMLOListElement,
    | 'compact'
    | 'reversed'
    | 'start'
    | 'type'
  >
  optgroup: Pick<HTMLOptGroupElement, 'label' | 'disabled'>
  option: Pick<
    HTMLOptionElement,
    | 'defaultSelected'
    | 'disabled'
    | 'label'
    | 'selected'
    | 'text'
    | 'value'
  >
  output: Pick<HTMLOutputElement, 'name' | 'value' | 'defaultValue'>
  p: Pick<HTMLParagraphElement, 'align'>
  picture: Pick<HTMLPictureElement, never>
  pre: Pick<HTMLPreElement, 'width'>
  progress: Pick<HTMLProgressElement, 'value' | 'max'>
  q: Pick<HTMLQuoteElement, 'cite'>
  rp: JsxHtmlElement
  rt: JsxHtmlElement
  ruby: JsxHtmlElement
  s: JsxHtmlElement
  samp: JsxHtmlElement
  script: Pick<
    HTMLScriptElement,
    | 'async'
    | 'charset'
    | 'crossOrigin'
    | 'defer'
    | 'event'
    | 'fetchPriority'
    | 'htmlFor'
    | 'integrity'
    | 'noModule'
    | 'referrerPolicy'
    | 'src'
    | 'text'
    | 'type'
  >
  search: JsxHtmlElement
  section: JsxHtmlElement
  select: Pick<
    HTMLSelectElement,
    | 'autocomplete'
    | 'disabled'
    | 'length'
    | 'multiple'
    | 'name'
    | 'required'
    | 'selectedIndex'
    | 'size'
    | 'value'
  >
  slot: Pick<HTMLSlotElement, 'name'>
  small: JsxHtmlElement
  source: Pick<
    HTMLSourceElement,
    | 'type'
    | 'src'
    | 'height'
    | 'width'
    | 'sizes'
    | 'srcset'
    | 'media'
  >
  span: Pick<HTMLSpanElement, never>
  strong: JsxHtmlElement
  style: Pick<HTMLStyleElement, 'type' | 'disabled' | 'media'>
  sub: JsxHtmlElement
  summary: JsxHtmlElement
  sup: JsxHtmlElement
  table: Pick<
    HTMLTableElement,
    | 'align'
    | 'bgColor'
    | 'border'
    | 'cellPadding'
    | 'cellSpacing'
    | 'frame'
    | 'rules'
    | 'summary'
    | 'width'
  >
  tbody: Pick<HTMLTableSectionElement, 'align' | 'ch' | 'chOff' | 'vAlign'>
  td: Pick<
    HTMLTableCellElement,
    | 'abbr'
    | 'align'
    | 'axis'
    | 'bgColor'
    | 'ch'
    | 'chOff'
    | 'colSpan'
    | 'headers'
    | 'height'
    | 'noWrap'
    | 'rowSpan'
    | 'scope'
    | 'vAlign'
    | 'width'
  >
  template: Pick<
    HTMLTemplateElement,
    | 'shadowRootClonable'
    | 'shadowRootDelegatesFocus'
    | 'shadowRootMode'
    | 'shadowRootSerializable'
  >
  textarea: Pick<
    HTMLTextAreaElement,
    | 'autocomplete'
    | 'cols'
    | 'defaultValue'
    | 'dirName'
    | 'disabled'
    | 'maxLength'
    | 'minLength'
    | 'name'
    | 'placeholder'
    | 'readOnly'
    | 'required'
    | 'rows'
    | 'selectionDirection'
    | 'selectionEnd'
    | 'selectionStart'
    | 'value'
    | 'wrap'
  >
  tfoot: Pick<
    HTMLTableSectionElement,
    | 'align'
    | 'ch'
    | 'chOff'
    | 'vAlign'
  >
  th: Pick<
    HTMLTableCellElement,
    | 'abbr'
    | 'align'
    | 'axis'
    | 'bgColor'
    | 'ch'
    | 'chOff'
    | 'colSpan'
    | 'headers'
    | 'height'
    | 'noWrap'
    | 'rowSpan'
    | 'scope'
    | 'vAlign'
    | 'width'
  >
  thead: Pick<
    HTMLTableSectionElement,
    | 'align'
    | 'ch'
    | 'chOff'
    | 'vAlign'
  >
  time: Pick<HTMLTimeElement, 'dateTime'>
  title: Pick<HTMLTitleElement, 'text'>
  tr: Pick<
    HTMLTableRowElement,
    | 'align'
    | 'bgColor'
    | 'ch'
    | 'chOff'
    | 'vAlign'
  >
  track: Pick<
    HTMLTrackElement,
    | 'default'
    | 'kind'
    | 'label'
    | 'src'
    | 'srclang'
  >
  u: JsxHtmlElement
  ul: Pick<HTMLUListElement, 'type' | 'compact'>
  var: JsxHtmlElement
  video: Pick<
    HTMLVideoElement,
    | 'autoplay'
    | 'controls'
    | 'crossOrigin'
    | 'currentTime'
    | 'defaultMuted'
    | 'defaultPlaybackRate'
    | 'disablePictureInPicture'
    | 'disableRemotePlayback'
    | 'height'
    | 'loop'
    | 'muted'
    | 'playbackRate'
    | 'playsInline'
    | 'poster'
    | 'preload'
    | 'preservesPitch'
    | 'src'
    | 'volume'
    | 'width'
  >
  wbr: JsxHtmlElement
}
