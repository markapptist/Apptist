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
export declare type InstructorCreateFormInputValues = {
    username?: string;
    imageUrl?: string;
    email?: string;
    newStudentEnrollments?: number;
    overallCoursesRating?: number;
    revenueThisMonth?: number;
};
export declare type InstructorCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    newStudentEnrollments?: ValidationFunction<number>;
    overallCoursesRating?: ValidationFunction<number>;
    revenueThisMonth?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorCreateFormOverridesProps = {
    InstructorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    newStudentEnrollments?: PrimitiveOverrideProps<TextFieldProps>;
    overallCoursesRating?: PrimitiveOverrideProps<TextFieldProps>;
    revenueThisMonth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorCreateFormProps = React.PropsWithChildren<{
    overrides?: InstructorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InstructorCreateFormInputValues) => InstructorCreateFormInputValues;
    onSuccess?: (fields: InstructorCreateFormInputValues) => void;
    onError?: (fields: InstructorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructorCreateFormInputValues) => InstructorCreateFormInputValues;
    onValidate?: InstructorCreateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorCreateForm(props: InstructorCreateFormProps): React.ReactElement;
