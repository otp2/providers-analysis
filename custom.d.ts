/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Allows any props like style, className, etc.
    [key: string]: any;
  }
}

declare module '*.json' {
  const content: any;
  export default content;
} 