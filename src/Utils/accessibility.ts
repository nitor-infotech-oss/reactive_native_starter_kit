/**
 * @format
 * @flow
 */

const getAccessibilityProps = (
  testID: string,
  accessible?: boolean,
  accessibilityHint?: string,
  accessibilityRole?:
    | 'none'
    | 'button'
    | 'link'
    | 'search'
    | 'image'
    | 'keyboardkey'
    | 'text'
    | 'adjustable'
    | 'imagebutton'
    | 'header'
    | 'summary'
    | 'alert'
    | 'checkbox'
    | 'combobox'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'scrollbar'
    | 'spinbutton'
    | 'switch'
    | 'tab'
    | 'tablist'
    | 'timer'
    | 'toolbar'
    | 'input'
    | 'datepicker'
    | 'scroll'
    | 'listitem',
  accessibilityState?: {
    disabled: boolean;
    selected: boolean;
    checked: boolean | any;
    busy: boolean;
    expanded: boolean;
  },
) => {
  if (accessibilityRole) {
    return {
      accessible,
      testID,
      accessibilityLabel: testID,
      accessibilityHint,
      accessibilityState,
      // accessibilityRole,
    };
  } else {
    return {
      accessible,
      testID,
      accessibilityLabel: testID,
      accessibilityHint,
    };
  }
};

export default getAccessibilityProps;
