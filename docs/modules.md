[@dhis2-app/test-tools](README.md) / Exports

# @dhis2-app/test-tools

Test utilities for `REACT`/`Jest`

## Table of contents

### Checkbox Functions

- [checkboxValue](modules.md#checkboxvalue)

### Click Functions

- [click](modules.md#click)
- [clickByText](modules.md#clickbytext)

### Exist Functions

- [exist](modules.md#exist)
- [notExist](modules.md#notexist)

### Pause Functions

- [loadingDone](modules.md#loadingdone)
- [pause](modules.md#pause)

### Radio Functions

- [checkRadioValue](modules.md#checkradiovalue)

### Render Functions

- [debug](modules.md#debug)
- [renderComponent](modules.md#rendercomponent)

### Select Functions

- [checkSelectValue](modules.md#checkselectvalue)
- [select](modules.md#select)

### Text Functions

- [noText](modules.md#notext)
- [noTexts](modules.md#notexts)
- [text](modules.md#text)
- [textWait](modules.md#textwait)
- [texts](modules.md#texts)
- [textsWait](modules.md#textswait)

### Text inside element Functions

- [noTextIn](modules.md#notextin)
- [noTextsIn](modules.md#notextsin)
- [textIn](modules.md#textin)
- [textsIn](modules.md#textsin)

### Type text Functions

- [type](modules.md#type)
- [typeWait](modules.md#typewait)

## Checkbox Functions

### checkboxValue

▸ **checkboxValue**(`id`: *string*, `checked`: *boolean*): *void*

Check that checkbox found by `id` is `checked` (or unchecked for `false`)

**`example`** 
```javascript
checkboxValue('includeExpired', true)
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`checked` | *boolean* |

**Returns:** *void*

Defined in: [modules/checkbox.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/checkbox.utils.ts#L12)

___

## Click Functions

### click

▸ **click**(`id`: *string*): *void*

Click element found by `id`

**`example`** 
```javascript
click('nextPage')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *void*

Defined in: [modules/click.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/click.utils.ts#L12)

___

### clickByText

▸ **clickByText**(`text`: *string*): *void*

Click element found by `text`

**`example`** 
```javascript
click('Next page')
```

#### Parameters:

Name | Type |
------ | ------ |
`text` | *string* |

**Returns:** *void*

Defined in: [modules/click.utils.ts:25](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/click.utils.ts#L25)

___

## Exist Functions

### exist

▸ `Const`**exist**(`id`: *string*): *null* \| HTMLElement

Check that element found by `id` exists in DOM

**`example`** 
```javascript
exist('searchBar')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *null* \| HTMLElement

Defined in: [modules/exist.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/exist.utils.ts#L12)

___

### notExist

▸ `Const`**notExist**(`id`: *string*): *void*

Check that element with `id` does not exist in DOM

**`example`** 
```javascript
notExist('loading')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *void*

Defined in: [modules/exist.utils.ts:23](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/exist.utils.ts#L23)

___

## Pause Functions

### loadingDone

▸ **loadingDone**(`sec?`: *number*): *Promise*<*any*\>

Wait until loading dialog disappears within `sec` seconds
Assuming loading dialog has id `loading`

**`example`** 
```javascript
await loadingDone(2)
```

#### Parameters:

Name | Type |
------ | ------ |
`sec?` | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [modules/pause.utils.ts:28](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/pause.utils.ts#L28)

___

### pause

▸ **pause**(`sec`: *number*): *Promise*<*void*\>

Pause test execution by `sec` seconds

**`example`** 
```javascript
await pause(0.2)
```

#### Parameters:

Name | Type |
------ | ------ |
`sec` | *number* |

**Returns:** *Promise*<*void*\>

Defined in: [modules/pause.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/pause.utils.ts#L12)

___

## Radio Functions

### checkRadioValue

▸ **checkRadioValue**(`id`: *string*, `value`: *string*): *void*

Check that radio select found by `id` has selected value `value`

**`example`** 
```javascript
checkRadioValue('method', 'sum')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`value` | *string* |

**Returns:** *void*

Defined in: [modules/radio.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/radio.utils.ts#L12)

___

## Render Functions

### debug

▸ `Let`**debug**(): *void*

Show current state of the test DOM enviroment

**`example`** 
```javascript
debug()
```

**Returns:** *void*

Defined in: [modules/render.utils.ts:16](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/render.utils.ts#L16)

___

### renderComponent

▸ **renderComponent**(`component`: ReactElement, `texts`: *string*[]): *Promise*<*any*\>

Render dynamic component and wait for `texts` to appear

**`example`** 
```javascript
renderComponent(<MainPage/>,['Messages','Friends'])
```

#### Parameters:

Name | Type |
------ | ------ |
`component` | ReactElement |
`texts` | *string*[] |

**Returns:** *Promise*<*any*\>

Defined in: [modules/render.utils.ts:27](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/render.utils.ts#L27)

___

## Select Functions

### checkSelectValue

▸ **checkSelectValue**(`id`: *string*, `value`: *string*): *void*

Check that select element found by `id` has value `value`

**`example`** 
```javascript
checkSelectValue('pizzaDough','newYorkSyle')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`value` | *string* |

**Returns:** *void*

Defined in: [modules/select.utils.ts:28](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/select.utils.ts#L28)

___

### select

▸ **select**(`id`: *string*, `value`: *string*): *Promise*<*void*\>

Select `value` in select element found by `id`

**`example`** 
```javascript
select('pizzaDough','newYorkSyle')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`value` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: [modules/select.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/select.utils.ts#L12)

___

## Text Functions

### noText

▸ **noText**(`text`: *string*): *void*

Check that `text` is **NOT** present in DOM

**`example`** 
```javascript
noText('Error')
```

#### Parameters:

Name | Type |
------ | ------ |
`text` | *string* |

**Returns:** *void*

Defined in: [modules/text.utils.ts:38](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/text.utils.ts#L38)

___

### noTexts

▸ **noTexts**(`textsToFind`: *string*[]): *void*

Check that **none** of the provided tests are present in dom **right now**

**`example`** 
```javascript
noTexts(['Error','Loading'])
```

#### Parameters:

Name | Type |
------ | ------ |
`textsToFind` | *string*[] |

**Returns:** *void*

Defined in: [modules/text.utils.ts:51](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/text.utils.ts#L51)

___

### text

▸ **text**(`text`: *string*): *void*

Check if `text` is present in DOM **right now**

**`example`** 
```javascript
text('My awesome website')
```

#### Parameters:

Name | Type |
------ | ------ |
`text` | *string* |

**Returns:** *void*

Defined in: [modules/text.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/text.utils.ts#L12)

___

### textWait

▸ **textWait**(`text`: *string*): *Promise*<*any*\>

**Wait** until `text` appears in DOM

**`example`** 
```javascript
await textWait('3 results found')
```

#### Parameters:

Name | Type |
------ | ------ |
`text` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [modules/text.utils.ts:63](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/text.utils.ts#L63)

___

### texts

▸ **texts**(`texts`: *string*[]): *void*

Check if multiple `texts` are present in DOM **right now**

**`example`** 
```javascript
texts(['My website','Login','Latest news'])
```

#### Parameters:

Name | Type |
------ | ------ |
`texts` | *string*[] |

**Returns:** *void*

Defined in: [modules/text.utils.ts:25](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/text.utils.ts#L25)

___

### textsWait

▸ **textsWait**(`textsToFind`: *string*[]): *Promise*<*any*\>

**Wait** until all texts appear in DOM

**`example`** 
```javascript
await textsWait(['3 results found','George Orwell','1984'])
```

#### Parameters:

Name | Type |
------ | ------ |
`textsToFind` | *string*[] |

**Returns:** *Promise*<*any*\>

Defined in: [modules/text.utils.ts:75](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/text.utils.ts#L75)

___

## Text inside element Functions

### noTextIn

▸ **noTextIn**(`id`: *string*, `text`: *string*): *void*

Check that there is no `text` inside the element found by `id`

**`example`** 
```javascript
noTextIn('results', 'Bob')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`text` | *string* |

**Returns:** *void*

Defined in: [modules/textIn.utils.ts:25](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/textIn.utils.ts#L25)

___

### noTextsIn

▸ `Const`**noTextsIn**(`id`: *string*, `texts`: *string*[]): *void*

Check that none of the `texts` are inside the element found by `id`

**`example`** 
```javascript
noTextsIn('results', ['Bob','Tom'])
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`texts` | *string*[] |

**Returns:** *void*

Defined in: [modules/textIn.utils.ts:49](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/textIn.utils.ts#L49)

___

### textIn

▸ **textIn**(`id`: *string*, `text`: *string*): *void*

Check if `text` is present inside of element found by `id`

**`example`** 
```javascript
textIn('username', 'Bob')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`text` | *string* |

**Returns:** *void*

Defined in: [modules/textIn.utils.ts:12](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/textIn.utils.ts#L12)

___

### textsIn

▸ `Const`**textsIn**(`id`: *string*, `texts`: *string*[]): *void*

Check that all `texts` are inside the element found by `id`

**`example`** 
```javascript
textsIn('results', ['Bob','Tom'])
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`texts` | *string*[] |

**Returns:** *void*

Defined in: [modules/textIn.utils.ts:38](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/textIn.utils.ts#L38)

___

## Type text Functions

### type

▸ **type**(`id`: *string*, `text`: *string*): *void*

Type `text` into `input` element found by `id`

**`example`** 
```javascript
type('search', 'George Orwell')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`text` | *string* |

**Returns:** *void*

Defined in: [modules/type.utils.ts:13](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/type.utils.ts#L13)

___

### typeWait

▸ **typeWait**(`id`: *string*, `text`: *string*): *Promise*<*void*\>

Type `text` into `input` element found by `id` and then wait to allow DOM to reflect changes

**`example`** 
```javascript
await typeWait('search', 'George Orwell')
```

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`text` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: [modules/type.utils.ts:26](https://github.com/dhis2-app/test-tools/blob/2b53b8e/src/modules/type.utils.ts#L26)
