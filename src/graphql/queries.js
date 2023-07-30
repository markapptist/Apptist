/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
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
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourseSection = /* GraphQL */ `
  query GetCourseSection($id: ID!) {
    getCourseSection(id: $id) {
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
export const listCourseSections = /* GraphQL */ `
  query ListCourseSections(
    $filter: ModelCourseSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        lessons {
          nextToken
        }
        createdAt
        updatedAt
        courseSectionsId
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        review
        rating
        user {
          id
          username
          imageUrl
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        studentReviewsProvidedId
        courseReviewsId
      }
      nextToken
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentCourse = /* GraphQL */ `
  query GetStudentCourse($id: ID!) {
    getStudentCourse(id: $id) {
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
export const listStudentCourses = /* GraphQL */ `
  query ListStudentCourses(
    $filter: ModelStudentCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        courseId
        student {
          id
          username
          imageUrl
          email
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
          createdAt
          updatedAt
          instructorPublishedCoursesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const studentCoursesByStudentId = /* GraphQL */ `
  query StudentCoursesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentCoursesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        courseId
        student {
          id
          username
          imageUrl
          email
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
          createdAt
          updatedAt
          instructorPublishedCoursesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const studentCoursesByCourseId = /* GraphQL */ `
  query StudentCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        courseId
        student {
          id
          username
          imageUrl
          email
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
          createdAt
          updatedAt
          instructorPublishedCoursesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
