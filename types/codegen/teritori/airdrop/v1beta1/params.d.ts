import * as _m0 from "protobufjs/minimal";
/** Params defines the module's parameters. */
export interface Params {
    owner: string;
}
/** Params defines the module's parameters. */
export interface ParamsSDKType {
    owner: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
