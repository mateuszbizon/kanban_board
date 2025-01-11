import React, { createContext, useContext, useRef, useState } from 'react'
import { Button } from '../ui/button'
import ChevronDownIcon from '../icons/ChevronDownIcon';
import useClickOutside from '@/hooks/useClickOutside';

type SelectDropdownContextType = {
    selectedValue: string;
    onChangeValue: (value: string) => void;
    isOpen: boolean;
    onClose: () => void;
}

const SelectDropdownContext = createContext<SelectDropdownContextType | undefined>(undefined)

function useSelectDropdownContext() {
    const context = useContext(SelectDropdownContext)

    if (!context) {
        throw new Error("Select dropdown context must be used within SelectDropdown")
    }

    return context
}

type SelectDropdownProps = {
    value: string;
    onChangeValue: (value: string) => void
    children: React.ReactNode;
}

function SelectDropdown({ value, onChangeValue, children }: SelectDropdownProps) {
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(selectRef, isSelectOpen, closeSelect)

    function closeSelect() {
        setIsSelectOpen(false)
    }

  return (
    <SelectDropdownContext.Provider value={{ selectedValue: value, onChangeValue, isOpen: isSelectOpen, onClose: closeSelect }}>
        <div ref={selectRef} className='relative'>
            <Button
                type='button' 
                variant={"transparent"} 
                className={`w-full justify-between p-main text-black border rounded ${isSelectOpen ? "border-main-purple" : "border-medium-grey"}`} 
                onClick={() => setIsSelectOpen(prev => !prev)}
            >
                <span>{value}</span>
                <ChevronDownIcon />
            </Button>
            <div 
                className={`absolute top-[110%] left-0 right-0 bg-white rounded-lg ${isSelectOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <ul>{children}</ul>
            </div>
        </div>
    </SelectDropdownContext.Provider>
  )
}

type SelectDropdownItemProps = {
    value: string;
    children: React.ReactNode;
}

function SelectDropdownItem({ value, children }: SelectDropdownItemProps) {
    const { selectedValue, onClose, isOpen, onChangeValue } = useSelectDropdownContext()

    function selectValue() {
        onChangeValue(value)
        onClose()
    }

    return (
        <li 
            className={`px-main pb-main first:pt-main text-2xs hover:text-main-purple cursor-pointer outline-none focus-visible:text-main-purple ${value === selectedValue ? "text-main-purple" : "text-medium-grey"}`}
            onClick={selectValue}
            tabIndex={isOpen ? 0 : -1}
        >
            {children}
        </li>
    )
}

SelectDropdown.Item = SelectDropdownItem

export default SelectDropdown