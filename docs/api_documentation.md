# API Documentation

 This document provides detailed information about the API endpoints
 for the Ed-Tech platform.

## Authentication- **POST /api/auth/register**- **Description**: Register a new user.- **Request Body**: `{ "username": "user", "email"

 "<user@example.com>", "password": "password" }`- **Response**:`{ "message": "User registered successfully",
 "user": { "id": "user_id", "username": "user" } }`- **POST /api/auth/login**- **Description**: Authenticate a user.- **Request Body**:`{ "email": "<user@example.com>", "password":
 "password" }`- **Response**:`{ "token": "jwt_token" }`- **POST /api/auth/logout**- **Description**: Logout the user.- **Response**:`{ "message": "User logged out successfully" }`- **POST /api/auth/forgot-password**- **Description**: Request a password reset link.- **Request Body**:`{ "email": "<user@example.com>" }`- **Response**:`{ "message": "Password reset link sent" }`- **POST /api/auth/reset-password**- **Description**: Reset the password using a reset token.- **Request Body**:`{ "token": "reset_token", "password":
 "new_password" }`

- **Response**: `{ "message": "Password reset successfully" }`

## User Management- **GET /api/users/profile**- **Description**: Get the profile of the authenticated user.- **Response**: `{ "user": { "id": "user_id", "username": "user"

 "email": "<user@example.com>" } }`- **PUT /api/users/profile**- **Description**: Update the profile of the authenticated user.- **Request Body**:`{ "username": "new_user", "email":
 "<new_user@example.com>" }`- **Response**:`{ "message": "Profile updated successfully",
 "user": { "id": "user_id", "username": "new_user" } }`- **GET /api/users/:id**- **Description**: Get a user's profile by ID.- **Response**:`{ "user": { "id": "user_id", "username": "user",
 "email": "<user@example.com>" } }`- **PUT /api/users/:id**- **Description**: Update a user's profile by ID.- **Request Body**:`{ "username": "new_user", "email":
 "<new_user@example.com>" }`- **Response**:`{ "message": "Profile updated successfully",
 "user": { "id": "user_id", "username": "new_user" } }`- **DELETE /api/users/:id**- **Description**: Delete a user by ID.- **Response**:`{ "message": "User deleted successfully" }`

## Course Management- **POST /api/courses**- **Description**: Create a new course.- **Request Body**: `{ "title": "Course Title", "description"

 "Course Description" }`- **Response**:`{ "message": "Course created successfully",
 "course": { "id": "course_id", "title": "Course Title" } }`

- **GET /api/courses**- **Description**: Get a list of courses.- **Response**: `{ "courses": [{ "id": "course_id", "title":
 "Course Title" }] }`- **GET /api/courses/:id**- **Description**: Get details of a specific course.- **Response**: `{ "course": { "id": "course_id", "title": "Course
 Title", "description": "Course Description" } }`- **PUT /api/courses/:id**- **Description**: Update a specific course.- **Request Body**: `{ "title": "New Course Title", "description":
 "New Course Description" }`- **Response**: `{ "message": "Course updated successfully",
 "course": { "id": "course_id", "title": "New Course Title" } }`- **DELETE /api/courses/:id**- **Description**: Delete a specific course.- **Response**: `{ "message": "Course deleted successfully" }`

## Module and Lesson Management- **POST /api/courses/:courseId/modules**- **Description**: Add a new module to a course.- **Request Body**: `{ "title": "Module Title", "description"

 "Module Description" }`- **Response**:`{ "message": "Module added successfully",
 "module": { "id": "module_id", "title": "Module Title" } }`- **GET /api/courses/:courseId/modules**- **Description**: Get a list of modules for a course.- **Response**:`{ "modules": [{ "id": "module_id", "title":
 "Module Title" }] }`- **PUT /api/courses/:courseId/modules/:moduleId**- **Description**: Update a specific module.- **Request Body**:`{ "title": "New Module Title", "description":
 "New Module Description" }`- **Response**:`{ "message": "Module updated successfully",
 "module": { "id": "module_id", "title": "New Module Title" } }`

- **DELETE /api/courses/:courseId/modules/:moduleId**- **Description**: Delete a specific module.- **Response**: `{ "message": "Module deleted successfully" }`- **POST /api/courses/:courseId/modules/:moduleId/lessons**- **Description**: Add a new lesson to a module.- **Request Body**: `{ "title": "Lesson Title", "content": "Lesson
 Content" }`- **Response**: `{ "message": "Lesson added successfully",
 "lesson": { "id": "lesson_id", "title": "Lesson Title" } }`- **GET /api/courses/:courseId/modules/:moduleId/lessons**- **Description**: Get a list of lessons for a module.- **Response**: `{ "lessons": [{ "id": "lesson_id", "title":
 "Lesson Title" }] }`- **PUT /api/courses/:courseId/modules/:moduleId/lessons/:lessonId**- **Description**: Update a specific lesson.- **Request Body**: `{ "title": "New Lesson Title", "content":
 "New Lesson Content" }`- **Response**: `{ "message": "Lesson updated successfully",
 "lesson": { "id": "lesson_id", "title": "New Lesson Title" } }`- **DELETE
 /api/courses/:courseId/modules/:moduleId/lessons/:lessonId**- **Description**: Delete a specific lesson.- **Response**: `{ "message": "Lesson deleted successfully" }`

## Resource Management- **POST /api/resources**- **Description**: Upload a new resource.- **Request Body**: `{ "file": "file_data", "description"

 "Resource Description" }`- **Response**:`{ "message": "Resource uploaded successfully",
 "resource": { "id": "resource_id", "description": "Resource
 Description" } }`- **GET /api/resources/:id**- **Description**: Get details of a specific resource.

- **Response**: `{ "resource": { "id": "resource_id",
 "description": "Resource Description", "file": "file_data" } }`- **DELETE /api/resources/:id**- **Description**: Delete a specific resource.- **Response**: `{ "message": "Resource deleted successfully" }`

## Enrollment- **POST /api/courses/:courseId/enroll**- **Description**: Enroll a user in a course.- **Response**: `{ "message": "Enrollment successful" }`- **GET /api/users/:userId/enrollments**- **Description**: Get a list of courses the user is enrolled in.- **Response**: `{ "courses": [{ "id": "course_id", "title"

 "Course Title" }] }`

## Live Classes- **POST /api/live-classes**- **Description**: Schedule a new live class.- **Request Body**: `{ "title": "Class Title", "description"

 "Class Description", "startTime": "ISO_DateTime" }`- **Response**:`{ "message": "Live class scheduled successfully",
 "liveClass": { "id": "live_class_id", "title": "Class Title" } }`- **GET /api/live-classes**- **Description**: Get a list of live classes.- **Response**:`{ "liveClasses": [{ "id": "live_class_id",
 "title": "Class Title" }] }`- **GET /api/live-classes/:id**- **Description**: Get details of a specific live class.- **Response**:`{ "liveClass": { "id": "live_class_id", "title":
 "Class Title", "description": "Class Description", "startTime":
 "ISO_DateTime" } }`- **PUT /api/live-classes/:id**- **Description**: Update a specific live class.

- **Request Body**: `{ "title": "New Class Title", "description":
 "New Class Description", "startTime": "ISO_DateTime" }`- **Response**: `{ "message": "Live class updated successfully",
 "liveClass": { "id": "live_class_id", "title": "New Class Title" }
 }`- **DELETE /api/live-classes/:id**- **Description**: Delete a specific live class.- **Response**: `{ "message": "Live class deleted successfully" }`

## Discussion Forum- **POST /api/discussions**- **Description**: Create a new discussion thread.- **Request Body**: `{ "title": "Discussion Title", "content"

 "Discussion Content" }`- **Response**:`{ "message": "Discussion thread created
 successfully", "discussion": { "id": "discussion_id", "title":
 "Discussion Title" } }`- **GET /api/discussions**- **Description**: Get a list of discussion threads.- **Response**:`{ "discussions": [{ "id": "discussion_id",
 "title": "Discussion Title" }] }`- **GET /api/discussions/:id**- **Description**: Get details of a specific discussion thread.- **Response**:`{ "discussion": { "id": "discussion_id", "title":
 "Discussion Title", "content": "Discussion Content" } }`- **PUT /api/discussions/:id**- **Description**: Update a specific discussion thread.- **Request Body**:`{ "title": "New Discussion Title", "content":
 "New Discussion Content" }`- **Response**:`{ "message": "Discussion thread updated
 successfully", "discussion": { "id": "discussion_id", "title": "New
 Discussion Title" } }`- **DELETE /api/discussions/:id**- **Description**: Delete a specific discussion thread.

- **Response**: `{ "message": "Discussion thread deleted
 successfully" }`- **POST /api/discussions/:id/comments**- **Description**: Add a comment to a discussion thread.- **Request Body**: `{ "content": "Comment Content" }`- **Response**: `{ "message": "Comment added successfully",
 "comment": { "id": "comment_id", "content": "Comment Content" } }`- **GET /api/discussions/:id/comments**- **Description**: Get comments for a discussion thread.- **Response**: `{ "comments": [{ "id": "comment_id", "content":
 "Comment Content" }] }`

## Assessments and Quizzes- **POST /api/quizzes**- **Description**: Create a new quiz.- **Request Body**: `{ "title": "Quiz Title", "questions": [{

 "question": "Question Text", "options": ["Option 1", "Option 2"],
 "answer": "Option 1" }] }`- **Response**:`{ "message": "Quiz created successfully", "quiz":
 { "id": "quiz_id", "title": "Quiz Title" } }`- **GET /api/quizzes**- **Description**: Get a list of quizzes.- **Response**:`{ "quizzes": [{ "id": "quiz_id", "title": "Quiz
 Title" }] }`- **GET /api/quizzes/:id**- **Description**: Get details of a specific quiz.- **Response**:`{ "quiz": { "id": "quiz_id", "title": "Quiz
 Title", "questions": [{ "question": "Question Text", "options":
 ["Option 1", "Option 2"], "answer": "Option 1" }] } }`- **PUT /api/quizzes/:id**- **Description**: Update a specific quiz.- **Request Body**:`{ "title": "New Quiz Title", "questions": [{
 "question": "New Question Text", "options": ["New Option 1", "New
 Option 2"], "answer": "New Option 1" }] }`

- **Response**: `{ "message": "Quiz updated successfully", "quiz":
 { "id": "quiz_id", "title": "New Quiz Title" } }`- **DELETE /api/quizzes/:id**- **Description**: Delete a specific quiz.- **Response**: `{ "message": "Quiz deleted successfully" }`- **POST /api/quizzes/:id/submissions**- **Description**: Submit answers for a quiz.- **Request Body**: `{ "answers": [{ "questionId": "question_id",
 "answer": "Option 1" }] }`- **Response**: `{ "message": "Quiz submitted successfully",
 "submission": { "id": "submission_id" } }`- **GET /api/quizzes/:id/submissions**- **Description**: Get quiz submissions.- **Response**: `{ "submissions": [{ "id": "submission_id",
 "userId": "user_id", "answers": [{ "questionId": "question_id",
 "answer": "Option 1" }] }] }`

## Analytics and Reporting- **GET /api/analytics/users**- **Description**: Get user analytics.- **Response**: `{ "analytics": { "totalUsers": 1000

 "activeUsers": 800 } }`- **GET /api/analytics/courses**- **Description**: Get course analytics.- **Response**:`{ "analytics": { "totalCourses": 150,
 "enrolledUsers": 5000 } }`- **GET /api/analytics/progress**- **Description**: Get user progress analytics.- **Response**:`{ "progress": [{ "userId": "user_id", "courseId":
 "course_id", "progress": 75 }] }`

## Notifications and Communication- **POST /api/notifications**- **Description**: Create a notification

- **Request Body**: `{ "userId": "user_id", "message":
 "Notification Message" }`- **Response**: `{ "message": "Notification created successfully",
 "notification": { "id": "notification_id", "message": "Notification
 Message" } }`- **GET /api/notifications**- **Description**: Get a list of notifications.- **Response**: `{ "notifications": [{ "id": "notification_id",
 "message": "Notification Message" }] }`- **GET /api/notifications/:id**- **Description**: Get details of a specific notification.- **Response**: `{ "notification": { "id": "notification_id",
 "message": "Notification Message" } }`

## Gamification- **POST /api/badges**- **Description**: Create a new badge.- **Request Body**: `{ "title": "Badge Title", "description"

 "Badge Description" }`- **Response**:`{ "message": "Badge created successfully",
 "badge": { "id": "badge_id", "title": "Badge Title" } }`- **GET /api/badges**- **Description**: Get a list of badges.- **Response**:`{ "badges": [{ "id": "badge_id", "title": "Badge
 Title" }] }`- **GET /api/badges/:id**- **Description**: Get details of a specific badge.- **Response**:`{ "badge": { "id": "badge_id", "title": "Badge
 Title", "description": "Badge Description" } }`- **PUT /api/badges/:id**- **Description**: Update a specific badge.- **Request Body**:`{ "title": "New Badge Title", "description":
 "New Badge Description" }`- **Response**:`{ "message": "Badge updated successfully",
 "badge": { "id": "badge_id", "title": "New Badge Title" } }`

- **DELETE /api/badges/:id**- **Description**: Delete a specific badge.- **Response**: `{ "message": "Badge deleted successfully" }`

## Integration Endpoints- **POST /api/integrations/lms**- **Request Body**: `{ "lmsId": "lms_id", "details": "Integration

 Details" }`- **Response**:`{ "message": "LMS integration successful" }`- **POST /api/integrations/payments**- **Request Body**:`{ "paymentId": "payment_id", "details":
 "Integration Details" }`- **Response**:`{ "message": "Payment integration successful" }`- **POST /api/integrations/content**- **Request Body**:`{ "providerId": "provider_id", "details":
 "Integration Details" }`- **Response**:`{ "message": "Content provider integration
 successful" }
