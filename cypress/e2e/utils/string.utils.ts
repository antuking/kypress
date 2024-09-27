/// <reference types="cypress" />

export class StringUtils {
    public static containsIgnoreCase(str: string, searchValue: string): boolean {
        if (!str || !searchValue) {
            return false;
        }
        return str.toLowerCase().includes(searchValue.toLowerCase());
    }
}