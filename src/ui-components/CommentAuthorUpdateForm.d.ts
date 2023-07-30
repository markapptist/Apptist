/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CommentAuthor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommentAuthorUpdateFormInputValues = {
    username?: string;
    imageUrl?: string;
};
export declare type CommentAuthorUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentAuthorUpdateFormOverridesProps = {
    CommentAuthorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentAuthorUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommentAuthorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    commentAuthor?: CommentAuthor;
    onSubmit?: (fields: CommentAuthorUpdateFormInputValues) => CommentAuthorUpdateFormInputValues;
    onSuccess?: (fields: CommentAuthorUpdateFormInputValues) => void;
    onError?: (fields: CommentAuthorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentAuthorUpdateFormInputValues) => CommentAuthorUpdateFormInputValues;
    onValidate?: CommentAuthorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommentAuthorUpdateForm(props: CommentAuthorUpdateFormProps): React.ReactElement;
