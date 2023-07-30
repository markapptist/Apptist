/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onCreateInstructor(filter: $filter) {
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
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onUpdateInstructor(filter: $filter) {
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
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onDeleteInstructor(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateCourseSection = /* GraphQL */ `
  subscription OnCreateCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
  ) {
    onCreateCourseSection(filter: $filter) {
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
export const onUpdateCourseSection = /* GraphQL */ `
  subscription OnUpdateCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
  ) {
    onUpdateCourseSection(filter: $filter) {
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
export const onDeleteCourseSection = /* GraphQL */ `
  subscription OnDeleteCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
  ) {
    onDeleteCourseSection(filter: $filter) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onCreateReviews(filter: $filter) {
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
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onUpdateReviews(filter: $filter) {
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
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onDeleteReviews(filter: $filter) {
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
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
    onCreateTags(filter: $filter) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
    onUpdateTags(filter: $filter) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
    onDeleteTags(filter: $filter) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentCourse = /* GraphQL */ `
  subscription OnCreateStudentCourse(
    $filter: ModelSubscriptionStudentCourseFilterInput
  ) {
    onCreateStudentCourse(filter: $filter) {
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
export const onUpdateStudentCourse = /* GraphQL */ `
  subscription OnUpdateStudentCourse(
    $filter: ModelSubscriptionStudentCourseFilterInput
  ) {
    onUpdateStudentCourse(filter: $filter) {
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
export const onDeleteStudentCourse = /* GraphQL */ `
  subscription OnDeleteStudentCourse(
    $filter: ModelSubscriptionStudentCourseFilterInput
  ) {
    onDeleteStudentCourse(filter: $filter) {
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
