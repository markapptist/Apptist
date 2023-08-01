/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
    $owner: String
  ) {
    onCreateInstructor(filter: $filter, owner: $owner) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
    $owner: String
  ) {
    onUpdateInstructor(filter: $filter, owner: $owner) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
    $owner: String
  ) {
    onDeleteInstructor(filter: $filter, owner: $owner) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onCreateStudent(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onUpdateStudent(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onDeleteStudent(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onCreateCourse(filter: $filter, owner: $owner) {
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
        owner
      }
      sections {
        items {
          id
          sectionNumber
          title
          createdAt
          updatedAt
          courseSectionsId
          owner
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
          owner
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
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
      owner
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onUpdateCourse(filter: $filter, owner: $owner) {
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
        owner
      }
      sections {
        items {
          id
          sectionNumber
          title
          createdAt
          updatedAt
          courseSectionsId
          owner
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
          owner
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
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
      owner
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onDeleteCourse(filter: $filter, owner: $owner) {
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
        owner
      }
      sections {
        items {
          id
          sectionNumber
          title
          createdAt
          updatedAt
          courseSectionsId
          owner
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
          owner
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
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
      owner
    }
  }
`;
export const onCreateCourseSection = /* GraphQL */ `
  subscription OnCreateCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
    $owner: String
  ) {
    onCreateCourseSection(filter: $filter, owner: $owner) {
      id
      sectionNumber
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
      owner
    }
  }
`;
export const onUpdateCourseSection = /* GraphQL */ `
  subscription OnUpdateCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
    $owner: String
  ) {
    onUpdateCourseSection(filter: $filter, owner: $owner) {
      id
      sectionNumber
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
      owner
    }
  }
`;
export const onDeleteCourseSection = /* GraphQL */ `
  subscription OnDeleteCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
    $owner: String
  ) {
    onDeleteCourseSection(filter: $filter, owner: $owner) {
      id
      sectionNumber
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
      owner
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson(
    $filter: ModelSubscriptionLessonFilterInput
    $owner: String
  ) {
    onCreateLesson(filter: $filter, owner: $owner) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
      owner
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson(
    $filter: ModelSubscriptionLessonFilterInput
    $owner: String
  ) {
    onUpdateLesson(filter: $filter, owner: $owner) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
      owner
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson(
    $filter: ModelSubscriptionLessonFilterInput
    $owner: String
  ) {
    onDeleteLesson(filter: $filter, owner: $owner) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
      owner
    }
  }
`;
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews(
    $filter: ModelSubscriptionReviewsFilterInput
    $owner: String
  ) {
    onCreateReviews(filter: $filter, owner: $owner) {
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
        owner
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
      owner
    }
  }
`;
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews(
    $filter: ModelSubscriptionReviewsFilterInput
    $owner: String
  ) {
    onUpdateReviews(filter: $filter, owner: $owner) {
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
        owner
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
      owner
    }
  }
`;
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews(
    $filter: ModelSubscriptionReviewsFilterInput
    $owner: String
  ) {
    onDeleteReviews(filter: $filter, owner: $owner) {
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
        owner
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
      owner
    }
  }
`;
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags(
    $filter: ModelSubscriptionTagsFilterInput
    $owner: String
  ) {
    onCreateTags(filter: $filter, owner: $owner) {
      id
      title
      course {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags(
    $filter: ModelSubscriptionTagsFilterInput
    $owner: String
  ) {
    onUpdateTags(filter: $filter, owner: $owner) {
      id
      title
      course {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags(
    $filter: ModelSubscriptionTagsFilterInput
    $owner: String
  ) {
    onDeleteTags(filter: $filter, owner: $owner) {
      id
      title
      course {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateStudentCourse = /* GraphQL */ `
  subscription OnCreateStudentCourse(
    $filter: ModelSubscriptionStudentCourseFilterInput
    $owner: String
  ) {
    onCreateStudentCourse(filter: $filter, owner: $owner) {
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
        owner
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
          owner
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStudentCourse = /* GraphQL */ `
  subscription OnUpdateStudentCourse(
    $filter: ModelSubscriptionStudentCourseFilterInput
    $owner: String
  ) {
    onUpdateStudentCourse(filter: $filter, owner: $owner) {
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
        owner
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
          owner
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStudentCourse = /* GraphQL */ `
  subscription OnDeleteStudentCourse(
    $filter: ModelSubscriptionStudentCourseFilterInput
    $owner: String
  ) {
    onDeleteStudentCourse(filter: $filter, owner: $owner) {
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
        owner
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
          owner
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCourseTag = /* GraphQL */ `
  subscription OnCreateCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
    $owner: String
  ) {
    onCreateCourseTag(filter: $filter, owner: $owner) {
      id
      courseId
      tagsId
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
          owner
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      tags {
        id
        title
        course {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCourseTag = /* GraphQL */ `
  subscription OnUpdateCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
    $owner: String
  ) {
    onUpdateCourseTag(filter: $filter, owner: $owner) {
      id
      courseId
      tagsId
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
          owner
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      tags {
        id
        title
        course {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCourseTag = /* GraphQL */ `
  subscription OnDeleteCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
    $owner: String
  ) {
    onDeleteCourseTag(filter: $filter, owner: $owner) {
      id
      courseId
      tagsId
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
          owner
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      tags {
        id
        title
        course {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
