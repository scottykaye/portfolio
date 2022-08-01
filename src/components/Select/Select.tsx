import React, { useEffect } from 'react';
import cx from 'classnames';
import useOnClickOutside from '../useOnClickOutside';
import * as styles from './Select.css';
// import { useCombobox } from "downshift";

export function X({ className }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
    </svg>
  );
}

export function ChevronDown({ className }) {
  return (
    <svg viewBox="0 0 10 7" className={className}>
      <path
        d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z"
        transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) "
      />
    </svg>
  );
}

export const SelectContext = React.createContext(null);

export function Option({
  value, isMultiSelect, onClick = (e:any) => { }, isFocused, ...props
}) {
  const {
    values, setValues, setIsOpen, focusedValue,
  } = React.useContext(
    SelectContext,
  );

  const handleClick = (e) => {
    if (!isMultiSelect) {
      setValues([value]);
      setIsOpen(false);
    }

    if (isMultiSelect) {
      setValues((prevState) => {
        if (!prevState.includes(value)) {
          return [...prevState, value];
        }

        return prevState.filter((item) => item !== value);
      });
    }

    onClick(e);
  };

  if (!isMultiSelect) {
    return (
      <span
        className={cx(styles.option, {
          [styles.optionIsFocused]: isFocused === focusedValue,
          [styles.optionsIsSelected]: values.includes(value),
        })}
        onClick={handleClick}
        tabIndex={0}
      >
        {value}
      </span>
    );
  }

  return (
    <span
      className={cx('Option', {
        'is-focused': isFocused === focusedValue,
        'is-selected': values?.includes(value),
      })}
      onClick={handleClick}
      tabIndex={0}
    >
      <input
        className="Option-checkbox"
        type="checkbox"
        value={value}
        checked={values?.includes(value)}
        readOnly
      />
      {value}
    </span>
  );
}

export default function Select(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [values, setValues] = React.useState([]);
  const [isFocused, setIsFocused] = React.useState(false);
  const [focusedValue, setFocusedValue] = React.useState(Number(-1));
  const [isTyped, setIsTyped] = React.useState('');

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = React.useRef();

  function handleClick(e) {
    setIsOpen((prevState) => !prevState);
  }

  function handleFocus() {
    setIsFocused(true);
    // setIsOpen(true);
  }

  function handleBlur() {
    if (props.isMultiSelect) {
      setFocusedValue(-1);
    } else {
      const value = values[0];
      let focusedValue = -1;
      if (value) {
        focusedValue = props.options.findIndex(
          (option) => option.value === value,
        );
      }
      setFocusedValue(focusedValue);
    }
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case ' ':
        e.preventDefault();
        if (isOpen) {
          if (!props.isMultiSelect) {
            setIsOpen(false);
          }
          if (props.isMultiSelect && focusedValue !== -1) {
            setValues((prevState) => {
              const value = props.options[focusedValue]
                ? props.options[focusedValue].value
                : [];
              const index = prevState?.indexOf(value);

              if (index === -1) {
                return [...prevState, value];
              }
              return prevState.filter((item) => item !== value);
            });
          }
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
      case 'Tab':
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
        }
        break;
      case 'Enter':
        setIsOpen((prevState) => !prevState);
        break;
      case 'ArrowDown':
        e.preventDefault();

        setFocusedValue((prevState) => {
          if (prevState < props.options.length - 1) {
            let nextValue = prevState;
            nextValue++;

            if (!props.isMultiSelect) {
              setValues([props.options[nextValue].value]);
            }

            return nextValue;
          }

          if (prevState > props.options.length - 1) {
            if (!props.isMultiSelect) {
              setValues([props.options[props.options.length - 1].value]);
              return props.options.length - 1;
            }
          }

          if (!props.isMultiSelect) {
            setValues([props.options[0].value]);
          }

          return 0;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();

        setFocusedValue((prevState) => {
          if (prevState > 1) {
            let nextValue = prevState;
            nextValue--;

            if (!props.isMultiSelect) {
              setValues([props.options[nextValue].value]);
            }

            return nextValue;
          }
          if (prevState < 1) {
            if (!props.isMultiSelect) {
              setValues([props.options[props.options.length - 1].value]);
            }

            return props.options.length - 1;
          }

          if (!props.isMultiSelect) {
            setValues([props.options[0].value]);
          }

          return 0;
        });
        break;
      default:
        if (/^[a-z0-9]$/i.test(e.key)) {
          const char = e.key;
          clearTimeout(() => {});
          setTimeout(() => {
            setIsTyped('');
          }, 1000);
          setIsTyped((prevState) => {
            const typed = prevState + char;
            const re = new RegExp(`^${typed}`, 'i');
            const index = props.options.findIndex((option) => re.test(option.value));

            if (index === -1) {
              return typed;
            }
            if (props.isMultiSelect) {
              setFocusedValue(index);
              return typed;
            }
            setValues([props.options[index].value]);
            setFocusedValue(index);

            return typed;
          });
        }
        break;
    }
  }

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => {
    setIsOpen(false);
    setIsFocused(false);
  });

  const context = React.useMemo(() => ({
    isOpen,
    setIsOpen,
    values,
    setValues,
    isFocused,
    setIsFocused,
    isTyped,
    setIsTyped,
    focusedValue,
    setFocusedValue,
  }), [
    isOpen,
    setIsOpen,
    values,
    setValues,
    isFocused,
    setIsFocused,
    isTyped,
    setIsTyped,
    focusedValue,
    setFocusedValue]);

  useEffect(() => {
    setValues([...props.defaultValue]);
    // setValues(defaultValue)
  }, [props.defaultValue]);

  return (
    <SelectContext.Provider
      value={context}
    >
      <div className={styles.wrapper} ref={ref}>
        <div
          //  Should this be another accessible element?
          tabIndex="0"
          value={props?.value}
          className={cx(styles.select, {
            [styles.isFocused]: isFocused,
            [styles.isActive]: props.placeholder || values.length > 0,
          })}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}

        >
          <label
            className={cx(styles.labels.label, {
              [styles.labelAndActive]: props.placeholder || values.length > 0,
            })}
          >
            {props.label}
          </label>

          <div className={styles.labels.placeholder} style={{ zIndex: 1 }}>
            {values?.length > 0
              ? values.map((value, index) => {
                const Component = props.component ? props.component : 'span';

                return (
                  <Component>
                    {value}
                    {Component === 'span'
                        && values.length - 1 > index
                        && ', '}
                  </Component>
                );
              })
              : props.placeholder}
          </div>
          <ChevronDown className={isOpen ? styles.icons.up : styles.icons.down} />
        </div>
        {isOpen && (
        <div className={styles.optionsContainer}>
          {props.options
              && props.options.map((option, index) => (
                <Option
                  {...option}
                  onClick={props.options[index].onClick}
                  key={option.value}
                  isFocused={index}
                  isMultiSelect={props.isMultiSelect}
                />
              ))}
          {props.children && props.children}
        </div>
        )}
      </div>
    </SelectContext.Provider>
  );
}
