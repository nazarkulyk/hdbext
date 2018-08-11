declare module "@sap/hdbext" {
  export namespace sqlInjectionUtils {
    /**
     * @param value string
     * @return boolean
     */
    export function isAcceptableQuotedParameter(value: string): boolean;

    /**
     * @param value string
     * @param maxToken
     * @return boolean
     */
    export function isAcceptableParameter(
      value: string,
      maxToken: number
    ): boolean;

    /**
     * Returns the value parameter with all double quotation marks escaped (i. e. doubled).
     * @param value string
     * @return string escaped value
     */
    export function escapeDoubleQuotes(value: string): string;

    /**
     * Returns the string parameter with all single quotation marks escaped (i. e. doubled).
     * @param value string
     * @return string escaped value
     */
    export function escapeSingleQuotes(value: string): string;
  }
}
