/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Instructor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstructorUpdateFormInputValues = {
    username?: string;
    imageUrl?: string;
    email?: string;
    newStudentEnrollments?: number;
    overallCoursesRating?: number;
    revenueThisMonth?: number;
};
export declare type InstructorUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    newStudentEnrollments?: ValidationFunction<number>;
    overallCoursesRating?: ValidationFunction<number>;
    revenueThisMonth?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorUpdateFormOverridesProps = {
    InstructorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    newStudentEnrollments?: PrimitiveOverrideProps<TextFieldProps>;
    overallCoursesRating?: PrimitiveOverrideProps<TextFieldProps>;
    revenueThisMonth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstructorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    instructor?: Instructor;
    onSubmit?: (fields: InstructorUpdateFormInputValues) => InstructorUpdateFormInputValues;
    onSuccess?: (fields: InstructorUpdateFormInputValues) => void;
    onError?: (fields: InstructorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstructorUpdateFormInputValues) => InstructorUpdateFormInputValues;
    onValidate?: InstructorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorUpdateForm(props: InstructorUpdateFormProps): React.ReactElement;
