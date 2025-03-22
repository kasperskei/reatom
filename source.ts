type NodeTypes =
  | 'nodeValue'
  | 'textContent'
type ElementTypes =
  | 'ariaAtomic'
  | 'ariaAutoComplete'
  | 'ariaBrailleLabel'
  | 'ariaBrailleRoleDescription'
  | 'ariaBusy'
  | 'ariaChecked'
  | 'ariaColCount'
  | 'ariaColIndex'
  | 'ariaColIndexText'
  | 'ariaColSpan'
  | 'ariaCurrent'
  | 'ariaDescription'
  | 'ariaDisabled'
  | 'ariaExpanded'
  | 'ariaHasPopup'
  | 'ariaHidden'
  | 'ariaInvalid'
  | 'ariaKeyShortcuts'
  | 'ariaLabel'
  | 'ariaLevel'
  | 'ariaLive'
  | 'ariaModal'
  | 'ariaMultiLine'
  | 'ariaMultiSelectable'
  | 'ariaOrientation'
  | 'ariaPlaceholder'
  | 'ariaPosInSet'
  | 'ariaPressed'
  | 'ariaReadOnly'
  | 'ariaRequired'
  | 'ariaRoleDescription'
  | 'ariaRowCount'
  | 'ariaRowIndex'
  | 'ariaRowIndexText'
  | 'ariaRowSpan'
  | 'ariaSelected'
  | 'ariaSetSize'
  | 'ariaSort'
  | 'ariaValueMax'
  | 'ariaValueMin'
  | 'ariaValueNow'
  | 'ariaValueText'
  | 'className'
  | 'id'
  | 'innerHTML'
  | 'outerHTML'
  | 'role'
  | 'scrollLeft'
  | 'scrollTop'
  | 'slot'
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


type HTMLElementTags = Simplify<DefineElementTagNameMap<HTMLElementTagNameMap>>
type SVGElementTags = Simplify<DefineElementTagNameMap<SVGElementTagNameMap>>

type DefineElementTagNameMap<T extends object> = {
  [K in keyof T]: Pick<T[K], PrimitiveWritableKeysOf<T[K]>>
}

type PrimitiveWritableKeysOf<T> = keyof {
  [K in WritableKeysOf<T> as T[K] extends Primitive ? K extends NodeTypes | ElementTypes | HTMLElementTypes ? never : K : never]: never
}

type AddKeysPrefix<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${string & K}`]: T[K]
}

type AttributesAtomMaybe<T extends Record<any, any>> = {
  [K in keyof T]: T[K] | Atom<T[K]>
}

type ElementsAttributesAtomMaybe<T extends Record<any, any>> = {
  [K in keyof T]: AttributesAtomMaybe<T[K]>
}

type WritableKeysOf<T> = NonNullable<{
  [P in keyof T]: IsEqual<{[Q in P]: T[P]}, {readonly [Q in P]: T[P]}> extends false ? P : never
}[keyof T]>

type IsEqual<A, B> =
  (<G>() => G extends A & G | G ? 1 : 2) extends
  (<G>() => G extends B & G | G ? 1 : 2)
    ? true
    : false

type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint

interface Atom<State = any> {
  __reatom: State
}

type Simplify<T> = {[KeyType in keyof T]: T[KeyType]} & {}