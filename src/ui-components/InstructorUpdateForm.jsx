/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Instructor } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function InstructorUpdateForm(props) {
  const {
    id: idProp,
    instructor: instructorModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    imageUrl: "",
    email: "",
    newStudentEnrollments: "",
    overallCoursesRating: "",
    revenueThisMonth: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [email, setEmail] = React.useState(initialValues.email);
  const [newStudentEnrollments, setNewStudentEnrollments] = React.useState(
    initialValues.newStudentEnrollments
  );
  const [overallCoursesRating, setOverallCoursesRating] = React.useState(
    initialValues.overallCoursesRating
  );
  const [revenueThisMonth, setRevenueThisMonth] = React.useState(
    initialValues.revenueThisMonth
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = instructorRecord
      ? { ...initialValues, ...instructorRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setImageUrl(cleanValues.imageUrl);
    setEmail(cleanValues.email);
    setNewStudentEnrollments(cleanValues.newStudentEnrollments);
    setOverallCoursesRating(cleanValues.overallCoursesRating);
    setRevenueThisMonth(cleanValues.revenueThisMonth);
    setErrors({});
  };
  const [instructorRecord, setInstructorRecord] =
    React.useState(instructorModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Instructor, idProp)
        : instructorModelProp;
      setInstructorRecord(record);
    };
    queryData();
  }, [idProp, instructorModelProp]);
  React.useEffect(resetStateValues, [instructorRecord]);
  const validations = {
    username: [{ type: "Required" }],
    imageUrl: [{ type: "Required" }],
    email: [{ type: "Required" }],
    newStudentEnrollments: [],
    overallCoursesRating: [],
    revenueThisMonth: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          imageUrl,
          email,
          newStudentEnrollments,
          overallCoursesRating,
          revenueThisMonth,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Instructor.copyOf(instructorRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "InstructorUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              imageUrl,
              email,
              newStudentEnrollments,
              overallCoursesRating,
              revenueThisMonth,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={true}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              imageUrl: value,
              email,
              newStudentEnrollments,
              overallCoursesRating,
              revenueThisMonth,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              imageUrl,
              email: value,
              newStudentEnrollments,
              overallCoursesRating,
              revenueThisMonth,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="New student enrollments"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={newStudentEnrollments}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              imageUrl,
              email,
              newStudentEnrollments: value,
              overallCoursesRating,
              revenueThisMonth,
            };
            const result = onChange(modelFields);
            value = result?.newStudentEnrollments ?? value;
          }
          if (errors.newStudentEnrollments?.hasError) {
            runValidationTasks("newStudentEnrollments", value);
          }
          setNewStudentEnrollments(value);
        }}
        onBlur={() =>
          runValidationTasks("newStudentEnrollments", newStudentEnrollments)
        }
        errorMessage={errors.newStudentEnrollments?.errorMessage}
        hasError={errors.newStudentEnrollments?.hasError}
        {...getOverrideProps(overrides, "newStudentEnrollments")}
      ></TextField>
      <TextField
        label="Overall courses rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overallCoursesRating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              imageUrl,
              email,
              newStudentEnrollments,
              overallCoursesRating: value,
              revenueThisMonth,
            };
            const result = onChange(modelFields);
            value = result?.overallCoursesRating ?? value;
          }
          if (errors.overallCoursesRating?.hasError) {
            runValidationTasks("overallCoursesRating", value);
          }
          setOverallCoursesRating(value);
        }}
        onBlur={() =>
          runValidationTasks("overallCoursesRating", overallCoursesRating)
        }
        errorMessage={errors.overallCoursesRating?.errorMessage}
        hasError={errors.overallCoursesRating?.hasError}
        {...getOverrideProps(overrides, "overallCoursesRating")}
      ></TextField>
      <TextField
        label="Revenue this month"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={revenueThisMonth}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              imageUrl,
              email,
              newStudentEnrollments,
              overallCoursesRating,
              revenueThisMonth: value,
            };
            const result = onChange(modelFields);
            value = result?.revenueThisMonth ?? value;
          }
          if (errors.revenueThisMonth?.hasError) {
            runValidationTasks("revenueThisMonth", value);
          }
          setRevenueThisMonth(value);
        }}
        onBlur={() => runValidationTasks("revenueThisMonth", revenueThisMonth)}
        errorMessage={errors.revenueThisMonth?.errorMessage}
        hasError={errors.revenueThisMonth?.hasError}
        {...getOverrideProps(overrides, "revenueThisMonth")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || instructorModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || instructorModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
