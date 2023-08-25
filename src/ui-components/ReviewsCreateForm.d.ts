/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewsCreateFormInputValues = {
    review?: string;
    rating?: number;
};
export declare type ReviewsCreateFormValidationValues = {
    review?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewsCreateFormOverridesProps = {
    ReviewsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    review?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewsCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewsCreateFormInputValues) => ReviewsCreateFormInputValues;
    onSuccess?: (fields: ReviewsCreateFormInputValues) => void;
    onError?: (fields: ReviewsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewsCreateFormInputValues) => ReviewsCreateFormInputValues;
    onValidate?: ReviewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewsCreateForm(props: ReviewsCreateFormProps): React.ReactElement;
