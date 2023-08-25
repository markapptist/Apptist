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
export declare type CommentAuthorCreateFormInputValues = {
    username?: string;
    imageUrl?: string;
};
export declare type CommentAuthorCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentAuthorCreateFormOverridesProps = {
    CommentAuthorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentAuthorCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentAuthorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentAuthorCreateFormInputValues) => CommentAuthorCreateFormInputValues;
    onSuccess?: (fields: CommentAuthorCreateFormInputValues) => void;
    onError?: (fields: CommentAuthorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentAuthorCreateFormInputValues) => CommentAuthorCreateFormInputValues;
    onValidate?: CommentAuthorCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentAuthorCreateForm(props: CommentAuthorCreateFormProps): React.ReactElement;
