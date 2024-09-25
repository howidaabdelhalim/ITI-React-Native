function displayCourseInfo(msg = "Course Details:", course = {}) {
    const defaultCourse = { courseName: "Unknown", courseDuration: "Unknown", courseOwner: "Unknown" };
    const result = Object.assign({}, defaultCourse, course);
    const allowedKeys = { courseName: true, courseDuration: true, courseOwner: true };
    for (let key in result) {
        if (!allowedKeys[key]) {
            throw new Error(`Invalid property "${key}" found. Allowed properties are: ${Object.keys(allowedKeys).join(', ')}`);
        }
    }
    return `${msg} Name: ${result.courseName}, Owner: ${result.courseOwner} , Duration: ${result.courseDuration}`;
}

try {
    console.log(displayCourseInfo("Hello, here is the course info:", { courseName: "ITI React Native", 
                                                                    courseDuration: "1 Month", 
                                                                    courseOwner: "ITI" 
}));

    console.log(displayCourseInfo("Hello, here is the course info:", { courseName: "Power BI"}));

//     console.log(displayCourseInfo("Hello, here is the course info:", { CourseName: "Artificial Intelligence", 
//                                                                     courseDuration: "1 Month", 
//                                                                     Coursener: "ITI" 
// }));
    console.log(displayCourseInfo("Course Information:", { courseName: "Intro to Database", 
                                                        courseDuration: "4 months", 
                                                        courseOwner: "FCAI", 
                                                        activity: "Not Allowed" 
}));
} catch (error) {
    console.error(error.message);
}
