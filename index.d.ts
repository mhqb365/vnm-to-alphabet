declare module 'vnm-to-alphabet' {
    export type Source = string;
    export type Option = 'capitalize' | 'uppercase' | 'lowercase' | 'default';
    export default function vnmToAlphabet(source: Source, option?: Option): Source;
}