/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
      id
      username
      imageUrl
      email
      newStudentEnrollments
      overallCoursesRating
      revenueThisMonth
      publishedCourses {
        items {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
      id
      username
      imageUrl
      email
      newStudentEnrollments
      overallCoursesRating
      revenueThisMonth
      publishedCourses {
        items {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
      id
      username
      imageUrl
      email
      newStudentEnrollments
      overallCoursesRating
      revenueThisMonth
      publishedCourses {
        items {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      username
      imageUrl
      email
      courses {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviewsProvided {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      username
      imageUrl
      email
      courses {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviewsProvided {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      username
      imageUrl
      email
      courses {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviewsProvided {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      imageUrl
      coverVideoUrl
      title
      description
      amount
      sales
      instructor {
        id
        username
        imageUrl
        email
        newStudentEnrollments
        overallCoursesRating
        revenueThisMonth
        publishedCourses {
          nextToken
        }
        createdAt
        updatedAt
      }
      sections {
        items {
          id
          title
          createdAt
          updatedAt
          courseSectionsId
        }
        nextToken
      }
      students {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      imageUrl
      coverVideoUrl
      title
      description
      amount
      sales
      instructor {
        id
        username
        imageUrl
        email
        newStudentEnrollments
        overallCoursesRating
        revenueThisMonth
        publishedCourses {
          nextToken
        }
        createdAt
        updatedAt
      }
      sections {
        items {
          id
          title
          createdAt
          updatedAt
          courseSectionsId
        }
        nextToken
      }
      students {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      imageUrl
      coverVideoUrl
      title
      description
      amount
      sales
      instructor {
        id
        username
        imageUrl
        email
        newStudentEnrollments
        overallCoursesRating
        revenueThisMonth
        publishedCourses {
          nextToken
        }
        createdAt
        updatedAt
      }
      sections {
        items {
          id
          title
          createdAt
          updatedAt
          courseSectionsId
        }
        nextToken
      }
      students {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
    }
  }
`;
export const createCourseSection = /* GraphQL */ `
  mutation CreateCourseSection(
    $input: CreateCourseSectionInput!
    $condition: ModelCourseSectionConditionInput
  ) {
    createCourseSection(input: $input, condition: $condition) {
      id
      title
      lessons {
        items {
          id
          title
          videoUrl
          description
          createdAt
          updatedAt
          courseSectionLessonsId
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
    }
  }
`;
export const updateCourseSection = /* GraphQL */ `
  mutation UpdateCourseSection(
    $input: UpdateCourseSectionInput!
    $condition: ModelCourseSectionConditionInput
  ) {
    updateCourseSection(input: $input, condition: $condition) {
      id
      title
      lessons {
        items {
          id
          title
          videoUrl
          description
          createdAt
          updatedAt
          courseSectionLessonsId
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
    }
  }
`;
export const deleteCourseSection = /* GraphQL */ `
  mutation DeleteCourseSection(
    $input: DeleteCourseSectionInput!
    $condition: ModelCourseSectionConditionInput
  ) {
    deleteCourseSection(input: $input, condition: $condition) {
      id
      title
      lessons {
        items {
          id
          title
          videoUrl
          description
          createdAt
          updatedAt
          courseSectionLessonsId
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
    }
  }
`;
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
      id
      review
      rating
      user {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
    }
  }
`;
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
      id
      review
      rating
      user {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
    }
  }
`;
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
      id
      review
      rating
      user {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
    }
  }
`;
export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const createStudentCourse = /* GraphQL */ `
  mutation CreateStudentCourse(
    $input: CreateStudentCourseInput!
    $condition: ModelStudentCourseConditionInput
  ) {
    createStudentCourse(input: $input, condition: $condition) {
      id
      studentId
      courseId
      student {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        imageUrl
        coverVideoUrl
        title
        description
        amount
        sales
        instructor {
          id
          username
          imageUrl
          email
          newStudentEnrollments
          overallCoursesRating
          revenueThisMonth
          createdAt
          updatedAt
        }
        sections {
          nextToken
        }
        students {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentCourse = /* GraphQL */ `
  mutation UpdateStudentCourse(
    $input: UpdateStudentCourseInput!
    $condition: ModelStudentCourseConditionInput
  ) {
    updateStudentCourse(input: $input, condition: $condition) {
      id
      studentId
      courseId
      student {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        imageUrl
        coverVideoUrl
        title
        description
        amount
        sales
        instructor {
          id
          username
          imageUrl
          email
          newStudentEnrollments
          overallCoursesRating
          revenueThisMonth
          createdAt
          updatedAt
        }
        sections {
          nextToken
        }
        students {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentCourse = /* GraphQL */ `
  mutation DeleteStudentCourse(
    $input: DeleteStudentCourseInput!
    $condition: ModelStudentCourseConditionInput
  ) {
    deleteStudentCourse(input: $input, condition: $condition) {
      id
      studentId
      courseId
      student {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        imageUrl
        coverVideoUrl
        title
        description
        amount
        sales
        instructor {
          id
          username
          imageUrl
          email
          newStudentEnrollments
          overallCoursesRating
          revenueThisMonth
          createdAt
          updatedAt
        }
        sections {
          nextToken
        }
        students {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
      }
      createdAt
      updatedAt
    }
  }
`;
