import * as coda from "@codahq/packs-sdk";
import { relative } from "./helpers";

export const pack = coda.newPack();

pack.addFormula({
    name: "RelativeDate",
    description: "Get the relative date between two dates.",
    parameters: [
        coda.makeParameter({
            type: coda.ParameterType.Date,
            name: "current",
            description: "The basis to calculate from, (like now)."
        }),
        coda.makeParameter({
            type: coda.ParameterType.Date,
            name: "other",
            description: "The date to calculate to."
        }),
        coda.makeParameter({
            type: coda.ParameterType.Boolean,
            name: "shortened",
            description: "If the value should be shortened.",
            optional: true,
        }),
        coda.makeParameter({
            type: coda.ParameterType.Boolean,
            name: "smarter",
            description: "Whether to use terms like yesterday.",
            optional: true
        })
    ],
    resultType: coda.ValueType.String,
    execute: async function ([current, other, shortened, smarter], context) {
        return relative(current, other, shortened, smarter);
    }
});
