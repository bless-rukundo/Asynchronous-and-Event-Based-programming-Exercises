function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({
                    id: 4747,
                    name: "Bless"
                });
            } else {
                reject(new Error("Login failed"));
            }
        }, 1000);
    });
}

function getCourses(studentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentId === 4747) {
                resolve([
                    "JavaScript",
                    "Database",
                    "Computer Networks"
                ]);
            } else {
                reject(new Error("Courses not found"));
            }
        }, 1500);
    });
}

function getTranscript(studentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentId === 4747) {
                resolve({
                    JavaScript: 19,
                    Database: 17,
                    "Computer Networks": 18
                });
            } else {
                reject(new Error("Transcript not found"));
            }
        }, 1200);
    });
}

function getNotifications(studentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentId === 4747) {
                resolve([
                    "Assignment due tomorrow",
                    "New course material available"
                ]);
            } else {
                reject(new Error("Notifications not found"));
            }
        }, 800);
    });
}

async function main(){
    try{
      const stdLogin = await login();
     console.log(stdLogin);
      const dashbord = await Promise.all([getCourses(stdLogin.id), getTranscript(stdLogin.id), getNotifications(stdLogin.id)]);
      console.log(dashbord)
    }catch(error){
        console.log(error.message);
    }
}
main()