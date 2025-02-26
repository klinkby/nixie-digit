/** 
 * Character type representing a single character
 */
type NixieChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | ':';

/**
 * Represents a Nixie tube digit display web component 
 * that displays a single character from "0123456789.:"
 */
export declare class NixieDigit extends HTMLElement {
    /**
     * The current displayed character.
     * Can be set to one of "0123456789.:"
     */
    value: NixieChar;
}
